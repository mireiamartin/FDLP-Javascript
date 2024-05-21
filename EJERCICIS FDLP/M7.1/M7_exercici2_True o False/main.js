/*Crea un programa que determini si un nombre 
és múltiple d’un altre. Per fer-ho crea una funció 
que ha de rebre els dos nombres per paràmetre i ha de 
retornar true, si el primer nombre introduït és múltiple 
del segon o false, si no ho és.*/



function CalcularMultipe(){

    let numero1 = parseInt(document.getElementById('num1').value)
    let numero2 = parseInt(document.getElementById('num2').value)
    let resultat = document.getElementById('result')
    let message = true

    if (numero1 % numero2 == 0){
        message
    }else{
        message = false
    }

    resultat.innerHTML = message

}

//otra manera

// if (numero1 && % 2 == 0){
//     message
// }else{
//     message = false
// }
