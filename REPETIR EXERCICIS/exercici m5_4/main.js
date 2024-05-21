let numeroInfants = parseInt(prompt('Quants infants vols introduïr?'))
let edats = []
let sumaEdats = 0
let result = document.getElementById('result')

for (let i = 0; i < numeroInfants; i++)  {
    let edatIntroduida = parseInt(prompt("Introdueix l'edat de l'infant"))

    while (edatIntroduida < 5 || edatIntroduida > 12) {
        edatIntroduida = parseInt(prompt("Torna a introduir l'edat"))
    }

    edats.push(edatIntroduida)
    sumaEdats += edatIntroduida
}

let mitjana = sumaEdats / numeroInfants

result.innerHTML = mitjana





