// Encontrat lagura e altura das tela para podersmo ver a area total em que poderemos instaciar as moscas
//feito atraves do window browser objet model

//porperty = propiedade

let altura = 0
let largura =0
let vidas = 1
let tempo = 5

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

function ajustaTela() {   
    altura = window.innerHeight
    largura = window.innerWidth

    //valores sendo atualzidos pelo evento onresize no body do html
  // console.log(altura +' '+ largura);
   }
ajustaTela()

let cronometro = setInterval(function() {
   tempo -= 1
  

   if (tempo < 0) {
      clearInterval(cronometro)
      clearInterval(criandoMoscas)
      window.location.href = 'vitoria.html'
      } else {
      document.getElementById('cronometro').innerHTML = tempo ;
   }
  
},1000)

//criando posição aleatoria da mosca - ultilizado largura e altura para sempre gerar valores que caibam na tela
// -90 para não criar a imagem fora do limite levando em considereção que ela é indexada no top a esquerda
 async function criaMosca() {

   if (document.getElementById('moscaid')) {
      document.getElementById('moscaid').remove()

      if (vidas>3) {
        window.location.href = 'gameover.html'

      } else{ 
      document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';

      vidas++;
      }
   }

   let posicaoX = Math.floor(Math.random() * largura) - 90
   let posicaoY = Math.floor(Math.random() * altura) - 90
   //para as moscas não sairem da tela caso o valor random - 90 seja inferior a 0
   posicaoX = posicaoX < 0 ? 0 : posicaoX
   posicaoY = posicaoY < 0 ? 0 : posicaoY

   //criando o elemento html para adicionar a pagina
   let mosca = document.createElement('img')
   mosca.src = 'imagens/mosca.png';
   mosca.className = await tamanhoAleatorio() + ' ' + ladoAleatorio()
   mosca.id = 'moscaid'

   mosca.style.left = posicaoX + 'px'
   mosca.style.top = posicaoY + 'px'
   // para atribuir valores de posição o elemento deve ser absoluto

   mosca.style.position = 'absolute'

   mosca.onclick = function() {
           document.getElementById('moscaid').remove()
   }

document.body.appendChild(mosca)

}

 function tamanhoAleatorio() {
   let classe = Math.floor(Math.random() * 3);
   console.log(classe);
   
      switch (classe) {
         case 0:
            return 'mosca1'
         
            case 1:
         return 'mosca2'
         
         case 2:
            return 'mosca3'

           
      }

}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);
   console.log(classe);
   
      switch (classe) {
         case 0:
            return 'ladoA'
         
            case 1:
         return 'ladoB'
               
      }

}

