document.addEventListener("DOMContentLoaded", function () {
    const dudas = document.querySelectorAll(".duda");

    dudas.forEach(duda => {
        duda.addEventListener("click", function (event) {
            event.stopPropagation();

            // Contraer todas las tarjetas antes de expandir la seleccionada
            dudas.forEach(tarjeta => {
                if (tarjeta !== duda) { 
                    tarjeta.classList.remove("selected");
                    const mensajeElemento = tarjeta.querySelector(".mensaje");
                    mensajeElemento.style.maxHeight = "0px"; // Ocultar mensaje
                    mensajeElemento.style.opacity = "0";
                    setTimeout(() => { mensajeElemento.innerHTML = ""; }, 300); // Eliminar contenido tras la animación
                }
            });

            // Alternar la tarjeta seleccionada (abrir/cerrar)
            const mensajeElemento = duda.querySelector(".mensaje");
            const mensaje = obtenerMensaje(duda.id);

            if (duda.classList.contains("selected")) {
                duda.classList.remove("selected");
                mensajeElemento.style.maxHeight = "0px";
                mensajeElemento.style.opacity = "0";
                setTimeout(() => { mensajeElemento.innerHTML = ""; }, 300);
            } else {
                duda.classList.add("selected");
                mensajeElemento.innerHTML = `<p>${mensaje}</p>`;
                
                // Esperar un pequeño tiempo para calcular la altura y evitar bugs de animación
                setTimeout(() => {
                    mensajeElemento.style.maxHeight = mensajeElemento.scrollHeight + "px"; // Ajustar a la altura del contenido
                    mensajeElemento.style.opacity = "1";
                }, 10);
            }
        });
    });

    // Cerrar todas las tarjetas si se hace clic fuera
    document.addEventListener("click", function (event) {
        if (!event.target.closest('.duda')) {
            dudas.forEach(tarjeta => {
                tarjeta.classList.remove("selected");
                const mensajeElemento = tarjeta.querySelector(".mensaje");
                mensajeElemento.style.maxHeight = "0px";
                mensajeElemento.style.opacity = "0";
                setTimeout(() => { mensajeElemento.innerHTML = ""; }, 300);
            });
        }
    });

    function obtenerMensaje(id) {
        const mensajes = {
            "duda1": "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios' y seleccionando el que más se adapte a sus necesidades, también podrá ponerse en contacto con nosotros rellenando el formulario de 'Contacto' para así ofrecerle un trato más cercano.",
            "duda2": "En el apartado de 'Precios' encontrará toda la información que necesita, ofrecemos tarifas de 'Plan Básico' y 'Plan Completo' en sus respectivas modalidades mensuales o anuales, en la que encontrará ciertas ofertas.",
            "duda3": "Sí, nuestra política de descuentos es muy amplia ya que podrá encontrar ofertas especiales a lo largo del año.",
        };
        return mensajes[id] || "";
    }
});
















/* document.addEventListener("DOMContentLoaded", function () {
    const dudas = document.querySelectorAll(".duda");

    dudas.forEach(duda => {
        duda.addEventListener("click", function (event) {
            event.stopPropagation();

          
            dudas.forEach(tarjeta => {
                if (tarjeta !== duda) {
                    tarjeta.classList.remove("expanded", "py-6");
                    tarjeta.classList.add("py-3");

                    const mensaje = tarjeta.querySelector("div[id^='mensajeDuda']");
                    if (mensaje) {
                        mensaje.classList.add("hidden");
                    }

                    const flecha = tarjeta.querySelector(".flecha");
                    if (flecha) {
                        flecha.classList.remove("rotate-180"); 
                    }
                }
            });

           
            duda.classList.toggle("expanded");
            duda.classList.toggle("py-6");

            const mensaje = duda.querySelector("div[id^='mensajeDuda']");
            if (mensaje) {
                mensaje.innerHTML = `<p>${obtenerMensaje(duda.id)}</p>`;
                mensaje.classList.toggle("hidden");
            }

            const flecha = duda.querySelector(".flecha");
            if (flecha) {
                flecha.classList.toggle("rotate-180"); 
            }
        });
    });


    function obtenerMensaje(id) {
        const mensajes = {
            "duda1": "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios'...",
            "duda2": "En el apartado de 'Precios' encontrará toda la información...",
            "duda3": "Sí, nuestra política de descuentos es muy amplia...",
        };
        return mensajes[id] || null;
    }
}); */









