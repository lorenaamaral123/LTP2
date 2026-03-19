export default class Aluno{
    nome;
    curso;

    constructor(nome, curso){
        this.nome=nome;
        this.curso=curso;
    }

    apresentar(){
        return `Olá, meu nome é ${this.nome} e curso ${this.curso}`
    }
}