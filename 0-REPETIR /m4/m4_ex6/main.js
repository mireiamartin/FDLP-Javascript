/*Crea un programa per a un restaurant on tenen tres plats 
(carn, pasta "amb gluten" i risotto "amb lactosa").

El programa ha de demanar el plat que vol l'usuari/ària, però 
també ha de demanar si aquest/a té cap preferència o intolerància 
(vegà, intolerància al gluten o intolerància a la lactosa).

Si la persona demana un plat "que pot menjar" mostrarem per consola 
el missatge "perfecte, comanda correcta", si no, es mostrarà el 
missatge "vostè no pot menjar aquest plat". */

function ferComanda() {
    let plat = document.getElementById('plat').value
    let preferencia = document.getElementById('preferencies').value
    let result = document.getElementById('result')

    switch (plat) {
        case '1': 
            if (preferencia === '1') {
                result.innerHTML = 'No pots menjar aquest plat ja que conté carn'
            } else {
                result.innerHTML = 'Comanda correcta'
            }
            break
        case '2': 
            if (preferencia === '2') {
                result.innerHTML = 'No pots menjar aquest plat ja que conté gluten'
            } else {
                result.innerHTML = 'Comanda correcta'
            }
            break
        case '3': 
            if (preferencia === '3') {
                result.innerHTML = 'No pots menjar aquest plat ja que conté lactosa'
            } else {
                result.innerHTML = 'Comanda correcta'
            }
            break
    }
}
