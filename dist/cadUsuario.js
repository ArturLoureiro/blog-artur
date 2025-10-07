const formCadUsuario = document.getElementById("formCadUsuario");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");
const txtTelefone = document.getElementById("txtTelefone");
const txtNascimento = document.getElementById("txtNascimento");
const rdAdmin = document.getElementById("rdEdmin");
const rdComum = document.getElementById("rdcomum");
const ckEmail = document.getElementById("ckEmail");
const ckSms = document.getElementById("ckeSms");
const txtEstudo = document.getElementById("txtEstudo");
const slGenero = document.getElementById("slGenero");
const flFoto = document.getElementById("flFoto");
const txtObs = document.getElementById("txtObs");
const divMensagem = document.getElementById("divMensagem");
function exibirMensagem(color, msg) {
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
}
function validarSenha(senha, confSenha) {
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
    var _a, _b;
    event.preventDefault();
    const nome = txtNome.value.trim();
    const email = txtEmail.value.trim();
    const senha = txtSenha.value;
    const confSenha = txtConfSenha.value;
    const telefone = txtTelefone.value.trim();
    const nascimento = txtNascimento.value;
    const tipoUsuario = rdAdmin.checked ? "admin" : rdComum.checked ? "comum" : "";
    const preferencias = [];
    if (ckEmail.checked) {
        preferencias.push("email");
    }
    if (ckSms.checked) {
        preferencias.push("sms");
    }
    const estudo = txtEstudo.value;
    const genero = slGenero.value;
    const foto = (_b = (_a = flFoto.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
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
export {};
//# sourceMappingURL=cadUsuario.js.map