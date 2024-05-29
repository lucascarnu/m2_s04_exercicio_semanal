/*
Crie um método para a classe Produto chamado de Vender().

Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do
produto. Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade
disponível.

Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.
*/

document.write('<h3>Exercicio 5</h3><p>No console</p>');

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  quantidadeVendida(quantidade) {
    if (quantidade > this.quantidade) {
      console.log('Estoque insuficiente');
      return false;
    } else {
      this.quantidade -= quantidade;
      return true;
    }
  }
}

const produto1 = new Produto('TV', 2500, 3);
console.log(produto1);

const vendaExitosa = produto1.quantidadeVendida(3);
console.log('Venda exitosa:', vendaExitosa);
console.log(produto1);
