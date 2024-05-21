/* El programa demana dos nombres enters i llavors calcula la suma 
dels valors compresos entre els dos números, inclosos. 

Exemple: 4 i 6  --> resultat = 4 + 5 + 6 = 15*/


    let num1 = parseInt(prompt('Escriu un número enter'))
    let num2 = parseInt(prompt('Escriu un número enter'))
    let result = document.getElementById('result')
    let resultat = 0

    for (let i = num1; i <= num2; i++){
        resultat +=  i
        
    }
    result.innerHTML = resultat 

