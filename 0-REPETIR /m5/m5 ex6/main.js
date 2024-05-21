/*Realitza un programa que pinti la lletra L per pantalla feta amb asteriscs.

El programa demanarà l'altura.

El pal horitzontal de la L tindrà una longitud de la meitat (divisió entera entre 2) de l'altura més un.

Exemple:

Introduïu l'alçada de la L : 5

La base serà  la divisió del nombre entre 2 : (5 / 2) + 1 = 3

*

*

*

*

* * *
*/
function dibujar(){
let altura = parseInt(document.getElementById('altura').value)
let amplada = parseInt((altura / 2) + 1)
let result = document.getElementById('result')
const asterisco = '*'


for (let i = 1; i < altura; i++){
    result.innerHTML += asterisco + '<br>' 
}

for (let j = 0; j < amplada; j++){
    result.innerHTML += asterisco
}

}
