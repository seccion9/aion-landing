let tarjetaSeleccionada = null; // Variable para rastrear la tarjeta seleccionada

function mostrarTexto(cardNumber) {
    const textoSeleccionado = document.getElementById('texto-seleccionado');
    const tituloTexto = document.getElementById('titulo-texto');
    const descripcionTexto = document.getElementById('descripcion-texto');
    const imagenTexto = document.querySelector('#texto-seleccionado img');

    // Si el usuario hace clic en la misma tarjeta, no hacer nada
    if (tarjetaSeleccionada === cardNumber) {
        return;
    }

    // Actualizar la tarjeta seleccionada
    tarjetaSeleccionada = cardNumber;

    // Primero, agregar la animación de salida
    textoSeleccionado.classList.remove('translate-x-0', 'opacity-100'); 
    textoSeleccionado.classList.add('translate-x-full', 'opacity-0'); 

    // Esperar un tiempo para que la animación de salida termine antes de actualizar el contenido
    setTimeout(function() {
        // Actualizar el título, el texto y la imagen según la tarjeta seleccionada
        if (cardNumber === 1) {
            tituloTexto.textContent = 'Diseño adaptable a móviles y tabletas';
            descripcionTexto.textContent = 'AION está diseñado para ofrecer una experiencia fluida y optimizada en cualquier dispositivo, desde móviles hasta tabletas. Con un diseño adaptable, tus clientes podrán realizar reservas de manera sencilla y rápida desde cualquier lugar, lo que asegura una experiencia sin interrupciones y accesible en todo momento.';
            imagenTexto.src = 'img/diseñoAdaptable.jpg'; 
        } else if (cardNumber === 2) {
            tituloTexto.textContent = 'Ampliamente personalizable y de fácil integración';
            descripcionTexto.textContent = 'AION permite una personalización total según las necesidades de tu negocio. Ya sea que necesites cambiar colores, logos o funcionalidades, la integración con tu sitio web es sencilla y rápida, sin complicaciones técnicas. Esto te permite adaptar la herramienta de gestión a la perfección para que se ajuste a tu marca.';
            imagenTexto.src = 'img/personalizable.jpg'; 
        } else if (cardNumber === 3) {
            tituloTexto.textContent = 'Soporte técnico personal';
            descripcionTexto.textContent = 'Con AION, siempre contarás con soporte técnico personalizado. Nuestro equipo está disponible para ayudarte en la implementación, ajustes y cualquier duda que puedas tener. Nos aseguramos de que la transición a nuestra plataforma sea lo más fluida posible, y que siempre tengas el respaldo que tu negocio necesita.';
            imagenTexto.src = 'img/soporte.jpg'; 
        } else if (cardNumber === 4) {
            tituloTexto.textContent = 'Interfaz empresarial sencilla';
            descripcionTexto.textContent = 'La interfaz empresarial está diseñada para ser intuitiva y fácil de usar. Podrás gestionar tus operaciones de manera eficiente sin necesidad de ser expertos en tecnología. Contará con un panel de control que ofrece una visión clara de todas sus funciones. La interfaz es completamente adaptable a dispositivos móviles y de escritorio, lo que brinda flexibilidad para operar desde cualquier lugar. Con botones y accesos directos personalizados, el manejo de cada aspecto del negocio se simplifica, optimizando tiempo y esfuerzo.';
            imagenTexto.src = 'img/interfaz.png'; 
        }

        textoSeleccionado.classList.remove('translate-x-full', 'opacity-0');
        textoSeleccionado.classList.add('translate-x-0', 'opacity-100');
    }, 500); 
}

window.onload = function () {
    mostrarTexto(1);
};



