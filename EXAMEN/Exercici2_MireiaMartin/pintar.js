function pintar(){

    let result = document.getElementById('result')
    let num = document.getElementById('num').value
    let chartOne = '#'
    let chartTwo = '*'

    //primera fila
    for (let i = 1; i <= num; i++){
        result.innerHTML += chartOne
    }

    //filas del medio

    // ultima fila
    for (let i = 1; i <= num; i++) {
        result.innerHTML += chartOne
}
}