function mostrar(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')
    let letra = 'x'
    result.innerHTML = ''

    for (let i = 0; i < numero; i++){
        result.innerHTML += letra
    }
}