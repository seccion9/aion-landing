// Obtener elementos
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

// Función para abrir el modal
function abrirModal() {
    modal.classList.remove("hidden");
}

// Función para cerrar el modal
function cerrarModal() {
    modal.classList.add("hidden");
}

// Agregar evento para cerrar el modal al hacer clic en la X
cerrar.addEventListener("click", cerrarModal);

// Si deseas abrir el modal con un evento (por ejemplo, un botón):
//document.getElementById("abrirModalBtn").addEventListener("click", abrirModal);
