import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { ListaNegociacoes } from "../models/lista-negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this._dataInput = document.querySelector('#data');
        this._quantidadeInput = document.querySelector('#quantidade');
        this._valorInput = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = Negociacao.criarNegociacao(this._dataInput.value, this._quantidadeInput.value, this._valorInput.value);
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são válidas!');
            return;
        }
        this.limparFormulario();
        this._negociacoes.adicionar(negociacao);
        this.updateViews();
        console.log(this._negociacoes.listar());
    }
    limparFormulario() {
        this._dataInput.value = '';
        this._quantidadeInput.value = '';
        this._valorInput.value = '';
        this._dataInput.focus();
    }
    updateViews() {
        this.negociacoesView.update(this._negociacoes);
        this.mensagemView.update('Negociação realizada com sucesso!');
    }
    diaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
