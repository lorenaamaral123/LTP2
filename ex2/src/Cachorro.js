export default class Cachorro{
    nome;
    raca;
    constructor(nome, raca){
        this.nome=nome;
        this.raca=raca;
    }

    latir(){
        return "Au au!"
    }
}