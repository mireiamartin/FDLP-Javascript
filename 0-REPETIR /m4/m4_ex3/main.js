/* Els estudis lingüístics moderns diuen que les paraules més boniques 
del diccionari són aquelles que contenen 9 lletres i comencen per la 
lletra 'H', o bé, contenen 5 lletres i comencen per la lletra 'P'.

Fes un programa que demani una paraula i determini si és bonica o no 
(segons el patró explicat prèviament).

El mètode charAt() segur que et pot ajudar en aquest exercici.*/

function esBonica(){
    let paraula = document.getElementById('paraula').value.toUpperCase()
    let result = document.getElementById('result')

    if((paraula.charAt(0) === 'H' && paraula.length === 9) || (paraula.charAt(0) === 'P' && paraula.length === 5)){
        result.innerHTML = `La paraula ${paraula}, és bonica`
    } else {
        result.innerHTML = 'La paraula no és bonica'
    }
}