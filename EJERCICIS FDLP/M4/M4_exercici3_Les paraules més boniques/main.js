/* Els estudis lingüístics moderns diuen que les paraules més boniques 
del diccionari són aquelles que contenen 9 lletres i comencen per la 
lletra 'H', o bé, contenen 5 lletres i comencen per la lletra 'P'.

Fes un programa que demani una paraula i determini si és bonica o no 
(segons el patró explicat prèviament).

El mètode charAt() segur que et pot ajudar en aquest exercici.*/


function mostrar(){
    let result = document.getElementById('result')
    let text =document.getElementById('word').value
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