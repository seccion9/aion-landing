const togglePrecio = document.getElementById('togglePrecio');
const tarjeta1 = document.getElementById('tarjeta1');
const tarjeta2 = document.getElementById('tarjeta2');
const precio1Mensual = document.getElementById('precio1Mensual');
const precio1Anual = document.getElementById('precio1Anual');
const tipoPlan1 = document.getElementById('tipoPlan1');

const precio2Mensual = document.getElementById('precio2Mensual');
const precio2Anual = document.getElementById('precio2Anual');
const tipoPlan2 = document.getElementById('tipoPlan2');

// Función para activar una animación más suave
function realizarFlip(tarjeta) {
    tarjeta.classList.add('rotate-y-180', 'transition-transform', 'duration-700', 'ease-in-out');

    setTimeout(() => {
        tarjeta.classList.remove('rotate-y-180');
    }, 700);
}

// Evento al cambiar el toggle
togglePrecio.addEventListener('change', () => {
    realizarFlip(tarjeta1);
    realizarFlip(tarjeta2);

    // Animación de desvanecimiento y cambio de precio
    [precio1Mensual, precio1Anual, precio2Mensual, precio2Anual, tipoPlan1, tipoPlan2].forEach((elemento) => {
        elemento.classList.add('transition-opacity', 'duration-500', 'ease-in-out');
        elemento.style.opacity = 0; // Desvanece el contenido actual
    });

    setTimeout(() => {
        // Cambiar los precios
        if (precio1Mensual.classList.contains('hidden')) {
            precio1Mensual.classList.remove('hidden');
            precio1Anual.classList.add('hidden');
            tipoPlan1.innerHTML = '<span class="visible"></span>';
        } else {
            precio1Anual.classList.remove('hidden');
            precio1Mensual.classList.add('hidden');
            tipoPlan1.innerHTML = '<span class="visible">Ahorro de 10€/mes</span>';
        }

        if (precio2Mensual.classList.contains('hidden')) {
            precio2Mensual.classList.remove('hidden');
            precio2Anual.classList.add('hidden');
            tipoPlan2.innerHTML = '<span class="visible"></span>';
        } else {
            precio2Anual.classList.remove('hidden');
            precio2Mensual.classList.add('hidden');
            tipoPlan2.innerHTML = '<span class="visible">Ahorro de 15€/mes</span>';
        }

        // Suavizar la transición de los precios y textos de ahorro
        [precio1Mensual, precio1Anual, precio2Mensual, precio2Anual, tipoPlan1, tipoPlan2].forEach((elemento) => {
            elemento.style.opacity = 1;
        });

    }, 300); // Pequeña espera antes de mostrar el nuevo precio y texto de ahorro
});


