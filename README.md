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



extensoes instaladas no vscode
whatch in chrome
node exec

aula009

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