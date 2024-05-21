// Fes un programa que mostri el següent per pantalla:

// * * * * * *

// * * * * *

// * * * *

// * * *

// * *

// *

// El nombre de línies formades per “*” vindrà donat per un número que l’usuari/ària introduirà per consola.


function TriangleInvertit(){

    let numero = parseInt(document.getElementById('num').value)
    let caracter = '*'
    let resultat = document.getElementById('result')

    for (let i = numero; i > 0; i--){
        resultat.innerHTML += '<br>'
       for(let j = 0; j < i; j++){
        resultat.innerHTML += caracter
        }
    }
}