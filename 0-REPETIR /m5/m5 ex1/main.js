/*Crea un programa que sol·liciti a l'usuari/ària quants noms desitja introduir.

Una vegada tenim aquest número, demanarem a l'usuari/ària tants noms de persona 
com ha dit prèviament i els emmagatzemarem en un Array.

Després, mostrarem per pantalla només els noms que comencen per la lletra “A”.*/

function filtrarNoms(){
    let numNoms = parseInt(document.getElementById('numNoms').value)
    let result = document.getElementById('result')

    let noms = []
    let nomsAmbA = []

    for (let i = 0; i < numNoms; i++){
        let nom = prompt('Introdueix un nom')
        noms.push(nom.toUpperCase())
    }
   
    console.log(noms)

    for (let i = 0; i < noms.length; i++){
        let primeraLletra = noms[i].charAt(0)
        if (primeraLletra === 'A'){
            nomsAmbA.push(noms[i])
        }
        console.log(nomsAmbA)
    }
    result.innerHTML = "Els noms amb A son: " + nomsAmbA
}