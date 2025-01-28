// Variáveis para os resultados encontrados e o índice atual
let matches = [];
let currentIndex = -1;

// Atualiza a lista de elementos encontrados na busca
function updateMatches(newMatches) {
    // Ordena os resultados apenas pela posição vertical
    matches = newMatches.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        return rectA.top - rectB.top; // Ordena apenas pelo eixo vertical (top)
    });

    currentIndex = matches.length > 0 ? 0 : -1;

    // Se houver resultados, rola para o primeiro
    if (matches.length > 0) {
        scrollToMatch();
    }
}

// Função para rolar até o resultado atual destacado
function scrollToMatch() {
    if (matches.length > 0 && currentIndex >= 0) {
        const currentElement = matches[currentIndex];
        currentElement.scrollIntoView({ behavior: "smooth", block: "center" });
        // Adiciona um destaque temporário no elemento atual
        currentElement.style.border = "2px solid #007bff";
        setTimeout(() => {
            currentElement.style.border = "none";
        }, 1000);
    }
}

// Evento para o botão "Próximo"
document.getElementById("next-button").addEventListener("click", () => {
    if (matches.length > 0) {
        currentIndex = (currentIndex + 1) % matches.length; // Avança no índice
        scrollToMatch();
    }
});

// Evento para o botão "Anterior"
document.getElementById("prev-button").addEventListener("click", () => {
    if (matches.length > 0) {
        currentIndex = (currentIndex - 1 + matches.length) % matches.length; // Retrocede no índice
        scrollToMatch();
    }
});

// Integração com `search.js`: Executa automaticamente quando resultados são encontrados
document.addEventListener("DOMContentLoaded", () => {
    // Função do outro arquivo é chamada aqui
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", () => {
        const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();
        if (searchTerm) {
            const results = searchEntirePage(searchTerm); // Chama função de `search.js`
            updateMatches(results.map(res => res.element)); // Atualiza os matches
        }
    });
});