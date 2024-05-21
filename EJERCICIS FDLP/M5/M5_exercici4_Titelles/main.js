/* Fes un programa que demani quants nens i nenes volem introduir per fer una reserva 
d'una actuació de titelles.

Un cop sabem el nombre de nens i nenes has de demanar les seves edats. 
Les edats només poden estar compreses entre 5 i 12 anys, per tant, si en demanar una edat, 
l'usuari/ària introdueix una que no està en aquest rang, li has de tornar a demanar 
(fins que introdueixi una correcta).

Finalment, has de mostrar per pantalla la mitjana d'edats dels nens. */

let result = document.getElementById('result')

function calcularMitjana() {
    let sumaEdats = 0
    let numInfants = parseInt(document.getElementById('numInfants').value)

    for (let i = 0; i < numInfants; i++) {
        let edatIntroduida = parseInt(prompt("Introdueix l'edat de l'infant "))

        while (edatIntroduida < 5 || edatIntroduida > 12) {
            edatIntroduida = parseInt(prompt(" Torna a introduir l'edat de l'infant "))
        }

        sumaEdats += edatIntroduida
    }

    let mitjana = sumaEdats / numInfants

    result.innerHTML = `La mitjana d'edat dels infants és: ${mitjana}`
}

calcularMitjana()
