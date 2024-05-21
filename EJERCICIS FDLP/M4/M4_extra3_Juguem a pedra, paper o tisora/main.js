
/*Escriu un programa que et permeti jugar pedra, paper o tisora ​​amb l'ordinador.

Per a això l'ordinador haurà de generar un nombre aleatori entre 1 i 3 que 
representi pedra, paper o tisora ​​respectivament, i l'usuari/ària haurà de respondre al 
seu torn amb un nombre entre l'1 i el 3 després de mostrar la següent pantalla:

Juguem a pedra, paper o tisora:

1. Pedra

2. Paper

3. Tisora

Tria (1-3):

Si l'usuari/ària indica algun nombre diferent del sol·licitat, 
haurà d'aparèixer el següent missatge:
«Entenc que no vols jugar. Adeu»
En cas contrari, indicar el guanyador/a de la següent manera:

Jo xxx i tu xxx. He guanyat!, o Has guanyat!

Segons sigui el cas.

Exemple:

«Jo paper i tu tisora. Has guanyat!»*/



function jugar(){

    let jugadaContricant = parseInt(document.getElementById('jugada').value)
    let jugadaOrdinador = Math.floor(Math.random() * (4 - 1)) + 1
    let resultat = document.getElementById('result')

    console.log(jugadaOrdinador)

    if (jugadaContricant < 0 || jugadaContricant > 3){
        resultat.innerHTML = 'No has introduït un número vàlid'
    }else if (jugadaOrdinador == jugadaContricant){
        resultat.innerHTML = 'Empat, torna a jugar'
    }else if (jugadaOrdinador == 1 && jugadaContricant == 2){
        resultat.innerHTML = 'Jo pedra i tu paper. Has guanyat!'
    }else if (jugadaOrdinador == 2 && jugadaContricant == 3){
        resultat.innerHTML = 'Jo paper i tu tisora. Has guanyat!'
    }else if (jugadaOrdinador == 3 && jugadaContricant == 1){
        resultat.innerHTML = 'Jo tisora i tu pedra. Has guanyat!'
    }else if (jugadaOrdinador == 2 && jugadaContricant == 1){
        resultat.innerHTML = 'Jo paper i tu pedra. He guanyat!'
    }else if (jugadaOrdinador == 1 && jugadaContricant == 3){
        resultat.innerHTML = 'Jo pedra i tu tisora. He guanyat!'
    }else if (jugadaOrdinador == 3 && jugadaContricant == 2){
        resultat.innerHTML = 'Jo tisora i tu paper. He guanyat!'   
    }
}