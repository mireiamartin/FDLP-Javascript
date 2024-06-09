const myArr = [1, 2, 3, 'hola', [5,66,7]]
console.log(myArr[3])
console.log(myArr[myArr.length-1])


//Object : conexion de datos, pero tienen una relacion de clave-valor
    //Propiedades (caracteristicas) - tienen comportamiento de variable
        //Métodos (acciones) - tiene comportamiento de funcion

//puede almacenar datos primitivos o compuestos

//objeto literal
//ejemplo

const persona = {
    nombre : 'juanca', 
    apellido : 'castillo',
    edad : 45,
    civil : true,
    hobbies : ['leer', 'nadar' , 'fotografia'],
    direccion : { //poner otro objeto dentro
        calle : 'Gran via' ,
        numero : 31,
        puerta : 4,
        code : '08001',
        esc: 'B'
    }
}

//como acceder a uno de los elementos

console.log(persona['nombre']) //si quiero acceder a juanca
console.log(persona.nombre)//otra manera de acceder al nombre, la que utilitzaremos

console.log(persona['civil']) //si quiero acceder a estado civil
console.log(persona.civil)

// si quiero acceder al array dentro del object
console.log(persona.hobbies)
console.log(persona.hobbies[1])

//si quiero haceder al objeto dentro del objeto
console.log(persona.direccion['calle'])
console.log(persona.direccion.calle)

//como saber todos los valores del objeto
//Object.keys();

let keys = Object.keys(persona)
console.log(keys)

let valor = Object.values(persona)
console.log(valor)

//tengo que imprimir todo el rato todas las llaves para saber si tengo un elemento dentro del objeto? NO
//esto se utiliza para saber si el objeto tiene esta propiedad dentro

let contiene = persona.hasOwnProperty('nacionalitat')
let contiene2 = persona.hasOwnProperty('edad')
console.log(contiene)
console.log(contiene2)

let firstName = 'nombre'
const personas = {
nombre: 'Pedro',
apellido: 'Fujimori'
}
//Dinamico
personas[firstName] // output: Pedro

firstName = 'apellido'
personas[firstName] // output: Fujimori

//Estatico
personas.nombre
personas.apellido

//--------------------//

const pedro = {
nombre: 'Pedro',
apellido: 'Cruz'
}
const maria = {
nombre: 'Maria',
apellido: 'Lecina'
}

const arrPersonas = [pedro, maria]

//como acceder a cada elemento del arrPersonas

for(let i = 0; i <arrPersonas.length; i++){
    console.log(arrPersonas [i]) //aqui nos ensenya toda la informacion del objeto
    let personaActual = arrPersonas[i] 
    console.log(personaActual.nombre) //aqui nos muestra una parte en concreto
}