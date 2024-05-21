class Vol {

    constructor (numVol, companyia, distancia, motores, numPasajeros){

        this._numVol = numVol
        this._companyia = companyia
        this._distancia = distancia

        this._tones= 0.1
        this._km = 1000
        this._co2emes = null

        this._motores = motores
        this._numPasajeros = numPasajeros
    }

    compensaCO2() {
        let huella = (this._tones * (this._distancia / this._km)) * this._motores; // Calcula la huella del avión
        this._co2emes = huella / this._numPasajeros
        return this._co2emes
    }

    get numVol(){
        return this._numVol
    }

    get companyia(){
        return this._companyia
    }

    get distancia(){
        return this._distancia
    }

    get co2emes(){
        return this._co2emes
    }

    set companyia (param){
        return this._companyia = param
    }

    set distancia (param){
        return this._distancia = param
    }

    set co2emes (param){
        return this._co2emes = param
    }


    toStringVol(){
        return `
            número de vol: ${this._numVol}
            companyia: ${this._companyia}
            distancia: ${this._distancia}
            co2Emes:${this._co2emes}
        `
    }
}