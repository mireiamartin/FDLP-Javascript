'use strict'

function mostrarNumeros() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let num3 = parseInt(document.getElementById('num3').value)
    let result = document.getElementById('result')
    let messageNumGran = ''
    let messageNumPetit = ''
    let messageNumIgual = ''

    if (num1 === num2 && num2 === num3) {
        messageNumIgual = `Tots els números són iguals i és ${num1}`
        result.innerHTML = messageNumIgual
    } else {
        if (num1 > num2 && num1 > num3) {
            messageNumGran = `El número més gran és ${num1}`
        } else if (num2 > num1 && num2 > num3) {
            messageNumGran = `El número més gran és ${num2}`
        } else {
            messageNumGran = `El número més gran és ${num3}`
        }

        if (num1 < num2 && num1 < num3) {
            messageNumPetit = `El número més petit és ${num1}`
        } else if (num2 < num1 && num2 < num3) {
            messageNumPetit = `El número més petit és ${num2}`
        } else {
            messageNumPetit = `El número més petit és ${num3}`
        }

        result.innerHTML = messageNumGran + '<br>' + messageNumPetit
    }
}