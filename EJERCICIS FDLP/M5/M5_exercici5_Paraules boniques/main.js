/* Modifica l'exercici 3 del Mòdul 4.

Has de demanar paraules fins que tinguis tres boniques. 
Has d'anar guardant les paraules boniques en un array i quan 
tinguis les tres, imprimir-les.*/


let result = document.getElementById('result')
const arrPalabras = []

function mostrar(){

do{
    let text = prompt('escriu una paraula')

    let lenText = text.length
    let charOne = text.charAt(0)
    let capitalLetter = charOne.toUpperCase()

    if((lenText == 9 && capitalLetter == 'H') || (lenText == 5 && capitalLetter == 'P')){
        result.innerHTML = 'Les paraules boniques són: <br> '
        arrPalabras.push(text)
    }

}while (arrPalabras.length != 3)

result.innerHTML += arrPalabras.join('<br>')
}