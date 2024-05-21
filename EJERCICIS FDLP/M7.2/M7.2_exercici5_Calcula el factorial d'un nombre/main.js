/* Realitzar un programa on l’usuari/ària introdueix un número i el 
programa crida a un mètode que retorna el factorial del número introduït.

El factorial d'un nombre n (enter, no negatiu) és el producte de tots 
els nombres enters positius inferiors o iguals a n. */



function retornFactorial(){

    let resultat = document.getElementById('result')
    let numero = parseInt(document.getElementById('num').value)
    let calculFactorial = 1

    //validaciones
    if (isNaN(numero)) return alert ('Debe ser un número') //comprovar si es un numero
    if (numero < 1) return alert('Debe ser un numero positivo') //comprovar que no sea menor a 1

    
    for (let i = numero; i > 0; i--){
        resultat.innerHTML = `El valor factorial és: ${calculFactorial *= i}`
    }

    //otra manera de hacerlo i mejor que la mia
    for (let i = numero; i > 0; i--){
        calculFactorial *= i
    }

    resultat.innerHTML = `El valor factorial és: ${calculFactorial}`
}