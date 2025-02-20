// Capturar el evento submit del formulario
document.getElementById("formContacto").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Obtener datos del formulario
    let formData = new FormData(this);
  
    // Enviar datos a PHP con Fetch API
    fetch("enviar.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(text => {
        try {
            return JSON.parse(text); // Parsearlo a JSON
        } catch (error) {
            console.error("Error al analizar JSON:", text);
            throw new Error("Respuesta no válida del servidor.");
        }
    })
    .then(data => {
        if (data.status === "success") {
            Swal.fire("¡Mensaje Enviado!", data.message, "success");
        } else {
            Swal.fire("Error", data.message, "error");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        Swal.fire("Error", "Hubo un problema al enviar el mensaje.", "error");
    });
  });

  