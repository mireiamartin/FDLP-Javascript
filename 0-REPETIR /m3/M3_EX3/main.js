/*El programa demana a l'usuari/ària que introdueixi 3 notes 
i el programa mostra la mitjana de les 3 notes per pantalla.*/

function calcularMitjana(){
    let nota1 = parseInt(document.getElementById('nota1').value)
    let nota2 = parseInt(document.getElementById('nota2').value)
    let nota3 = parseInt(document.getElementById('nota3').value)
    let result = document.getElementById('result')


    let suma = nota1 + nota2 + nota3
    let mitjana = suma / 3

    result.innerHTML = `La mitjana de les notes és: ${mitjana.toFixed(2)}`
}