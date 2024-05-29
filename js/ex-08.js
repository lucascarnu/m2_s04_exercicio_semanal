/*
Crie um método chamada de AtualizarPreco dentro da classe Produto.

Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.
*/

document.write('<h3>Exercicio 8</h3><p>No console</p>');

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  atualizarPreco(novoPreco) {
    this.preco = novoPreco;
  }
}

const produto1 = new Produto('TV', 2500, 3);
console.log(produto1);

produto1.atualizarPreco(2800);
console.log(produto1);
