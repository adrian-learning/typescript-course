import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes {
    private negociacoes: Array<Negociacao> = []

    public adicionar(item: Negociacao){
        this.negociacoes.push(item)
    }

    public listar(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }
}