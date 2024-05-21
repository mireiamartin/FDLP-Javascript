/* Passar de metres a peus.

De peus a metres.

De metres a iardes.

De iardes a metres.*/



function convertir() {
    let numero = parseFloat(document.getElementById('numero').value)
    let conversio = document.getElementById('conversio').value
    let result = document.getElementById('result')
    let message = ''

    // OPCION DE PASAR A CONSTANTE
    // const aPeus= 3.28084

    switch (conversio) {
        case 'metresPeus':
            message = numero * 3.28084 + ' peus'
            break
        case 'peusMetres':
            message = numero * 0.3048 + ' metres'
            break
        case 'metresIardes':
            message = numero * 1.09361 + ' iardes'
            break
        case 'iardesMetres':
            message = numero * 0.9144 + ' metres'
            break
        default:
            message = 'No has introduït un número vàlid'
    }

    result.innerHTML = `El resultat és ${message}`
}

//para poner solo los decimales que quiero
// message = (numero * 3.28084).toFixed(3) + ' peus'