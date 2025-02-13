# Proyecto de Formulario Modal con Envío de Precios

Este proyecto permite a los usuarios seleccionar un plan de precios, llenar un formulario con sus datos y enviar la información a través de un servidor. Se utiliza un formulario modal emergente que recopila el nombre, teléfono, correo electrónico y precio seleccionado, y luego se envía al servidor para su procesamiento.

## Requisitos

Para que el proyecto funcione correctamente, sigue los pasos de configuración a continuación.

### Archivos necesarios

 **`enviarPrecios.php`**: Este archivo debe ser colocado en la carpeta raíz de tu servidor XAMPP.
 **`formularioPrecios.js`** (Opcional): Puedes agregar este archivo al proyecto o, alternativamente, agregar el siguiente fragmento de código JavaScript directamente en tu archivo HTML:

```javascript
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

Dependencias externas

    Librería SweetAlert2: Asegúrate de que la siguiente línea esté incluida en tu archivo HTML para mostrar alertas personalizadas:

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!-- Librería SweetAlert2 -->

    PHPMailer: Asegúrate de que la carpeta PHPMailer esté presente en la raíz de tu proyecto, si aún no está. Esta carpeta contiene los archivos necesarios para enviar correos electrónicos desde el servidor. La estructura debe verse de la siguiente manera:

/tu-proyecto
    /PHPMailer  <-- Carpeta PHPMailer
    enviarPrecios.php
    formularioPrecios.js (opcional)
    index.html
    README.md

Formulario HTML

En tu archivo HTML, asegúrate de que el formulario tenga los atributos name="" para cada campo que se utilizará en el backend. Aquí te dejo el código con los atributos name añadidos:

<div id="modal" class="modal" style="display: none">
    <div class="modal-contenido">
        <span class="cerrar">&times;</span>
        <h2>Completa tus datos</h2>
        <form id="formulario">
            <label for="nombre" class="lab">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="telefono" class="lab">Teléfono:</label>
            <input type="tel" id="telefono" name="tel" required>

            <label for="correo" class="lab">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" required>

            <label for="precio" class="lab">Precio del plan:</label>
            <input type="text" id="precio" name="precio" readonly>

            <label>
                <input type="checkbox" id="aceptar" required> Acepto los <strong class="p-terminos"><a href="terminosCondiciones.html">términos y condiciones</a></strong> y la <strong class="p-terminos"><a href="politicaPrivacidad.html">política de privacidad</a></strong>.
            </label>

            <button type="submit">Enviar</button>
        </form>
    </div>
</div>

Estructura del proyecto

La estructura de archivos del proyecto debe ser la siguiente:

/tu-proyecto
    /PHPMailer  <-- Carpeta PHPMailer
    enviarPrecios.php
    formularioPrecios.js
    index.html
    

Instrucciones de instalación

    Coloca el archivo enviarPrecios.php en la carpeta raíz de tu servidor XAMPP (C:\xampp\htdocs\tu-proyecto\).
    Si decides usar el archivo formularioPrecios.js, colócalo en la misma carpeta que tu archivo index.html y asegúrate de incluirlo en tu HTML.
    Asegúrate de que la librería SweetAlert2 esté correctamente incluida en tu HTML.
    Asegúrate de que el formulario HTML esté configurado con los atributos name en cada campo que deseas enviar al servidor.
    Verifica que la carpeta PHPMailer esté en la raíz del proyecto. Si no está, debes añadirla y colocar los archivos necesarios de PHPMailer dentro de ella.

Uso

    El usuario puede seleccionar un plan de precios, completar el formulario modal y enviarlo.
    Los datos del formulario se enviarán a través de una petición POST a enviarPrecios.php.
    El servidor procesará la información y enviará un correo con los datos del usuario, o mostrará un mensaje de error si ocurre algún problema.
