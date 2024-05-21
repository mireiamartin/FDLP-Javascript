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

function mostrar(){
    let num = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    for (let i = 1; i < num; i++){
        result.innerHTML += '<br>'
        for (let j = 0; j < i; j++){
            result.innerHTML += '*'
        }
    }
}