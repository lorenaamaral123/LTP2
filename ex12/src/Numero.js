export default class Numero{
    valor;
    constructor(valor){
        this.valor=valor;
    }

    comparar(outroValor){
        if(this.valor > outroValor){
            return "Maior";
            } else if(this.valor < outroValor){
                return "Menor";
            }else{
                return "Igual";
            }
    }
}