// SCRIPT PARA BOTON FORMULARIO INVERTIR


document.getElementById("formInvertir").addEventListener("submit", function (event) {
  event.preventDefault();

   console.log("dentro");
   console.log("📩 Se ha presionado el botón de enviar");

  // Verificar si el checkbox está marcado
  let termsChecked = document.getElementById("terms").checked;
  if (!termsChecked) {
      Swal.fire("Error", "Debes aceptar los términos y condiciones.", "error");
      return;
  }

  let formData = new FormData(this);

  fetch("enviar_invertir.php", {
      method: "POST",
      body: formData
  })
  .then(response => response.json())  // Cambiado a .json()
  .then(data => {
      if (data.status === "success") {
          Swal.fire("¡Mensaje Enviado!", data.message, "success");
          document.getElementById("formInvertir").reset(); // Limpiar formulario
      } else {
          Swal.fire("Error", data.message, "error");
      }
  })
  .catch(error => {
      console.error("Error:", error);
      Swal.fire("Error", "Hubo un problema al enviar el mensaje.", "error");
  });
});


