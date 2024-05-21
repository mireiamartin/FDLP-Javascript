/*Realitza un programa que pinti la lletra L per pantalla feta amb asteriscs.

El programa demanarà l'altura.

El pal horitzontal de la L tindrà una longitud de la meitat (divisió entera entre 2) de l'altura més un.

Exemple:

Introduïu l'alçada de la L : 5

La base serà  la divisió del nombre entre 2 : (5 / 2) + 1 = 3

*

*

*

*

* * *
*/




function dibujar(){

    //CAPTURA DE INPUTS
    
    let altura = parseInt(document.getElementById('altura').value)
    let result = document.getElementById('result')
    let ancho = parseInt(altura/2) + 1

    const asterisco = '*'
    console.log('alto:', altura, 'ancho:', ancho)

    // COMO VALIDAR//DETECTAR QUE EL DATO QUE HAN PUESTO ES CORRECTO

    //validacion para mostrar error en caso de no poner un numero valido
    if (altura <= 1){
        alert('La altura ha de ser mayor a 1')
        return
        } 

    // //validacion mas corto para mostrar error en caso de no poner un numero valido
    if (altura <= 1) return alert('La altura ha de ser mayor a 1')
    
    if (isNaN(altura)) return alert ('La altura ha de ser un número')

    //ACCION

    result.innerHTML = '' //aixo serveix per a resetear, que cada vegada que li donis al boto, et doni nomes l'ultim resultat

    for(let i = 1; i < altura; i++){
        result.innerHTML += asterisco + '<br>'
    }
    
    for (let i = 0; i < ancho; i++){
        result.innerHTML += asterisco
    }
}