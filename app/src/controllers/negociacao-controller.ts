import { domInjector } from "../decorators/dom-injector.js"
import { inpect } from "../decorators/inspect.js"
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js"
import { DiasDaSemana } from "../enums/dias-da-semana.js"
import { ListaNegociacoes } from "../models/lista-negociacoes.js"
import { Negociacao } from "../models/negociacao.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"
import { NegociacoesService } from "../services/negociacoesService.js"
import { imprimir } from "../utils/imprimir.js"

export class NegociacaoController { 
    @domInjector('#data')
    private _dataInput: HTMLInputElement
    @domInjector('#quantidade')
    private _quantidadeInput: HTMLInputElement
    @domInjector('#valor')
    private _valorInput: HTMLInputElement
    private _negociacoes = new ListaNegociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')
    private negociacoesService = new NegociacoesService()

    constructor() {
        // this._dataInput = document.querySelector('#data') as HTMLInputElement
        // this._quantidadeInput = document.querySelector('#quantidade') as HTMLInputElement
        // this._valorInput = document.querySelector('#valor') as HTMLInputElement
        
    }

    @logarTempoExecucao(true)
    @inpect()
    public adicionar() {
        const negociacao = Negociacao.criarNegociacao(
            this._dataInput.value,
            this._quantidadeInput.value,
            this._valorInput.value
        )
        if(!this.diaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são válidas!')
            return
        }
        
        this.limparFormulario()
        this._negociacoes.adicionar(negociacao)
        this.updateViews()
        
        imprimir(negociacao, this._negociacoes)
    }

    public importarDados(){
        this.negociacoesService.obterNegociacoes()
        .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(
                negociacaoDeHoje => !this._negociacoes.listar().some(
                    negociacaoFromList => negociacaoFromList.isEqual(negociacaoDeHoje)
                )
            )
        })
        .then(negociacoes => {
            for(let negociacao of negociacoes){
                this._negociacoes.adicionar(negociacao)
            }

            this.negociacoesView.update(this._negociacoes)
        })
    }

    private limparFormulario(): void {
        this._dataInput.value = ''
        this._quantidadeInput.value = ''
        this._valorInput.value = ''
        
        this._dataInput.focus()
    }

    private updateViews(): void {
        this.negociacoesView.update(this._negociacoes)
        this.mensagemView.update('Negociação realizada com sucesso!')
    }

    private diaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }
}