import { escapar } from "../decorators/escapar.js"
import { ListaNegociacoes } from "../models/lista-negociacoes.js"
import { View } from "./view.js"

export class NegociacoesView extends View<ListaNegociacoes> {
   
    @escapar
    protected template(model: ListaNegociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.listar().map(item => `
                        <tr>
                            <td>${Intl.DateTimeFormat().format(item.data)}</td>
                            <td>${item.quantidade}</td>
                            <td>${item.valor}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `
    }

    public update(model: ListaNegociacoes): void{
        this.elemento.innerHTML = this.template(model)
    }
}