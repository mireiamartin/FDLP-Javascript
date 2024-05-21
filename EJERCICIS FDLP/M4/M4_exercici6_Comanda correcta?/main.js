/*Crea un programa per a un restaurant on tenen tres plats 
(carn, pasta "amb gluten" i risotto "amb lactosa").

El programa ha de demanar el plat que vol l'usuari/ària, però 
també ha de demanar si aquest/a té cap preferència o intolerància 
(vegà, intolerància al gluten o intolerància a la lactosa).

Si la persona demana un plat "que pot menjar" mostrarem per consola 
el missatge "perfecte, comanda correcta", si no, es mostrarà el 
missatge "vostè no pot menjar aquest plat". */



function buscarPreferencia() {
    let platSeleccionat = document.getElementById('plat').value;
    let preferenciaSeleccionada = document.getElementById('preferencies').value;
    let resultat;

    switch (platSeleccionat) {
        case 'carn':
            if (preferenciaSeleccionada == 'vegà') {
                resultat = 'Vostè no pot menjar carn perquè és vegà.';
            } else {
                resultat = 'Perfecte, comanda correcta.';
            }
            break;
        case 'pasta "amb gluten"':
            if (preferenciaSeleccionada == 'intolerància al gluten') {
                resultat = 'Vostè no pot menjar pasta amb gluten perquè té intolerància al gluten.';
            } else {
                resultat = 'Perfecte, comanda correcta.';
            }
            break;
        case 'risotto "amb lactosa"':
            if (preferenciaSeleccionada == 'intolerància a la lactosa') {
                resultat = 'Vostè no pot menjar risotto amb lactosa perquè té intolerància a la lactosa.';
            } else if (preferencia == 'vegà'){
                resultat = 'Vostè no pot menjar risotto amb lactosa perquè és vegà.';
            } else {
                resultat = 'Perfecte, comanda correcta.';
            }
            break;
        default:
            resultat = 'Plat no reconegut o opció no vàlida.';
    }
    // document.getElementById('result').innerText = resultat;
    console.log(resultat);
}