// Fer un programa on l’usuari/ària introdueix per pantalla un caràcter i un número. 
// El programa imprimeix per pantalla un quadrat amb la mida i el caràcter introduïts per l’usuari/ària.

// Exemple:

// % % % % %

// % % % % %

// % % % % %

// % % % % %

// % % % % %

function ferQuadrat(){

    let result = document.getElementById('result')
    let numUser = parseInt(document.getElementById('numUser').value)
    let caracter = document.getElementById('caracterUser').value

    for (let i = 1; i <= numUser; i++){
        result.innerHTML += '<br>'
        for( let j = 1; j <= numUser; j++){
            result.innerHTML += caracter
        }
    }
}



