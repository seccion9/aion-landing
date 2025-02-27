document.addEventListener("DOMContentLoaded", function () {
    const mensajeDuda1 = document.getElementById("mensajeDuda1");
    const mensajeDuda2 = document.getElementById("mensajeDuda2");
    const mensajeDuda3 = document.getElementById("mensajeDuda3");

    const mensajesDuda = [mensajeDuda1, mensajeDuda2, mensajeDuda3];

    const dudas = document.querySelectorAll(".duda");

    dudas.forEach(duda => {
        duda.addEventListener("click", function (event) {
            event.stopPropagation(); 

            dudas.forEach(tarjeta => {
                tarjeta.classList.remove("selected");
            });

            duda.classList.add("selected");

            // Ocultar todos los mensajes antes de mostrar el nuevo
            mensajesDuda.forEach(duda => {
                duda.classList.remove("message-visible"); 
                duda.classList.add("message-appear");
            });

            const mensaje = obtenerMensaje(duda.id);

            if (duda.id === "duda1") {
                mensajeDuda1.innerHTML = `<p>${mensaje}</p>`;

                setTimeout(() => {
                    mensajeDuda1.classList.remove("message-appear");
                    mensajeDuda1.classList.add("message-visible"); 
                }, 10); 
            }
            else if (duda.id === "duda2") {
                mensajeDuda2.innerHTML = `<p>${mensaje}</p>`;
                setTimeout(() => {
                    mensajeDuda2.classList.remove("message-appear");
                    mensajeDuda2.classList.add("message-visible");
                }, 10);
            }
            else if (duda.id === "duda3") {
                mensajeDuda3.innerHTML = `<p>${mensaje}</p>`;
                setTimeout(() => {
                    mensajeDuda3.classList.remove("message-appear");
                    mensajeDuda3.classList.add("message-visible");
                }, 10);
            }
        });
    });

    // Cerrar el mensaje y quitar el borde si se hace clic fuera de las tarjetas
    document.addEventListener("click", function (event) {
        if (!event.target.closest('.duda')) {

            dudas.forEach(tarjeta => {
                tarjeta.classList.remove("selected"); 
            });

            mensajesDuda.forEach(duda => {
                duda.classList.remove("message-visible"); 
                duda.classList.add("message-appear"); 
            });
        }
    });

    // Función para obtener el mensaje dependiendo del id de la duda
    function obtenerMensaje(id) {
        const mensajes = {
            "duda1": "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios' y seleccionando el que más se adapte a sus necesidades, también podrá ponerse en contacto con nosotros rellenando el formulario de 'Contacto' para así ofrecerle un trato más cercano.",
            "duda2": "En el apartado de 'Precios' encontrará toda la información que necesita, ofrecemos tarifas de 'Plan Básico' y 'Plan Completo' en sus respectivas modalidades mensuales o anuales, en la que encontrará ciertas ofertas.",
            "duda3": "Sí, nuestra política de descuentos es muy amplia ya que podrá encontrar ofertas especiales a lo largo del año.",
        };
        return mensajes[id] || null;
    }
});







