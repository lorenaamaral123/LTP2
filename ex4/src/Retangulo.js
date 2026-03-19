export default class Retangulo{
   base;
   altura;
   constructor(base,altura){
    this.base=base;
    this.altura=altura;
   } 

   calcularArea(){
    return `Área: ${this.base*this.altura}`
   }
}