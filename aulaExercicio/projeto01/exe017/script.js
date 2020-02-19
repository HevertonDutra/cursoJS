function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        /*var img = document.createElement('img')
        img.setAttribute('id', 'foto')*/
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança 
                //img.setAttribute('src', 'foto-bb-m.png')      
            } else if (idade < 21) {
                // Jovem
                 //img.setAttribute('src', 'foto-jo-m.png')      
            } else if (idade < 50) {
                // Adulto
                 //img.setAttribute('src', 'foto-ad-m.png')      
            } else {
                // Idoso
                 //img.setAttribute('src', 'foto-id-m.png')      
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança        
                 //img.setAttribute('src', 'foto-bb-f.png')      
            } else if (idade < 21) {
                // Jovem
                 //img.setAttribute('src', 'foto-bb-f.png')      
            } else if (idade < 50) {
                // Adulto
                 //img.setAttribute('src', 'foto-bb-f.png')      
            } else {
                // Idoso
                 //img.setAttribute('src', 'foto-bb-f.png')      
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            //res.appendChild(img)
        }
    }

}