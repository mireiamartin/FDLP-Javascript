/* Crea un programa que sol·liciti a l'usuari/ària que introdueixi 
dos nombres enters per teclat i mostri per pantalla el major dels dos.*/

'use strict'

function ensenyaElMesGran() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let message = ''

    if (num1 > num2) {
       message = num1
    } else if (num2 > num1){
        message = num2
    } else{
        message = "els números són iguals"
    } 
    result.innerHTML = message
}
