/*Fer un programa on l’usuari/ària introdueix 
per pantalla un caràcter i un número. El programa 
imprimeix per pantalla un quadrat amb la mida i el 
caràcter introduïts per l’usuari/ària.*/



function fesUnQuadrat() {
    let resultat = document.getElementById('result')
    let numero = parseInt(document.getElementById('num').value)
    let caracter = document.getElementById('caracter').value
    let linia = ''
     
    resultat.innerHTML = ''

//     for (let i = 0; i < numero; i++) {
//             linia = ''
//         for (let j = 0; j < numero; j++) {
//             linia += caracter
//         }
//         resultat.innerHTML +=  linia + '<br>'
//     }
// }

// otra manera
    // fa la linia vertical
    for (let i = 1; i <= numero; i++){
        resultat.innerHTML += '<br>'
        //fa la linia horizontal
        for (let j = 1; j <= numero; j++){
            resultat.innerHTML += caracter
        }

        resultat.innerHTML += '<br>'
    }

}