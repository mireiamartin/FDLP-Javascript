const result = document.getElementById('result')
const clients = []


//aqui estamos llamando al valor del espacio fisico para que este vacío
function eraseInput(){
    document.getElementById('dni').value = ''
    document.getElementById('edat').value = ''
    document.getElementById('nacionalitat').value = ''
    document.getElementById('vols').value = ''

}

function createClient(){
    //captura elementos
    let dni = document.getElementById('dni').value
    let edat = parseInt(document.getElementById('edat').value)
    let nacionalitat = document.getElementById('nacionalitat').value
    let vols = parseInt(document.getElementById('vols').value)

    
    //Crear una instancia
    const client = new Client (dni, edat, nacionalitat, vols)
    
   
    //Array
    clients.push(client)

    result.innerHTML = ''
    
        for (let i = 0; i < clients.length; i++) {
            result.innerHTML += `Cliente: ${i + 1} / ${clients[i]} <br>`;
        }
        
    eraseInput()
}