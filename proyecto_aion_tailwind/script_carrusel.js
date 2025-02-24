let currentIndex = 0;
    const carousel = document.getElementById('carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const dots = document.querySelectorAll('[id^="dot-"]');

    function updateCarousel() {
        carousel.style.transform = `translateX(${-100 * currentIndex}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('bg-black', 'opacity-100');
                dot.classList.remove('opacity-50');
            } else {
                dot.classList.remove('bg-black', 'opacity-100');
                dot.classList.add('opacity-50');
            }
        });
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Inicializar la guía de puntos
    updateDots();