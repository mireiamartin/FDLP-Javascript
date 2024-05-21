/* Sabries dir que fa el programa adjunt?

Per fer-ho segurament hauries de posar algun punt de trencament (breakpoint) 
i avaluar el valor de les variables on es prenen decisions.*/


function nombrePrimer() {
    let esPrimer = false
    let numUsuari = prompt("Escoge un número: ")
    if (numUsuari > 1) {
        esPrimer = calcularPrimer(numUsuari)
    }
    alert(esPrimer)
}


function calcularPrimer(numUsuari) {
    let esPrimer = true
    let i = 2
    while (esPrimer && i < numUsuari) {
        if (numUsuari % i == 0) {
            esPrimer = false
        }
        i++
    }
    return esPrimer
}