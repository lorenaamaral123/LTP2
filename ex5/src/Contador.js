export default class Contador{
    valor;

    constructor(valor){
        this.valor=0;
    }

    incrementar(){
        this.valor++;
    }

    mostrar(){
        return this.valor;
    }
}