/* Crea un programa que sol·liciti a l'usuari/ària que introdueixi 
dos nombres enters per teclat i mostri per pantalla el major dels dos.*/

function calcularMajor(){
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let result = document.getElementById('result')

    if (num1 > num2){
        result.innerHTML = num1 + ' es més gran que ' + num2
    } else if (num2 > num1) {
        result.innerHTML = num2 + ' es més gran que ' + num1
    } else {
        result.innerHTML = 'Els número són iguals'
    }
}