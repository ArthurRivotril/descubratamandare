document.getElementById("search-button").addEventListener("click", function () {
    const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();

    // Remove destaques anteriores e a mensagem de "Palavra não encontrada"
    removeHighlights();
    removeNoResultsMessage();

    if (searchTerm !== "") {
        // Chama a função de busca para encontrar o termo em toda a página
        const results = searchEntirePage(searchTerm);

        if (results.length > 0) {
            // Destaca todos os elementos encontrados
            results.forEach(result => {
                result.element.style.backgroundColor = "#ff0"; // Destaque em amarelo
                result.element.scrollIntoView({ behavior: "smooth", block: "center" }); // Foca no elemento encontrado
            });
        } else {
            // Exibe mensagem visual quando a palavra não é encontrada
            displayNoResultsMessage("Palavra não encontrada!");
        }
    }
});

// Função para buscar o termo em toda a página
function searchEntirePage(searchTerm) {
    const elements = document.querySelectorAll("*"); // Seleciona todos os elementos da página
    const results = [];

    elements.forEach(element => {
        // Verifica se o elemento contém texto visível
        if (element.childNodes.length === 1 && element.nodeType === Node.ELEMENT_NODE) {
            const content = element.textContent.toLowerCase();
            if (content.includes(searchTerm)) {
                results.push({ element });
            }
        }
    });

    return results; // Retorna todos os elementos encontrados
}

// Função para exibir mensagem quando não há resultados
function displayNoResultsMessage(message) {
    const searchBox = document.querySelector(".search-container");
    let errorMsg = document.createElement("p");
    errorMsg.id = "no-results";
    errorMsg.textContent = message;
    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "14px";
    errorMsg.style.marginTop = "10px";
    searchBox.appendChild(errorMsg);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        removeNoResultsMessage();
    }, 3000);
}

// Função para remover a mensagem "Palavra não encontrada"
function removeNoResultsMessage() {
    const errorElement = document.getElementById("no-results");
    if (errorElement) {
        errorElement.remove();
    }
}

// Remove destaques anteriores
function removeHighlights() {
    const elements = document.querySelectorAll("*");
    elements.forEach(element => {
        element.style.backgroundColor = ""; // Remove cor de fundo
    });
}

// Ativa a busca com o Enter
document.getElementById("search-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        document.getElementById("search-button").click();
    }
});