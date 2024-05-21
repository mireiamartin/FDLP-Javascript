function mostrar(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    for (let i = 0; i <= numero; i++){
        result.innerHTML += i
    }
}
