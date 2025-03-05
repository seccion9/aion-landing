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


    function obtenerMensaje(id) {
        const mensajes = {
            "duda1": "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios' y seleccionando el que más se adapte a sus necesidades, también podrá ponerse en contacto con nosotros rellenando el formulario de 'Contacto' para así ofrecerle un trato más cercano.",
            "duda2": "En el apartado de 'Precios' encontrará toda la información que necesita, ofrecemos tarifas de 'Plan Básico' y 'Plan Completo' en sus respectivas modalidades mensuales o anuales, en la que encontrará ciertas ofertas.",
            "duda3": "Sí, nuestra política de descuentos es muy amplia ya que podrá encontrar ofertas especiales a lo largo del año.",
        };
        return mensajes[id] || null;
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









