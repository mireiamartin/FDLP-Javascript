function CalculaNivellExperiencia(){
    let nom = (document.getElementById('nom').value)
    let experiencia = parseInt(document.getElementById ('anys').value)

    let result = document.getElementById('result')

    let message= ''

    if (experiencia < 2 ){
        message = 'Nivell principant'
    } else if (experiencia <= 4){
        message = 'Nivell intermedi'
    } else if (experiencia <= 7){
        message = 'Nivell avançat'
    } else if (experiencia <= 10){
        message = 'Nivell expert'
    } else {
        message = 'Nivell guru'
    }

    result.innerHTML = `El nivell de ${nom} és ${message}`
}