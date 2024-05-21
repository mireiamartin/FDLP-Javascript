/*Fer un programa que li demani a l’usuari/ària mitjançant el prompt aquestes dades:

Nom.
Cognom.
Edat.

Un cop l’usuari/ària hagi acabat d’introduir les dades, aquestes s’han de mostrar:

Per consola.
Amb un popup (alert).
Mitjançant getElementById().*/



//Captura d'informació
let nom = prompt('Cual es tu nombre')
let cognom = prompt('Cual es tu apellido')
let edat = prompt('Cual es tu edad') //string

//captura d'un espai
let result= document.getElementById('result')

//mensaje (``per afegir més d'una variable en una frase)
let message = `Hola, mi nombre es ${nom} ${cognom} y tengo ${edat} años`
alert(message)
console.log(message)
result.innerHTML = message