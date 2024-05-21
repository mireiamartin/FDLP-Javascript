let resultat = document.getElementById('result')

const personas = [
    {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"]
    },
    {
    nombre: "María",
    dni: "87654321",
    hobbies: ["pintar", "correr", "viajar"]
    },
    {
    nombre: "Pedro",
    dni: "98765432",
    hobbies: ["cocinar", "ver películas"]
    },
    {
    nombre: "Laura",
    dni: "54321678",
    hobbies: ["hacer deporte", "viajar"]
    },
    {
    nombre: "Carlos",
    dni: "87651234",
    hobbies: ["tocar la guitarra", "hacer deporte"]
    }
    ];

function buscarDni(){

    let numDni = document.getElementById('numDni').value

    let personaTrobada = personas.find(persona => persona.dni ===  numDni)

    if (personaTrobada) {
        resultat.innerHTML = `La persona amb DNI ${numDni} es diu 
                              ${personaTrobada.nombre} y està donada 
                              d'alta a l'aplicació
                              `
    } else {
        resultat.innerHTML = `No s'ha trobat cap persona amb el DNI ${numDni}`
    }
}

function buscarPosicio() {

    let numDni = document.getElementById('numDni').value

    let posicioTrobada = personas.findIndex(persona => persona.dni === numDni)
  
    if (posicioTrobada !== -1) {
      resultat.innerHTML = `La persona amb el DNI ${numDni} 
                            es troba a la posició ${posicioTrobada} de l'array
                            `
    }
}

function buscarHobby(){

    let hobby = document.getElementById('hobby').value

    let hobbyPersones = personas.filter(persona => persona.hobbies.includes(hobby))

    for (let i = 0; i < hobbyPersones.length; i++) {
        noms += '<br>'+ hobbyPersones[i].nombre 
    }

    resultat.innerHTML = `Les persones que tenen el hobby ${hobby} són: ${noms}`
}

function totalHobbies() {
    const total = personas.reduce((acumulador, persona) => acumulador + persona.hobbies.length, 0)
    resultat.innerHTML = `<br> El total de hobbies de totes les persones és ${total}`
}

function verificarHobby() {
    let verificarHobby = document.getElementById('verificarHobby').value
    const personesAmbHobby = personas.some(persona => persona.hobbies.includes(verificarHobby))

    if (personesAmbHobby) {
        resultat.innerHTML = `Sí, alguna persona té el hobby ${verificarHobby}`
    } else {
        resultat.innerHTML = `No, cap persona té el hobby ${verificarHobby}`
    }
}

function primeraPersona() {
    let hobbyBuscat = document.getElementById('primeraPersona').value
    const personaAmbHobby = personas.find(persona => persona.hobbies.includes(hobbyBuscat))

    if (personaAmbHobby) {
        resultat.innerHTML = `La primera persona que té el hobby 
                             "${hobbyBuscat}" és ${personaAmbHobby.nombre}
                             `
    }
}

function nouArrayMajuscules(){

const nomsMajuscules = personas.map(persona => persona.nombre.toUpperCase())

    // Como hacer un salto de linia para cada nombre
    // for (let i = 0; i < nomsMajuscules.length; i++){
    //     resultat.innerHTML += nomsMajuscules[i] + '<br>'
    // }

    //otra manera de hacerlo ////    CON EL FOR EACH     ///////

    nomsMajuscules.forEach((noms, index) => {
        resultat.innerHTML += noms + ' en la posicion ' + index + '<br>'
    })

    personas. forEach ((persona,index) => {
        resultat.innerHTML += persona.dni + ' en la posicion ' + index + '<br>'
    })
}