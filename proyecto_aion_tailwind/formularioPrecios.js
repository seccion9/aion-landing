document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const cerrar = document.getElementById("cerrar");
    const inputPrecio = document.getElementById("precio");

    // Función para obtener el precio correcto en tiempo real
    function obtenerPrecioVisible(tarjeta) {
        // Busca los dos precios dentro de la tarjeta
        const precioMensual = tarjeta.querySelector("span#precio1Mensual, span#precio2Mensual");
        const precioAnual = tarjeta.querySelector("span#precio1Anual, span#precio2Anual");

        // Si el precio anual está visible, lo toma, si no, usa el mensual
        if (precioAnual && !precioAnual.classList.contains("hidden")) {
            return precioAnual.textContent.trim();
        } else if (precioMensual) {
            return precioMensual.textContent.trim();
        }

        return "No disponible"; // En caso de error
    }

    // Función para abrir el formulario y actualizar el precio
    window.abrirFormulario = function (plan, precio) {
        inputPrecio.value = precio; // Asigna el precio visible al input
        document.querySelector(".modal-contenido h2").textContent = `Completa tus datos para el ${plan}`;

        modal.classList.remove("hidden");
        modal.classList.add("flex");

        setTimeout(() => {
            modal.classList.remove("opacity-0");
            modal.classList.add("opacity-100");
        }, 10);
    };

    // Evento click en los botones de los planes
    document.querySelectorAll(".tarjetaPlan button").forEach((boton) => {
        boton.addEventListener("click", () => {
            const tarjeta = boton.closest(".tarjetaPlan");
            const plan = tarjeta.querySelector(".subtitulo").textContent;
            const precio = obtenerPrecioVisible(tarjeta); // Obtiene el precio correcto en tiempo real

            abrirFormulario(plan, precio);
        });
    });

    // Cerrar el modal con animación
    cerrar.addEventListener("click", () => {
        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0");

        setTimeout(() => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }, 500);
    });

    // Cerrar si se hace clic fuera del modal
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("opacity-100");
            modal.classList.add("opacity-0");

            setTimeout(() => {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
            }, 500);
        }
    });
});

