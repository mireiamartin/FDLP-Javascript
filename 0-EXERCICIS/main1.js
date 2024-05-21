function mostrar(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    for (let i = numero; i >= 0; i--){
        result.innerHTML += i
    }

}