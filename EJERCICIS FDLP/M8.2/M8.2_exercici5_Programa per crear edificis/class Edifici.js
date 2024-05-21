class Edifici {

    constructor (tipus, nom, numPlantes, superficie){
        this._tipus = tipus
        this._nom = nom
        this._numPlantes = numPlantes
        this._superficie = superficie
        this._cada5 = 5
        this._minut = 1
        this._euro = 1
     }
    
    get tipus() {
        return this._tipus
    }

    get nom() {
        return this._nom
    }

    get numPlantes() {
        return this._numPlantes
    }

    get superficie() {
        return this._superficie
    }

    set tipus(param){
        return this._tipus
    }

    netejar(){
        if (numPlantes == 0){
            return (this.superficie * this._minut)/this._cada5
        } else {
            return ((this._superficie * this._minut)/this._cada5) + (this.numPlantes * 0.5)
        } 
    }

    costMensualNeteja(){
       return (this.netejar() * this._euro) * 30
    }
}