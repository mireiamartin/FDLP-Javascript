class Client{

    //Propiedades privadas
    #dni //declarando la propiedad (solo se podra modificar con los setters)

    //metodo estatico: metodo que no cambia

    constructor (dni, edat, nacionalitat, vols){
        this.#dni = dni
        this._edat = edat
        this._nacionalitat = nacionalitat
        this._vols = vols
        // this._petjada = 0.5
    }

get dni(){
    return this.#dni
}

get edat(){
    return this._edat
}

get nacionalitat(){
    return this._nacionalitat
}

get vols(){
    return this._vols
}

set edat (param){
    return this._edat = param
}

set nacionalitat(param){
    return this._nacionalitat = param
}

set vols(param){
    return this._vols = param
}

petjadaCarboni(){
    return parseFloat(this._vols * Client.toneladas())
}

// como pasarlo de publico a estatico
static description(){
    return ` Hola seré un método estático `
}

static toneladas(){
    return 0.5
}

soyUnMethod(){
    return ` No soy estatico `
}

toString(){
    return `
        dni: ${this.#dni}
        edat: ${this._edat}
        nacionalitat: ${this._nacionalitat}
        vols: ${this._vols}
        petjada de Carboni : ${this.petjadaCarboni()}
    `
    }
}