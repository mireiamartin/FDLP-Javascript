const vols = []

const resultCreate = document.getElementById('resultCreate')

function cleanInputs() {
    const inputs = document.querySelectorAll('input:not([type="button"])')

    for (let index = 0; index < inputs.length; index++) {
        let input = inputs[index]
        input.value = ''
    }
    document.getElementById('numVol').focus()
}

function captureValues(){

    let numVol = document.getElementById('numVol').value
    let distancia = parseFloat(document.getElementById('distancia').value)
    let companyia = document.getElementById('companyia').value
    let numPassatgers = parseInt(document.getElementById('passatgers').value)
    let motors = parseInt(document.getElementById('motors').value)

    return [numVol, distancia, companyia, numPassatgers, motors]
}

function resetResultCreate(){
    resultCreate.innerHTML = ''
}

function crearVol(){

    resetResultCreate()

    const [numVol, distancia, companyia, numPassatgers, motors] = captureValues()

    const vuelo = new Vol(numVol, distancia, companyia, numPassatgers, motors)

    vols.push(vuelo)

    resultCreate.innerHTML = 'Su vuelo ha sido creado'
    cleanInputs()
}


function findVol(numVolBuscar){

    let i = 0 
    let posicio = -1

    do { 
    let volActual = vols[i]

        if (numVolBuscar === volActual.vol){
            posicio = i
        }

        i++

    } while (i < vols.length && posicio == -1)

    return posicio
}

function eliminarVol(){

    resetResultCreate()

    let numVolEliminat = document.getElementById('numVolEliminat').value

    let posicio = findVol(numVolEliminat)

    if (posicio !== -1){
        let confirmacio = confirm('¿Estas seguro que lo quieres borrar?')

        if (confirmacio === true){
            vols.splice(posicio, 1)
            resultCreate.innerHTML = 'Su vuelo ha sido eliminado'
        } 
    } else {
        resultCreate.innerHTML = 'Vuelo no encontrado'
    }
    cleanInputs()
}


function veureVol(){

    resetResultCreate()

    let numVolRead = document.getElementById('numVolRead').value
    
    let posicio = findVol(numVolRead)

    if (posicio !== -1){
        resultCreate.innerHTML = '<pre>' + vols[posicio].toString() + '</pre>'

    }else {      
        resultCreate.innerHTML = 'Vuelo NO encontrado'
    }
    cleanInputs()
}

let botonCreate = document.getElementById('botonCreate')
let botonUpdate = document.getElementById('botonUpdate')

botonUpdate.style.display = 'none'

function modificarVol(){

    let numVolUpdate = document.getElementById('numVolUpdate').value
    let posicio = findVol(numVolUpdate)

    if (posicio !== -1){

        let vueloActual = vols[posicio]
        
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

        vueloActual.distancia = distancia
        vueloActual.companyia = companyia
        vueloActual.passatgers = numPassatgers
        vueloActual.motors = motors

        resultCreate.innerHTML = 'Su vuelo ha sido modificado'
    }
}