class Cinema extends Edifici {
    
    constructor(tipus, nom, numPlantes, superficie, assistents) {
        super(tipus, nom, numPlantes, superficie)
        this._assistents = assistents
        this._preuEntrada = 4
        this._aforamentMax = 340
    }

    costVigilants(){
        let numVigilants = (this.superficie * 1)/3000
        return `${(numVigilants * 1300).toFixed(2)} euros`
    }

    projectarSessio(){
        if (this._assistents <= this._aforamentMax){
            return `S'han recaptat ${this._assistents * this._preuEntrada} euros`
        }
    }

    toString(){
        return `
            Tipus d'edifici: ${this._tipus}
            Nom: ${this._nom}
            Número de plantes: ${this._numPlantes}
            Superfície en m2: ${this._superficie}
            Número d'assistents: ${this._assistents}
            Cost dels vigilants: ${this.costVigilants()}
            Diners recaptats: ${this.projectarSessio()}
            Temps de neteja:${this.netejar()}
            Cost mensual de la neteja: ${this.costMensualNeteja()}
        `
    }
}