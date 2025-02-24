document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const cerrar = document.getElementById("cerrar");

    // Función para abrir el formulario y actualizar el precio
    window.abrirFormulario = function (plan, precio) { 
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.getElementById("precio").value = precio;
        document.querySelector(".modal-contenido h2").textContent = `Completa tus datos para el ${plan}`;
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

    // Función para cerrar el modal
    cerrar.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    });

    // Cerrar el modal si se hace clic fuera del contenido
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }
    });
});







