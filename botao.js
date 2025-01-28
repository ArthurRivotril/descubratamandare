
let matches = [];
let currentIndex = -1;


function updateMatches(newMatches) {
    matches = newMatches.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        return rectA.top - rectB.top; // Ordena apenas pela posição vertical
    });

    currentIndex = matches.length > 0 ? 0 : -1;

 
    if (matches.length > 0) {
        scrollToMatch();
    } else {
        alert("Nenhuma palavra encontrada!");
    }
}


function scrollToMatch() {
    if (matches.length > 0 && currentIndex >= 0) {
        const currentElement = matches[currentIndex];
        currentElement.scrollIntoView({ behavior: "smooth", block: "center" });

       
        currentElement.style.border = "2px solid #007bff";
        setTimeout(() => {
            currentElement.style.border = "none";
        }, 1000);
    }
}


document.getElementById("next-button").addEventListener("click", () => {
    if (matches.length > 0) {
        currentIndex = (currentIndex + 1) % matches.length; // 
        scrollToMatch();
    }
});


document.getElementById("prev-button").addEventListener("click", () => {
    if (matches.length > 0) {
        currentIndex = (currentIndex - 1 + matches.length) % matches.length;
        scrollToMatch();
    }
});


document.addEventListener("DOMContentLoaded", () => {
  
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", () => {
        const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();
        if (searchTerm) {
            const results = searchEntirePage(searchTerm); 
            updateMatches(results.map(res => res.element));
        }
    });
});