//variables globales

const arrayNombres = []
const result = document.getElementById('result')

function pedirNumero(){ //sin parametros y sin return

    //captura 
    let num1 = parseInt(document.getElementById('num1').value) //capturar el número

    const imprimir = document.getElementById('imprimir') //capturar el div
    imprimir.innerHTML = '' //para que no vaya saliendo todo esto cada vez que el usuario ponga un numero

    for (let i = 0; i < num1; i++){ // este for hace: crear inputs i crear un boton

        //que vaya al documento html, y en vez de decir captura algo, le diremos crea algo

        let inputCreate = document.createElement('input')
        inputCreate.type = 'text'
        inputCreate.className = 'nombres'
        inputCreate.placeholder = 'Escriba un nombre'

        let br = document.createElement('br')

        imprimir.appendChild(inputCreate)
        imprimir.appendChild(br)
    
    }
    imprimir.innerHTML += `<button type="button" onclick="capturarInput()"> Click me </button>`


}
// AQUI TENGO QUE CAPTURAR LOS NOMBRES QUE AÑADE EL USUARIO

function capturarInput(){ //sin parametros y sin return //lee los valors que hay en los inputs creados anteriormente

    let arrNoms = document.querySelectorAll('.nombres') // busca todas las coincidencias y las almacena en un array

    for (let i= 0; i < arrNoms.length; i++){

        let nombre = arrNoms[i].value
        arrNoms[i].value = '' //esto sirve para que una vez el usuario haya puesto los valores dentro de los placeholders
        
        if (nombre.charAt(0).toUpperCase() == 'A'){
            arrayNombres.push(nombre)
        }
    }

    imprimir()
}

function imprimir(){ // sin parametros y sin return

    //si no se ha puesto ningun nombre con A  
    if(arrayNombres.length > 0) {
        result.innerHTML = `Los nombres más bonitos són: ${arrayNombres}`
    }else {
      result.innerHTML = `No has introducido nombres bonitos`
    } 
}

//Label for
//document.createElement
//div.appendChild()
//querySelector
//querySelectorAll