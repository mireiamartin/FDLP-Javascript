///////      HERENCIA DE CLASSE & POLIMORFISMO (polimorfismo = en el caso de metodos que en las classes cambian, ejemplo defender)    ////////

let resultat = document.getElementById('result')

class Animal {
    constructor (nombre, sonar){
        this._nombre = nombre
        this._sonar = sonar
    }

    get nombre () {
        return this._nombre
    }

    //metodo propio
    sonido(){
        console.log(`Este animal ${this._sonar}`)
    }

    defender(){  //este metodo = su valor, en cada sub classe sera diferente, ya que el perro muerde, el gato araña
        console.log(`Este animal ataca`)
    }
}

// si quiero construir un canario que es lo que tendria que hacer?
    //crear una instancia

const canario = new Animal ('canario', 'canta')
console.log(canario)
canario.sonido()

// VAMOS A CREAR UNA SUBCLASSE I VA A HEREDAR LAS PROPIEDADES DE LA CLASSE PADRE

//esto tiene que ir en otro archivo separado (cada classe en un archivo)

class Perro extends Animal {

    constructor (nombre, sonar, raza){
        super(nombre, sonar)  //genera la relacion con el construtor con la classe super (padre)
        this._raza = raza
    }

    get raza(){
        return this._raza
    }

    sonido(){
        console.log(`Este animal ${this._sonar}`)
    }

    defender(){
        console.log('Este animal muerde')
    }
}

const scobby = new Perro ('perro', 'ladrar', 'cooker')
console.log(scobby)
console.log(scobby.raza) //este getter es de la classe heredada
console.log(scobby.nombre) //este getter es de la classe super
scobby.sonido()


class Gato extends Animal {

    constructor (nombre, sonar, color){
        super(nombre, sonar)  //genera la relacion con el construtor con la classe super (padre)
        this._color = color
    }

    get color (){
        return this._color
    }

    sonido(){
        console.log(`Este animal ${this._sonar}`)
    }

    defender(){
        console.log('Este animal araña')
    }
}

const garfield = new Gato ('gato', 'maulla', 'naranja')
console.log(garfield)
console.log(garfield.color) //este getter es de la classe heredada
console.log(garfield.nombre) //este getter es de la classe super
garfield.sonido()
garfield.defender()

class PerroGrande extends Perro {
    constructor (nombre, sonar, raza, tamany){
        super (nombre, sonar, raza)
        this._tamany = tamany
    }

    get tamany(){
        return this._tamany
    }
}

const lazy = new PerroGrande ('perro', 'ladra', 'cool', 'mediano')
console.log(lazy)
console.log(lazy.tamany)
console.log(lazy.raza)
lazy.sonido()
lazy.defender()


class PerroMeme extends Perro {
    constructor(nombre, sonar, raza, moneda, precio){
        super(nombre, sonar, raza)
        this._moneda = moneda
        this._precio = precio
    }
}

const dogeCoin = new PerroMeme('dogeCoin', 'ladrar', 'shibainu', 'dogeCoin', 0.20)
console.log(dogeCoin)
dogeCoin.defender()