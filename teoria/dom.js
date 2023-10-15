// const elementoPorId = document.getElementById('meuId')

// console.log(elementoPorId)

// const elementoPorId2 = document.querySelector('#meuId')

// console.log(elementoPorId2)


// const elementoPorId3 = document.getElementsByClassName('minhaClasse')

// console.log(elementoPorId3)

// const elementoPorId4 = document.querySelector('.minhaClasse')

// console.log(elementoPorId4)

// const elementoPorId5 = document.querySelector('.minhaClasse')

// // Manipular constúdo de texto

// const element = document.querySelector('.minhaClasse')

// element.textContent= 'deu certo'

// // Trabalhando com atributos

// const link = document.querySelector("a")

// link.setAttribute("href", "https://horadecodar.com.br/cursos")

// console.log(link.getAttribute("href"))
// link.removeAttribute('target')
// console.log(link)
// console.log(link.hasAttribute("target"))

// const elementocss = document.querySelector('#meuId')

// elementocss.classList.add('novaClasse')

// elementocss.classList.remove('minhaClasse')

// elementocss.classList.toggle('outraClasse')

// elementocss.classList.toggle('outraClasse')

// elementocss.style.color = 'blue'
// elementocss.style.background = 'pink'

// // navegação entre nós

const elemento9 = document.querySelector('#meuInput')

const pai = elemento9.parentNode

console.log(pai)

const primeiroFilho = pai.firstChild

console.log(primeiroFilho)

const lastFilho = pai.lastChild

console.log(lastFilho)

// Manipulação de estrutura do DOM

// const novoElemento = document.createElement("div");

// novoElemento.textContent = 'Minha div de Javascript';

// document.body.appendChild(novoElemento);

// novoElemento.classList.toggle('novaClasse')
// novoElemento.style.color = 'blue'

// console.log(novoElemento)

// document.body.insertBefore(novoElemento, pai)
// document.body.removeChild(elementoPorId)

const botao = document.querySelector('button')

botao.addEventListener('click', function(){
  console.log('Botão clicado')
})

// const elemento10 = document.querySelector('#meuFormulario')

// elemento10.addEventListener("mouseover", function(){
//   console.log('O mouse passou aqui!')
// })

// const elemento11 = document.querySelector('#meuInput')

// elemento11.addEventListener("keydown", function(){
//   console.log('Tecla pressionada!')
// })

// const elemento11 = document.querySelector('form')

// elemento11.addEventListener("submit", function(event){
//   event.preventDefault()
//   console.log('O formulário foi enviado!')
// })

document.querySelector('#elementoPai').addEventListener('click', function(event){
  console.log('Clique capturado no pai')
})

// document.querySelector('#elementoFilho').addEventListener('click', function(event){
//   event.stopPropagation()
//   console.log('Clique capturado no filho')
// });

// document.querySelector('#meuLink').addEventListener('click', function (event){
//   event.preventDefault()
//   console.log('cliquei no link do google')
// })

document
  .querySelector('#elementoPai')
  .addEventListener('click', function (event){
    if(event.target.matches('.classeDosFilhos')){
      console.log('Evento delegado para o filho')
    }
})











