// /*Fer un programa que li demani dos nombres enters a l’usuari/ària. 
// Al final, el programa imprimeix per pantalla el següent missatge:  

// El resultat de la suma és: “valor”

// El resultat de la resta és: “valor”

// El resultat de la multiplicació és: “valor”

// El resultat de la divisió és: “valor”.*/

function ferCalcul(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let result = document.getElementById('result')

    result.innerHTML = `
        El resultat de la suma és: ${num1 + num2} <br>

        El resultat de la resta és: ${num1 - num2} <br>

        El resultat de la multiplicació és: ${num1 * num2} <br>

        El resultat de la divisió és: ${num1 / num2} <br>
    `
}