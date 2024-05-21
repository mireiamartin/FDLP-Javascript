/* L’usuari/ària ha d’introduir una frase i el programa 
ha de dir si la frase és un palíndrom.
*/

function esPalindrom(){
    let frase = document.getElementById('frase').value
    let resultat = document.getElementById('result')
    let arrLletresPositiu = []
    let arrLletresNegatiu = []

    frase = frase.replace(/[àá]/gi, 'a')
                 .replace(/[èé]/gi, 'e')
                 .replace(/[ìí]/gi, 'i')
                 .replace(/[òó]/gi, 'o')
                 .replace(/[ùú]/gi, 'u')
                 .replace(/\s/g, '')

    for (let i = 0; i < frase.length ; i++){
        arrLletresPositiu.push(frase[i].toLowerCase())
    } for(let i = frase.length-1; i >= 0; i--){
        arrLletresNegatiu.push(frase[i].toLowerCase())
    }

    let TextArrayPositiu = arrLletresPositiu.join()
    let TextArrayNegatiu = arrLletresNegatiu.join()


    if (TextArrayPositiu == TextArrayNegatiu){
        resultat.innerHTML = "És una frase palíndrom"
    }else{
        resultat.innerHTML = "No és una frase palíndrom"
    }
}