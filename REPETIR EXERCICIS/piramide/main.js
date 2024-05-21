function dibuixarPiramide(){

    let resultat = document.getElementById('result')
    let numero = 10
    let caracter = '*'

    for (let i = 1; i <= numero; i++){
        let espais = ''
        for (let j = 0; j < numero -i; j++){ 
            espais += ' '
        }
        let linea = ''
            for (let k = 1; k <= 2 * i - 1; k++){
                linea += caracter
        }
        resultat.innerHTML += espais + linea + '<br>'
    }
}

dibuixarPiramide()

