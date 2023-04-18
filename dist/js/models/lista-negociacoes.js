export class ListaNegociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(item) {
        this.negociacoes.push(item);
    }
    listar() {
        return this.negociacoes;
    }
}
