/*
Crie um método chamado Repor() dentro da classe Produto.

Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do
produto.
*/
document.write('<h3>Exercicio 6</h3><p>No console</p>');

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  repor(quantidade) {
    this.quantidade += quantidade;
  }
}

const produto1 = new Produto('TV', 2500, 3);
console.log(produto1);

produto1.repor(5);
console.log(produto1);
