//Esto se puede hacer de dos maneras, una directa como esta:
document.getElementById('result').innerHTML ='<p> Soy un parrafo <p>'

//o una con mas lineas como esta:
let resultDiv = document.getElementById('result')
resultDiv.innerHTML ='<p> Soy un parrafo <p>'

//<p> en parrafo
//<em> en cursiva
//<strong> en negrita

//prompt('Escriba un número')

//para almacenarlo en algun lugar es con:

//let num1 = prompt('Escriba un número'); // almacenar
// para verlo
//resultDiv.innerHTML = num1;

let num1 = parseInt(prompt('Escriba un numero'))
let num2 = parseInt(prompt('Escriba un numero'))

resultDiv.innerHTML += '<br>'
resultDiv.innerHTML += num1 + parseInt(num2)



