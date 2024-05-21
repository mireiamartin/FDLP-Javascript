/* El programa demana dos nombres enters i llavors calcula la suma 
dels valors compresos entre els dos números, inclosos. 

Exemple: 4 i 6  --> resultat = 4 + 5 + 6 = 15*/
 
    

let numero1 = parseInt(prompt('Introdueix el primer nombre'))
let numero2 = parseInt(prompt('Introdueix el segon nombre'))
let message = document.getElementById('result')
let resultat = 0

    for (let i = numero1; i <= numero2; i++){
        resultat = resultat + i;
    }

    message.innerHTML = resultat