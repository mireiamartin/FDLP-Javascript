//Function Declaradas
//podemos llamarla en cualquier parte del codigo

function myFunc(){
    console.log('Bon dia')
}
myFunc()

//Function expresadas
//funcion anonima

let myFunc2 = function(){
    console.log('Adeu clase')
}
myFunc2()

//arrow function
//cuando solo hay una linea se pueden quitar las llaves {}
//tiene un return automatico (implicito) = solo cuando tienen una linea de codigo
// se pueden quedar los paréntesis = cuando tienen un solo parametro
//let myFunc3 = () => {} //ESTRUCTURA FUNCION FLECHA

let myFunc3 = () => {console.log('Soy una arrow function')}
myFunc3()
//tambien se puede poner con const

const myFunc4 = () => {console.log('Soy un arrow funtion con const')}
myFunc4()

//objeto - tienen una relacion de clave -  (key => value)
//objecto con métodos (funciones)
const fiat = {
    modelo : 'panda',
    color : 'blanco',
    cilindrada : 1100,
    ruedas4 : true,
    //métodos
    acelerar : function(){
        console.log('De 0 a 100 en 10 segundos')
    },
    frenar : function(){
        console.log('Frenar en 50m')
    },
    description : function(){
        return "Soy el mejor coche del mercado" + this.color
    },
    dondeEstoy : function(){
        console.log(this)
    },
    dondeEstoy2 : () => { //en este caso no tiene el mismo comportamiento, porque con arrow + this, se escapan del ambito fiat, por eso da window
        console.log(this) //no lo veremos pero es para saber que existe
    }
}

//como acceder a las propiedades de este objecto
console.log(fiat)
console.log(fiat.color)

//como acceder a los metodos
fiat.acelerar()

console.log(fiat.description()) //si dentro del metodo no hay un console.log se hace asi

fiat.dondeEstoy()

fiat.dondeEstoy2()

//FUNCIONES CONSTRUCTORAS//

// COMO AUTOMATIZAR ESTO // con //Constructor function //

const ford = {
    modelo: '',
    color : ''
} 

const seat = {
    modelo: '',
    color : ''
} 
        //con mayuscula la primera letra
function Coche ()  {
    this.color = 'blanco',
    this.cilindrada = 1100
}

const fiat2 = new Coche()
const mercedes = new Coche()

console.log(fiat2)
console.log(mercedes)

//ASI SE HACE//

function Coche2(color, cilindrada, caballos, marca) {
    this.color = color;
    this.cilindrada = cilindrada;
    this.caballos = caballos;
    this.marca = marca;
}

//las propiedades pueden ser variables

const fiat3 = new Coche2('verde', 3400, '200cc', 'fiat');
console.log(fiat3) //esto muestra toda la info

console.log(fiat3.color) //esto muestra el color

fiat3.color = 'Cian'
console.log(fiat3.color) //esto muestra el nuevo color

fiat3.color = 'Magenta'
console.log(fiat3.color)
fiat3.color = 'Yellow'
console.log(fiat3.color)



