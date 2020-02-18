var agora = new Date()
var hora = agora.getHours()
//var hora = 8
console.log(`Agora sao exateamente ${hora} horas.`)
if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    Console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}