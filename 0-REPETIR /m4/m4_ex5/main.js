/*Fer un programa que demani dos números i un operador(+,-,*,/).

Al final, el programa ha d'imprimir per pantalla el resultat de fer 
l’operació que contingui la variable operador. */

function calcular(){

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let operador = document.getElementById('operador').value
    let result = document.getElementById('result')

    let suma = num1 + num2
    let resta = num1 - num2
    let multiplicacio = num1 * num2
    let divisio = num1 / num2

    switch (operador){
        case '+' :
            result.innerHTML = suma
            break
        case '-' :
            result.innerHTML = resta
            break
        case '*' :
            result.innerHTML = multiplicacio
            break
        case '/' :
            result.innerHTML = divisio
            break
    }
}