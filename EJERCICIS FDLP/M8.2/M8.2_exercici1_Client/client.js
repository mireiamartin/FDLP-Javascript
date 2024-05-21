class Client {
 
    #dni

    constructor(dni, edat, nacionalitat, vols) {
        this.#dni = dni
        this._edat = edat
        this._nacionalitat = nacionalitat
        this._vols = vols
        
    }

    get dni() {
        return this.#dni
    }

    get edat() {
        return this._edat
    }

    get nacionalitat() {
        return this._nacionalitat
    }

    get vols() {
        return this._vols
    }

    set edat(param) {
        return this._edat = param
    }

    set nacionalitat(param) {
        return this._nacionalitat = param
    }

    set vols(param) {
        return this._vols = param
    }

    petjadaCarboni() {
        return parseFloat(this._vols * Client.toneladas())
    }


    static toneladas() {
        return 0.5
    }


    toString() {
        return `
        dni: ${this.#dni}
        edat: ${this._edat}
        nacionalitat: ${this._nacionalitat}
        vols: ${this._vols}
        petjada de Carboni : ${this.petjadaCarboni()}
    `
    }

}