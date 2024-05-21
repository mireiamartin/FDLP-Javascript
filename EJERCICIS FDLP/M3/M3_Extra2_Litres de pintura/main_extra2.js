/*Escriu un programa JavaScript que calculi els litres de pintura 
necessaris per a pintar una paret rectangular.

Un litre de pintura cobreix aproximadament, 12 m² en una sola mà.

Crear una constant, Cobertura a Litros (recordar les convencions de noms)
per a guardar la dada de cobertura de la pintura (12 m²).

Hauràs de demanar a l'usuari/ària:

L'alt i ample de la paret (multiplicant sabràs l'àrea de la mateixa).
El nombre de mans a aplicar.
Mostra en pantalla els litres de pintura a utilitzar.*/


let resultDiv = document.getElementById('result');

const CoberturaLitres = 12;

let alçada = parseInt(prompt("Introdueix l'alçada de la paret"))
let amplada = parseInt(prompt("Introdueix l'amplada de la paret"))

let AreaParet = alçada * amplada

let LitresNecessaris = AreaParet / CoberturaLitres

let message = 'Els litres necessaris són' + LitresNecessaris

resultDiv.innerHTML = message