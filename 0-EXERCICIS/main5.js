function mostrar(){
    
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')
    result.innerHTML = ''
    for (let i = numero; i >= 0; i--){
        if (i % 3 === 2){
            result.innerHTML += i + '<br>'
        }
    }
}