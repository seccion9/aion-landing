document.addEventListener("DOMContentLoaded", function () {
    // Definir los elementos de los mensajes
    const mensajeDuda1 = document.getElementById("mensajeDuda1");
    const mensajeDuda2 = document.getElementById("mensajeDuda2");
    const mensajeDuda3 = document.getElementById("mensajeDuda3");

    // Almacenamos los elementos de mensajes en un array para fácil acceso
    const mensajesDuda = [mensajeDuda1, mensajeDuda2, mensajeDuda3];

    const dudas = document.querySelectorAll(".duda");

    dudas.forEach(duda => {
        duda.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevenir que el clic se propague al body

            // Eliminar el borde de todas las tarjetas antes de agregar el borde a la seleccionada
            dudas.forEach(tarjeta => {
                tarjeta.classList.remove("selected"); // Remover la clase 'selected' de todas las tarjetas
                const flecha = tarjeta.querySelector(".flecha");
                if (flecha) {
                    flecha.style.transform = "rotate(0deg)"; // Restablecer la rotación de la flecha cuando se deselecciona
                }
            });

            // Agregar la clase 'selected' a la tarjeta clickeada
            duda.classList.add("selected");

            // Ocultar todos los mensajes antes de mostrar el nuevo
            mensajesDuda.forEach(duda => {
                duda.style.opacity = "0";
                duda.style.visibility = "hidden";
            });

            const mensaje = obtenerMensaje(duda.id);
            
            // Asignar el mensaje correspondiente al div adecuado
            if (duda.id === "duda1" || duda.id === "duda4") {
                mensajeDuda1.innerHTML = `<p>${mensaje}</p>`;
                mensajeDuda1.style.visibility = "visible";  
                mensajeDuda1.style.opacity = "1";
            }
            else if (duda.id === "duda2" || duda.id === "duda5") {
                mensajeDuda2.innerHTML = `<p>${mensaje}</p>`;
                mensajeDuda2.style.visibility = "visible";
                mensajeDuda2.style.opacity = "1";
            }
            else if (duda.id === "duda3" || duda.id === "duda6") {
                mensajeDuda3.innerHTML = `<p>${mensaje}</p>`;
                mensajeDuda3.style.visibility = "visible";
                mensajeDuda3.style.opacity = "1";
            }
        });
    });

    // Cerrar el mensaje si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!mensajeDuda1.contains(event.target) && !mensajeDuda2.contains(event.target) && !mensajeDuda3.contains(event.target)) {
            mensajesDuda.forEach(duda => {
                duda.style.opacity = "0";
                duda.style.visibility = "hidden";
            });
        }
    });

    // Función para obtener el mensaje dependiendo del id de la duda
    function obtenerMensaje(id) {
        const mensajes = {
            "duda1": "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios' y seleccionando el que más se adapte a sus necesidades, también podrá ponerse en contacto con nosotros rellenando el formulario de 'Contacto' para así ofrecerle un trato más cercano.",
            "duda2": "En el apartado de 'Precios' encontrará toda la información que necesita, ofrecemos tarifas de 'Plan Básico' y 'Plan Completo' en sus respectivas modalidades mensuales o anuales, en la que encontrará ciertas ofertas.",
            "duda3": "Sí, nuestra política de descuentos es muy amplia ya que podrá encontrar ofertas especiales a lo largo del año.",
            "duda4": "Sí, <strong style='color: #ff8000;'>AION</strong> cuenta con automatización de facturas para facilitar tu gestión siendo esta muy fiable y uno de nuestros puntos fuertes, ya que con esta gran funcionalidad ya no tendrá que volver a preocuparse de las facturas.",
            "duda5": "Sí, no apuntamos a uno o dos modelos de negocios del mercado solamente, tratamos de abarcar todo tipo de negocio que necesite de nuestras ventajas como gestora.",
            "duda6": "Sí, <strong style='color: #ff8000;'>AION</strong> funciona perfectamente tanto en dispositivos móviles como en tablets sin ningún tipo de problema."
        };
        return mensajes[id] || null;
    }
});

