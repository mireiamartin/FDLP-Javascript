const clientes = []
const cuentas = []

let result = document.getElementById('result')

function crearCliente(){
    
    let dni = document.getElementById('dni').value
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    
    const cliente = new Client (dni, nombre, apellido)
    clientes.push(cliente)
    result.innerHTML = '<br>' + "El cliente se ha creado correctamente"

    console.log(clientes)

}

function findClient(dniClientBuscar){

    let dniClientTrobat = dniClientBuscar
    let posicioClient = -1
    let i = 0

    do{
        if(clientes[i].dni == dniClientTrobat)
        posicioClient = i
        i++
    }while(i > clientes.length && posicioClient == -1)

    return posicioClient   
}

function eliminarCliente(){

    let dniClientEliminar = document.getElementById('dniEliminar').value

    let posicioClientEliminar = findClient(dniClientEliminar)

    if(posicioClientEliminar !== -1){
        clientes.splice(posicioClientEliminar,1)
        result.innerHTML = "El client s'ha eliminat correctament" 
    }else{
        result.innerHTML = "El cliente no se ha encontrado"
    }
    console.log(clientes)
}

function crearCuenta(){

    let dni = document.getElementById('dniAfegirCuenta').value
    let posicioClient = findClient(dni)

    if (posicioClient !== -1){
        let numeroCuenta = Math.floor(Math.random() * 100000)
        const cuenta = new Cuenta(numeroCuenta, dni)
        console.log(cuenta)
        clientes[posicioClient].cuentas.push(cuenta)
        result.innerHTML = "Se ha añadido una nueva cuenta al cliente con el número " + numeroCuenta
    }else{
        result.innerHTML = "El cliente no se ha encontrado"
    }
    console.log(cuentas)
    console.log(clientes)
}

function findCuenta(dniClientBuscar, cuentaClientBuscar){

    let dniClientTrobat = dniClientBuscar
    let posicioClient = -1
    let i = 0

    do{
        if(clientes[i].dni == dniClientTrobat)
        posicioClient = i
        i++
    }while(i < clientes.length && posicioClient == -1)

    if (posicioClient == -1) {
        result.innerHTML = "Cliente no encontrado"
    }

    let cuentaClientTrobada = cuentaClientBuscar
    let posicioCuenta = -1
    let j = 0
    let clientActual = clientes[posicioClient]
    let cuentasClienteActual = clientActual.cuentas

    do{
        if(cuentasClienteActual[j].numeroCuenta == cuentaClientTrobada)
        posicioCuenta = j
        j++
    }while(j < cuentasClienteActual.length && posicioCuenta == -1)

    return posicioCuenta  
}

function ingresarDinero(){

    let dniClienteIngreso = document.getElementById('dniClienteIngresar').value
    let numCuentaIngreso = document.getElementById('numCuentaIngresar').value
    let quantitat = parseFloat(document.getElementById('dineroIngreso').value)

    let posicioClient = findClient(dniClienteIngreso)
    let posicioCuenta = findCuenta(dniClienteIngreso, numCuentaIngreso)

    if (posicioClient !== -1){
        if(posicioCuenta !== -1){
            let saldoAnterior = clientes[posicioClient].cuentas[posicioCuenta].saldo
            clientes[posicioClient].cuentas[posicioCuenta].ingresar(quantitat)
            let saldoNuevo = saldoAnterior + quantitat
            result.innerHTML = `Se ha añadido ${quantitat}€. Saldo anterior: ${saldoAnterior}€. Saldo actual: ${saldoNuevo}€`
        } else {
            result.innerHTML = "La cuenta no se ha encontrado"
        }
    } else {
        result.innerHTML = "El cliente no se ha encontrado"
    }
}

function retirarDinero(){
    let dniClienteRetirar = document.getElementById('dniClienteRetirar').value
    let numCuentaRetirar = document.getElementById('numCuenta').value
    let quantitat = parseFloat(document.getElementById('dineroRetirado').value)

    let posicioClient = findClient(dniClienteRetirar)
    let posicioCuenta = findCuenta(dniClienteRetirar, numCuentaRetirar)

    if (posicioClient !== -1){
        if (posicioCuenta !== -1){
            let saldoActual = clientes[posicioClient].cuentas[posicioCuenta].saldo
            if (quantitat <= saldoActual) {
                clientes[posicioClient].cuentas[posicioCuenta].retirar(quantitat)
                let saldoNuevo = saldoActual - quantitat
                result.innerHTML = `Se ha retirado ${quantitat}€. Saldo anterior: ${saldoActual}€. Saldo actual: ${saldoNuevo}€`
            } else {
                result.innerHTML = "Saldo insuficiente para realizar el retiro"
            }
        }else {
            result.innerHTML = "La cuenta no se ha encontrado"
        }
    } else {
        result.innerHTML = "El cliente no se ha encontrado"
    }
}
