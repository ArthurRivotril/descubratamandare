
let matches = [];
let currentIndex = -1;

// Atualiza a lista de elementos encontrados na busca
function updateMatches(newMatches) {
    matches = newMatches.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        return rectA.top - rectB.top; // Ordena apenas pela posição vertical
    });

    currentIndex = matches.length > 0 ? 0 : -1;

    // Se houver resultados, rola para o primeiro
    if (matches.length > 0) {
        scrollToMatch();
    } else {
        alert("Nenhuma palavra encontrada!");
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

// Integração com `search.js`
document.addEventListener("DOMContentLoaded", () => {
    // Detecta o clique no botão de busca e atualiza os resultados
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", () => {
        const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();
        if (searchTerm) {
            const results = searchEntirePage(searchTerm); // Chama função de busca do `search.js`
            updateMatches(results.map(res => res.element)); // Atualiza os elementos encontrados
        }
    });
});