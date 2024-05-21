/* Modifica l'exercici 3 del Mòdul 4.

Has de demanar paraules fins que tinguis tres boniques. 
Has d'anar guardant les paraules boniques en un array i quan 
tinguis les tres, imprimir-les.*/

function mostrar(){
    let result = document.getElementById('result')
    let text = document.getElementById('word').value
    let lenText = text.length
    let charOne = text.charAt(0)
    let capitalLetter = charOne.toUpperCase()

    // //Error (en el cas de no escriure cap paraula al boto que no fagi res)
    // if (lenText == 0|| lenText==1){
    //     console.error('No has posat cap paraula')
    //     result.innerHTML = '<small style="color:red;"> No has posat cap paraula </small>'
    //     return
    // }

    if((lenText == 9 && capitalLetter == 'H') || (lenText == 5 && capitalLetter == 'P')){
        result.innerHTML = 'La paraula és bonica'
    } else{
         result.innerHTML = 'La paraula no és bonica'
    }
    
}

function mostrar(){

    let result = document.getElementById('result')
    let paraulaUser = document.getElementById('word').value


    
}