const vols = []

const resultCreate = document.getElementById('resultCreate')

function captureValues() {
    let distancia = parseFloat(document.getElementById('distancia').value)
    let companyia = document.getElementById('companyia').value
    let numPassatgers = parseInt(document.getElementById('passatgers').value)
    let motors = parseInt(document.getElementById('motors').value)
    return [distancia, companyia, numPassatgers, motors]
}

//Create
function crearVol(){

    let numVol = document.getElementById('numVol').value
    let distancia = parseFloat(document.getElementById('distancia').value)
    let companyia = document.getElementById('companyia').value
    let numPassatgers = parseInt(document.getElementById('passatgers').value)
    let motors = parseInt(document.getElementById('motors').value)

    //Instancia
    const vuelo = new Vol(numVol, distancia, companyia,numPassatgers,motors)

    //Persistencia
    vols.push(vuelo)

    resultCreate.innerHTML = 'Su vuelo ha sido creado'
}

//To find object
function findVol(numVolBuscar){

    //3 elementos del do while: inicio, condicion, cambio (en este caso es en vertical el bucle, es de dir linea superior esta el incio, otra condicion, otra el cambio)
    let i = 0 // porque el array empieza en 0
    let posicio = -1

    do { 
    let volActual = vols[i] // Se declara volActual dentro del bucle para evitar la redefinición

        if (numVolBuscar === volActual.vol){
            posicio = i
        }

        i++

    } while (i < vols.length && posicio === -1)

    return posicio
}

//Eliminar
function eliminarVol(){

    let numVolEliminat = document.getElementById('numVolEliminat').value

    //to find an object
    let posicio = findVol(numVolEliminat) //imporante: buscar

    //eliminar el vuelo del array vols []
    if (posicio != -1){
        let confirmacio = confirm ('¿Estas seguro que lo quieres borrar?')
        console.log(confirmacio)

        if (confirmacio === true){
            vols.splice(posicio, 1)
            resultCreate.innerHTML = 'Su vuelo ha sido eliminado'
        } 
    } else {
        resultCreate.innerHTML = 'Vuelo no encontrado'
    }

}

//Read
function veureVol(){

    let numVolRead = document.getElementById('numVolRead').value
    
    let posicio = findVol(numVolRead)

    if (posicio !== -1){
        resultCreate.innerHTML = '<pre>' + vols[posicio].toString() + '</pre>'

    }else {      
        resultCreate.innerHTML = 'Vuelo NO encontrado'
    }
}

//Update

// To do list
    // Display = 'none 'block'

        //1. Búsqueda
        //2. cargar la info de los inputs

        //3. esperar la info del usuario - click

        //4. (en una function aparte la del boton update) captura de valores y modificacion quiero que le boton de update recuere toda la documentacion de los inputs i modificar

// let toUpdate = document.getElementById('toUpdate')
// //esto de abajo sirve para que no se vea en pantalla, existe pero no se ve
// toUpdate.style.display = 'none'
// toUpdate.style.display = 'block'

let botonCreate = document.getElementById('botonCreate')
let botonUpdate = document.getElementById('botonUpdate')

botonUpdate.style.display = 'none'

function modificarVol(){

    let numVolUpdate = document.getElementById('numVolUpdate').value
    let posicio = findVol(numVolUpdate) //index
    //1.buscar la info
    if (posicio !== -1){

        let vueloActual = vols[posicio]
        
        //getters

        document.getElementById('distancia').value = vueloActual.distancia
        document.getElementById('companyia').value = vueloActual.companyia
        document.getElementById('passatgers').value = vueloActual.passatgers
        document.getElementById('motors').value = vueloActual.motors

        botonUpdate.style.display = 'inline-block'
        botonCreate.style.display = 'none'
        
        resultCreate.innerHTML = 'Vol trobat, fes les modificacions pertinents'

    }else{
        resultCreate.innerHTML = 'Vuelo no encontrado'
    }
    
}

function updateVol(){

    botonUpdate.style.display = 'none'
    botonCreate.style.display = 'inline-block'

    let numVolUpdate = document.getElementById('numVolUpdate').value
    let posicio = findVol(numVolUpdate)

    if (posicio !== -1) {

        const [distancia, companyia, numPassatgers, motors] = captureValues()   
        let vueloActual = vols[posicio]

        //setters 
        vueloActual.distancia = distancia
        vueloActual.companyia = companyia
        vueloActual.passatgers = numPassatgers
        vueloActual.motors = motors

        resultCreate.innerHTML = 'Su vuelo ha sido modificado'
    }
}