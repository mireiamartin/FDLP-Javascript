class Hospital extends Edifici {
    constructor (tipus, nom, numPlantes, superficie, numMalalts){
        super (tipus, nom, numPlantes, superficie)
        this._numMalalts = numMalalts
    }

    get numMalalts() {
        return this._numMalalts
    }

    set numMalalts(param) {
        return this._numMalalts = param
    }

    costVigilants(){
        let numVigilants = (this.superficie * 1)/1000
        return numVigilants * 1300
    }

    repartirDinar(){
        return `S'estan repartint ${this._numMalalts * 3} racions`
    }

    toString(){
        return `
            Tipus d'edifici: ${this._tipus}
            Nom: ${this._nom}
            Número de plantes: ${this._numPlantes}
            Superfície en m2: ${this._superficie}
            Número de malalts: ${this._numMalalts}
            Cost dels vigilants: ${this.costVigilants()}
            Número de racions: ${this.repartirDinar()}
            Temps de neteja:${this.netejar()}
            Cost mensual de la neteja: ${this.costMensualNeteja()}
        `
    }
}