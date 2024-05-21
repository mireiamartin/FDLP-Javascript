function canviarAText(){

    let numero = parseInt(document.getElementById('numeroIntroduït').value)
    let message = document.getElementById ('result')

//     if (numero = 1){
//         message = 'U'
//     }else if (numero = 2){
//         message = 'Dos'
//     } else if (numero = 3){
//         message = 'Tres'
//     } else if (numero = 4){
//         message = 'Quatre'
//     } else if (numero = 5){
//         message = 'Cinc'
//     } else if (numero = 6){
//         message = 'Sis'
//     } else if (numero = 7){
//         message = 'Set'
//     } else if (numero = 8){
//         message = 'Vuit'
//     } else if (numero = 9){
//         message = 'Nou'
//     } else if (numero = 10){
//         message = 'Quatre'
//     } else {
//         message = 'El número introduit no és correcte'
// }

switch (numero){
    case 1:
        message = 'U'
        break
    case 2:
        message = 'Dos'
        break
    case 3:
        message = 'Tres'
        break
    case 4:
        message = 'Quatre'
        break
    case 5:
        message = 'Cinc'
        break
    case 6:
        message = 'Sis'
        break
    case 7:
        message = 'Set'
        break
    case 8:
        message = 'Vuit'
        break
    case 9:
        message = 'Nou'
        break
    case 10:
        message = 'Deu'
        break
    default:
        message = 'El número introduit no és correcte'
}   
result.innerHTML = message
}