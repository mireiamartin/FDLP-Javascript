class Persona{

    //propiedades privadas (funcionan como variables)
    #nombre
    #edad
    #apellido

    constructor (nombre, edad, apellido){ //Cliente: usuario
        this.#nombre = nombre
        this.#edad = edad
        this.#apellido = apellido
        // el _ se utiliza para poder distinguir la propiedad del metodo
        this._hobbies = "cocinar"
        this._duermoTemprano = true
    }

    //cuando utilizo el getter i el setter, es mejor utilizar el mismo nombre

    get nombre(){
        return this.#nombre
    }

    set nombre(param){
        this.#nombre = param
    }

    get hobbies (){
        return this._hobbies
    }

    toString(){
        console.log('Yo duermo temprano = ' + this._duermoTemprano)
    }
}