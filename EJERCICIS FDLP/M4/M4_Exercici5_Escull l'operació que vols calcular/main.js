/*Fer un programa que demani dos números i un operador(+,-,*,/).

Al final, el programa ha d'imprimir per pantalla el resultat de fer 
l’operació que contingui la variable operador. */


function ferOperacio(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let operador = document.getElementById('operador').value;
    let resultat;

    switch (operador){
        case '+' :
            resultat = (num1 + num2)
            break
        case '-' :
            resultat = (num1 - num2)
            break
        case '*' :
            resultat = (num1 * num2)
            break
        case '/' :
            resultat = (num1 / num2)
            break
        default :
            resultat = 'no has posat un operador vàlid'
            break
    }

    document.getElementById('resultat').innerHTML = resultat
}

//manera de hacerlo assegurandonos que lo introducido son numeros

// function ferOperacio(){
//     let num1 = parseInt(document.getElementById('num1').value);
//     let num2 = parseInt(document.getElementById('num2').value);
//     let operador = document.getElementById('operador').value;
//     let resultat;
//     if('isNaN'(num1) && !isNaN(num2)){    
//     switch (operador){
//         case '+' :
//             resultat = (num1 + num2)
//             break
//         case '-' :
//             resultat = (num1 - num2)
//             break
//         case '*' :
//             resultat = (num1 * num2)
//             break
//         case '/' :
//             resultat = (num1 / num2)
//             break
//         default :
//             resultat = 'No has posat un operador vàlid'
//             break
//     }
//     }
//     document.getElementById('resultat').innerHTML = resultat
// }
