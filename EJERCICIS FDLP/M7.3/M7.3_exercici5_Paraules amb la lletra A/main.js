/* Donat un array de paraules introduïdes per l’usuari/ària.

Digues el nombre de paraules que contenen la lletra ‘a’ i 
mostra-les per pantalla.*/

'use strict'

function paraulesAmbA() {
    let numParaules = parseInt(document.getElementById('numParaules').value)
    let resultat = document.getElementById('result')
    let paraules = []
    let paraulesA = []
    
    for (let i = 0; i < numParaules; i++) {
        let paraula = prompt('Escriu una paraula aquí')
        paraules.push(paraula.toLowerCase())
    }

    for (let i = 0; i < paraules.length; i++) {
        if (paraules[i].includes('a')) {
            paraulesA.push(paraules[i])
        }
    }

    resultat.innerHTML = `Hi ha ${paraulesA.length} paraules amb la lletra 'a':<br>`

    for (let i = 0; i < paraulesA.length; i++) {
        resultat.innerHTML += paraulesA[i] + '<br>'
    }
}