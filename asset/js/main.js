// premier pas vers l'objectif

    function activerInput() {
        var inputElement = document.getElementById("monInput");
        inputElement.contenteditable = true;
        inputElement.innerText = 0;
        return console.log("on");
    }
    function desactiverInput() {
        var inputElement = document.getElementById("monInput");
        inputElement.innerText = " " ;
        document.getElementById("affichageResultat").value = " ";
        inputElement.contenteditable = false;
    }

    /*function handleChange() {
        // Cette fonction est appelée chaque fois que le contenu du div est modifié
        var editableDiv = document.querySelector('#monInput');
        var content = editableDiv.innerText;
        console.log(content);
    }*/

    function ajouterChiffre(chiffre) {
    
        if(document.getElementById("monInput").innerText == 0){ 
            document.getElementById("monInput").innerText = chiffre;
            }else {
            document.getElementById("monInput").innerText += chiffre;
            }
    }

    function ajouterCaractere(caractere) {
        var champSaisie = document.getElementById("monInput");
        champSaisie.innerText = champSaisie.innerText.trim();
        if(caractere == "√"){  
            if(["+","-","/","*",].includes(champSaisie.innerText.slice(-1))){ 
                champSaisie.innerText += caractere;
                return true;
            }
            else{ 
                if(champSaisie.innerText == 0){    
                    champSaisie.innerText = caractere;
                    return true;
                    }else return false;
            } 
        }
        else{  
            if (champSaisie.innerText.length != 0 && !["+","-","/","*","."].includes(champSaisie.innerText.slice(-1))){  

                champSaisie.innerText += caractere;
            }else {  
                console.log("erreur,sois attentif");
            }
        }
    }
    // parenthese 
    function paranthese(parenthese){   
        var champSaisie = document.getElementById("monInput");
        champSaisie.innerText = champSaisie.innerText.trim();

        if(parenthese == "("){ 
            if(champSaisie.innerText == 0 ){ 
                champSaisie.innerText = parenthese;
                return true;
            }else{  
                if(["+","-","/","*",".","(","√","log"].includes(champSaisie.innerText.slice(-1))){  
                    champSaisie.innerText += parenthese;
                    return true;
                    }  
            } 
        }else{  
            if(parenthese == ")"){  
                if(champSaisie.innerText.length != 0 && !["+","-","/","*","(","."].includes(champSaisie.innerText.slice(-1))){
                    champSaisie.innerText += parenthese;
                    return true;
                }
                else{   
                    return false;
                }  
                } ;
            }  
    }
        // ajouter symbole racine carrée {   }  
    function symboleRacineCarre(symbole){    
        var champSaisie = document.getElementById("monInput");
        champSaisie.innerText = champSaisie.innerText.trim();
        if(champSaisie.innerText === 0){  
            champSaisie.innerText = symbole 
        }else{ 
            if(["+","-","/","*","."].includes(champSaisie.innerText.slice(-1))){  
                champSaisie.innerText += symbole;
                }   
            }     
    }  
    function ajouterFonctionTrigo(caractere) {
        var champSaisie = document.getElementById("monInput");
        if(champSaisie.innerText == 0) { 
            champSaisie.innerText = caractere;
            return true;
        }champSaisie.innerText += caractere;
    }

    // effacer toutes les expressions 
    function effacerExpression() {
        document.getElementById("monInput").innerText = '';
        document.getElementById("affichageResultat").value  = '';
        return true ;

    }
    // effacer une la valeur une  par une
    function effacerDernierCaractere() {
        var champSaisie = document.getElementById('monInput');
        var valeurActuelle = champSaisie.innerText;
        if(valeurActuelle.length > 0){  
            champSaisie.innerText = valeurActuelle.slice(0,-1)
            return true;
        }else{ 
            console.log("Chaine vide");
        } 
    }
//  evaluation de l'expression
function calculerExpression() {
    var expression = document.getElementById('monInput').innerText;
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/ln/g, 'Math.log');
    expression = expression.replace(/e/g, 'Math.exp');
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/\^/g, '**');
    expression = expression.replace(/√/g,'Math.sqrt');
    
    try {
        // Utiliser la fonction eval() pour évaluer l'expression
        var resultat = eval(expression);

        // Afficher le résultat
        expression = resultat;
        document.getElementById('monInput').innerText += "=";
        document.getElementById("affichageResultat").value =expression; 
        return true;
    } 
    catch (error) {
        // Gérer les erreurs d'évaluation
        document.getElementById("affichageResultat").value ="invalid"; 
        return false;
    }
}
// function garderDerniereValue()
function utiliserAns() {
    var inputElement = document.getElementById("monInput");

    // Remplacez la dernière expression par 'ans'
    var ans = inputElement.innerText;
    var expression = inputElement.innerText.replace(/[^+\-*/]*$/, "ans");
    inputElement.innerText = expression;
}