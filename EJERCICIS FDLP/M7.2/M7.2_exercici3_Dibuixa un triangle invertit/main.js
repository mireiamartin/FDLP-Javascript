/* Fes un programa que mostri el següent per pantalla:

* * * * * *

* * * * *

* * * *

* * *

* *

*

El nombre de línies formades per “*” vindrà donat per un número 
que l’usuari/ària introduirà per consola.

Condició: En tot el codi del programa només hi pot haver un *

També, a poder ser, no utilitzis cap mètode com repeat() o substring()
de la classe String*/


function triangleInvertit() {
    let result = document.getElementById('result');

    for (let i = 6; i > 0; i--) {
        let linia = ''
        for (let j = 0; j < i; j++) {
            linia += '*'
        }
        result.innerHTML += linia + '<br>'
    }
}

triangleInvertit()