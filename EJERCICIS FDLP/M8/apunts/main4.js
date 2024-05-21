//Funciones constructoras
//Primera letra con mayusculas
//template, sirve para reutilzar valores, para crear un nuevo objecto

function Animal(raza, color, genero, tipo){
    //propiedades
    this.genero = genero;
    this.raza = raza;
    this.color = color;
    this.tipo = tipo;

    //acciones = metodos
    // this.correr = function(){
    //     console.log('salgo corriendo muy rápido')
    // }
}
// añadir en su prototipo ciertas caracteristicas, en este caso ciertos metodos
Animal.prototype.correr = function(){
    console.log('salgo corriendo muy rápido')

}


//instancia
//crear un nuevo objeto a partir del principal
// const perro = new Animal ('pitbull', 'marron', 'macho', 'perro')
// console.log(perro)

// // console.log (perro) //output mostra todo el objeto // Animal {genero: 'macho', raza: 'pitbull', color: 'marron'}
// // console.log (perro.correr) // imprimira toda la información, pero no nos interesa
// // console.log (perro.correr()) //undefined, es decir esta mal
// perro.correr() //forma correcta

// const leon = new Animal('delZoo', 'marrón', 'hembra', 'leon')
// console.log(leon)

// const perico = new Animal('delZoo', 'marrón', 'hembra', 'perico')
// console.log(perico)


// TOT AIXO DE DALT RES
//-----------------------------------//
// HO FAREM COM LU DABAIX




//Clases = class
    //template
        //constructor
        //getters & setters
        //method

// es una manera de poder crear plantillas para poder modificar en los objetos
      //Capital letter
class Person {

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad
    }

    // las classes tienen unos metodos por defecto que permiten a acceder a cierta informacion i asi poder cambiarla

    //getters: obtiene la informacion
    get nombre(){
        return this._nombre
    }

    get apellido(){
        return this.apellido
    }

    get edad(){
        return this.edad
    }

    //setters: modifica la informacion
    set nombre (x){
        this._nombre = x
    }

    set apellido (x){
        this._apellido = x
        
    }
    
    //dentro de los setters se pueden hacer validaciones
    set edad (x){
        //validar si es un numero
        if (!isNaN(x)) //aqui estamos diciendo si nan es un numero haz el cambio, es decir entra la info que da el usuario)
            this._edad = x
    }

    //como crear los metodos
    saludar() {
        console.log(`Hola me llamo ${this._nombre} ${this._apellido} y tengo ${this._edad} años`)
    }

}

//como crear las instancias de la class

const guillem = new Person ('Guillem', 'Babot', 29) //los parentesis hacen referencia al constructor
console.log(guillem)
guillem.saludar()

console.log(guillem._edad)

const manel = new Person ('Manel', 'Cerezo', 44)
console.log(manel)
manel.saludar()

//para cambiar informacion no utilitzar este metodo
// manel.nombre ='Juanca'
// console.log(manel.nombre)