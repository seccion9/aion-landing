/* Evento para manejar el mensaje de cada tarjeta de dudas */
document.addEventListener("DOMContentLoaded", function () {
    const mensajeDuda = document.getElementById("mensajeDuda");
  
    const dudas = document.querySelectorAll(".duda");
  
    dudas.forEach(duda => {
        duda.addEventListener("click", function (event) {
            event.stopPropagation();
            const mensaje = obtenerMensaje(duda.id);
            if (mensaje) {
                mensajeDuda.innerHTML = `<p>${mensaje}</p>`;
                mensajeDuda.style.display = "flex"; 
            }
        });
    });
  
    document.addEventListener("click", function (event) {
        if (!mensajeDuda.contains(event.target)) {
            mensajeDuda.style.display = "none";
        }
    });
  
    function obtenerMensaje(id) {
        const mensajes = {
            "duda1": "Para contratar nuestros servicios, dirígete a la sección de contacto y completa el formulario.",
            "duda2": "En el apartado precios de la página principal encontrarás las diferentes opciones de tarifas.",
            "duda3": "Sí, contamos con promociones especiales. Consulta nuestra página de ofertas.",
            "duda4": "Sí, <strong>AION</strong> cuenta con automatización de facturas para facilitar tu gestión.",
            "duda5": "Sí, las reservas son compatibles con múltiples tipos de negocios.",
            "duda6": "Sí, <strong>AION</strong> funciona en dispositivos móviles sin problemas."
        };
        return mensajes[id] || null;
    }
  });
  