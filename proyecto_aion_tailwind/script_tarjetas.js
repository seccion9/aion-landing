const togglePrecio = document.getElementById('togglePrecio');
const tarjeta1 = document.getElementById('tarjeta1');
const tarjeta2 = document.getElementById('tarjeta2');
const precio1Mensual = document.getElementById('precio1Mensual');
const precio1Anual = document.getElementById('precio1Anual');
const tipoPlan1 = document.getElementById('tipoPlan1');

const precio2Mensual = document.getElementById('precio2Mensual');
const precio2Anual = document.getElementById('precio2Anual');
const tipoPlan2 = document.getElementById('tipoPlan2');

// Función para activar la animación de flip
function realizarFlip(tarjeta) {
    tarjeta.classList.add('rotate-y-180'); 
    tarjeta.classList.add('transition-transform', 'duration-1000');

    setTimeout(() => {
        tarjeta.classList.remove('rotate-y-180');
    }, 1000);
}

// Evento que escucha cuando el toggle cambia
togglePrecio.addEventListener('change', () => {
    realizarFlip(tarjeta1);
    realizarFlip(tarjeta2);

    setTimeout(() => {
        // Cambiar el contenido de los precios
        if (precio1Mensual.classList.contains('hidden')) {
            precio1Mensual.classList.remove('hidden');
            precio1Anual.classList.add('hidden');
            tipoPlan1.textContent = "Mensual";
        } else {
            precio1Anual.classList.remove('hidden');
            precio1Mensual.classList.add('hidden');
            tipoPlan1.textContent = "Anual";
        }

        if (precio2Mensual.classList.contains('hidden')) {
            precio2Mensual.classList.remove('hidden');
            precio2Anual.classList.add('hidden');
            tipoPlan2.textContent = "Mensual";
        } else {
            precio2Anual.classList.remove('hidden');
            precio2Mensual.classList.add('hidden');
            tipoPlan2.textContent = "Anual";
        }
    }, 0);
});
