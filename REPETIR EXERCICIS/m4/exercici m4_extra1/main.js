function calculaSiEsMultiple(){

    let dividend = parseInt(document.getElementById('dividend').value)
    let divisor = parseInt(document.getElementById('divisor').value)
    let resultat = document.getElementById('result')

    if (divisor >= 2 && divisor <=7 ){
        if (dividend % divisor == 0){
            resultat.innerHTML = 'És múltiple'
        } else {
            resultat.innerHTML = 'No es multiple'
        }
    } else {
        resultat.innerHTML = 'El número introduit no és correcte'
    return
    }
}