function sacarPorConsola(){ 

    let message = 'Esto es una función declarada'
    console.log (message)
}

sacarPorConsola()

function imprimirPerConsola (num = 0, string = 'anonymous', boolean = false){ 
    console.log (num)                                       // cuando se invoque la funcion se tienen que poner los valores que queremos.  
    console.log (string)
    console.log (boolean)
    console.log (34, 'hola', false) 

} 

imprimirPerConsola()

let result = document.getElementById('result')

function sinParamsConReturn(){ 
    return 4*6
}

document.write (sinParamsConReturn())
result.innerHTML = sinParamsConReturn()

function conParamsConReturn (str1, str2, str3){
    let nombre = 'Mireia'
    let edat = '18'
 
    return str1 + str2 + str3 + ' Mi nombre és ' + nombre + ' y tengo ' + edat + ' años '
}

console.log(conParamsConReturn ('Hola ', 'a totes, ', 'bon dia, '))
