/* Mostra per pantalla els nombres parells compresos 
entre el 100 i el 0 en ordre descendent.*/

function mostrarParells(){
    let result = document.getElementById('result')
    let numero = 100
    let parells = []
    for (numero; numero >= 0; numero--){
        if (numero % 2 === 0){
            parells.push(numero)
        }
        result.innerHTML = parells
    }
}