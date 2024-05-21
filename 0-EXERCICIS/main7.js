function mostrar(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')
    let suma = 0

    for (let i = 0; i < numero; i++){
        suma += i
        result.innerHTML = suma
    }
}
