//FUNCIONES
//ES UN espai on guardo un codi, per poder ser reutilitzat o utilitzat en el moment en el que jo decideixi
//tienen un recojedor de datos personal


//funciones sin parametros sin return
function myfuntion() {
    let num1 = 8 //las variables que esten dentro solo seran para la funcion
    let num2 = 6

    console.log(num1, num2)
}
myfuntion() // esto es una invocacion, una llamada de la funcion creada en la linia 7

//funciones con parametros
//parametros: informacion que le voy a dar la funcion perque els fagi servir dins de l'espai de la funció

const arr = ['hello', 'world']
function myfuncionConParametros(num, segundoValue, x, nombre = 'anonymous'){ //en este caso la x coje la info del const arr = ['hello', 'world'], por la posicion dentro de la function: myfuncionConParametros, y el anonymous, agafara el valor 'mireia' del: myfuncionConParametros(78, '34', arr, 'mireia')
    num++
    console.log(num, segundoValue, num + segundoValue, x, nombre)
}
myfuncionConParametros(78, '34', arr, 'mireia')

// como hacer una funcion con un error dentro más senzilla:
// function error larga
function operar(){

    let num = 89
    if (num > 80){
    console.error('Número no válido')
    return
    }  

    num ++

    console.log(num)
}
operar()

//funcion error corta

function validar(num){
    let message = ''
    if (num > 80){
        message = 'numero incorrecto'
    }
    return message
}

//otra manera de hacerlo para que esta funcion valide algo

//ejemplo 1
function validar(num){ //da un resultado boolean (true o false)
    return num >80
}
operar()

//ejemplo 2
function validar2(num){
    return isNaN(num)
}
//aqui es donde se retorna las function ejemplo1 i ejemplo2
function operar(){

    let num = 89
    num++

    console.log(num)

    let validation = validar(num)
    console.log(validation)

    let validation2 = validar2('Soy un string')
    console.log(validation2)
}  
    

operar()
console.log(validar(78)) //esto ara que validar tenga el valor 78.

//function corta (se hace con diferents funciones i se aplica el resultado en otra funcion)

function sumar (){
    let suma= 45 + 57
    return suma //el return sirve para devolver la informacion a otra function
}

function nombres(){
    return 'juanca'
}

function restar(){
    let resta = 3654 - 24
    return resta
}

function multiplicar(){
    let multi = 12*5
    return multi
}

//otra manera de hacer la anterior (más optimizado)
function multiplicar(){
    return 12 * 5
}

function imprimir (){
    console.log('hola')

    let resuladoDeLaSuma = sumar()
    console.log(resuladoDeLaSuma)

    let nombre = nombres()
    console.log(nombre)
    
    let resta = restar()
    console.log(resta)
    //otra manera de hacerlo // no haria falta crear la variable let resta
    console.log(restar())
    console.log(restar() + sumar() - multiplicar())

    let multi = multiplicar()
    console.log(multi)
    
}
myfuncionConParametros(78, '34', arr, 'mireia')
myfuntion()
imprimir()


/*SINTESIS DE LO QUE HEMOS VISTO HOY

Orden
 1. Importar
 2. Declarar Variables
 3. Functions
 4. Invocaciones de la funciones

Funciones declaradas:
- Con parametros sin return
- Sin parametros sin return
- Con parametros con return
- Sin parametros con return

Las funciones se pueden:
- Reutilizar
- Invocar: desde cualquier parte del código || desde otras functions
- El return puede operar por si mismo ejemplo:
    function multiplicar(){
    return 12 * 5
- return devolver condiciones
- return devolver functions
- Return: si me encuentro un return el codigo no sigue leyendo el codigo 'se ejuctara hasta el return'

Con parametros:
- parametros default, ejemplo: function myfuncionConParametros(num, segundoValue, x, nombre = 'anonymous')
- numero de parametros
*/

//18/03/2024

// while
// do while