function toggleTexto() {
    var texto = document.querySelector(".texto-completo");
    var botao = document.querySelector(".botao");

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "inline";
        botao.textContent = "Ler menos";
    } else {
        texto.style.display = "none";
        botao.textContent = "Ler mais";
    }
}