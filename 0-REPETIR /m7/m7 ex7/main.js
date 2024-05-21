/*Fer un programa on l’usuari/ària introdueix 
per pantalla un caràcter i un número. El programa 
imprimeix per pantalla un quadrat amb la mida i el 
caràcter introduïts per l’usuari/ària.*/

function fesUnQuadrat(){

    let caracter = document.getElementById('caracter').value
    let num = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    for (let i = 0; i < num; i++){
        result.innerHTML += '<br>'
        for (let j = 0; j < num; j++){
            result.innerHTML += caracter
        }
    }
    result.innerHTML += '<br>'
}