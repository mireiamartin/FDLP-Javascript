//Busqueda

// como buscamos un elemento desde un array de objectos
    //con un bucle while: porque no sabemos las veces que se va a repetir

    // newObj = {} //es un objeto
    // newArr = [] //es un array


    //EJEMPLO
    
                 //esto es lo que passa cuando hacemos push (cada uno es un objeto)
    arrayObj = [

    {
        name : 'jc',
        age: 39,
        toString() {'Hola'} //l'hem posat aqui perque no tenim una classe feta(es un exemple)
    },

    {
        name : 'uc',
        age: 44,
        toString() {'Adeu'}
    },

    {
        name : 'etr',
        age: 55,
        toString() {'Bon dia'}
    }, 
    ]

    console.log(arrayObj)
    // console.log(arrayObj[1]) //muestra todo
    // console.log(arrayObj[1].age) //muestra solo la edad
  

    //3 expressiones del bucle do while es en vertical, el de for es horizontal

    let i = 0 // porque el array empieza en 0
    let infoDelUserName = 'jc' // input desde el usuario
    let encontrado = false
    let posicion = null

    do {
        let actualUser = arrayObj[i] //esto es el objeto actual
        // console.log(infoDelUser.name) //al actual user le digo que acceda a name (me los dara todos 'jc', 'uc', 'etr')

        if (actualUser.name == infoDelUserName){ 
            // si esto se cumple tengo que buscar la manera de que el bucle pare
            encontrado = true
            posicion = i
        }

        i++
                                    !encontrado
    } while (i < arrayObj.length && encontrado === false) //2 expersion // tambien se puede escribir !encontrado
            // mientras se cumple todo lo de dentro del while, el bucle sigue, si el if se cumple para el bucle

    if (encontrado === true){
        //la acción (modificar, eliminar...)
        arrayObj[posicion] //objeto actual

        //Read //crear un toString en la class
        arrayObj[posicion].toString()

        //Delete
        arrayObj.splice(posicion, 1)
        
    } else{
        'No encontrado'
    }

    // OTRA MANERA

    
    // let infoDelUserName = 'jc' // input desde el usuario
    // let posicion = -1


    // let i = 0 // porque el array empieza en 0

    // do {
    //     let actualUser = arrayObj[i] 

    //     if (actualUser.name == infoDelUserName){ 
    //         posicion = i
    //     }

    //     i++
                                    
    // } while (i < arrayObj.length && posicion != null ) //2 expersion       

    // if (encontrado === true){
    //     //la acción (modificar, eliminar...)
    //     arrayObj[posicion] //objeto actual

    //     //Read //crear un toString en la class
    //     arrayObj[posicion].toString()

    //     //Delete
    //     arrayObj.splice(posicion, 1)
        
    // } else{
    //     //No encontrado
    // }