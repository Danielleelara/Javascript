// Manipulando arrays 

const frutas = [ 'maçã', 'pera'];

frutas.unshift('Acerola')
frutas.pop()

// console.log(frutas)

const numeros = [1,2,3,4,5,6,7,8,9,10];

const pares = numeros.filter((number) => number % 2 === 0)

// console.log(pares)

const frase = '  Olá, mundo!    ';

const palavras = frase.trim()

// console.log(palavras)

const frase2 = 'Javascript é incrível!'

// console.log(frase2.startsWith('Java'))
// console.log(frase2.endsWith('!'))

// const idade = 15;

// if (idade < 18) {
//   throw new Error('Você é menor de 18 anos')
// }

// try {
//   const idade = 15;
//   if (idade < 18) {
//   throw new Error('Você é menor de 18 anos')
//   }
// } catch (error) {
//   console.log(error.message)
// }


// Callback => funcao

// function cumprimentar(nome, callback){
//   console.log('Olá', nome)
//   callback();
// }

// function teste(){
//   console.log('função callback')
// }

// cumprimentar('Maria', teste)

// cumprimentar('Danielle', function () {
//   console.log('Olá, tudo bem?')
// });
  
// function mostrarMensagem () {
//   console.log('Essa mensagem só aparecerá depois de 3 segundos')
// }

// setTimeout( mostrarMensagem, 3000)

// Promisses

const promessa = new Promise((resolve, reject) => {

  const condicao = true;

  if(condicao){
    resolve('A condição é verdadeira')
  }else{
    reject('A condição é falsa')
  }

})

const promessa2 = Promise.resolve(3)

// promessa.then((messagem)=> {
//   console.log(messagem)
// }).catch((erro)=> {
//   console.log(erro)
// })

// Promise.all([promessa, promessa2]).then((valores)=> console.log(valores))

async function obterValor() {
  const promessa = new Promise ((resolve, reject)=> {
    setTimeout(()=> resolve('Valor obtido'), 2000)
  })

  const valor = await promessa
  console.log(valor)
}

// obterValor()

async function obterValorComErro() {
  try {
    const promessa = new Promise ((resolve, reject)=> {
      setTimeout(()=> reject('Valor com erro'), 2000)
    })
    const valor = await promessa
    console.log(valor)
    
  } catch (error) {
    console.log(error)
  }
}
// obterValorComErro()

const json = '{"nome": "João", "idade": 30 }'

console.log(json, typeof json)

console.log(JSON.parse(json), typeof JSON.parse(json))


