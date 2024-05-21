function mostrar(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')
    result.innerHTML = ''
    for (let i = numero; i > 0; i--){
        if (i % 2 === 0){
            result.innerHTML += i + '<br>'
        }

    }
}