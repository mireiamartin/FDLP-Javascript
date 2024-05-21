/* Taula de multiplicar.

L’usuari/ària introduirà un número (de l'1 al 10) 
per pantalla, i utilitzant un bucle, el programa 
li mostrarà la taula de multiplicar d’aquell número.

Exemple:

2 x 1 = 2

2 x 2 = 4

2 x 3 = 6

...

2 x 10 = 20
*/
function mostrarTaula(){
let num = 0
let result = document.getElementById('result')
let i = 1
result.innerHTML = ''

//esto es para validar
do{
    num = parseInt(document.getElementById('numero').value)
}while (num <1 || num > 10)

for (i; i <= 10; i++){
    result.innerHTML += `<br> ${num} * ${i} = ${num *i} `
}x
}