/*Crea un mètode que ha de rebre com a paràmetres els 
costats d'un triangle. La funció ha de retornar un 
missatge indicant si el triangle és equilàter (tots iguals), isòsceles (dos iguals) o escalè (tots diferents).*/

function quinTriangle(){
    let costat1 = parseInt(document.getElementById('costat1').value)
    let costat2 = parseInt(document.getElementById('costat2').value)
    let costat3 = parseInt(document.getElementById('costat3').value)

    let result = document.getElementById('result')

    if (costat1 === costat2  && costat2 === costat3){
        result.innerHTML = 'Triangle equilàter'
    } else if (costat1 === costat2 || costat1 === costat3 || costat2 === costat3) {
        result.innerHTML = 'Triangle isòsceles'
    } else {
        result.innerHTML = 'Triangle escalè'
    }
}
