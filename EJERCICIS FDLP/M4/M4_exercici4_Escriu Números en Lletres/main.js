/* Crea un programa que sol·liciti a l'usuari/ària que introdueixi un 
número de l'1 al 10 i mostri per pantalla el seu equivalent en lletres 
(per exemple, 1 es mostraria com "u", 2 com "dos", etc.).*/



function pasarALletres(){
    let numero = parseInt(document.getElementById('numeroIntroduit').value);
    let numeroText = '';

    switch(numero){
        case 1:
            numeroText = 'U';
            break;
        case 2:
            numeroText = 'Dos';
            break;
        case 3:
            numeroText = 'Tres';
            break;
        case 4:
            numeroText = 'Quatre';
            break;
        case 5:
            numeroText = 'Cinc';
            break;
        case 6:
            numeroText = 'Sis';
            break;
        case 7:
            numeroText = 'Set';
            break;
        case 8:
            numeroText = 'Vuit';
            break;
        case 9:
            numeroText = 'Nou';
            break;
        case 10:
            numeroText = 'Deu';
            break;
        default:
            numeroText = "No has posat un número de l'1 al 10";
    }
    document.getElementById('result').innerHTML = numeroText;
}