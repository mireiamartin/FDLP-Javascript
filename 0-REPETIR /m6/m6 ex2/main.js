/*Modifica l'exercici 1 del mòdul 5 (L'usuari/ària decideix 
quants noms vol introduir) i ara fes-ho amb funcions.*/

let result = document.getElementById('result')
let noms = []

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
            result.innerHTML += noms[i] + '<br>'
        }
    }
}

function filtrarNoms (){
    quantsNoms()
    nomsAmbA()
    
}

