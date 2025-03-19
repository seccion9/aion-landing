// Datos de las tarjetas
const data = [
    {
        titulo: 'Diseño adaptable a móviles y tabletas',
        descripcion: 'AION está diseñado para ofrecer una experiencia fluida y optimizada en cualquier dispositivo, desde móviles hasta tabletas. Con un diseño adaptable, tus clientes podrán realizar reservas de manera sencilla y rápida desde cualquier lugar, lo que asegura una experiencia sin interrupciones y accesible en todo momento.',
        img: 'img/adaptable.png'
    },
    {
        titulo: 'Ampliamente personalizable y de fácil integración',
        descripcion: 'AION permite una personalización total según las necesidades de tu negocio. Ya sea que necesites cambiar colores, logos o funcionalidades, la integración con tu sitio web es sencilla y rápida, sin complicaciones técnicas. Esto te permite adaptar la herramienta de gestión a la perfección para que se ajuste a tu marca.',
        img: 'img/personalizableAION.jpg'
    },
    {
        titulo: 'Soporte técnico personal',
        descripcion: 'Con AION, siempre contarás con soporte técnico personalizado. Nuestro equipo está disponible para ayudarte en la implementación, ajustes y cualquier duda que puedas tener. Nos aseguramos de que la transición a nuestra plataforma sea lo más fluida posible, y que siempre tengas el respaldo que tu negocio necesita.',
        img: 'img/soporte.png'
    },
    {
        titulo: 'Interfaz empresarial sencilla',
        descripcion: 'La interfaz empresarial está diseñada para ser intuitiva y fácil de usar. Podrás gestionar tus operaciones de manera eficiente sin necesidad de ser expertos en tecnología. Contará con un panel de control que ofrece una visión clara de todas sus funciones. La interfaz es completamente adaptable a dispositivos móviles y de escritorio, lo que brinda flexibilidad para operar desde cualquier lugar. Con botones y accesos directos personalizados, el manejo de cada aspecto del negocio se simplifica, optimizando tiempo y esfuerzo.',
        img: 'img/interfaz.png'
    }
];

function ajustarAlturaTarjetas(){
    const tarjetas = document.querySelectorAll('.right-card');

    if (window.innerWidth > 640) {
        const alturaDeseada = 552;

        tarjetas.forEach(tarjeta => {
            tarjeta.style.height = `${alturaDeseada}px`;
            tarjeta.style.overflow = 'hidden';
        });
    } else {
        tarjetas.forEach(tarjeta => {
            tarjeta.style.height = 'hidden';
        });
    }
}

window.onload = function () {
    const textoSeleccionado = document.getElementById('texto-seleccionado');
    if (window.innerWidth > 640) {
        mostrarTexto(0);
    } else {
        document.querySelectorAll('.section-container').forEach(el => {
            el.classList.remove('active-card', 'ring-4', 'ring-orange-500');
        });
        textoSeleccionado.style.display = 'none'; 
    }
    ajustarAlturaTarjetas();
};

window.onresize = function () {
    ajustarAlturaTarjetas();
};

function mostrarTexto(index) {
    const textoSeleccionado = document.getElementById('texto-seleccionado');
    const tituloTexto = document.getElementById('titulo-texto');
    const descripcionTexto = document.getElementById('descripcion-texto');
    const imagenTexto = document.getElementById('imagen-texto');
    const textoMovil = document.getElementById(`texto-movil-${index}`);
    const isMobile = window.innerWidth <= 640;

    if (isMobile) {
        // Si la tarjeta ya está abierta, la cerramos
        if (!textoMovil.classList.contains('hidden')) {
            textoMovil.classList.remove('block');
            setTimeout(() => {
                textoMovil.classList.add('hidden');
            }, 300);
            document.querySelector(`.section-container:nth-child(${index + 1})`).classList.remove('active-card', 'ring-4', 'ring-orange-500');
            return;
        }

        // Cerrar cualquier otra tarjeta abierta
        const otherCards = document.querySelectorAll('[id^="texto-movil"]');
        otherCards.forEach(card => {
            if (card.id !== `texto-movil-${index}` && !card.classList.contains('hidden')) {
                card.classList.remove('block');
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });

        // Actualizar estados de las tarjetas
        document.querySelectorAll('.section-container').forEach((el, idx) => {
            if (idx === index) {
                el.classList.add('active-card', 'ring-4', 'ring-orange-500');
                // Asegurarse de que la tarjeta no se quede con altura fija
                el.style.height = 'auto'; // Restaurar la altura cuando se abre
            } else {
                el.classList.remove('active-card', 'ring-4', 'ring-orange-500');
                // Resetear la altura de otras tarjetas
                el.style.height = 'auto';
            }
        });

        // Mostrar el contenido de la tarjeta seleccionada
        textoMovil.innerHTML = ` 
            <div class="bg-white rounded-lg shadow-lg p-4 mt-2">
                <h3 class="text-xl font-semibold text-gray-600">${data[index].titulo}</h3>
                <p class="text-base mt-2">${data[index].descripcion}</p>
                <img src="${data[index].img}" class="mt-2 w-full h-auto">
            </div>
        `;
        textoMovil.classList.remove('hidden');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                textoMovil.classList.add('block');
            });
        });
    } else {
        // Comportamiento en escritorio
        textoSeleccionado.classList.add('opacity-0', 'translate-x-100');
        textoSeleccionado.classList.remove('opacity-100', 'translate-x-0');

        setTimeout(() => {
            tituloTexto.textContent = data[index].titulo;
            descripcionTexto.textContent = data[index].descripcion;
            imagenTexto.src = data[index].img;
            imagenTexto.classList.remove('hidden');

            textoSeleccionado.classList.remove('translate-x-100', 'opacity-0');
            textoSeleccionado.classList.add('translate-x-0', 'opacity-100');
        }, 300);

        document.querySelectorAll('.section-container').forEach((el, idx) => {
            if (idx === index) {
                el.classList.add('active-card', 'ring-4', 'ring-orange-500');
            } else {
                el.classList.remove('active-card', 'ring-4', 'ring-orange-500');
            }
        });
    }

    ajustarAlturaTarjetas();
}
