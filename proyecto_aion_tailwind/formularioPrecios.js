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


// SCRIPT PARA BOTON FORMULARIO INVERTIR


document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
  
     console.log("dentro");
     console.log("📩 Se ha presionado el botón de enviar");
  
    // Verificar si el checkbox está marcado
    let termsChecked = document.getElementById("aceptar").checked;
    if (!termsChecked) {
        Swal.fire("Error", "Debes aceptar los términos y condiciones.", "error");
        return;
    }
  
    let formData = new FormData(this);
  
    fetch("enviarPrecios.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())  // Cambiado a .json()
    .then(data => {
        if (data.status === "success") {
            Swal.fire("¡Mensaje Enviado!", data.message, "success");
            document.getElementById("formulario").reset(); // Limpiar formulario
        } else {
            Swal.fire("Error", data.message, "error");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        Swal.fire("Error", "Hubo un problema al enviar el mensaje.", "error");
    });
    
  });