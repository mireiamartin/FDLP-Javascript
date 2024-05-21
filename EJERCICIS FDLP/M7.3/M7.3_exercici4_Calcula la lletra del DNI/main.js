/* L’usuari/ària ha d’introduir un DNI i el programa ha de dir 
si la lletra és correcte o no amb el nombre de DNI. Si la lletra 
no és correcta, ha de dir quina lletra és la correcta.

Per calcular la lletra DNI has de prendre el número de DNI a verificar 
i dividir-lo entre 23. La resta es reemplaça per una lletra que ja 
està assignada a aquest nombre mitjançant la taula adjunta:  */

function lletraCorrecta(){

    let numDni = parseInt(document.getElementById('numDni').value)
    let lletraDni = document.getElementById('lletraDni').value.toUpperCase()
    let resultat = document.getElementById('result')

    const taulaAdjunta = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]

    let calcularLletra = numDni % 23
    let lletraCorrecta = taulaAdjunta[calcularLletra]

    if (lletraDni === lletraCorrecta){
        resultat.innerHTML = `La lletra introduïda és correcta: ${numDni} ${lletraDni}`
    } else if (lletraDni !== lletraCorrecta) {
        resultat.innerHTML = `La lletra introduïda no és correcta, hauría de ser la ${lletraCorrecta}, resultat final ${numDni} ${lletraCorrecta}`
    }
}