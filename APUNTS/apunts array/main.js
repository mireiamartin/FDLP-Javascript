//ARRAY

//es un conjunto de datos compuestos, para guardar más de un valor del mismo tipo

let saludo = 'Hola' // variable
const persona = {name : 'mireia'} //objeto
const arr = [] // referencia en memoria
const arr2 = [1,2,3, 'a', 'b', 'c', saludo, [9,8,7], persona ] // que puede ir dentro?: numeros, strings, variables, objetos

console.log(arr)
console.log(arr2)

console.log(arr2[0]) //para pedir una posicion en concreto del array
console.log(arr2[7]) //para pedir una posicion en concreto del array

console.log(arr2[7][0]) //para acceder dentro del array que hay dentro del array principal en este caso el segundo array es [9,8,7]

console.log(arr2.length) //saber la longitud del arreglo // será un number

console.log(arr2[arr2.length]) //undefined perque mostra la posició 9 pero no existeix perque com va del 0-8 el 9 no hi ha res
console.log(arr2[arr2.length -1]) // aquesta és la manera correcta per saber el ultimo valor ya que en este caso si buscaria la posicion 8

//push - añado elemento al ultimo del array

arr2.push ('soy el último') // con parametros
console.log(arr2)

//pop - 
arr2.pop () //sin parametros //borra el ultimo elemento del array
console.log(arr2)
// //tambien sirve para mostrar lo que ha cortado // ya que a lo mejor en un futuro nos sirve para saber lo que hemos borrado
console.log(arr2.pop())


//shift

arr2.unshift('soy el primero') //incluye un elemento del array al principio (posicion 0)
console.log(arr2)
// arr2.shift() //borro el primer elemento del array
// console.log(arr2)

//console.log(arr2.reverse()) // para que lo ordene al reves

const alumnes = ['Alba', 'Yana', 'Josep','Miquel' ]
console.log(alumnes.sort()) //ordena alfabeticament

const numero = [1, 9, 4, 100, 2, 3, 5, 50, 8]
console.log(numero.sort()) //los ordena a partir del primer caracter

//para cortar elementos dentro del array
arr2.splice(8,-1) //primer parametro, qual quiero eliminar, segundo parametro cuantos quiero eliminar des de la posicion que le doy
console.log(arr2)


//imprimir por pantalla cada uno de los elementos del array

//es fa servir el bucles/loop/repeticion FOR
//for // inicio ; condicion ; elemento de cambio
const result = document.getElementById('result')
for(let i = 0; i < arr2.length; i++) { //el 0 en este caso es porque los arrays empiezan por 0
    result.innerHTML += `${arr2[i]} <br>` //como no quiero que se reescriba sino que la escriba cada vez utilizo el += en vez del =
}

// while & do - while //entenderlo bien porque entra al examen

// let j = 0
// while(j < arr2.length){
//     result.innerHTML += `${arr2[j]} <br>` //como no quiero que se reescriba sino que la escriba cada vez utilizo el += en vez del =
//     j++
// }

// let j = 0
// let validate = false
// while(j < arr2.length){
//     result.innerHTML += `${arr2[j]} <br>` //como no quiero que se reescriba sino que la escriba cada vez utilizo el += en vez del =
//     //passar de false a true
//     if (arr2 [j] == 'Hola'){
//         validate = true
//         console.log(validate)
//     }
//     j++
// }

let j = 0
let encontrado = false
let objetoEncontrado = null

while(j < arr2.length && encontrado == false){ //&& es para que no recorra todo el array (en el caso de querer encontrar todos los 'hola' del array se quita el &&)
    //result.innerHTML += `${arr2[j]} <br>` //como no quiero que se reescriba sino que la escriba cada vez utilizo el += en vez del =
    //passar de false a true
    if (arr2 [j] == 'Hola'){
        encontrado = true
        console.log(encontrado)

        objetoEncontrado = arr2[j] //aqui esta guardando 'Hola'
    }

    console.log(j)
    j++
}

console.log(objetoEncontrado)


//do while : 

let numero1 = 0


do{
    numero1 ++
    console.log(numero1)

}while(numero1 <= 3)

let numero2 = 0
do{
    numero2 ++
    console.log(numero2)

}while(numero2 <= 3)


//math.random 

console.log(Math.round(3.14))// 3
console.log(Math.round(3.654))// 4

console.log(Math.floor(3.14))// 3
console.log(Math.floor(3.654))// 3

console.log(Math.ceil(3.14))// 4
console.log(Math.ceil(3.654))// 4

console.log (Math.ceil(Math.random() * 10)) // 0-1





