function resultatOperacio(){

let num1 = parseInt(document.getElementById ('numero1').value)
let num2 = parseInt(document.getElementById ('numero2').value)
let operador = document.getElementById ('operador').value
let resultat

switch (operador){
    case '+': 
        resultat = num1 + num2
        break
    case '-': 
        resultat = num1 - num2
        break
    case '*': 
        resultat = num1 * num2
        break
    case '/': 
        resultat = num1 / num2
        break
    default:
        resultat = 'No has posat un operador vàlid'
}

result.innerHTML = `El resultat és ${resultat}`

}