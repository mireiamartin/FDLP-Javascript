/*Crea un programa que sol·liciti a l'usuari/ària quants noms desitja introduir.

Una vegada tenim aquest número, demanarem a l'usuari/ària tants noms de persona 
com ha dit prèviament i els emmagatzemarem en un Array.

Després, mostrarem per pantalla només els noms que comencen per la lletra “A”.*/

function filtrarNoms() {
    let numNoms = document.getElementById('numNoms').value
    const noms = []

    for (let i = 0; i < numNoms;i++){
        let nom = prompt('Introdueix el nom ' + (i + 1) + ":")
        noms.push(nom)
    }

    console.log('Els noms que comencen per la lletra A són')

    for (let j= 0; j < noms.length; j++){
        let primerCaracter = noms[j].charAt(0).toUpperCase();
        if (primerCaracter === 'A'){
            console.log(noms[j]);
        }
    }
}