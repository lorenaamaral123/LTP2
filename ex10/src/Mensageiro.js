export default class Mensageiro{
    remetente;

    constructor(remetente){
        this.remetente=remetente;
    }

    enviar(destinatario, mensagem){
        console.log(`De: ${destinatario}\nPara: ${this.remetente}\nMensagem: ${mensagem}`)
    }
}