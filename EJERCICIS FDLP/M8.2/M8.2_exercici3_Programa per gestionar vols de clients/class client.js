class Client {

    #dni

    constructor (dni, nacionalitat, edad){

        this.#dni = dni
        this._nacionalitat = nacionalitat
        this._edad = edad
        this._vol = []
    }

    get dni(){
        return this.#dni
    }
    
    get nacionalitat(){
        return this._nacionalitat
    }

    get edad(){
        return this._edad
    }

    get vol(){
        return this._vol
    }

    
    set nacionalitat (param){
        return this._nacionalitat = param
    }

    set edad (param){
        return this._edad = param
    }

    set vol (param){
        return this._vol = param
    }

    afegirVuelos(vuelo){
        this._vol.push(vuelo)
    }

}