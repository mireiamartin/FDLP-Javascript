/* Modifica l'exercici 3 del Mòdul 4.

Has de demanar paraules fins que tinguis tres boniques. 
Has d'anar guardant les paraules boniques en un array i quan 
tinguis les tres, imprimir-les.*/

// function esBonica(){
//     let paraula = document.getElementById('paraula').value.toUpperCase()
//     let result = document.getElementById('result')

    
//     if((paraula.charAt(0) === 'H' && paraula.length === 9) || (paraula.charAt(0) === 'P' && paraula.length === 5)){
//         result.innerHTML = `La paraula ${paraula}, és bonica`
//     } else {
//         result.innerHTML = 'La paraula no és bonica'
//     }
// }

function esBonica(){

    let result = document.getElementById('result')
    let paraulesBoniques = []
    
    do {
       let paraula = prompt('Escriu una paraula bonica')

        if((paraula.charAt(0) === 'H' && paraula.length === 9) || (paraula.charAt(0) === 'P' && paraula.length === 5)){
            paraulesBoniques.push(paraula)
            console.log(paraulesBoniques)
        }

    } while (paraulesBoniques.length !=3)

    result.innerHTML = paraulesBoniques.join(', ')
}