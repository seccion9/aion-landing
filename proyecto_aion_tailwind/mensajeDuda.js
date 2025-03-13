document.addEventListener('DOMContentLoaded', function () { 
    const mensajes = {
        duda1: "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios' y seleccionando el que más se adapte a sus necesidades, también podrá ponerse en contacto con nosotros rellenando el formulario de 'Contacto' para así ofrecerle un trato más cercano.",
        duda2: "En el apartado de 'Precios' encontrará toda la información que necesita, ofrecemos tarifas de 'Plan Básico' y 'Plan Completo' en sus respectivas modalidades mensuales o anuales, en la que encontrará ciertas ofertas.",
        duda3: "Sí, nuestra política de descuentos es muy amplia ya que podrá encontrar ofertas especiales a lo largo del año.",
    };

    const tarjetasDudas = document.querySelectorAll('.duda');

    tarjetasDudas.forEach(tarjeta => {
        const mensajeContainer = tarjeta.querySelector('.mensaje');
        const flecha = tarjeta.querySelector('.flecha1');
        
        tarjeta.addEventListener('click', function() {
            const dudaId = this.id;
            const estaAbierta = this.classList.contains('activa');
            
            // Cerrar todas las tarjetas
            tarjetasDudas.forEach(t => {
                const tMensaje = t.querySelector('.mensaje');
                if (tMensaje) {
                    tMensaje.classList.add('hidden');
                    tMensaje.style.height = '0';
                }
                t.classList.remove('activa', 'border-orange-500');
                const tFlecha = t.querySelector('.flecha1');
                if (tFlecha) {
                    tFlecha.style.transform = 'rotate(0deg)';
                }
            });

            // Si la tarjeta no estaba abierta, abrirla
            if (!estaAbierta) {
                this.classList.add('activa', 'border-orange-500');
                const mensajeElement = this.querySelector('.mensaje');
                if (mensajeElement) {
                    mensajeElement.innerHTML = mensajes[dudaId];
                    mensajeElement.classList.remove('hidden');
                    // Permitir que la altura se ajuste al contenido
                    requestAnimationFrame(() => {
                        const altura = mensajeElement.scrollHeight;
                        mensajeElement.style.height = altura + 'px';
                    });
                }
                if (flecha) {
                    flecha.style.transform = 'rotate(90deg)';
                }
            }
        });
    });
});
