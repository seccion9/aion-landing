let currentIndex = 0;
const carousel = document.getElementById('carousel');
const totalSlides = document.querySelectorAll('.carousel-item').length;
const dots = document.querySelectorAll('[id^="dot-"]');
let interval;

function updateCarousel() {
    carousel.style.transition = 'transform 1s ease-in-out'; 
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
    resetInterval();
}

function nextSlide() {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateCarousel();
    resetInterval();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetInterval();
}

function startAutoSlide() {
    interval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
}


updateDots();
startAutoSlide();
