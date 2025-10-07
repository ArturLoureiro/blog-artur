import { Produto } from "./classes/produto.js";
const formCadProduto = document.getElementById("formCadProduto");
const txtNome = document.getElementById("txtNome");
const txtValor = document.getElementById("txtValor");
const divMensagem = document.getElementById("divMensagem");
function exibirMensagem(color, msg) {
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
}
formCadProduto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = txtNome.value;
    const valor = Number(txtValor.value);
    if (!nome) {
        exibirMensagem("red", "Preencha o nome do produto!");
        return;
    }
    if (isNaN(valor)) {
        exibirMensagem("red", "Preencha o valor do produto!");
        return;
    }
    const produto = new Produto(nome, valor);
    produto.cadastrar();
    exibirMensagem("green", "Cadastro realizado com sucesso!");
    formCadProduto.reset();
});
//# sourceMappingURL=cadProduto.js.map