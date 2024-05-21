/*Escriu un programa JavaScript que llegeix un nombre (número) 
i mostra per pantalla el doble i el triple d'aquest número.*/

function calcular(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    let doble = numero * 2
    let triple = numero * 3

    result.innerHTML = "El doble de " + numero + " és " + doble + " i el triple de " + numero + " és " + triple
}