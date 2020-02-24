function contar() {
<<<<<<< HEAD
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Insira os dados corretamente!')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
        window.alert('Passo inválido! considerando passo 1')
        p = 1
        }
        if (i < f) {
            // Contagem crescente 
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        //Seria a bandeirinha no fim do codigo
        res.innerHTML += ` \u{1F911}`
    }

}




=======
    var inicio = document.getElementById('txt')
>>>>>>> 43f0392df8050da6c4c52a3cea7120c511af63cf
