function ferComanda(){

    let resultat = document.getElementById('result')
    let plat = (document.getElementById('plat').value)
    let preferencia = (document.getElementById('preferencia').value)

    switch (plat){
        case '1':
            if (preferencia == '1'){
                resultat.innerHTML = 'No pots menjar aquest plat perquè ets vegà'
            } else {
                resultat.innerHTML = 'Comanda correcta'
            }break
        case '2':
            if (preferencia == '2'){
                resultat.innerHTML = 'No pots menjar aquest plat perquè no pots menjar gluten'
            } else {
                resultat.innerHTML = 'Comanda correcta'
            }break
        case '3': 
            if (preferencia == '3'){
                resultat.innerHTML = 'No pots menjar aquest plat perquè no pots menjar lactosa'
            } else if (preferencia == '1') {
                resultat.innerHTML = 'No pots menjar aquest plat perquè ets vegà'
            } else {
                resultat.innerHTML = 'Comanda correcta'
            }break
        default:
                resultat.innerHTML = 'Plat no reconegut o opció no vàlida.';
            }
        
    }