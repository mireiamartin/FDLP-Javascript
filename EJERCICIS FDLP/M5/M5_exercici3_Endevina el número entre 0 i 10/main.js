/* Aquesta línia de codi:

Math.ceil((Math.random() * 10));
Retorna un número entre el 0 i el 10 de forma aleatòria.

L’exercici consisteix a què l’usuari/ària ha d'endevinar el 
número escollit aleatòriament pel programa.

El programa, demana números a l’usuari/ària fins que aquest 
encerti el número aleatori generat pel programa.

Un cop l’usuari/ària ha endevinat el número, es mostrarà per 
pantalla el següent missatge: “Enhorabona, el número era X”.*/

'use strict'

let numeroAleatori = Math.ceil(Math.random() * 10)
let numeroUsuari = null
let result = document.getElementById ('result')

function adivinar() {

    do{ //realiza esto... mientras...
        numeroUsuari = parseInt(prompt('escriu un número'))
    } while (numeroUsuari != numeroAleatori)

    result.innerHTML = `Enhorabona, el número era ${numeroAleatori}`
}

