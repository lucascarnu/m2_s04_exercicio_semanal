/*
Crie uma classe chamada Produto com os seguintes atributos:

nome
preço
quantidade

Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.
*/

document.write('<h3>Exercicio 4</h3><p>No console</p>');

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

const produto1 = new Produto('TV', 2500, 3);
console.log(produto1);
