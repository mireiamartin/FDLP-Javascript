function mostraElMesGran() {
    let numero1 = parseInt(document.getElementById('num1').value)
    let numero2 = parseInt(document.getElementById('num2').value)
    let message = ''

    if (numero1 > numero2) {
        message = numero1
    } else if (numero1 < numero2) {
        message = numero2
    } else{
        message = 'Els dos números són iguals'
    }
    
    result.innerHTML = message

}


