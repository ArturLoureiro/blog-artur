import {Produto} from "./classes/produto.js";

const formCadProduto = document.getElementById("formCadProduto") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtValor = document.getElementById("txtValor") as HTMLInputElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

function exibirMensagem(color: string, msg: string) {
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