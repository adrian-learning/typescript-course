import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._dataInput = document.querySelector('#data');
        this._quantidadeInput = document.querySelector('#quantidade');
        this._valorInput = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.limparFormulario();
        console.log(negociacao);
    }
    criarNegociacao() {
        const exp = /-/g;
        const data = new Date(this._dataInput.value.replace(exp, ','));
        const quantidade = parseInt(this._quantidadeInput.value);
        const valor = parseFloat(this._valorInput.value);
        return new Negociacao({ data, quantidade, valor });
    }
    limparFormulario() {
        this._dataInput.value = '';
        this._quantidadeInput.value = '';
        this._valorInput.value = '';
        this._dataInput.focus();
    }
}
