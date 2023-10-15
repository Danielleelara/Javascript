const display = document.querySelector('#displayInput');
const botaoIgual = document.querySelector('.igual');
const botaoPonto = document.querySelector('.ponto');
const botoesOperadores = document.querySelectorAll('.operador');
const botoesNumeros = document.querySelectorAll('.num');

let operacaoAtual = '';
let operador = null;
let valorAnterior = '';
let calculando = false;

function atualizaDisplay (){
  display.value = operacaoAtual
}

function insereNumero (evento) {
  if(calculando) {
    operacaoAtual = evento.target.textContent;
    calculando = false
  }else{
    operacaoAtual += evento.target.textContent;
  }
  atualizaDisplay()
}

function inserePonto (evento) {
  if(operacaoAtual.indexOf('.')===-1){
    operacaoAtual += '.';
    atualizaDisplay()
  }
}

function insereOperador (evento){
  if(operacaoAtual !== ''){
    if(!calculando){
      if(operador!== null){
        calcula();
      }
      valorAnterior = operacaoAtual
      operacaoAtual = ''
    }
    operador = evento.target.textContent
  }
}

function calcula(){
  if(operador === '+'){
    let result =  Number(valorAnterior) + Number(operacaoAtual)
    console.log(result)
    operacaoAtual = result
  }
  if(operador === '-'){
      let result =  Number(valorAnterior) - Number(operacaoAtual)
      console.log(result)
      operacaoAtual = result
}
    if(operador === '*'){
        let result =  Number(valorAnterior) * Number(operacaoAtual)
        console.log(result)
        operacaoAtual = result
    }
    if(operador === '/'){
      let result =  Number(valorAnterior) / Number(operacaoAtual)
      console.log(result)
      operacaoAtual = result
    // calculando=true
  atualizaDisplay()
}

// Eventos
botaoPonto.addEventListener("click", inserePonto )
botoesNumeros.forEach(botao => botao.addEventListener('click', insereNumero));
botoesOperadores.forEach(botao=> botao.addEventListener('click', insereOperador));
botaoIgual.addEventListener("click", calcula )}