const avions = []

function altaAvio(avio) {
    avions.push(avio)
    console.log(avions)
}

function afegirAvio() {

    let tipus = document.getElementById('tipus').value
    let numAvio = document.getElementById('numAvio').value
    let marca = document.getElementById('marca').value
    let model = document.getElementById('model').value
    let carrega = parseFloat(document.getElementById('carrega').value)
    let llargaria = parseFloat(document.getElementById('llargaria').value)
    let numHelix = parseInt(document.getElementById('numHelix').value)
    let numPassatgers = parseInt(document.getElementById('numPassatgers').value)

    let avio

    if (tipus === "1") {
        avio = new Comercial(tipus, numAvio, marca, model, carrega, llargaria, numPassatgers)
        result.innerHTML = "Avió comercial donat d'alta"
        console.log(avio)
    } else if (tipus === "2") {
        avio = new Avioneta(tipus, numAvio, marca, model, carrega, llargaria, numHelix)
        result.innerHTML = "Avioneta donada d'alta"
    } else if (tipus === "3") {
        if (numPassatgers <= 10) {
            avio = new JetPrivat(tipus, numAvio, marca, model, carrega, llargaria, numPassatgers)
            result.innerHTML = "Jet privat donat d'alta"
        } else {
            result.innerHTML = "El número de passatgers no pot ser major de 10"
        }
    }

    altaAvio(avio)
}

function findAvio(numAvioBuscat){

    let numAvioTrobat = numAvioBuscat
    let posicio = -1


    let i = 0

    do {
        let actualAvio = avions[i] 

        if (actualAvio.numAvio == numAvioTrobat){ 
            posicio = i
        }

        i++
                                    
    } while (i < avions.length && posicio === -1 ) 

    return posicio
} 

function eliminarAvio(){

    let numAvioEliminar = document.getElementById('numAvioEliminar').value

    let posicio = findAvio(numAvioEliminar)

    if (posicio != -1){
        avions.splice(posicio, 1)
        result.innerHTML = "L'avió s'ha eliminat"
    }else{
        result.innerHTML = "L'avió no s'ha trobat"
    }
}

function mostrarAvio(){
    
    let numAvioMostrar = document.getElementById('numAvioMostrar').value

    let posicio = findAvio(numAvioMostrar)

    if(posicio != -1){
        result.innerHTML = '<pre>' + avions[posicio].toString() + '</pre>'
    }
}