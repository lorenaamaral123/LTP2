export default class Produto{
    nome;
    preco;
    constructor(nome, preco){
        this.nome=nome;
        this.preco=preco;
    }

    aplicarDesconto(percentual){
         this.preco = this.preco - (this.preco * percentual / 100);
    return `Preço com desconto: ${this.preco}`;
    }
}