class Cuenta {

    #numeroCuenta
    #dni

    constructor (numeroCuenta, dni){
        this.#numeroCuenta = numeroCuenta
        this.#dni = dni
        this._saldo = 0
        
    }

    get numeroCuenta(){
        return this.#numeroCuenta
    }

    get dni(){
        return this.#dni
    }

    get saldo(){
        return this._saldo
    }

    set saldo (param){
        return this._saldo = param
    }

    ingresar(quantitat) {
        this._saldo += quantitat
        return this._saldo
    }

    retirar(quantitat) {
        this.saldo -= quantitat
        return this._saldo
    }
}