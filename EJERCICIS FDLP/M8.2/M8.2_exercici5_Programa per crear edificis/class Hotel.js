class Hotel extends Edifici{
    constructor (tipus, nom, numPlantes, superficie, numHabitacions){
        super(tipus, nom, numPlantes, superficie)

        this._numHabitacions = numHabitacions
        this._souServei = 1000
    
    }

    costVigilants(){
        let numVigilants = (this._superficie * 1)/1000
        return (numVigilants * 1300) + 500
    }

    serveiHabitacions(){
        let personesNecessaries = this._numHabitacions/20
        let costServei = personesNecessaries * this._souServei
        return `És necessiten ${personesNecessaries} persones i el total necessari per pagar el sou de totes és de ${costServei} euros`
    }

    toString(){
        return `
            Tipus d'edifici: ${this._tipus}
            Nom: ${this._nom}
            Número de plantes: ${this._numPlantes}
            Superfície en m2: ${this._superficie}
            Número d'habitacions: ${this._numHabitacions}
            Cost dels vigilants: ${this.costVigilants()}
            Servei d'habitacions: ${this.serveiHabitacions()}
            Temps de neteja:${this.netejar()}
            Cost mensual de la neteja: ${this.costMensualNeteja()}
        `
    }
}