/*L’usuari/ària introdueix un any “a” per teclat
i el programa crida a un mètode que indiqui si l’any 
és de traspàs o no.*/




function esDeTraspas(){

    let any = parseInt(document.getElementById('any').value)
    let result = document.getElementById('result')

    if (any % 400 == 0 || any % 4 == 0 && any % 100 !== 0){
        message = `L'any ${any} és de traspàs`
    }else{
        message = `L'any ${any} no és de traspàs`
    }

    result.innerHTML = message
}