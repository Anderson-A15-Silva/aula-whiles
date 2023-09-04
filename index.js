
// Anotações
/*
let i = 0;

while(i < 10) {
 console.log(i);
    i++; // -- contagem regressiva
}
*/


// incremento ++
// decremento --
// i = i+1 // i é a variável, outro exemplo: estomago++


/*
let estomago = 0;

while(estomago < 100) {
    console.log(estomago);
    estomago = estomago + 10;
}
*/


// Exercício 1 (Explicação)
/*
let numeros = [];

const chamarPrompt = () => {
    const numero = Number(prompt("Digite um número:"));
    numeros.push(numero);
}

while (!numeros.includes(0)) {
 chamarPrompt();
}

if (numeros.includes(0)) {
    let i = 0;
    let soma = 0;
    while (i < numeros.length - 1) {
     soma = soma + numeros[i];
     i++;
    }
 console.log(soma);
}
*/


// Anotações
/*
for (let estomago = 0; estomago < 10; estomago++) {
    console.log(estomago)
}
*/


// Exercício 2
/*
const numeros = [11, 15, 18, 14, 12, 13]

function devolveMaiorNumero(array) {
 let maiorNumero = 0;
 for (let i = 0; i < array.length; i++) {
  let numeroAtual = array[i]
  console.log(numeroAtual);

  if (numeroAtual >= maiorNumero) {
   maiorNumero = numeroAtual;
   console.log("maior", maiorNumero);
  }
 }
 console.log(`O maior número do array é ${maiorNumero}`);
}

devolveMaiorNumero(numeros);
*/


// Anotações
/*
const numeros = [14, 67, 89, 15, 23]

for (let numero of numeros) {
 console.log(numero);
}
*/


// Exercício 3
/*
const arrayPalavras = [`Oi`, `sumido`, `tudo`, `bem?`, `Saudades`];
mensagem = "";

for (let palavra of arrayPalavras) {
 mensagem += palavra + ` `; // ou `${palavra} `
}

console.log(mensagem);
*/

