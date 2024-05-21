
/* L’usuari/ària introdueix un nombre per teclat i el programa 
crida a un mètode que ha de mostrar la successió de Fibonacci.

Exemple:

Si l’usuari/ària introdueix el 10, el resultat ha de ser:

0,1,1,2,3,5,8,13,21,34 */




function calcular(){
    let numUser = parseInt(document.getElementById('number').value)
    let result = document.getElementById('result')
    result.innerHTML = ''

    let num1 = 1
    let num2 = 0
    let num3 = num1 +  num2

    result.innerHTML += `${num2} , ${num1} , `
    

    for (i = 0; i < numUser -2; i++){
        num1 = num2
        num2 = num3
        num3 = num1 + num2

        result.innerHTML += num3 + ' , '
    }
}

//     OTRA MANERA//

//     let arrayFbo = [0,1]
//     let num = null

//     for (let i = 1; i < numUser -1; i++){
//         num = arrayFbo[i] + arrayFbo[i - 1]
//         arrayFbo.push(num)
//     }

//     result.innerHTML = 'La sequencia de Fibonacci es: ' + arrayFbo

// }
