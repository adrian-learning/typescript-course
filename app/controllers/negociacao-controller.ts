import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController { 
    private _dataInput: HTMLInputElement
    private _quantidadeInput: HTMLInputElement
    private _valorInput: HTMLInputElement

    constructor() {
        this._dataInput = document.querySelector('#data')
        this._quantidadeInput = document.querySelector('#quantidade')
        this._valorInput = document.querySelector('#valor')
    }

    adicionar() {
        const negociacao = this.criarNegociacao()
        this.limparFormulario()
        
        console.log(negociacao)
    }

    private criarNegociacao(): Negociacao {
        const exp = /-/g
        const data = new Date(this._dataInput.value.replace(exp,','))
        const quantidade = parseInt(this._quantidadeInput.value)
        const valor = parseFloat(this._valorInput.value)
        return new Negociacao({data, quantidade, valor})
    }

    private limparFormulario(): void {
        this._dataInput.value = ''
        this._quantidadeInput.value = ''
        this._valorInput.value = ''
        
        this._dataInput.focus()
    }
}