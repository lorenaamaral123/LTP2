export default class ContaBancaria{
    titular;
    saldo;

    constructor(titular,saldo){
        this.titular=titular;
        this.saldo=saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        if(this.saldo<valor){
            console.log("saldo insuficiente!");
        }else{
            this.saldo -= valor;
        }
    }
}