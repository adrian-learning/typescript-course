import { INegociacoesAPI } from "../interfaces/negociacoes-api.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados').then(res => res.json())
            .then((dados: INegociacoesAPI[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao({ data: new Date(), quantidade: dadoDeHoje.vezes, valor: dadoDeHoje.montante })
                })
            })
    }
}