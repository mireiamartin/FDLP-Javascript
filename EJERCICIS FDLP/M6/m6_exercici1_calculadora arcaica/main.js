/*Calculadora arcaica. El programa demana a l’usuari/ària que introdueixi 
dos números i l’operació que desitja realitzar. 

Cada operació (suma, resta, multiplicació, divisió i mòdul) 
estarà programada en una funció diferent.*/


'use strict'

function sumar(num1, num2){
    return num1 + num2
}

function restar(num1, num2){
   return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
   return num1 / num2
}

function modul(num1, num2){
    return num1 % num2
}

function demanar(){
    //capturar los inputs, result
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let operador = document.getElementById('operador').value
    let result = document.getElementById('result')
    let resultat = ''
    //console.log (num1, num2, operador)

    switch (operador) {
        case '+':
            resultat = sumar(num1, num2)
            break;
        case '-':
            resultat = restar(num1, num2)
            break;
        case '*':
            resultat = multiplicar(num1, num2)
            break;
        case '/':
            resultat = (num2 = 0) ? 'No se puede dividir entre cero' : dividir(num1, num2) //operador ternario
            break;
        case '%':
            resultat = modul(num1, num2)
            break;
        default:
            resultat = 'No has introduït res'
            break;
    }

   result.innerHTML = `El resultat de l'operació és ${resultat}`
}
