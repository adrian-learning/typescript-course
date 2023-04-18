export class Negociacao {
    private _data: Date
    readonly quantidade: number
    readonly valor: number

    //Destructred Object with typescript
    constructor({data, quantidade, valor}: {data: Date, quantidade: number, valor: number}){
        this._data = data
        this.quantidade = quantidade
        this.valor = valor
    }

    get data(): Date { return new Date(this._data) }
    get volume(): number { return this.valor * this.quantidade }

    public static criarNegociacao(dataValue: string, quantidadeValue: string, valorValue: string){
        const exp = /-/g
        const data = new Date(dataValue.replace(exp,','))
        const quantidade = parseInt(quantidadeValue)
        const valor = parseFloat(valorValue)
        return new Negociacao({data, quantidade, valor})
    }
}
