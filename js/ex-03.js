/*
Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados
que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console.
Use o método map para realizar a criação de um novo array.
*/

document.write('<h3>Exercicio 3</h3><p>No console</p>');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // não comentar

/* 1. COM FUNÇÃO NOMEADA */

let resultado = numeros.map(quadrado);

function quadrado(numero) {
  return numero ** 2;
}

console.log(resultado); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/**************************** OUTRAS FORMAS DE RESOLVER *************************/

/* 2. COM FUNÇÃO ANÔNIMA */

// let resultado = numeros.map(function (numero) {
//   return numero ** 2;
// });

// console.log(resultado); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/* 3. COM ARROW FUNCTION */

// let quadrados = numeros.map((numero) => {
//   return numero ** 2;
// });

// console.log(quadrados); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/* 4. COM ARROW FUNCTION SIMPLIFICADO */

// let quadrados = numeros.map((numero) => numero ** 2);

// console.log(quadrados); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/**********************************************************************************/

// Syntax:

// array.map(function(currentValue, index, arr), thisValue)
