function mostrar(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    for (let i = 0; i < numero; i++){
        if (i % 2 === 0){
            result.innerHTML += i
        }
    }
}