var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inpect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { ListaNegociacoes } from "../models/lista-negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { NegociacoesService } from "../services/negociacoesService.js";
import { imprimir } from "../utils/imprimir.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesService = new NegociacoesService();
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
        imprimir(negociacao, this._negociacoes);
    }
    importarDados() {
        this.negociacoesService.obterNegociacoes()
            .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => !this._negociacoes.listar().some(negociacaoFromList => negociacaoFromList.isEqual(negociacaoDeHoje)));
        })
            .then(negociacoes => {
            for (let negociacao of negociacoes) {
                this._negociacoes.adicionar(negociacao);
            }
            this.negociacoesView.update(this._negociacoes);
        });
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
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "_dataInput", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "_quantidadeInput", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "_valorInput", void 0);
__decorate([
    logarTempoExecucao(true),
    inpect()
], NegociacaoController.prototype, "adicionar", null);
//# sourceMappingURL=negociacao-controller.js.map