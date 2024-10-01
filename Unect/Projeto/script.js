document.addEventListener("DOMContentLoaded", function() {
    const images = [
        {
            src: 'imagens/Brigadeiro 1.png',
            title: 'Brigadeiro de capuccino',
            description: 'O brigadeiro de cappuccino é uma das guloseimas que enfeitam o balcão da doceria...'
        },
        {
            src: 'imagens/chocolate cake 1.png',
            title: 'Bolo de chocolate',
            description: 'O bolo de chocolate é uma das sobremesas mais pedidas da Cafeteira...'
        },
        {
            src: 'imagens/Mask group.png',
            title: 'Pão de Mel',
            description: 'O pão de mel é um dos doces mais tradicionais que temos...'
        },
        {
            src: 'imagens/sorvete.png.png',
            title: 'Sorvete de Café',
            description: 'O sorvete em versão de café pode ser aproveitado sozinho ou com um pedacinho de bolo no fim..'
        }
    ];

    let currentIndex = 0;
    const totalItemsPerView = 3; // Mostrar 3 itens ao mesmo tempo

    // Referências aos elementos HTML
    const carouselImage1 = document.getElementById('carousel-image1');
    const carouselImage2 = document.getElementById('carousel-image2');
    const carouselImage3 = document.getElementById('carousel-image3');
    const carouselTitle1 = document.getElementById('carousel-title1');
    const carouselTitle2 = document.getElementById('carousel-title2');
    const carouselTitle3 = document.getElementById('carousel-title3');
    const carouselDescription1 = document.getElementById('carousel-description1');
    const carouselDescription2 = document.getElementById('carousel-description2');
    const carouselDescription3 = document.getElementById('carousel-description3');

    // Função para atualizar o conteúdo do carrossel
    function updateCarousel() {
        const index1 = currentIndex % images.length;
        const index2 = (currentIndex + 1) % images.length;
        const index3 = (currentIndex + 2) % images.length;

        // Atualizar imagem 1
        carouselImage1.src = images[index1].src;
        carouselTitle1.textContent = images[index1].title;
        carouselDescription1.textContent = images[index1].description;

        // Atualizar imagem 2
        carouselImage2.src = images[index2].src;
        carouselTitle2.textContent = images[index2].title;
        carouselDescription2.textContent = images[index2].description;

        // Atualizar imagem 3
        carouselImage3.src = images[index3].src;
        carouselTitle3.textContent = images[index3].title;
        carouselDescription3.textContent = images[index3].description;
    }

    // Função para avançar no carrossel com loop
    document.querySelector('.arrow-right').addEventListener('click', () => {
        currentIndex = (currentIndex + totalItemsPerView) % images.length; // Avançar para o próximo conjunto de imagens
        updateCarousel();
    });

    // Função para voltar no carrossel com loop
    document.querySelector('.arrow-left').addEventListener('click', () => {
        currentIndex = (currentIndex - totalItemsPerView + images.length) % images.length; // Voltar para o conjunto anterior de imagens
        updateCarousel();
    });

    // Inicializar o carrossel com as primeiras imagens
    updateCarousel();
});
