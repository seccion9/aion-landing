document.addEventListener('DOMContentLoaded', () => {
    const videoPromo = document.getElementById('videoPromo');
    const videoCover = document.getElementById('video-cover');
    const videoFrame = document.getElementById('video-frame');
    const playButton = document.getElementById('play-button');

    if (videoPromo && videoCover && videoFrame) {
        // Función para iniciar la transición
        const startTransition = () => {
            // Fade out para la imagen de portada
            videoCover.classList.remove('opacity-100');
            videoCover.classList.add('opacity-0');
            
            // Después de que la imagen de portada desaparezca (500ms)
            setTimeout(() => {
                videoCover.classList.add('hidden'); // Hacer la imagen de portada invisible
                videoFrame.classList.remove('hidden'); // Mostrar el iframe del video
                videoFrame.classList.remove('opacity-0');
                videoFrame.classList.add('opacity-100'); // Fade in para el video
            }, 500); // Sincronizado con el tiempo de la transición de opacidad
        };

        // Al hacer clic en el contenedor o en el botón de play, iniciamos la transición
        videoPromo.addEventListener('click', startTransition);
        playButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se dispare el click en el contenedor
            startTransition();
        });
    }
});