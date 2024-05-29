/*
Crie um array de numeros. Calcule e imprima a soma de todos os elementos do array.
Utilize o reduce para realizar a soma.
*/

document.write('<h3>Exercicio 1</h3><p>No console</p>');
console.log('Exercicio 1');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // não comentar

/* 1. COM FUNÇÃO NOMEADA */

let resultado = numeros.reduce(soma);

function soma(total, numAtual) {
  return total + numAtual;
}

console.log(resultado); // 55

/**************************** OUTRAS FORMAS DE RESOLVER *************************/

/* 2. COM FUNÇÃO ANÔNIMA */

// let resultado = numeros.reduce(function (total, numAtual) {
//   return total + numAtual;
// });

// console.log(resultado); // 55

/* 3. COM ARROW FUNCTION */

// let soma = numeros.reduce((total, numAtual) => {
//   return total + numAtual;
// }, 0);

// console.log(soma); // 55

/* 4. COM ARROW FUNCTION SIMPLIFICADO */

// let soma = numeros.reduce((total, numAtual) => total + numAtual, 0);

// console.log(soma); // 55

/**********************************************************************************/

// Syntax:

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
