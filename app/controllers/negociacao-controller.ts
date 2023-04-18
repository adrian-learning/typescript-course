import { DiasDaSemana } from "../enums/dias-da-semana.js"
import { ListaNegociacoes } from "../models/lista-negociacoes.js"
import { Negociacao } from "../models/negociacao.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController { 
    private _dataInput: HTMLInputElement
    private _quantidadeInput: HTMLInputElement
    private _valorInput: HTMLInputElement
    private _negociacoes = new ListaNegociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this._dataInput = document.querySelector('#data') as HTMLInputElement
        this._quantidadeInput = document.querySelector('#quantidade') as HTMLInputElement
        this._valorInput = document.querySelector('#valor') as HTMLInputElement
      
    }

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
        console.log(this._negociacoes.listar())
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