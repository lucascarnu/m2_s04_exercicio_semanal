/*
Crie um método chamado de MostrarEstoque() dentro da classe Produto.

Este método deve exibir uma mensagem parecida com a seguinte:

“O produto CANETA BIC AZUL possui 5 unidades disponíveis”
*/

document.write('<h3>Exercicio 7</h3><p>No console</p>');

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  mostrarEstoque() {
    console.log(`${this.nome} possui ${this.quantidade} unidades disponíveis`);
  }
}

const produto1 = new Produto('TV', 2500, 3);
console.log(produto1);

produto1.mostrarEstoque();
