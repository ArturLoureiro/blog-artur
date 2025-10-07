const formLogin = document.getElementById("formLogin");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const mensagem = document.getElementById("mensagem");
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const senha = txtSenha.value;
    /*
    
    if (!email || !senha) {
    mensagem.style.color = "red";
    mensagem.textContent = "Preencha todos os campos obrigatorios!";
    
    return;
    
    }
    
    */
    if (!email) {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha seu e-mail!";
    }
    else if (!senha) {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha sua senha!";
    }
    else {
        mensagem.style.color = "red";
        mensagem.textContent = "E-mail ou senha invalidos!";
    }
    if (email == "admin@gmail.com" && senha == "12345") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login realizado com sucesso!";
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1000);
        formLogin.reset();
    }
});
export {};
//# sourceMappingURL=login.js.map