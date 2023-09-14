
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


// Anotações
/*
const usuarios = [
    {name: `Rafael`, age: 36},
    {name: `Anderson`, age: 15},
]

for (usuario of usuarios) {
    console.log(usuario.name); // ou console.log(`Nome: ${usuario.name} - Idade ${usuario.age}`)
}
*/



// Exercícios de Interpretação de Códigos

// Exercício 1
/*
Resposta:
O código é repetido adicionando o `valor` e o `i` e os exibindo no final, como os valores menores que 5 são 1, 2, 3 e 4
eles são somados, encerrando ao chegar no cinco.
*/

// Exercício 2
/*
Resposta A:
Vai ser impresso no console os números  18, 19, 21, 23, 25, 27 e 30 por eles atenderem a condição.

Resposta B:
Primeiramente, é possível encontrar o índice através do length (-1  para saber o índice do último elemento dentro
do array), entretanto, não é suficiente através do `for... of...`, preisando do for.


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
 for (let i = 0; i < 18; i++) {
  console.log(i)
	}
*/

// Exercício 3
/*
Resposta:
*
**
***
****

Isto será exibido por causa das condições que, neste caso, limitam até o número 4 o 'quantidadeAtual', com o
+1 colocado depois o resultado final é quatro asteriscos.
*/

// Exercício 1
// Resposta A:
/*
const perguntaBichinho = Number(prompt("Quantos animais de estimação você tem?"));
const respostaUsuario = perguntaBichinho;
let arrayBichinhos = [];
const tamanhoArray = console.log(arrayBichinhos.length)
*/

// Resposta B:
/*
if (respostaUsuario === 0) {
      console.log("Que pena! Você pode adotar um pet!");
   } else {
    for (i = 0; i < respostaUsuario; i++) {
    const nomeBichinhos = prompt("Qual o nome do seu animal de estimação?");
    arrayBichinhos.push(nomeBichinhos);
    }
    console.log(arrayBichinhos);
    }
*/


// console.table
// Exercício 2

// Resposta A
/*
let arrayOriginal = [18, 28, 13, 24, 23, 15];

const exercicioA = () => {
    for (let numero of arrayOriginal)
    console.log(numero)
}

exercicioA()
*/

// Resposta B:
/*
let arrayOriginal = [18, 28, 13, 24, 23, 15];

const exercicioB = () => {
    for (i = 0; i < arrayOriginal.length; i++) {
     const divisao = arrayOriginal[i] / 10
     console.log(divisao);
}
}

exercicioB()
*/

// Resposta C:
/*
let arrayOriginal = [18, 28, 13, 24, 23, 15];
let novoArray = [];


const exercicioC = () => {
    for (let number of arrayOriginal) {
        if (number % 2 === 0) {
            novoArray.push(number)
        }
    }

    console.log(novoArray)
}

exercicioC()
*/

// Resposta D:
/*
const exercicioD = () => {
 const numeros = [18, 28, 13, 24, 23, 15]
 for (let i = 0; i < numeros.length; i++) {
    console.log(`O elemento do índex ${i} é: ${numeros[i]}`)
}
*/


// Anotações
/*
const numerosDois = [12, 342, 43, 52, 54]
for (let numero of numeros) {
 // const indice = numeros.indexOf(numero)
 console.log(`O número de índice ${} é: ${}`)
}
*/

// Anotações
/*
const codigo = 10
const codigoCompleto = codigo.padEnd(5, "0");
console.log(codigoCompleto.length)
*/

// variavel lista ajustar
// prompt("Escreva\num numero") \n quebra de linha
// use a `` para usar o espaço depois e dar a quebra de linha
// default /  nada retornar ao menu

// Resposta E (Inconclusivo):
/*
let arrayOriginal = [18, 28, 13, 24, 23, 15];

const exercicioC = () => {
    let maiorNumero = 0;
    let menorNumero = 0;

    const conversao = () => {
    for(let i = 0; i < arrayOriginal.length; i++) {
        let numeroAtual = arrayOriginal[i]
        if(numeroAtual >= maiorNumero) {
        maiorNumero = numeroAtual;
        } else {
          menorNumero = numeroAtual;
        }
   }

    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}.`)
}
conversao(arrayOriginal)
}
*/