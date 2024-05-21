

/* L’usuari/ària ha d’introduir números fins que introdueixi un nombre primer. 

En el moment que l’usuari/ària introdueixi un nombre primer, el programa ha de treure 
per pantalla el següent missatge: “Exacte, el número “x” és primer!”*/


'use strict'

function nombrePrimer() {
    let numUsuari
    let esPrimer = false
    
    while (esPrimer == false) {
        numUsuari = prompt("Escriu un número: ")
        if (numUsuari > 1) {
            esPrimer = calcularPrimer(numUsuari)
            if (esPrimer) {
                alert("Exacte, el número " + numUsuari + " és primer!")
            }
            } else {
            alert("Escriu un altre número.")
        }
    }
}

function calcularPrimer(numUsuari) {
    let esPrimer = true
    let i = 2
    while (esPrimer && i < numUsuari) {
        if (numUsuari % i == 0) {
            esPrimer = false
        }
        i++
    }
    return esPrimer
}

nombrePrimer()