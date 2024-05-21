/*  Fes un programa que mostri el següent per pantalla:

*

* *

* * *

* * * *

* * * * *

* * * * * *

El nombre de línies formades per “*” vindrà donat per un número 
que l’usuari/ària introduirà per consola.

Condició: En tot el codi del programa només hi pot haver un *


També, a poder ser, no utilitzis cap mètode com repeat() o substring() 
de la classe String.*/



function triangle() {
    let result = document.getElementById('result')

    for (let i = 1; i < 7; i++) {
        let linia = ''
        for (let j = 0; j < i; j++) {
            linia += '*'
        }
        result.innerHTML += linia + '<br>'
    }
}

triangle()


// ------------------------------------//


//otra manera de hacer

const result = document.getElementById('result')
const char = ' *'

function triangulo (num){

    result.innerHTML = ''

    for (let i = 0; i < num; i++) { //vertical
        result.innerHTML += '<br>'

        for (let j = 0; j <= i; j++) { //horizontal

            result.innerHTML += char
        }
    }

}

function mostrar(){
    let num = parseInt(document.getElementById('num').value)
    triangulo(num)
}
