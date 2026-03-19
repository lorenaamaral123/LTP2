export default class Produto {
    nome;
    preco;

     constructor(nome, preco){
        this.nome=nome;
        this.preco=preco;
     }

    estaCaro(){
        if(this.preco>100){
            return true;
        }
    }
}