# Instrucciones para Implementar el Nuevo Sistema de Envío de Formularios

Este proyecto requiere la actualización de algunos archivos para mejorar la forma en que se envían los formularios de contacto. Sigue los pasos a continuación para realizar los cambios correctamente.

## Sustitución del Archivo `envio.php`
Debes reemplazar el archivo `envio.php` actual con el nuevo archivo `enviar.php` que se ha proporcionado. Este archivo es el encargado de gestionar el envío de correos desde el formulario de contacto.

## Modificaciones en `script.js`
Para que el formulario envíe los datos correctamente usando `fetch()`, añade el siguiente código dentro de `script.js`:

```javascript
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
```

## Modificaciones en `index.html`

### a) Cambio en la etiqueta `<form>`
Dentro de tu archivo `index.html`, busca la línea donde se define el formulario de contacto:

```html
<form class="formulario" action="envio.php" method="POST"></form>
```

**Sustituye esta línea por:**

```html
<form id="formContacto" class="formulario"></form>
```

Esto permitirá que el formulario sea controlado por `script.js` en lugar de enviarse de forma predeterminada mediante HTML.

### b) Agregar la librería SweetAlert2
Al final del archivo `index.html`, antes de la llamada a `script.js`, añade la siguiente línea para incluir la librería SweetAlert2, que se utilizará para mostrar notificaciones al usuario:

```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!-- Librería SweetAlert2 -->
```

## Con estos cambios, el formulario ahora enviará los datos correctamente mediante AJAX, sin recargar la página, y mostrará mensajes de confirmación con `SweetAlert2`. 

