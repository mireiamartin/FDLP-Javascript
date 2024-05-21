class Avioneta extends Avio {

    constructor (tipus, numAvio, marca, model, carrega, llargaria, numHelix) {
        super(tipus, numAvio, marca, model, carrega, llargaria)
        this._numHelix = numHelix
        this._km = 1000
    }

    get numHelix(){
        return this._numHelix
    }

    netejarAvioneta (){
        return parseFloat(this._llargaria * 10)/2
    }

    calcularDistancia(){
        return parseFloat(this._numHelix * this._km)
    }

    toString(){
        return `
            Tipus d'avió: ${this._tipus}
            Número d'avió: ${this._numAvio}
            Marca: ${this._marca}
            Model: ${this._model}
            Carrega: ${this._carrega}
            Llargaria: ${this._llargaria}
            Número d'hèlix:${this._numHelix}
            Temps en netejar: ${this.netejarAvioneta()}
            Distància que pot recórrer: ${this.calcularDistancia()}
            Combustible necessari: ${this.combustibleNecessari()}
        `
    }
}
