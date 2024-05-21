/*Crea un programa que sol·liciti a l'usuari/ària que 
introdueixi tres nombres enters per teclat 
i mostri per pantalla el major dels tres, el menor dels tres 
o si hi ha dos números iguals.*/


function granOPetit(){

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let num3 = parseInt(document.getElementById('num3').value)
    let numeroPetit = ''
    let numeroGran = ''
    let numerosIguals = ''
    let result = document.getElementById('result')

    if (num1 === num2 && num2 === num3){
        numerosIguals = `Els tres numers són iguals: ${num1}`
        result.innerHTML = numerosIguals
    } else {
        if (num1 > num2 && num1 > num3){
            numeroGran =  num1
        } else if (num2 > num1 && num2 > num3){
            numeroGran =  num2
        } else {
            numeroGran =  num3
        }

    if (num1 < num2 && num1 < num3){
        numeroPetit =  num1
    } else if (num2 < num1 && num2 < num3){
        numeroPetit =  num2
    } else {
        numeroPetit =  num3
    }
    result.innerHTML = `El número més gran és ${numeroGran}, i el més petit és ${numeroPetit}`
    }
}