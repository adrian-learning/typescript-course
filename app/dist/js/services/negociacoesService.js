import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados').then(res => res.json())
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao({ data: new Date(), quantidade: dadoDeHoje.vezes, valor: dadoDeHoje.montante });
            });
        });
    }
}
//# sourceMappingURL=negociacoesService.js.map