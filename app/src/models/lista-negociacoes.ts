
import { IObjetoModelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes implements IObjetoModelo<ListaNegociacoes> {
    private negociacoes: Array<Negociacao> = []

    public adicionar(item: Negociacao){
        this.negociacoes.push(item)
    }

    public listar(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }

    public toPrint(): string{
        return JSON.stringify(this.listar(), null, 2)
    }

    public isEqual(obj: ListaNegociacoes): boolean {
        return JSON.stringify(this.listar()) === JSON.stringify(obj.listar())
    }
}