/*Escriu un programa JavaScript que llegeix un nombre (número) 
i mostra per pantalla el doble i el triple d'aquest número.*/

let resultDiv = document.getElementById('result')

let numero = parseInt(prompt('Introdueix el número')) 

let doble = numero * 2
let triple = numero * 3

resultDiv.innerHTML += `El doble de ${numero} es ${doble} <br>
El triple de ${numero} es ${triple}`
