/* Fes un programa que demani quants nens i nenes volem introduir per fer una reserva 
d'una actuació de titelles.

Un cop sabem el nombre de nens i nenes has de demanar les seves edats. 
Les edats només poden estar compreses entre 5 i 12 anys, per tant, si en demanar una edat, 
l'usuari/ària introdueix una que no està en aquest rang, li has de tornar a demanar 
(fins que introdueixi una correcta).

Finalment, has de mostrar per pantalla la mitjana d'edats dels nens. */

function calcularMitjana(){

    let numInfants = parseInt(document.getElementById('numInfants').value)
    let result = document.getElementById('result')
    let sumaEdats = 0

    for ( let i = 0; i < numInfants; i++){
        let edats = parseInt(prompt("Introdueix l'edat de l'infant"))
        while (edats < 5 || edats > 12){
           edats = parseInt(prompt("Torna a escriure l'edat"))
        }
        sumaEdats += edats
    }

    result.innerHTML = (sumaEdats / numInfants).toFixed(2)
}