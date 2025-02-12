document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const cerrarModal = document.querySelector(".cerrar");
    const botonesPlanes = document.querySelectorAll(".tarjetaPlan .btn");
    const inputPrecio = document.getElementById("precio");

    // Función para abrir el modal con el precio correspondiente
    function abrirModal(precio) {
        inputPrecio.value = precio; 
        modal.style.display = "flex"; 
    }

    // Agregamos un evento a cada botón de plan
    botonesPlanes.forEach(boton => {
        boton.addEventListener("click", function () {
            const tarjeta = this.closest(".tarjetaPlan"); 
            const precio = tarjeta.querySelector(".titulo").textContent;
            abrirModal(precio);
        });
    });

   /* Evento para cerrar el modal al hacer clic en la "X" */
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Evento para cerrar el modal si el usuario hace clic fuera del contenido
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
