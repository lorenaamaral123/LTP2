export default class Pessoa{
    nome;
    horario;

    constructor(nome, horario){
        this.nome=nome;
        this.horario=horario;
    }

    saudar(){
        if (this.horario >= 5 && this.horario < 11) {
      return `Bom dia, ${this.nome}!`;
    } else if (this.horario >= 11 && this.horario < 18) {
      return `Boa tarde, ${this.nome}!`;
    } else {
      return `Boa noite, ${this.nome}!`;
    }
    }
}