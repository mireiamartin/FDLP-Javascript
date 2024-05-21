/* 
Crea un programa que sol·liciti a l’usuari/ària que introdueixi 
el seu nom i el nombre d’anys que porta treballant en una empresa. 
Després mostra per pantalla el seu nivell d’experiència, 
segons la següent taula:

Menys de 2 anys: Nivell principiant.

Entre 2 i 4 anys: Nivell intermedi.

Més de 4 i fins a 7 anys: Nivell avançat.

Més de 7 i fins a 10 anys: Nivell expert.

Més de 10 anys: Nivell Gurú.*/


function NivellExperiencia() {

    let nom = document.getElementById('nom').value
    let anys = parseInt(document.getElementById('anys').value)
    let message = ''

    //manejo de errores (hacer que si hay un error, que el programa se detenga)
    if(anys < 0){
        result.innerHTML = '' //aixo serveix perque si ja has posat una dada valida, al posar un -1 per exemple no surti res
        console.error ('Es impossible que esté en la empresa')
        return // aixo impedeix que el programa es segueixi executant, en el cas que el if (anys <0) es compleixi
    }

    if (anys < 2) {
        message = 'Nivell principiant'
     } else if (anys <= 4){
         message = 'Nivell intermedi'
     } else if (anys <= 7){
         message = 'Nivell avançat'
     } else if (anys <= 10){
         message = 'Nivell expert'
     } else {
         message = 'Nivell Gurú'
    } 
    result.innerHTML = `El nivell de ${nom} és ${message}`
}