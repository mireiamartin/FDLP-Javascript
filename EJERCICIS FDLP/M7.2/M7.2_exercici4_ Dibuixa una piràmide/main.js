/*Fes un programa que mostri el següent per pantalla:

*

* *

* * *

* * * *

* * * * *

* * * * * *

* * * * *

* * * *

* * *

* *

*

La línia amb més “*” vindrà donada per un número que 
l’usuari/ària introduirà per consola.

Condició: En tot el codi del programa només hi pot haver-hi dos *

També, a poder ser, no utilitzis cap mètode com repeat() o substring() 
de la classe String.*/



function piramide() {
    let result = document.getElementById('result');

    for (let i = 1; i < 7; i++) {
        let linia = ''
        for (let j = 0; j < i; j++) {
            linia += '*'
        }
        result.innerHTML += linia + '<br>'
    }

    for (let i = 5; i > 0; i--) {
        let linia = ''
        for (let j = 0; j < i; j++) {
            linia += '*'
        }
        result.innerHTML += linia + '<br>'
    }
}

piramide()