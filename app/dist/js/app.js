import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw new Error(`Formulário nulo - recarregue a página`);
}
const btnImportar = document.querySelector('#btn-importar');
if (btnImportar) {
    btnImportar.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw new Error('Botão importar não encontrado.');
}
//# sourceMappingURL=app.js.map