class Client {

    #dni

    constructor (dni, nombre, apellido){
        this.#dni = dni
        this._nombre = nombre
        this._apellido = apellido
        this._cuentas = []
    }

    get dni() {
        return this.#dni
    }

    get nombre() {
        return this._nombre
    }

    get apellido() {
        return this._apellido
    }

    get cuentas(){
        return this._cuentas
    }

    set nombre(param){
        return this._nombre = param
    }

    set apellido(param){
        return this._apellido = param
    }

}