// Exercícios de fundamentos

// Exercício 1. Criar um script que imprima "Olá Mundo" no console.

console.log("Olá Mundo!");

// Exercício 2. Conversão de tipos. 
// Dado um valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.

let string = "1234";
let result = Number(string)

console.log(typeof result)

// Exercício 3. Manipuação de strings
// Dado uma string "Javascript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase. 

let frase = "Javascript é incrível";

let quantasLetras = frase.replaceAll(' ', '');
let quantasPalavras = frase.split(' ');

console.log('Quantas letras?', quantasLetras.length)
console.log('Quantas palavras?', quantasPalavras.length)

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

let arr = ['Lara', 'Danielle', 'Carlos', 'Eugênio', 'Ciene'];

for(i = 0; i < arr.length ; i++) {
  console.log(arr[i])
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30").
//  A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM").
//  Use o objeto Math para auxiliar nesta conversão. 
// Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function horaFormatada (hora) {

  let [hours, minutes] = hora.split(':');

  if (hours < 12) {
    hours = `${hours}:${minutes} am`;
    console.log(hours)
  } else {
    hours = `${hours % 12}:${minutes} pm`;
    console.log(hours)
  }

}

horaFormatada('22:30')