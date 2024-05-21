/* Aquesta línia de codi:

Math.ceil((Math.random() * 10));

Retorna un número entre el 0 i el 10 de forma aleatòria.

L’exercici consisteix a què l’usuari/ària ha d'endevinar el 
número escollit aleatòriament pel programa.

El programa, demana números a l’usuari/ària fins que aquest 
encerti el número aleatori generat pel programa.

Un cop l’usuari/ària ha endevinat el número, es mostrarà per 
pantalla el següent missatge: “Enhorabona, el número era X”.*/

let numUsuari = null
let random = Math.ceil(Math.random() * 10)
let resultat = document.getElementById('result')

function endevinarNumero(){

do{
    numUsuari = parseInt(prompt('Escriu un número, fins a trobar el número correcte'))
} while (numUsuari !== random)

    resultat.innerHTML = `Enhorabona, el número era ${random}`
}


