/* Taula de multiplicar.

L’usuari/ària introduirà un número (de l'1 al 10) 
per pantalla, i utilitzant un bucle, el programa 
li mostrarà la taula de multiplicar d’aquell número.

Exemple:

2 x 1 = 2

2 x 2 = 4

2 x 3 = 6

...

2 x 10 = 20
*/


function mostrarTaula() {
    let numero = parseInt(document.getElementById('numero').value)
    let result = document.getElementById('result')
    let message = ''

    if (numero >= 1 && numero <= 10) {
        for (let i = 1; i <= 10; i++) {
            let resultatMultiplicacio = numero * i
            message = message + numero + 'x' + i + '=' + resultatMultiplicacio + '<br>'
            result.innerHTML = message
        }
    } else {
        message = 'La dada introduïda no és vàlida'
        result.innerHTML = message
    }
}

// otra manera de hacerlo

let num = 0
let result = document.getElementById('result')
let i = 1
result.innerHTML = ''

//esto es para validar
do{
    num = parseInt(prompt('Introducir número del 1 al 10'))
}while (num <1 || num > 10)

for (i; i <= 10; i++){
    result.innerHTML += `<br> ${num} * ${i} = ${num *i} `
}