function mostrar(){
    let numero = parseInt(document.getElementById('num').value)
    let result = document.getElementById('result')

    for (let i = 0; i <= 10; i++){
        let multiplicacio = numero * i
        result.innerHTML += numero + ' x ' + i + ' = ' + multiplicacio + '<br>'
    }
}