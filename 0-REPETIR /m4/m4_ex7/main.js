/*Fes un programa que pregunti a l'usuari/ària dos nombres enters al qual
anomenaràs dividend i divisor respectivament.

El divisor haurà d'estar comprès entre 2 i 7.

En cas contrari, el programa haurà de mostrar un missatge d'error.

Si el divisor és correcte (2-7) mostra en pantalla si el dividend 
és múltiple del divisor, o no.*/

function mostrarResultat(){
    let dividend = parseInt(document.getElementById('dividend').value)
    let divisor = parseInt(document.getElementById('divisor').value)
    let result = document.getElementById('result')

    if (divisor >= 2 && divisor <= 7){
        if (dividend % divisor === 0){
            result.innerHTML = 'Es multiple'
        } else {
            result.innerHTML = 'No es múltiple'
        }
        
    } else {
        alert("El número introduït ha d'estar entre el 2 i el 7") 
    }
}