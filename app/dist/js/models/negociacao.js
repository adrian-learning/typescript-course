export class Negociacao {
    constructor({ data, quantidade, valor }) {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() { return new Date(this._data); }
    get volume() { return this.valor * this.quantidade; }
    static criarNegociacao(dataValue, quantidadeValue, valorValue) {
        const exp = /-/g;
        const data = new Date(dataValue.replace(exp, ','));
        const quantidade = parseInt(quantidadeValue);
        const valor = parseFloat(valorValue);
        return new Negociacao({ data, quantidade, valor });
    }
    isEqual(obj) {
        return this.data.getDate() === obj.data.getDate() &&
            this.data.getMonth() === obj.data.getMonth() &&
            this.data.getFullYear() === obj.data.getFullYear();
    }
    toPrint() {
        return `
            Data: ${this._data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
}
//# sourceMappingURL=negociacao.js.map