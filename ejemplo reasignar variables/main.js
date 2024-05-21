
//imprime por consola todos los valors incluidos des de el numero 3 al numero 9 (ejemplo)

// let num2 = 9

// for (let num1 = 3; num1 <= num2; num1++){
//     console.log(num1)

// }

//que passa si tengo los valores girados porque el usuario los ha colocado así? como lo controlo

let num2 = 3
let num1 = 9

if (num1 >= num2){
    //reasignar variables
    let aux = num1 // 9
    num1 = num2 // 3
    num2 = aux // 9

    console.log(num1, num2)
}

for (num1 ; num1 <= num2; num1++){
    console.log(num1)
}