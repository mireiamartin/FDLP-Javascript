/* L’usuari/ària ha d'introduir un número i el programa 
ha de mostrar per pantalla si el número és parell o imparell*/

function parellOImparell(){
    let num = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    if (num % 2 === 0){
        result.innerHTML = 'El número: ' + num + ' es parell'
    } else {
        result.innerHTML = 'El número: ' + num + ' es imparell'
    }
}