// // Pruebas

// // Instancia de vuelo
// //numVol, companyia, distancia, motores, numPasajeros
// const vuelo = new Vol('g1', 'airFrance', 4000, 4, 150)
// vuelo.compensaCO2()
// console.log(vuelo)

// // instancia cliente
// //dni, nacionalitat, edat
// const cliente = new Client (1, 'fr', 36)
// cliente.afegirVuelos(vuelo)
// console.log(cliente)

// //Nueva instancia
// const vuelo2 = new Vol('f2', 'frankfurtair', 3700, 4, 50) 
// vuelo2.compensaCO2()
// //como asociarlo con el cliente de arriba
// cliente.afegirVuelos(vuelo2)
// console.log(cliente)

// console.log(cliente.vol)
// console.log(cliente.vol.length)
// console.log(cliente.vol[0])
// console.log(cliente.vol[0].co2emes)
// console.log(cliente.vol[1])
// console.log(cliente.vol[1].co2emes)

// let total = 0

// for (i = 0; i < cliente.vol.length; i++){
//     console.log(cliente.vol[i].co2emes)
//     total += cliente.vol[i].co2emes
//     console.log(total.toFixed(2))
// }


// //Variable global

// const clientes = []
// clientes.push(cliente)
// const cliente2 = new Client (2, 'es', 44)
// clientes.push(cliente2)
// console.log(clientes)

// //para comprovar si son mayores de edad

//     //bucle - for
//     //if
// let sumaEdat = null
// let count = 0

// for (i = 0; i < clientes.length; i++){
//     console.log(clientes[i].edat)

//     if (clientes[i].edat >= 18){
//         sumaEdat += clientes[i].edat
//         count++
//     }
//     console.log(sumaEdat)
// }

// let mitjaEdat = sumaEdat / count
// console.log(mitjaEdat)

const result = document.getElementById('result')
const clientes = []

function crearCliente(){
    //Capturar inputs
    let dni = document.getElementById('dniCreate').value
    let nacionalitat = document.getElementById('nacionalitat').value
    let edad = parseInt(document.getElementById('edad').value)

   
    //instancia
    const cliente = new Client (dni, nacionalitat, edad)

    //subir al array
    clientes.push(cliente)
    console.log(clientes)
    result.innerHTML = 'El cliente ha sido creado'

}

function eliminarCliente(){
    //Capturar inputs
    let dni = document.getElementById('dniDelete').value

    //Buscar en el array . bucle do/while (3 expresiones) //busca el dni
    let i = 0
    let posicion = -1

    do{
        //condicion
        if (dni == clientes[i].dni){
            posicion = i
        }
        i++
    }while (i < clientes.length && posicion == -1)

    //array - delete (borrar el elemento del array)
    if ( posicion != -1){
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

    //Buscar el cliente a partir del dni

    let i = 0
    let posicion = -1

    do{
        //condicion
        if (dni == clientes[i].dni){
            posicion = i
        }
        i++
    }while (i < clientes.length && posicion == -1)

    if (posicion != -1){
        //instancia

        const vuelo = new Vol (numVol, companyia, distancia, motores, numPasajeros)

        vuelo.compensaCO2()

        clientes[posicion].afegirVuelos(vuelo)
        result.innerHTML = 'Su vuelo ha sido creado'
    } else {
        result.innerHTML = 'El cliente NO ha sido encontrado'
    }
}

function calcularMitjana() {
    // bucle - for
    let sumaEdad = 0 
    let count = 0

    for (let i = 0; i < clientes.length; i++) { // Recorre todos los clientes en el array
        if (clientes[i].edad >= 18) { // Verifica si la edad del cliente es mayor o igual a 18
            sumaEdad += clientes[i].edad // Suma la edad del cliente actual a la suma total de edades
            count++ // Incrementa el contador de clientes que cumplen con la condición
        }
    }

    result.innerHTML = `La media de edad és: ${(sumaEdad / count).toFixed(2)}`
}



function petjadaCliente(){
    let dni = document.getElementById('dniPetjada').value

    let i = 0
    let posicion = -1

    do{
        //condicion
        if (dni == clientes[i].dni){
            posicion = i
        }
        i++
    }while (i < clientes.length && posicion == -1)

    if (posicion == -1){
        
        result.innerHTML = 'El cliente NO ha sido encontrado'
        return
    }   

    //Bucle for
    let clienteActual = clientes[posicion]
    let sumaCO2 = 0

    for (let i = 0; i < clienteActual.vol.length; i++){
        sumaCO2 += clienteActual.vol[i].co2emes //aqui estoy dentro del array de vuelos del cliente i estoy viendo el co2emes de cada vuelo del cliente
    }

    result.innerHTML = `La petjada de carboni és: ${sumaCO2}`

}

function mitjanaPetjada(){
// 1. array clientes
//     2. clientes array afegirVuelos

// 2. bucles anidados - for
let sumaCO2 = 0

    for(let i = 0; i < clientes.length; i++){
        let clienteActual = clientes[i] //este cliente actual puede tener muchos vuelos, se hace la variable de abajo para acceder a estos vuelos
    
        let vuelosClienteActual = clienteActual.vol //array

        for(let j= 0; j < vuelosClienteActual.length; j++){
            let vueloActual = vuelosClienteActual[j] //ira a los vuelos uno o a uno
            sumaCO2 += vueloActual.co2emes
        }
    }

    result.innerHTML = sumaCO2 / count
    // let mediaxCliente = sumaCO2 / clientes.length
}