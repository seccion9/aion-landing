// Datos de las tarjetas
const data = [
    {
        titulo: 'Diseño adaptable a móviles y tabletas',
        descripcion: 'AION está diseñado para ofrecer una experiencia fluida y optimizada en cualquier dispositivo, desde móviles hasta tabletas. Con un diseño adaptable, tus clientes podrán realizar reservas de manera sencilla y rápida desde cualquier lugar, lo que asegura una experiencia sin interrupciones y accesible en todo momento.',
        img: 'img/diseñoAdaptable.jpg'
    },
    {
        titulo: 'Ampliamente personalizable y de fácil integración',
        descripcion: 'AION permite una personalización total según las necesidades de tu negocio. Ya sea que necesites cambiar colores, logos o funcionalidades, la integración con tu sitio web es sencilla y rápida, sin complicaciones técnicas. Esto te permite adaptar la herramienta de gestión a la perfección para que se ajuste a tu marca.',
        img: 'img/personalizable.jpg'
    },
    {
        titulo: 'Soporte técnico personal',
        descripcion: 'Con AION, siempre contarás con soporte técnico personalizado. Nuestro equipo está disponible para ayudarte en la implementación, ajustes y cualquier duda que puedas tener. Nos aseguramos de que la transición a nuestra plataforma sea lo más fluida posible, y que siempre tengas el respaldo que tu negocio necesita.',
        img: 'img/soporte.jpg'
    },
    {
        titulo: 'Interfaz empresarial sencilla',
        descripcion: 'La interfaz empresarial está diseñada para ser intuitiva y fácil de usar. Podrás gestionar tus operaciones de manera eficiente sin necesidad de ser expertos en tecnología. Contará con un panel de control que ofrece una visión clara de todas sus funciones. La interfaz es completamente adaptable a dispositivos móviles y de escritorio, lo que brinda flexibilidad para operar desde cualquier lugar. Con botones y accesos directos personalizados, el manejo de cada aspecto del negocio se simplifica, optimizando tiempo y esfuerzo.',
        img: 'img/interfaz.png'
    }
];


function mostrarTexto(index) {
    const textoSeleccionado = document.getElementById('texto-seleccionado');
    const tituloTexto = document.getElementById('titulo-texto');
    const descripcionTexto = document.getElementById('descripcion-texto');
    const imagenTexto = document.getElementById('imagen-texto');

    // Limpiar los textos en móvil
    document.querySelectorAll('[id^="texto-movil"]').forEach(el => el.classList.add('hidden'));

    // Actualizar el texto en escritorio
    tituloTexto.textContent = data[index].titulo;
    descripcionTexto.textContent = data[index].descripcion;
    imagenTexto.src = data[index].img;
    imagenTexto.classList.remove('hidden');

    // Mostrar el texto en la caja derecha en pantallas grandes
    textoSeleccionado.classList.remove('opacity-0', 'translate-x-full');
    textoSeleccionado.classList.add('translate-x-0', 'opacity-100');

    // Mostrar el texto debajo de la tarjeta seleccionada en móvil
    const textoMovil = document.getElementById(`texto-movil-${index}`);
    textoMovil.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg p-4 mt-2">
            <h3 class="text-xl font-semibold text-gray-600">${data[index].titulo}</h3>
            <p class="text-base mt-2">${data[index].descripcion}</p>
            <img src="${data[index].img}" class="mt-2 w-full h-auto">
        </div>
    `;
    textoMovil.classList.remove('hidden');
}
window.onload = function () {
    if (window.innerWidth > 640) { // Si es escritorio, muestra la primera tarjeta
        mostrarTexto(1);
    }
};
