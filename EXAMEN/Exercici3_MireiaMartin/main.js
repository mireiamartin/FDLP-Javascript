let players = []
let equipo

function findJugador(jugadorBuscar) {
    let jugadorTrobat = jugadorBuscar
    let posicioJugador = -1
    let i = 0

    do {
        if (players[i].namePlayer === jugadorTrobat) {
            posicioJugador = i
        }
        i++;
    } while (i < players.length && posicioJugador === -1)

    return posicioJugador
}

function crearEquip() {
    let nameTeam = document.getElementById('nameTeam').value

    const team = new Team(nameTeam)

    let namePlayer = document.getElementById('namePlayer').value
    let tShirtNumber = parseInt(document.getElementById('tShirtNumber').value)
    let score = parseInt(document.getElementById('score').value)
    let playTrade = document.getElementById('playTrade').value
    let position = document.getElementById('position').value

    const player = new Player(namePlayer, tShirtNumber, score, playTrade, position)
    players.push(player)
    team.afegirPlayers(players)
    console.log(team)
}