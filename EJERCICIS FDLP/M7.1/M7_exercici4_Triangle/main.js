/*Crea un mètode que ha de rebre com a paràmetres els 
costats d'un triangle. La funció ha de retornar un 
missatge indicant si el triangle és equilàter, isòsceles o escalè.*/





function quinTriangle() {
    let result = document.getElementById('result')
    let costat1 = parseFloat(document.getElementById('costat1').value)
    let costat2 = parseFloat(document.getElementById('costat2').value)
    let costat3 = parseFloat(document.getElementById('costat3').value)
    let message = ''

    if (costat1 === costat2 && costat1 === costat3) {
        message = 'És un triangle equilàter'
    } else if (costat1 === costat2 || costat1 === costat3 || costat2 === costat3) {
        message = 'És un triangle isòsceles'
    } else if (costat1 !== costat2 && costat1 !== costat3 && costat2 !== costat3) {
        message = 'És un triangle escalè'
    } else {
        message = 'No has introduït correctament les dades'
    }

    result.innerHTML = message
}

//otra manera de hacer
// let triangulo = null

// if (costat1 === costat2 && costat1 === costat3) {
//     triangulo = 'És un triangle equilàter'
// }else if (costat1 !== costat2 && costat1 !== costat3 && costat2 !== costat3){
//     triangulo = 'És un triangle escalè'
// } else{
//     triangulo = 'És un triangle isòsceles'


// }
// result.innerHTML = triangulo

// }