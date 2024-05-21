/*Escriu un programa per una botiga de surf on se li exposarà 
un menú als usuaris i usuàries amb les següents opcions:

Calcular material taula (crida a una funció que rep un boolean que 
representi si la persona té experiència o no) si té, retornarà 
el missatge "taula de fibra", si no retornarà el missatge "taula d'espuma". 
(demanem per consola si l'usuari/ària si té experiència o no)

Imprimir forecast (crida a una funció  que rep l'alçada de l'onada 
en metres). Si l'alçada és més de 2 metres, imprimirà "onades grans", 
si no imprimirà "onades petites". (Introduïm l'alçada de les onades per 
consola, simulant que les rebem d'una aplicació externa)

Calcula el cost per reserva (crida a una funció  que rep els minuts 
de reserva i el tipus de taula reservada i retorna el cost de la reserva).

(demanem per consola els minuts i el tipus)

Taula tipus espuma: 20 € cada 60 min.

Taula tipus fibra: 35 € cada 60 min.

Sortir del programa.

Fins que la persona no escrigui un 4, el programa ha de continuar 
mostrant el menú i donar la possibilitat de fer accions.*/




let resultat = document.getElementById('result')

function calcularMaterial() {

    let experienciaUsuari = parseInt(document.getElementById('experiencia').value)

    switch (experienciaUsuari) {
        case 1:
            resultat.innerHTML = "Has de fer servir la taula de fibra"
            break
        case 2:
            resultat.innerHTML = "Ha de ser servir la taula d'espuma"
            break
    }
}

function calcularAltura(){

    let alturaOnada = parseInt(document.getElementById('alturaOnada').value)

    if (alturaOnada > 2){
        resultat.innerHTML = 'onades grans'
    } else {
        resultat.innerHTML = 'onades petites'
    }
}

function calcularReserva(){

    let minutsReserva = parseInt(document.getElementById('minutsReserva').value)
    let tipusTaula = parseInt(document.getElementById('tipusDeTaula').value)

    let costEspuma = minutsReserva * (20/60)
    let costFibra = minutsReserva * (35/60)

    if (tipusTaula == 1){
        resultat.innerHTML = 'El cost de la reserva és de: ' + costEspuma.toFixed(2) + '€'
    } else if (tipusTaula == 2){
        resultat.innerHTML = 'El cost de la reserva és de: ' + costFibra.toFixed(2) + '€'
    } else {
        resultat.innerHTML = 'No has introduit bé les dades'
    }
}

function sortir(){

    let numeroSortida = parseInt(document.getElementById('numSortida').value)
    let numCorrecte = 4

    if (numeroSortida !== numCorrecte){
        resultat.innerHTML = 'torna a escriure un número'
    } else {
        create.style.display = 'none'
        resultat.style.display = 'none'
    }
}