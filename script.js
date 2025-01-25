// Seleciona todos os sliders na página
document.querySelectorAll('.slider').forEach((slider) => {
    const sliderContent = slider.querySelector('.slider-content');
    const manualBtns = slider.querySelectorAll('.manual-btn');
    const slides = slider.querySelectorAll('.slide-box');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Função para navegar até um slide específico
    function goToSlide(slideIndex) {
        sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
        updateActiveButton(slideIndex);
        currentSlide = slideIndex;
    }

    // Atualiza o botão ativo
    function updateActiveButton(slideIndex) {
        manualBtns.forEach((btn, index) => {
            btn.classList.toggle('active', index === slideIndex);
        });
    }

    // Evento de clique nos botões manuais
    manualBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide(); // Reseta o temporizador ao usar navegação manual
        });
    });

    // Navegação automática
    let autoSlideTimer;
    function startAutoSlide() {
        autoSlideTimer = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides; // Vai para o próximo slide
            goToSlide(currentSlide);
        }, 2500); // Troca a cada 2,5 segundos
    }

    // Reseta o temporizador para navegação automática
    function resetAutoSlide() {
        clearInterval(autoSlideTimer);
        startAutoSlide();
    }

    // Inicializa o slider
    goToSlide(0);
    startAutoSlide();
});