/*Fer un programa que li demani dos nombres enters a l’usuari/ària. 
Al final, el programa imprimeix per pantalla el següent missatge:  

El resultat de la suma és: “valor”

El resultat de la resta és: “valor”

El resultat de la multiplicació és: “valor”


El resultat de la divisió és: “valor”.*/


let numero1 = parseInt(prompt('Introdueix el primer nombre'))
let numero2 = parseInt(prompt('Introdueix el segon nombre'))


let resultDiv= document.getElementById('result')
let message =`
El resultat de la suma és: ${numero1 + numero2} <br>
El resultat de la resta és: ${numero1 - numero2} <br>
El resultat de la multiplicació és: ${numero1 * numero2} <br>
El resultat de la divisió és: ${numero1 / numero2} <br>
`

resultDiv.innerHTML = message




