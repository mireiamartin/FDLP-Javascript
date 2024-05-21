class Player {
    constructor(namePlayer, tShirtNumber, score, playTrade, position) {
        this._namePlayer = namePlayer;
        this._tShirtNumber = tShirtNumber;
        this._score = score;
        this._playTrade = playTrade;
        this._position = position
    }

    get namePlayer(){
        return this._namePlayer
    }

    get tShirtNumber(){
        return this._tShirtNumber
    }

    get score(){
        return this._score
    }

    get playTrade(){
        return this._playTrade
    }

    get position(){
        return this._position
    }

    set namePlayer(param){
        return this._namePlayer = param
    }

    set tShirtNumber(param){
        return this._tShirtNumber = param
    }

    set score(param){
        return this._score = param
    }

    set playTrade(param){
        return this._playTrade = param
    }

    set position(param){
        return this._position = param
    }

    toString(){
        return`
        Nom jugador: ${this._namePlayer}
        Nom numero samarreta: ${this._tShirtNumber}
        Score: ${this._score}
        Play Trade: ${this._playTrade}
        Posició: ${this._position}
        `
    }

}






