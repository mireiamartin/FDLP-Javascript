function CalcularMultipe(){

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let message = ''
    let result = document.getElementById('result')

    if (num1 % num2 === 0){
        message = 'És múltiple'
    } else {
        message = 'No és múltiple'
    }

    result.innerHTML = message
}