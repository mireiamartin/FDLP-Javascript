/* L’usuari/ària ha d'introduir un número i el programa 
ha de mostrar per pantalla si el número és parell o imparell*/


function parellOImparell(){

    let numero = parseInt(document.getElementById('numero').value)
    let resultat = document.getElementById('result')
    let message = ''

    if (numero % 2 === 0){
        message = `El número ${numero} és parell`   
    }else{
        message = `El número ${numero} és imparell`
    }
    resultat.innerHTML = message

}