/*Crea un programa que sol·liciti a l'usuari/ària que 
introdueixi tres nombres enters per teclat 
i mostri per pantalla el major dels tres, el menor dels tres 
o si hi ha dos números iguals.*/



function mostrarNumeros() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let num3 = parseInt(document.getElementById('num3').value)
    let result = document.getElementById('result')
    let messageNumGran = Math.max(num1,num2,num3) //me dira el numero mayor
    let messageNumPetit = ''
    let messageNumIgual = ''
    let menor = num1

    if (num1 === num2 && num2 === num3) {
        messageNumIgual = `Tots els números són iguals i és ${num1}`
        result.innerHTML = messageNumIgual
    } else {
        if (num1 > num2 && num1 > num3) {
            messageNumGran = `El número més gran és ${num1}`
        } else if (num2 > num1 && num2 > num3) {
            messageNumGran = `El número més gran és ${num2}`
        } else {
            messageNumGran = `El número més gran és ${num3}`
        }

        if (num1 < num2 && num1 < num3) {
            messageNumPetit = `El número més petit és ${num1}`
        } else if (num2 < num1 && num2 < num3) {
            messageNumPetit = `El número més petit és ${num2}`
        } else {
            messageNumPetit = `El número més petit és ${num3}`
        }

        result.innerHTML = messageNumGran + '<br>' + messageNumPetit
    }
}

// if (menor > num2){
//     menor = num2
// }

// if (menor > num3){
//     menor = num3
//     console.log(menor)
// }


//hacerlo en ternario, pero si son muchas preguntas mejor if else, pero si aun son mas preguntas con el switch

// (num1 < num2 && num1 < num3) 
//     ? messageNumPetit = `El número més petit és ${num1}`
//     :(num2 < num1 && num2 < num3)
//         ? messageNumPetit = `El número més petit és ${num2}`
//         : messageNumPetit = `El número més petit és ${num3}`

