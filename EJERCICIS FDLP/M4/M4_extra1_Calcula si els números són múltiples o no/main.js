/*Fes un programa que pregunti a l'usuari/ària dos nombres enters al qual
anomenaràs dividend i divisor respectivament.

El divisor haurà d'estar comprès entre 2 i 7.

En cas contrari, el programa haurà de mostrar un missatge d'error.

Si el divisor és correcte (2-7) mostra en pantalla si el dividend 
és múltiple del divisor, o no.*/


function mostrarResultat(){
    let result = document.getElementById('result')
    let dividend = parseInt(document.getElementById('number1').value)
    let divisor = parseInt(document.getElementById('number2').value)

    if (divisor >=2 && divisor <=7){
        if(dividend % divisor == 0){
            result.innerHTML = 'És múltiple'
        } else {
            result.innerHTML = 'No és múltiple'
        }
    } else {
        console.error ('No està entre 2 i 7')
        result.innerHTML = "<small style='color:red;'> Error: El divisor a d'estar entre el 2 i el 7 </small>"
    return
    }
}