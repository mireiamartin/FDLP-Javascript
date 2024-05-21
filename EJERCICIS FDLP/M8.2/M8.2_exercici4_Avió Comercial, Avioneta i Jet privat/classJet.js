class JetPrivat extends Avio {

    constructor (tipus, numAvio, marca, model, carrega, llargaria, numPassatgers) {
        super(tipus,numAvio, marca, model, carrega, llargaria)
        this._numPassatgers = numPassatgers
        this._costPerPersona = 1000
        
    }

    get numPassatgers(){
        return this._numPassatgers
    }


    netejarJet (){
        return parseFloat((this._llargaria * 10)/2) + 15
    }

    calcularCostReserva(){
        return parseInt(this._numPassatgers * this._costPerPersona)
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
            Temps en netejar: ${this.netejarJet()}
            Cost de la reserva: ${this.calcularCostReserva()}
            Combustible necessari: ${this.combustibleNecessari()}
        `
    }  
}