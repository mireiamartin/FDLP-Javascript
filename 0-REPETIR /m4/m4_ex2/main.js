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

function calcularExperiencia(){
    let nom = document.getElementById('nom').value
    let anys = parseInt(document.getElementById('anys').value)
    let result = document.getElementById('result')

    if (anys < 0){
        result.innerHTML = 'Número no vàlid'
    } else if (anys <= 2){
        result.innerHTML = 'El nivell de: ' + nom + ' és: ' + ' Nivell principant'
    } else if ( anys <= 4){
        result.innerHTML = 'El nivell de: ' + nom + ' és: ' + ' Nivell intermedi'
    } else if ( anys <= 7){
        result.innerHTML = 'El nivell de: ' + nom + ' és: ' + ' Nivell avançat'
    } else if ( anys <= 10){
        result.innerHTML = 'El nivell de: ' + nom + ' és: ' + ' Nivell expert'
    } else {
        result.innerHTML = 'El nivell de: ' + nom + ' és: ' + ' Nivell gurú'
    }
}