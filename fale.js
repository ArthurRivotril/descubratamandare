document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Olá, meu nome é ${name}. Aqui está a minha mensagem: ${message}`;
    const whatsappLink = `https://wa.me/5581993834466?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, '_blank');
});

document.getElementById('instagram-button').addEventListener('click', function() {
    const instagramProfile = 'https://www.instagram.com/arthur_rivotril/';
    window.open(instagramProfile, '_blank');
});