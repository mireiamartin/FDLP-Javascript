/* Mostra per pantalla els nombres parells compresos 
entre el 100 i el 0 en ordre descendent.*/



function numerosPars() {
    let result = document.getElementById('result')
    let numero = 100
    let message = ''

    for (numero; numero >= 0; numero--){
        if (numero % 2 === 0){
            message += numero + '<br>'
        }
        result.innerHTML = message
    }
}
numerosPars()

//otra manera

// function numerosPars2() {
//     let result = document.getElementById('result')
//     let numero = 100
//     let message = ''

//     for (numero; numero >= 0; numero -=2){ //en este caso el -=2 va descontando cada vez 2 numeros
//         message = message + numero + '<br>'
//         result.innerHTML = message
//     }
// }
// numerosPars2()