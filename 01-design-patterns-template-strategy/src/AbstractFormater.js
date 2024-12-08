export default class AbstractFormater {

  //Falta de obrigatoriedade para implementação do método output (LSP)
  //Garantia de que a classe não seja instânciada diretamente
  //Garantia de que qualquer subclasse que herde AbstractFormater implemente o método output
  //Com isso garantindo que o método não seja esquecido ou mal implementado nas subclasses através da validação no contrutor
  constructor() {
    if (this.constructor === AbstractFormater) {
      throw new Error("Garante que a classe não seja instânciada diretamente")
    }
    if (typeof this.output !== 'function') {
      throw new Error("Garante que a subclasse implemente o método outpu'")
    }
  }

  output(cities) {
    throw new Error('Should implement output method...');
  }
}