/*Calculadora arcaica. El programa demana a l’usuari/ària que introdueixi 
dos números i l’operació que desitja realitzar. 

Cada operació (suma, resta, multiplicació, divisió i mòdul) 
estarà programada en una funció diferent.*/


function suma (num1, num2){
    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

function multiplicacio(num1, num2){
    return num1 * num2
}

function divisio(num1, num2){
    return num1 / num2
}

function modul(num1, num2){
    return num1 % num2
}

function ferOperacio(){
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let operacio = document.getElementById('operacio').value
    let result = document.getElementById('result')

    switch (operacio){
        case '+':
            result.innerHTML = 'El resultat és: ' + suma(num1, num2)
            break
        case '-':
            result.innerHTML = 'El resultat és: ' + resta(num1, num2)
            break
        case '*':
            result.innerHTML = 'El resultat és: ' + multiplicacio(num1, num2)
            break
        case '/':
            result.innerHTML = 'El resultat és: ' + divisio(num1, num2).toFixed(2)
            break
        case '%':
                result.innerHTML = 'El resultat és: ' + modul(num1, num2)
            break
    }
}