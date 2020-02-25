# cursoJS
Aprendendo a programar em JavaScript


aula 08 Operadores.
https://www.youtube.com/watch?v=BP63NhITvao
Precedência:
() ** /
> < >=
!
&&
||

Ternário:

-----///------///------///----------///------///------///----------///------///------///----------///------///------///----------///

Extensões instaladas no VsCode
Whatch in Chrome = Atualiza o chrome quando salvar o código
NODE EXEC = executa operações dentro do chrome 

-----///------///------///----------///------///------///----------///------///------///----------///------///------///----------///

Aula 09

Marca = TagName -> getElementsByTagName()
EX: 
// Usando Marca
      var corpo = document.body
      var p1 = document.getElementsByTagName('p')[1]
      document.write('Está escrito assim: ' + p1.innerHTML, '</br>');
      document.write('Está escrito assim: ' + p1.innerText);
      corpo.style.background = 'black'
      p1.style.color = 'blue'


ID

 // Usando ID -> getElementeByID()
      var corpo = document.body;
      var p1 = document.getElementsByTagName('p')[1];
      var d = document.getElementById('msg'); // Seleciona o id que coloquei na div
        d.style.background = 'green'; // altera a cor da linha
        d.innerText = 'Estou aguardand...'; //JS esta mudando o teste diretamente na tela

Nome


Classe:

<div id="msg">Clique em mim</div>
    <script>
      // Usando ID 
      var corpo = document.body;
      var p1 = document.getElementsByTagName('p')[1];
      /*
      var d = document.getElementById('msg'); // Seleciona o id que coloquei na div
        d.style.background = 'green'; // altera a cor da linha
        d.innerText = 'Estou aguardando...'; //JS esta mudando o teste diretamente na tela
        */
       var d = document.querySelector('div#msg');
       d.style.background = 'blue';
 </script>

Seletor:

  <div id="msg">Clique em mim</div>
    <script>
      // Usando ID 
      var corpo = document.body;
      var p1 = document.getElementsByTagName('p')[1];
      /*
      var d = document.getElementById('msg'); // Seleciona o id que coloquei na div
        d.style.background = 'green'; // altera a cor da linha
        d.innerText = 'Estou aguardando...'; //JS esta mudando o teste diretamente na tela
        */
       var d = document.querySelector('div#msg'); // # igual a id 
       var d = document.querySelector('div#msg'); // # igual a class 
       d.style.background = 'blue';
</script>

-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----

Aula 10 function e DOM

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evento Dom</title>    
    <style>
        div#area {
            font: normal 20pt Arial;
            background: green;
            color: white;
            width: 150px;
            height: 150px;
            line-height: 150px;
            text-align: center;
        }
    </style>
</head>
<body>
<div var id="area"> 
    interaja...
</div>

<script>
    var a = document.getElementById('area'); //pegando o ID da dive de cima que é AREA
    a.addEventListener('click', clicar); // criando um escuta de evento de clicar 
    a.addEventListener('mouseenter', entrar); // criando uma escuta do evento entrar quando o mouse entrar no quadrado
    a.addEventListener('mouseout', sair); // criando uma escuta do evento de sair de dentro do quadrdo

    // essa funcção indica que eu cliquei no quadrado e mudar a cor do quadrado para vermelho
    function clicar(){ 
        a.innerText = 'Clicou!';
        a.style.background = 'red';
    }
    // essa funcção indica que eu entrei com o mouse no quadrado e mudar a cor do quadrado para amarelo
    function entrar(){
        a.innerText = 'Entrou!';
        a.style.background = 'yellow';
    }
    // essa funcção indica que eu sai com o mouse no quadrado e mudar a cor do quadrado para verde
    function sair() {
        a.innerText = 'Saiu!'
        a.style.background = 'green';
    }
</script>
</body>
</html>


-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Somando Numeros</title>
    <style>
        body {
            font: normal 18pt Arial;
        }

        input {
            font: normal 18pt Arial;
            width: 100px;
        }
        div#res{
            margin-top: 20px;
            
        }

        
    </style>
</head>
<body> 
    <h1>Somando Valores</h1> 
    <input type="number" name="txtn1" id="txtn1"> + 
    <input type="number" name="txtn2" id="txtn2">
    <input type="button" value="Somar" onclick="somar()">
    <div id="res">Resultado</div>
    <script>
        function somar(){
            var tn1 = document.getElementById('txtn1'); // caixa de texto selecionando o ID txtn1 que vem do input [   ]
            var tn2 = document.querySelector(`input#txtn2`); // caixa de texto selecionando o input todo com o querySelector # ID
            var res = document.querySelector(`div#res`); // evento de click do mouse no botão somar selecionando o input # ID
            var n1 = Number(tn1.value); //coletando o valor digitado no input caixa 1 Number pq tem que converter os dados do input
            var n2 = Number(tn2.value); //coletando o valor digitado no input caixa 2 Number pq tem que converter os dados do input
            var somar = n1 + n2 // variavel de soma com o campo 1 e 2 
            res.innerHTML = `A soma dos valores ${n1} mais o ${n2} é igual a <strong>${somar}</strong>.`
            // res.innerHTML é a troca do texto da palavra resultado setado na DIV ${} seta quais valores aparecem no texto ex: n1 =2 mais o n2=3 ${somar} é igual a = 5.
        }
    </script>
</body>
</html>

-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----
Git manual:

push pro git linha de comando
git status
git add . 
git commit -m "msng"
git push origin master

-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----

IF ELSE:
exemplo 1
var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
}else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatório')
}
-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----
exemplo 2
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
-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----

switch case:

SWITCH (exepressao){
    case valor1
    break
}


var c =1
while (C <= 5) {
    console.log(c)
}

for(var c = <= 5;c++){
    console.log(c)
}

console.log('vai comecar...')
for(var c = ; c <= 4; c++){
    console.log(c)
}
console.log('FIM!')

-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----
execicio tabuada

function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    window.alert('[ERRO] por favor, digite um número!')  
  } else {
    let n = Number(num.value)
    let c = 1 //contador "Enqaunto c = contador for menor igual a 10 while (c <= 10){"
    tab.innerHTML = '' // limpa campo do select após inserir outro número para tabuada.
    while (c <= 10){ // contador da pra fazer com for.
        let item = document.createElement('option') // cria as linhas dentro do select o option é uma linha.
        item.text = `${n} x ${c} = ${n*c}` // calculo para efetuada a tabuada (n x c) = (N*c).
        item.value = `tab${c}` // serve pro php pra poder selecionar a linha e saber qual delas é ao se clicacada.
        tab.appendChild(item) // 
        c++ // incremento do c vai pra próxima 1x1 1x2
    }
  }
} 

-----///------///------///----------///------///------///----------///------///------///----------///------///------///-----