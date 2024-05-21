class Comercial extends Avio {

    constructor (tipus, numAvio, marca, model, carrega, llargaria, numPassatgers) {
        super(tipus, numAvio, marca, model, carrega, llargaria)
        this._numPassatgers = numPassatgers
    }

    get numPassatgers(){
        return this._numPassatgers
    }

    netejarComercial (){
        return parseFloat(this._llargaria * 10) + 240
    }

    calcularCostMenjar(){
        return parseInt(this._numPassatgers * 10)
    }

    toString(){
        return `
            Tipus d'avió: ${this._tipus}
            Número d'avió: ${this._numAvio}
            Marca: ${this._marca}
            Model: ${this._model}
            Carrega: ${this._carrega}
            Llargaria: ${this._llargaria}
            Número de passatgers: ${this._numPassatgers}
            Temps en netejar: ${this.netejarComercial()}
            Cost total del menjar: ${this.calcularCostMenjar()}
            Combustible necessari: ${this.combustibleNecessari()}
        `
    }
}