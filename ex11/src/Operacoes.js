export default class Operacoes {

  calcular(a, b, operacao) {
    if (operacao == "soma") {
      return `${a} + ${b} = ${a+b}`;
    } 
    else if (operacao == "subtrai") {
      return `${a} - ${b} = ${a-b}`;
    } 
    else if (operacao == "multiplica") {
      return `${a} x ${b} = ${a*b}`;
    } 
    else if (operacao == "divide") {
      if (b == 0) {
        return "Erro: divisão por zero";
      }
      return `${a} / ${b} = ${a/b}`
    } 
    else {
      return "Operação inválida";
    }
  }
}