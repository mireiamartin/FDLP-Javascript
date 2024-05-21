'use strict'

//funcion declarada: aquella funcion que empieza con la palabra reservada function

//funcion sin parametros i sin return = funcion vacia ':void'
function sacarPorConsola(){ 

    let message = 'Esto es una función declarada'
    console.log (message)
}


// con parametros y sin return
                            // tambien le podemos poner valores aquí con el = (pero si en la invocación le ponemos otro valor se imprimira el valor de la invocacion)
function imprimirPerConsola (num = 0, string = 'anonymous', boolean = false){ 
    console.log (num)                                       // cuando se invoque la funcion se tienen que poner los valores que queremos.  
    console.log (string)
    console.log (boolean)
    console.log (34, 'hola', false) 
} 

// sin parametros y con return
function sinParamsConReturn(){ //number
    return 4*6 // esta funcion nos va a regresar algo i esta operando
}

//con parametros y con return
function conParamsConReturn (str1, str2, str3){
    let nombre = 'Mireia'
    let edat = '18'
    return str1 + str2 + str3 + ' Mi nombre és ' + nombre + ' y tengo ' + edat + ' años '
}


// section 4 (invocar funciones)
sacarPorConsola()
imprimirPerConsola(5, undefined, true)

//manera larga de imprimir la funcion sinParamsConReturn()
let newVar =sinParamsConReturn()
console.log(newVar)

//manera corta de imprimir la funcion sinParamsConReturn()
console.log(sinParamsConReturn) // si no ponemos los parentesis () de la funcion nos imprime todo lo que tenemos escrito dentro de la funcion
console.log(sinParamsConReturn()) // manera correcta

//manera larga de imprimir la funcion conParamsConReturn()
let message = conParamsConReturn('hola ', 'buenos ', 'dias')
console.log(message)

//manera corta de imprimir la funcion conParamsConReturn()
console.log(conParamsConReturn('hola ', 'buenos ', 'tardes'))

