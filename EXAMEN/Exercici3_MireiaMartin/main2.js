let teams = []

function crearEquip() {
   
    let nameTeam = document.getElementById('nameTeam').value
    const team = new Team(nameTeam)
    teams.push(team)
    result.innerHTML = `L'equip ${nameTeam} s'ha creat correctament`
    console.log(teams)
}

function findEquipo(equipBuscar){
    let equipTrobat = equipBuscar
    let posicioEquip = -1
    let i = 0

    do{
        if (teams[i].nameTeam === equipTrobat){
        posicioEquip = i
    }
    i++
    }while (i <teams.length && posicioEquip === -1)

    return posicioEquip
}

function crearJugador(){
    let teamJugador = document.getElementById('teamJugador').value
    let namePlayer = document.getElementById('namePlayer').value
    let tShirtNumber = parseInt(document.getElementById('tShirtNumber').value)
    let score = parseInt(document.getElementById('score').value)
    let playTrade = document.getElementById('playTrade').value
    let position = document.getElementById('position').value

    let posicio = findEquipo(teamJugador)

    if (posicio != -1){
        const player = new Player(namePlayer, tShirtNumber, score, playTrade, position)
        teams[posicio].afegirPlayers(player)
        result.innerHTML = `El jugador s'ha afegit a l'equip ${teamJugador}`
    }else{
        result.innerHTML = "No s'ha trobat l'equip"
    }
}

function findJugador(team, jugadorBuscar) {
    let jugadorTrobat = jugadorBuscar
    let posicioJugador = -1
    let i = 0

    do {
        if (team.players[i].namePlayer === jugadorTrobat) {
            posicioJugador = i
        }
        i++;
    } while (i < team.players.length && posicioJugador === -1)

    return posicioJugador
}

function mostrarEquip() {
    let equipMostrar = document.getElementById('equipMostrar').value
    let posicioEquip = findEquipo(equipMostrar)

    if (posicioEquip != -1) {
        result.innerHTML = teams[posicioEquip].toString()
    } else {
        result.innerHTML = 'Equip no trobat'
    }
}

function mostrarJugador() {
    let jugadorMostrar = document.getElementById('jugadorMostrar').value
    let equipMostrar = document.getElementById('equipMostrar').value
    
    let posicioEquip = findEquipo(equipMostrar)

    if (posicioEquip != -1) {
        let posicioJugador = findJugador(teams[posicioEquip], jugadorMostrar)
        if (posicioJugador != -1) {
            result.innerHTML = teams[posicioEquip].players[posicioJugador].toString()
        } else {
            result.innerHTML = 'Jugador no trobat'
        }
    } else {
        result.innerHTML = 'Equip no trobat'
    }
}
