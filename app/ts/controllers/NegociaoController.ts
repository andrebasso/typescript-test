class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuatidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector("#data");
    this._inputQuatidade = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this._inputValor = <HTMLInputElement>document.querySelector("#valor");
  }

  adiciona(event: Event) {
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ".")),
      parseInt(this._inputQuatidade.value),
      parseFloat(this._inputValor.value)
    );
    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso!");
  }
}
