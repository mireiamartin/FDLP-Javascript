class Vol{
    
    constructor (vol, distancia, companyia, passatgers, motors){
        this._vol = vol
        this._distancia = distancia
        this._companyia = companyia
        this._passatgers = passatgers
        this._motors = motors
        this._tones = 0.1
        this._km = 1000
        
    }

    get vol(){
        return this._vol
    }

    get distancia(){
        return this._distancia
    }

    get companyia(){
        return this._companyia
    }

    get passatgers(){
        return this._passatgers
    }

    get motors(){
        return this._motors
    }

    
    set vol (param){
        return this._vol = param
    }

    set distancia (param){
        return this._distancia = param
    }

    set companyia (param){
        return this._companyia = param
    }

    set passatgers (param){
        return this._passatgers = param
    }

    set motors (param){
        return this._motors = param
    }

    calcularPetjada(){
        return (this._tones * (this._distancia / this._km)) * this._motors
    }

    toString(){
        return `
            número de vuelo: ${this._vol}
            distància: ${this._distancia}
            companyia: ${this._companyia}
            passatgers: ${this._passatgers}
            motors: ${this._motors}
            petjada carboni: ${this.calcularPetjada()}
        `
    }
} 