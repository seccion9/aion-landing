document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const cerrar = document.getElementById("cerrar");

    // Función para abrir el formulario y actualizar el precio
    window.abrirFormulario = function (plan, precio) {
        // Primero actualizamos el precio
        document.getElementById("precio").value = precio;
        document.querySelector(".modal-contenido h2").textContent = `Completa tus datos para el ${plan}`;

        // Hacer visible el modal antes de animar la opacidad
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        // Usamos un pequeño retraso antes de cambiar la opacidad para aplicar la transición
        setTimeout(() => {
            modal.classList.remove("opacity-0");
            modal.classList.add("opacity-100");
        }, 10); // Retardo muy corto para permitir la transición
    };

    // Asignar evento click a los botones de los planes
    const botonesPlanes = document.querySelectorAll(".tarjetaPlan button");
    botonesPlanes.forEach((boton) => {
        boton.addEventListener("click", () => {
            const plan = boton.closest(".tarjetaPlan").querySelector(".subtitulo").textContent;
            const precio = boton.closest(".tarjetaPlan").querySelector(".titulo span:not(.hidden)").textContent;
            abrirFormulario(plan, precio);
        });
    });

    // Función para cerrar el modal con transición
    cerrar.addEventListener("click", () => {
        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0");

        // Esperar a que termine la transición antes de ocultar el modal
        setTimeout(() => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }, 500); // El tiempo coincide con la duración de la transición
    });

    // Cerrar el modal si se hace clic fuera del contenido
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("opacity-100");
            modal.classList.add("opacity-0");

            setTimeout(() => {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
            }, 500); // El tiempo coincide con la duración de la transición
        }
    });
});