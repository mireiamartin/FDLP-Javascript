const edificis = []

function afegirEdifici(edifici){
    edificis.push(edifici)
}

function crearEdifici(){

    let tipus = document.getElementById('tipus').value
    let nom = document.getElementById('nom').value
    let numPlantes = parseInt(document.getElementById('numPlantes').value)
    let superficie = parseFloat(document.getElementById('superficie').value)
    let assistents = parseInt(document.getElementById('assistents').value)
    let numMalalts = parseInt(document.getElementById('numMalalts').value)
    let numHabitacions = parseInt(document.getElementById('numHabitacions').value)

    let edifici = null

    switch (tipus) {
        case "1":
            edifici = new Cinema(tipus, nom, numPlantes, superficie, assistents)
            result.innerHTML = "El cinema s'ha creat correctament"
            break
        case "2":
            edifici = new Hospital(tipus, nom, numPlantes, superficie, numMalalts)
            result.innerHTML = "L'hospital s'ha creat correctament"
            break
        case "3":
            edifici = new Hotel(tipus, nom, numPlantes, superficie, numHabitacions)
            result.innerHTML = "L'hotel s'ha creat correctament"
            break
    }

    afegirEdifici(edifici)

}

function findEdifici(nomEdificiBuscat){

    let nomEdificiTrobat = nomEdificiBuscat
    let posicio = -1


    let i = 0

    do {
        let edificiActual = edificis[i] 

        if (edificiActual.nom == nomEdificiTrobat){ 
            posicio = i
        }

        i++
                                    
    } while (i < edificis.length && posicio === -1 ) 

    return posicio
} 

function eliminarEdifici(){

    let nomEdificiEliminar = document.getElementById('nomEdificiEliminar').value

    let posicio = findEdifici(nomEdificiEliminar)

    if (posicio != -1){
        edificis.splice(posicio, 1)
        result.innerHTML = "L'edifici s'ha eliminat"
    }else{
        result.innerHTML = "L'edifici no s'ha trobat"
    }
}

function mostrarEdifici(){
    
    let nomEdificiMostrar = document.getElementById('nomEdificiMostrar').value

    let posicio = findEdifici(nomEdificiMostrar)

    if(posicio != -1){
        result.innerHTML = '<pre>' + edificis[posicio].toString() + '</pre>'
    }
}