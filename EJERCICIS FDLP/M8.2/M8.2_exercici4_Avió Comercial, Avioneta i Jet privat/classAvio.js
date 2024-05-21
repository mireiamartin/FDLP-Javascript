class Avio {

    constructor (tipus, numAvio, marca, model, carrega, llargaria){
        this._tipus = tipus
        this._numAvio = numAvio
        this._marca = marca
        this._model = model
        this._carrega = carrega
        this._llargaria = llargaria
    }

    combustibleNecessari() {
        return parseFloat(this._llargaria * this._carrega)
    }

    get tipus(){
        return this._tipus

    }

    get numAvio(){
        return this._numAvio
    }

    get marca(){
        return this._marca
    } 

    get model(){
        return this._model
    }

    get carrega(){
        return this._carrega
    }

    get llargaria(){
        return this._llargaria
    }
 
}