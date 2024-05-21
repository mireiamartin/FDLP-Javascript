/*Crea un programa que determini si un nombre 
és múltiple d’un altre. Per fer-ho crea una funció 
que ha de rebre els dos nombres per paràmetre i ha de 
retornar true, si el primer nombre introduït és múltiple 
del segon o false, si no ho és.*/

function multiple(){

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let message = ''
    let result = document.getElementById('result')

    if (num1 % num2 === 0){
        message = 'És múltiple'
    } else {
        message = 'No és múltiple'
    }

    result.innerHTML = message
}