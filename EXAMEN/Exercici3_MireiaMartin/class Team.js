class Team {
    constructor (nameTeam){
        this._nameTeam = nameTeam
        this._players = []
    }

    get nameTeam(){
        return this._nameTeam
    }

    get players(){
        return this._players
    }

    set nameTeam(param){
        return this._nameTeam = param
    }

    afegirPlayers(player) {
        this._players.push(player)
    }

    tradePlayer(playerToTransfer, anotherTeam) {
        if (playerToTransfer !== -1) {
            let jugadorEliminat = this._players.splice(playerToTransfer, 1)
            anotherTeam.afegirPlayers(jugadorEliminat)
            return `${player._namePlayer} ha sido traspasado de ${this._nameTeam} a ${anotherTeam._nameTeam}`
        }
    }

    // toString(){
    //     let playersString = "Jugadors:\n";
    //     this._players.forEach(player => {
    //         playersString += `- ${player}\n`;
    //     });
    //     return `
    //     Nom equip: ${this._nameTeam}
    //     ${playersString}
    //     `;
    // }

    toString() {
        let playersString = this._players.map(player => player.namePlayer).join(", ")
        return `Equipo: ${this._nameTeam}\nJugadores: ${playersString}`
    }
}