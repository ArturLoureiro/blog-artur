const formCadUsuario = document.getElementById("formCadUsuario") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const txtConfSenha = document.getElementById("txtConfSenha") as HTMLInputElement;
const txtTelefone = document.getElementById("txtTelefone") as HTMLInputElement;
const txtNascimento = document.getElementById("txtNascimento") as HTMLInputElement;
const rdAdmin = document.getElementById("rdEdmin") as HTMLInputElement;
const rdComum = document.getElementById("rdcomum") as HTMLInputElement;
const ckEmail = document.getElementById("ckEmail") as HTMLInputElement;
const ckSms = document.getElementById("ckeSms") as HTMLInputElement;
const txtEstudo = document.getElementById("txtEstudo") as HTMLInputElement;
const slGenero = document.getElementById("slGenero") as HTMLSelectElement;
const flFoto = document.getElementById("flFoto") as HTMLInputElement;
const txtObs = document.getElementById("txtObs") as HTMLTextAreaElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

function exibirMensagem(color: string, msg: string) {
divMensagem.style.color = color;
divMensagem.textContent = msg;
}

function validarSenha(senha: string, confSenha: string): boolean {
if (senha.length < 6) {
exibirMensagem("red", "A senha precisa ter no mínimo 6 caracteres!");
return false;
}

if (senha.length > 15) {
exibirMensagem("red", "A senha precisa ter no máximo 15 caracteres!");
return false;
}

if (senha !== confSenha) {
exibirMensagem("red", "As senhas precisam ser iguais!");
return false;
}

return true;
}

formCadUsuario.addEventListener("submit", (event) => {
event.preventDefault();

const nome = txtNome.value.trim();
const email = txtEmail.value.trim();
const senha = txtSenha.value;
const confSenha = txtConfSenha.value;
const telefone = txtTelefone.value.trim();
const nascimento = txtNascimento.value;
const tipoUsuario = rdAdmin.checked ? "admin" : rdComum.checked ? "comum" : "";
const preferencias: string[] = [];
    
if (ckEmail.checked) {
preferencias.push("email");
}

if (ckSms.checked) {
preferencias.push("sms");
}

const estudo = txtEstudo.value;
const genero = slGenero.value;
const foto = flFoto.files?.[0] ?? null;
const observacao = txtObs.value.trim();

if (!nome) {
exibirMensagem("red", "Preencha seu nome!");
return;
}

if (!email) {
exibirMensagem("red", "Preencha seu E-mail!");
return;
}

if (!senha) {
exibirMensagem("red", "Preencha sua senha!");
return;
}

if (!confSenha) {
exibirMensagem("red", "Confirme sua senha!");
return;
}

if (!validarSenha(senha, confSenha))
return;

if (!telefone) {
exibirMensagem("red", "Preencha seu telefone!");
return;
}

if (!nascimento) {
exibirMensagem("red", "Preencha data de nascimento!");
return;
}

if (!tipoUsuario) {
exibirMensagem("red", "Preencha tipo de usuário!");
return;
}

if (preferencias.length === 0) {
exibirMensagem("red", "Selecione pelo menos uma preferência!");
return;
}

if (!estudo) {
exibirMensagem("red", "Preencha anos de estudo!");
return;
}

if (!genero) {
exibirMensagem("red", "Preencha seu gênero!");
return;
}

if (!foto) {
exibirMensagem("red", "Selecione uma foto de perfil!");
return;
}

if (!observacao) {
exibirMensagem("red", "Preencha o campo de observação!");
return;
}

exibirMensagem("green", "Cadastro realizado com sucesso!");
formCadUsuario.reset();

});