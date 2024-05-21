// /*Fer un programa que li demani a l’usuari/ària mitjançant el prompt aquestes dades:

// Nom.
// Cognom.
// Edat.

// Un cop l’usuari/ària hagi acabat d’introduir les dades, aquestes s’han de mostrar:

// Per consola.
// Amb un popup (alert).
// Mitjançant getElementById().*/

let nom = prompt('Escriu el teu nom')
let cognom = prompt('Escriu els teus cognoms')
let edat = prompt('Escriu la teva edat')
let resultat = document.getElementById('result')

console.log('El seu nom és: ' + nom + ' ' + cognom + ' i te ' + edat + ' anys')
alert('El seu nom és: ' + nom + ' ' + cognom + ' i te ' + edat + ' anys')
resultat.innerHTML = 'El seu nom és: ' + nom + ' ' + cognom + ' i te ' + edat + ' anys'