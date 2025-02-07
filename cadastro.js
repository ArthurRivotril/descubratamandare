document.getElementById("btnEscolherPlano").addEventListener("click", function() {
    let plano = document.getElementById("plano").value;
    if (plano === "") {
        alert("Por favor, selecione um plano.");
        return;
    }

    document.getElementById("formulario").classList.remove("hidden");

    let botao = document.getElementById("btnAcao");
    let extras = document.getElementById("extras");

    if (plano === "Basico") {
        botao.textContent = "Enviar";
        botao.onclick = enviarWhatsApp;
        extras.classList.add("hidden");
    } else {
        botao.textContent = "Enviar";
        botao.onclick = enviarWhatsApp;
        extras.classList.remove("hidden");
    }
});

function enviarWhatsApp() {
    let plano = document.getElementById("plano").value;
    let nome = document.getElementById("nome").value;
    let instagram = document.getElementById("instagram").value;
    let telefone = document.getElementById("telefone").value;
    let nincho = document.getElementById("nincho").value; // Capturando o nicho

    let mensagem = `Olá! Fiz o cadastro no plano *${plano}* da Descubra Tamandaré.%0A%0A*Nome:* ${nome}%0A*Instagram:* ${instagram}%0A*Telefone:* ${telefone}%0A*Nicho:* ${nincho}`; // Adicionando o nicho na mensagem

    if (plano !== "Basico") {
        let email = document.getElementById("email").value;
        let endereco = document.getElementById("endereco").value;
        let descricao = document.getElementById("descricao").value;

        mensagem += `%0A*E-mail:* ${email}%0A*Endereço:* ${endereco}%0A*Descrição:* ${descricao}`;
    }

    window.location.href = `https://wa.me/5581993834466?text=${mensagem}`;
}