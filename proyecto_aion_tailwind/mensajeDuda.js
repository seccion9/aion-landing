document.addEventListener('DOMContentLoaded', function () {
    const mensajes = {
        duda1: "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios' y seleccionando el que más se adapte a sus necesidades, también podrá ponerse en contacto con nosotros rellenando el formulario de 'Contacto' para así ofrecerle un trato más cercano.",
        duda2: "En el apartado de 'Precios' encontrará toda la información que necesita, ofrecemos tarifas de 'Plan Básico' y 'Plan Completo' en sus respectivas modalidades mensuales o anuales, en la que encontrará ciertas ofertas.",
        duda3: "Sí, nuestra política de descuentos es muy amplia ya que podrá encontrar ofertas especiales a lo largo del año.",
    };

    const tarjetasDudas = document.querySelectorAll('.duda');
    let tarjetaAbierta = null;

    tarjetasDudas.forEach(tarjeta => {
        const mensajeContainer = tarjeta.querySelector('.mensaje');
        const flecha = tarjeta.querySelector('.flecha1');

        tarjeta.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el click se propague al documento
            const dudaId = this.id;
            const estaAbierta = this.classList.contains('activa');

            // Cerrar todas las tarjetas antes de abrir una nueva
            cerrarTodas();

            if (!estaAbierta) {
                this.classList.add('activa', 'border-orange-500');
                mensajeContainer.innerHTML = mensajes[dudaId];
                mensajeContainer.classList.remove('hidden');
                mensajeContainer.classList.add('mostrar');
                
                // Aplicamos la transición de altura dinámica
                mensajeContainer.style.height = mensajeContainer.scrollHeight + 'px';
                
                // Transición de apertura suave
                requestAnimationFrame(() => {
                    mensajeContainer.style.opacity = 1;
                });

                flecha.style.transform = 'rotate(90deg)';
                tarjetaAbierta = this;
            }
        });
    });

    // Cierra la tarjeta activa al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (tarjetaAbierta && !tarjetaAbierta.contains(event.target)) {
            cerrarTodas();
        }
    });

    function cerrarTodas() {
        tarjetasDudas.forEach(t => {
            const tMensaje = t.querySelector('.mensaje');
            const tFlecha = t.querySelector('.flecha1');

            // Aplicamos el cierre de la tarjeta con transición suave
            tMensaje.style.height = '0';
            tMensaje.style.opacity = '0';
            t.classList.remove('activa', 'border-orange-500');
            tFlecha.style.transform = 'rotate(0deg)';
        });

        tarjetaAbierta = null;
    }
});



