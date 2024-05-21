/* Crea un programa que tingui un menú:

Afegir tasca, mostrar totes les tasques i eliminar tasca, a més de 
l’opció de sortir de l’aplicació.

D’aquesta manera tindrem un programa amb un llistat de tasques per fer. 
Les tasques es podran afegir, mostrar i eliminar un cop fetes.*/

let resultat = document.getElementById('result')
let tasques = []

function crearTasca() {

    let tascaCreada = document.getElementById('novaTasca').value

    tasques.push(tascaCreada)
        alert("Tasca afegida amb èxit!")

}

function veureTasques() {
    
    for (let i = 0; i < tasques.length; i++)
    resultat.innerHTML += (i + 1) + '. ' + tasques[i] + '<br>'

}

function eliminarTasca() {

    resultat.innerHTML = ''

    let tascaAEliminar = parseInt(document.getElementById('eliminarTasca').value)

    if (tascaAEliminar >= 0 && tascaAEliminar < tasques.length) {
        tasques.splice(tascaAEliminar, 1)
            alert(`Tasca eliminada amb èxit.`)
    }

}

let botoCrearTasca = document.getElementById('botoCrearTasca')
let botoEliminarTasca = document.getElementById('botoEliminarTasca')
let botoVeureTascques = document.getElementById('botoVeureTascques')
let botoSortir = document.getElementById('botoSortir')
let tascaCreada = document.getElementById('novaTasca')
let tascaAEliminar = document.getElementById('eliminarTasca')

function sortir(){

    botoCrearTasca.style.display ='none'
    botoEliminarTasca.style.display ='none'
    botoVeureTascques.style.display ='none'
    botoSortir.style.display ='none'
    tascaCreada.style.display ='none'
    tascaAEliminar.style.display ='none'

    resultat.innerHTML = ''
      
}