/* Crea un programa que sol·liciti a l'usuari/ària que introdueixi un 
número de l'1 al 10 i mostri per pantalla el seu equivalent en lletres 
(per exemple, 1 es mostraria com "u", 2 com "dos", etc.).*/

function converteix(){

    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    switch (numero){
        case 1: 
            result.innerHTML = 'u'
            break;
        case 2:
            result.innerHTML = 'dos'
            break;
        case 3:
            result.innerHTML = 'tres'
            break;
        case 4:
            result.innerHTML = 'quatre'
            break;
        case 5:
            result.innerHTML = 'cinc'
            break;
        case 6:
            result.innerHTML = 'sis'
            break;
        case 7:
            result.innerHTML = 'set'
            break;
        case 8:
            result.innerHTML = 'vuit'
            break;
        case 9:
            result.innerHTML = 'nou'
            break;
        case 10:
            result.innerHTML = 'deu'
            break;
    }

}