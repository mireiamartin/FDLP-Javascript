// <!-- *

// * *

// * * *

// * * * *

// * * * * *

// * * * * * *

// El nombre de línies formades per “*” vindrà donat per un número que l’usuari/ària introduirà per consola.

// Condició: En tot el codi del programa només hi pot haver un *


// També, a poder ser, no utilitzis cap mètode com repeat() o substring() de la classe String -->

function creaTriangle(){

    let numero = parseInt(document.getElementById('numUser').value)
    let caracter = '*'
    let resultat = document.getElementById('result')

    for (let i = 0; i <= numero; i++){
        resultat.innerHTML += '<br>'
       for(let j = 0; j < i; j++){
        resultat.innerHTML += caracter
        }
    }
}