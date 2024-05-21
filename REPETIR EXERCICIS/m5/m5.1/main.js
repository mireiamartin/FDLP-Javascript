function quantsNoms(){

    let numNoms = parseInt(document.getElementById('numNoms').value)
    let noms = []
    let resultat = document.getElementById('result')

    for (let i = 0; i < numNoms; i++){
        let nom = prompt('Introdueix un nom')
        noms.push(nom)
    }

    for (let i = 0; i < noms.length; i++){ 
        
        let nomsAmbA = noms[i].charAt(0).toUpperCase()
        if (nomsAmbA === 'A'){ 
            
            resultat.innerHTML += noms[i] + ', '
        }
    }
}

// function filtrarNoms() {
//     let numNoms = document.getElementById('numNoms').value
//     const noms = []

//     for (let i = 0; i < numNoms;i++){
//         let nom = prompt('Introdueix el nom ' + (i + 1) + ":")
//         noms.push(nom)
//     }

//     console.log('Els noms que comencen per la lletra A són')

//     for (let j= 0; j < noms.length; j++){
//         let primerCaracter = noms[j].charAt(0).toUpperCase();
//         if (primerCaracter === 'A'){
//             console.log(noms[j]);
//         }
//     }
// }