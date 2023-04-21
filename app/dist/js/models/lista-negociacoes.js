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
    toPrint() {
        return JSON.stringify(this.listar(), null, 2);
    }
    isEqual(obj) {
        return JSON.stringify(this.listar()) === JSON.stringify(obj.listar());
    }
}
//# sourceMappingURL=lista-negociacoes.js.map