/* Donat un array de números, el programa ha de mostrar 
la suma de tots els nombres parells i la suma de tots els números 
imparells.*/

let resultat = document.getElementById('result')

let numeros = []
let numerosPars = []
let numerosImpars = []

function crearArray(){
    numeros = []
    

    for (let i= 0; i < 10; i++){
        let numero = parseInt(Math.random()*50)
        numeros.push(numero)
    
    }
    resultat.innerHTML = `Els numeros creats són: ${numeros}`
}

function parOImpar(){

    numerosPars = []
    numerosImpars = []

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPars.push(numeros[i])
        }else{
            numerosImpars.push(numeros[i])
        }
    }
    resultat.innerHTML = `Els numeros creats són: ${numeros} <br></br> 
                        Els números pars són: ${numerosPars} i els impars són: ${numerosImpars}
                        `
}

function sumarValors(){
    let sumaPars = 0
    let sumaImpars = 0

    for (let i = 0; i < numerosPars.length; i++){
        sumaPars += numerosPars[i]
    }

    for (let i = 0; i < numerosImpars.length; i++){
        sumaImpars += numerosImpars[i]
    }

    resultat.innerHTML = `Els numeros creats són: ${numeros} <br></br> 
                        Els números pars són: ${numerosPars} i els impars són: ${numerosImpars} <br></br> 
                        La suma dels números pars és: ${sumaPars} i dels impars: ${sumaImpars}
                        `
}