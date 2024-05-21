const result = document.getElementById('result')
const clientes = []

function crearCliente(){

    let dni = document.getElementById('dniCreate').value
    let nacionalitat = document.getElementById('nacionalitat').value
    let edad = parseInt(document.getElementById('edad').value)

    const cliente = new Client (dni, nacionalitat, edad)

    clientes.push(cliente)
    result.innerHTML = 'El cliente ha sido creado'

}

function eliminarCliente(){
    let dni = document.getElementById('dniDelete').value

    let i = 0
    let posicion = -1

    do{
        if (dni == clientes[i].dni){
            posicion = i
        }
        i++
    }while (i < clientes.length && posicion == -1)

    if (posicion != -1){
        clientes.splice(posicion,1)
        result.innerHTML = 'El cliente ha sido eliminado correctamente'
    } else {
        result.innerHTML = 'El cliente NO ha sido encontrado'
    }

}

function crearVuelo(){
    let dni = document.getElementById('numFind').value
    let numVol = document.getElementById('numVol').value
    let companyia = (document.getElementById('companyia').value)
    let distancia = parseInt(document.getElementById('distancia').value)
    let motores = parseInt(document.getElementById('motores').value)
    let numPasajeros = parseInt(document.getElementById('numPasajeros').value)

    let i = 0
    let posicion = -1

    do{
        if (dni == clientes[i].dni){
            posicion = i
        }
        i++
    }while (i < clientes.length && posicion == -1)

    if (posicion != -1){

        const vuelo = new Vol (numVol, companyia, distancia, motores, numPasajeros)

        vuelo.compensaCO2()

        clientes[posicion].afegirVuelos(vuelo)

        result.innerHTML = 'Su vuelo ha sido creado'
    } else {
        result.innerHTML = 'El cliente NO ha sido encontrado'
    }
}

function calcularMitjana() {
    let sumaEdad = 0 
    let count = 0

    for (let i = 0; i < clientes.length; i++) { 
        if (clientes[i].edad >= 18) { 
            sumaEdad += clientes[i].edad
            count++
        }
    }

    result.innerHTML = `La media de edad és: ${(sumaEdad / count).toFixed(2)}`
}



function petjadaCliente(){
    let dni = document.getElementById('dniPetjada').value

    let i = 0
    let posicion = -1

    do{
        if (dni == clientes[i].dni){
            posicion = i
        }
        i++
    }while (i < clientes.length && posicion == -1)

    if (posicion == -1){
        
        result.innerHTML = 'El cliente NO ha sido encontrado'
        return
    }   

    let clienteActual = clientes[posicion]
    let sumaCO2 = 0

    for (let i = 0; i < clienteActual.vol.length; i++){
        sumaCO2 += clienteActual.vol[i].co2emes

    result.innerHTML = `La petjada de carboni és: ${sumaCO2}`

    }
}

function mitjanaPetjada() {
    let sumaCO2 = 0
    let count = 0

    for (let i = 0; i < clientes.length; i++) {
        let clienteActual = clientes[i]
        let vuelosClienteActual = clienteActual.vol

        for (let j = 0; j < vuelosClienteActual.length; j++) {
            let vueloActual = vuelosClienteActual[j]
            console.log(vueloActual)
            sumaCO2 += vueloActual.co2emes
            count++
        }
    }

    let mediaVuelos = sumaCO2 / count
    result.innerHTML = mediaVuelos
}