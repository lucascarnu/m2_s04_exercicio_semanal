/*
Crie um array chamado pares que contenha apenas os números pares do array numeros criado no exercício
anterior. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a
operação de filtragem.
*/

document.write('<h3>Exercicio 2</h3><p>No console</p>');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // não comentar

/* 1. COM FUNÇÃO NOMEADA */

let resultado = numeros.filter(filtrarPares);

function filtrarPares(numero) {
  return numero % 2 == 0;
}

console.log(resultado); // [2, 4, 6, 8, 10]

/**************************** OUTRAS FORMAS DE RESOLVER *************************/

/* 2. COM FUNÇÃO ANÔNIMA */

// let resultado = numeros.filter(function (numero) {
//   return numero % 2 === 0;
// });

// console.log(resultado); // [2, 4, 6, 8, 10]

/* 3. COM ARROW FUNCTION */

// let resultado = numeros.filter((numero) => {
//   return numero % 2 == 0;
// });

// console.log(resultado); // [2, 4, 6, 8, 10]

/* 4. COM ARROW FUNCTION SIMPLIFICADO */

// let resultado = numeros.filter((numero) => numero % 2 == 0);

// console.log(resultado); // [2, 4, 6, 8, 10]

/**********************************************************************************/

// Syntax:

// array.filter(function(currentValue, index, arr), thisValue)
