/*El programa demana a l'usuari/ària que introdueixi 3 notes 
i el programa mostra la mitjana de les 3 notes per pantalla.*/


let resultDiv = document.getElementById('result')

const NUMNOTAS = 3

let nota1 = parseInt(prompt('Introduce la primera nota'))
let nota2 = parseInt(prompt('Introduce la segunda nota'))
let nota3 = parseInt(prompt('Introduce la tercera nota'))

let suma = nota1 + nota2 + nota3

let media = suma / NUMNOTAS

resultDiv.innerHTML += '<br>'
resultDiv.innerHTML += media.toFixed(2)

