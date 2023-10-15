const quadrado = (num) => num * num

console.log(quadrado(11))

const mensagem = (nome)=> {
  const cumprimento =  `Olá, ${nome}!`

  return cumprimento
}

console.log(mensagem('Danielle'))

console.log(mensagem('Lara'))

const array1 = [ 1,2,3];
const array2 = [...array1, 4,5,7];

console.log(array2)

const pessoa = {nome: 'Pedro', idade: 15}

const {nome, idade } = pessoa;

console.log(nome, idade)

const saudacaoObjet = {
  teste(){
    console.log('oi')
  }
}

saudacaoObjet.teste()

class Pessoa {
  constructor(nome, idade){
    this.nome = nome,
    this.idade = idade
  }

  falar(){
   console.log('Olá pessoal, meu nome é', this.nome)
  }
}

const Joao = new Pessoa('João', 34)

Joao.falar()

class Funcionario extends Pessoa {
  constructor(nome, idade, salario){
    super(nome, idade);
    this.salario = salario
  }
}