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
            "duda1": "En <strong style='color: #ff8000;'>AION</strong> puede contratar nuestros servicios yendo al apartado de 'Precios' y seleccionando el que más se adapte a sus necesidades, tambien podrá ponerse en contacto con nosotros rellenando el formulario de 'Contacto' para así ofrecerle un trato más cercano.",
            "duda2": "En el apartado de 'Precios' encontrará toda la información que necesita, ofrecemos tarifas de 'Plan Básico' y 'Plan Completo' en sus respectivas modalidades mensuales o anuales, en la que encontrará ciertas ofertas.",
            "duda3": "Sí, nuestra política de descuentos es muy amplia ya que podrá encontrar ofertas especiales a lo largo del año",
            "duda4": "Sí, <strong style='color: #ff8000;'>AION</strong> cuenta con automatización de facturas para facilitar tu gestión siendo esta muy fiable y uno de nuestros puntos fuertes ya que con esta gran funcionalidad ya no tendrá que volver a preocuparse de las facturas.",
            "duda5": "Sí, no apuntamos a uno o dos modelos de negocios del mercado solamente, tratamos de abarcar todo tipo de negocio que necesite de nuestras ventajas como gestora.",
            "duda6": "Sí, <strong style='color: #ff8000;'>AION</strong> funciona perfectamente tanto en dispositivos móviles como en tablets sin ningún tipo de problema."
        };
        return mensajes[id] || null;
    }
  });
  