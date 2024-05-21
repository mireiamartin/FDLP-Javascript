/* En aquest programa l’usuari/ària ha d’introduir un string i, 
utilitzant un bucle for, el programa ha de mostrar l’string al revés.*/



function mostraString(){

    let resultat = document.getElementById('result')
    let paraula = document.getElementById('paraula').value
    let paraulaReves = ''

    for (let i = paraula.length -1; i >= 0; i--){
        paraulaReves += paraula[i]
    }

    resultat.innerHTML = "La paraula al revés és: " + paraulaReves
}