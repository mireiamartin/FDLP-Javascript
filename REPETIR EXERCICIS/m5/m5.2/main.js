function suma() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultat = document.getElementById('result')
    let message = 0

    for (let i = num1; i <= num2; i++) {
        message += i
    }
    
    resultat.innerHTML = message
}