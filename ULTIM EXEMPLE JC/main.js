const clientes = [
    {
        dni : 1,
        cuentas : [
            {
                nCuenta : 11,
                monto : 0,
            },
            {
                nCuenta : 22,
                monto : 0,
            },
            {
                nCuenta : 33,
                monto : 0,
            }
        ],
        //a quien?
        // los números de cuenta (destino e inicio)
        // monto

        transfer : function(miCount, dni, yourCount, money){ //metodo de clase
            //antes se tienen que hacer las busquedas
            buscarDni(dni) //si se encuentra, buscar yourCount
            buscarCount(yourCount)
            transferMoney = miCount.monto - money
            dni.yourCount.monto += transferMoney
        }
    },
    {
        dni : 2,
        cuentas : [
            {
                nCuenta : 11,
                monto : 0,
            },
            {
                nCuenta : 22,
                monto : 0,
            },
            {
                nCuenta : 33,
                monto : 0,
            }
        ]
    }
]

    let dniUser = 2 //QUIERO ENCONTRAR ESTE OBJETO
    let posicioClient = -1
    let i = 0

    do {
        if(clientes[i].dni == dniUser)
            posicioClient = i
        i++
    }while(i < clientes.length && posicioClient == -1)

    let clientActual = clientes[posicioClient]
    let cuentasClienteActual = clientActual.cuentas //array

    let j = 0
    let posicioCuenta = -1

    do {
        if(cuentasClienteActual[j].nCuenta == countUser)
            posicioClient = i
        i++
    }while(j < cuentasClienteActual.length && posicioCuenta == -1)

    if (posicioCuenta == -1){
        return console.error('Count not found') //error
    }

    let actualCount = cuentasClienteActual[posicioCuenta]
