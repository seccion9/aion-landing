document.addEventListener('DOMContentLoaded', () => {
    const videoPromo = document.getElementById('videoPromo');
    const textOverlay = document.getElementById('textOverlay');

    if (videoPromo && textOverlay) { 
        // Mostrar el texto al hacer hover sobre el video
        videoPromo.addEventListener('mouseenter', () => {
            textOverlay.classList.remove('opacity-0');
            textOverlay.classList.add('opacity-100');
        });

        // Ocultar el texto al quitar el mouse del video
        videoPromo.addEventListener('mouseleave', () => {
            textOverlay.classList.remove('opacity-100');
            textOverlay.classList.add('opacity-0');
        });

        // Ocultar el texto al hacer clic en el video
        videoPromo.addEventListener('click', () => {
            textOverlay.classList.remove('opacity-100');
            textOverlay.classList.add('opacity-0');
        });
    }
});

