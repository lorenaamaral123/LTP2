import ContaBancaria from "./ContaBancaria.js";

const conta1=new ContaBancaria('lorena',0);

conta1.depositar(500);

conta1.sacar(200);

console.log(conta1.saldo);
