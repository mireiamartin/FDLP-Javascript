/*Escriu un programa JavaScript que calculi els litres de pintura 
necessaris per a pintar una paret rectangular.

Un litre de pintura cobreix aproximadament, 12 m² en una sola mà.

Crear una constant, Cobertura a Litros (recordar les convencions de noms)
per a guardar la dada de cobertura de la pintura (12 m²).

Hauràs de demanar a l'usuari/ària:

L'alt i ample de la paret (multiplicant sabràs l'àrea de la mateixa).
El nombre de mans a aplicar.
Mostra en pantalla els litres de pintura a utilitzar.*/

function litresNecessaris(){

    
    let ample = parseInt(document.getElementById('ample').value)
    let alt = parseInt(document.getElementById('alt').value)
    let numeroMans = parseInt(document.getElementById('numMans').value)
    let result = document.getElementById('result')

    const coberturaLitros = 12
    let area = ample * alt


    let litresNecessaris = area * numeroMans / coberturaLitros

    result.innerHTML = `Els litres necessaris són: ${litresNecessaris}`



}