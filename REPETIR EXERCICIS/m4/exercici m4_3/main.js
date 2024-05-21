function determina(){
    let text = document.getElementById('paraula').value
    let result = document.getElementById('result')

    let textlenght = text.length
    let charOne = text.charAt(0)
    let capitalLetter = charOne.toUpperCase()


    if ((textlenght == 9 && capitalLetter == 'H') || (textlenght == 5 && capitalLetter == 'P')){
        result.innerHTML = 'És una paraula bonica'
    } else {
        result.innerHTML = 'No és una paraula bonica'
    }

    console.log(text)
}