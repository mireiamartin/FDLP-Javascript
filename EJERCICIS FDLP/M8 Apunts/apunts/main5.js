class Instrumento {
    constructor (tipo, marca, acustico, nombre){

        //dadas publicas
        this.tipo = tipo
        this.marca = marca
        this.acustico = acustico //boolean
        this.nombre = nombre
    }

    //getters & setters

    //para obtener la informacion
    get nombre (){
        return this._nombre
    }
    //hay otra manera de hacerlo - pero lo vamos a hacer como arriba
    //este es mas como un metodo, el otro como si fuera una propiedad
    // getTipo(){
    //     return this.tipo
    // }

    set nombre (param){
        this._nombre = param
    }

    get acustico (){
        return this._acustico
    }

    set acustico (param){
        if (typeof param == 'boolean'){
            this._acustico = param
        }
    }

    description() {
        return `
        nombre: ${this.nombre}
        marca: ${this.marca}
        acustico: ${this.acustico}
        tipo: ${this.tipo}
        `
    }

    precio(param){
        console.log('El precio de esta guitarra es de: param')
    }
}




const guitarra = new Instrumento('cuerda', 'ibanez', true , 'Guitarra')
console.log(guitarra.nombre)

//para modificar un parametro
guitarra.nombre = 'Guitarra 12 cuerdas'
console.log(guitarra.nombre)

guitarra.acustico = false
console.log(guitarra.acustico)

guitarra.acustico = 1234
console.log(guitarra.acustico)

console.log(guitarra)
console.log(guitarra.description())

guitarra.precio(1200)
console.log(guitarra.precio())




