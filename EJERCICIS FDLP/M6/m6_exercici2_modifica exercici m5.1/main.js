/*Modifica l'exercici 1 del mòdul 5 (L'usuari/ària decideix 
quants noms vol introduir) i ara fes-ho amb funcions.*/



'use strict'

const noms = [] 

function quantsNoms(){
    let numNoms = document.getElementById('numNoms').value
    for (let i = 0; i < numNoms;i++){
        let nom = prompt('Introdueix el nom ' + (i + 1) + ":")
        noms.push(nom)
    }
}

function nomsAmbA(){
    for (let i = 0; i < noms.length; i++){
        let primerCaracter = noms[i].charAt(0).toUpperCase();
        if (primerCaracter === 'A'){
            console.log(noms[i]);
        }
    }
}

function filtrarNoms (){
    let quants = quantsNoms()
    let noms = nomsAmbA()
}