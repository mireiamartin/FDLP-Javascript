'use strict'
//funciones

//funcion declarada
function ferAnys(fecha){
    console.log(`Felicitats pel teu aniversari a la data ${fecha}`)
}

ferAnys(23)

//funcion expresadas
let miAniversario = function(){
    console.log('Felicitats')
}

miAniversario

//funciones flecha ---> arrow function: //la flecha sirve para hacer una relacion entre el contenido de los parentesis i el contenido de las llaves
// () => {} 

//con llaves: esta funcion és sin parametros i sin return
let myArrow = () => {console.log('Soy una function flecha')}  // esta funcion és sin parametros i sin return
myArrow()

//sin llaves: tienen el mismo funcionamiento con llaves o sin llaves
let myArrow2 = () => console.log('Soy una function flecha sin llaves')
myArrow2()

let myArrow3 = (a,b) => console.log(a + b) //funcion con parametros y sin return
myArrow3(4,6)

let myArrow4 = (a,b) => a + b //funcion con parametros y con return (no hace falta poner return, el return es implicito)
console.log (myArrow4(9,6))

//si tengo un unico parametro no hace falta poner parentesis
let myArrow5 = x => x + 100
console.log(myArrow5(300))

//function con mas de una linea de ejecucion, en este caso si se ponen las llaves
let myArrow6 = () => {
    console.log('Hola')
    console.log('Adeu')
    return 42
}
myArrow6()

console.log(myArrow6()) //este console.log es para mostrar el return