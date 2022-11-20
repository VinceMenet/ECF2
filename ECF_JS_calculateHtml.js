/* 
 * Fichier Javascript de l'ECF : ECF_JS_CalculateHtml.js
 * Didier Bonneau
 * Afpa DWWM Créteil maj 29-07-2021
 */
let op1 = '', op2 = '', oper = '';
let resultat = '';

/**
 * fonction appelée sur un click d'un des boutons de la calculate
 * @param {Event} event
 */
function btnClick(event) {
    let touche = event.target.textContent; // récupération du contenu de la balise button cliquée


  
    // à faire
    if (touche == 'C') {
        btnClear();
        
    }
    else {  
        boutons[0].disabled=false
        boutons[1].disabled=true
        boutons[18].disabled=false

        if (touche == '=') {
        resultat = effectuerCalcul(op1,op2,oper);
        op1 = resultat;
        op2='';
        oper='';
        boutons[boutons.length -1].disabled = true
    }
        else {
            if (touche == '+' || touche == '-' || touche == 'x' || touche == '/' || touche == '%') {
                if(op1 !== '') {
                    oper = "" + touche + ""
                }
        }
        else {
            if((resultat == '') || (oper !=='')) {
                if (oper == '') {
                    op1 = op1 + touche
                    boutons[boutons.length -1].disabled = true
                }
                else {
                    op2 = op2 + touche
                }
            }
        }
    }
}
      
    // envoi des 3 variables dans l'input text du resultat
    document.querySelector('input').value = op1 + oper + op2;
}

/**
 * fonction de remise à zéro des 4 variables globales
 * et effacement de l-input résultat
 */
function btnClear() {
    
    // à faire
    op1 = '';
    op2 = '';
    oper = '';
    resultat = '';
    boutons[0].disabled=true
    boutons[1].disabled=true
    boutons[18].disabled=true
}

/**
 * fonction de calcul du résultat
 * @param {Number} operande1
 * @param {Number} operande2
 * @param {String} operateur
 * @returns {Number}
 */
function effectuerCalcul(operande1, operande2, operateur) {

    // let resultat = 0;

    // selon operateur faire le bon calcul dans resultat
    
    
switch (operateur) {
    case "+":
      return  Number(operande1) + Number(operande2);
      break;
    case "-":
      return  operande1 - operande2;
      break;
    case "x":
      return  operande1 * operande2;
      break;
    case "/":
      return  operande1 / operande2;
      if (op2 == '0') {
        return  Infinity
      } 
      break;
    case "%" : 
    return  ( operande1 % operande2);
  }

  return resultat;
 
}

function init() {
    // la balise input pour l'affichage du résultat est dans une div de classe "resultat"
    // chaque balise button est dans une div de classe "bouton"

    // déclaration d'un tableau des codes de touche
    let codeTouches = ['C','⤺','%','+','7','8','9','-','4','5','6','x','1','2','3','/','0','.','','='];
    // création du html pour l'affichage et les boutons
    let divs = '<div class="resultat"><input type="text" readonly="readonly" value=""/></div>';
    for (let codeTouche of codeTouches) {
        if (codeTouche === '') {    // pas de bouton
            divs += '<div class="bouton"></div>';

// ajouts class couleur touches

        } else if(codeTouche === 'C') { 
            divs += '<div class="bouton"><button class="boutons_haut">'+codeTouche+'</button></div>';
        }else if(codeTouche === '⤺') { // ajout touche retour
            divs += '<div class="bouton"><button class="boutons_haut">'+codeTouche+'</button></div>'; 
        }else if(codeTouche === '%') { // ajout Modulo
            divs += '<div class="bouton"><button class="boutons_haut">'+codeTouche+'</button></div>'; 
        } else if(codeTouche === '=') { 
            divs += '<div class="bouton"><button class="boutons_symboleMaths">'+codeTouche+'</button></div>'; 
        } else if(codeTouche === '/') { 
            divs += '<div class="bouton"><button class="boutons_symboleMaths">'+codeTouche+'</button></div>'; 
        } else if(codeTouche === 'x') { 
            divs += '<div class="bouton"><button class="boutons_symboleMaths">'+codeTouche+'</button></div>'; 
        } else if(codeTouche === '+') { 
            divs += '<div class="bouton"><button class="boutons_symboleMaths">'+codeTouche+'</button></div>'; 
        } else if(codeTouche === '-') { 
            divs += '<div class="bouton"><button class="boutons_symboleMaths">'+codeTouche+'</button></div>'; 
        }
// fin ajouts

        else {
            divs += '<div class="bouton"><button class="boutons_chiffres">'+codeTouche+'</button></div>';   
        }
    }
    // envoi de ce code html dans la div
    document.querySelector('div[class="grid-calculate calculate"]').innerHTML = divs;

    // récupération de tout les boutons pour leur assigner le gestionnaire d'évènement click
    boutons = document.querySelectorAll('button'); 
    for(let bouton of boutons){
        bouton.onclick = btnClick;
    }
    
    boutons[0].disabled=true
    boutons[1].disabled=true
    boutons[18].disabled=true
}



document.addEventListener('DOMContentLoaded', function(){
    init();
});
