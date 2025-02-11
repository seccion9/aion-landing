/* Codigo que recoge la funcionalidad del carrusel de fotos */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/* Evento que permite la modificación de las tarjetas de precios */
document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton-invertir");
    const tarjeta1 = document.getElementById("tarjeta1");
    const tarjeta2 = document.getElementById("tarjeta2");
    const mesNormal = 29;
    const mesCompleto = 55;
    const normalOferta = mesNormal * 12;
    const completoOferta = mesCompleto * 10;
    let estadoInvertido = false;

    boton.addEventListener("click", function () {
        estadoInvertido = !estadoInvertido;

        boton.classList.toggle("boton-invertido");

        const h2Tarjeta1 = tarjeta1.querySelector(".titulo");
        const h7Tarjeta1 = tarjeta1.querySelector(".tipoPlan");
        const h2Tarjeta2 = tarjeta2.querySelector(".titulo");
        const h7Tarjeta2 = tarjeta2.querySelector(".tipoPlan");
        const oferta1 = tarjeta1.querySelector(".oferta");
        const oferta2 = tarjeta2.querySelector(".oferta");
        
        if (estadoInvertido) {
            h2Tarjeta1.textContent = normalOferta + "€";
            h7Tarjeta1.textContent = "Tarifa Anual";
            h2Tarjeta2.textContent = completoOferta + "€";
            h7Tarjeta2.textContent = "Tarifa Anual";
            oferta1.textContent = "(12 meses)"
            oferta2.textContent = "(Oferta de 10 meses con 2 meses de regalo)";
        } else {
            h2Tarjeta1.textContent = mesNormal + "€";
            h7Tarjeta1.textContent = "Tarifa Mensual";
            h2Tarjeta2.textContent = mesCompleto + "€";
            h7Tarjeta2.textContent = "Tarifa Mensual";
            oferta1.textContent = "."
            oferta2.textContent = ".";
        }
    });
});

/* const duda1 = document.getElementById("duda1");
const duda2 = document.getElementById("duda2");
const duda3 = document.getElementById("duda3");
const duda4 = document.getElementById("duda4");
const duda5 = document.getElementById("duda5");
const duda6 = document.getElementById("duda6");
const mensajeDuda = document.getElementById("mensajeDuda");

document.addEventListener("click", function () {
  
  const mensajeDuda = document.getElementById("mensajeDuda");

  
  const dudas = [
    { id: "duda1", mensaje: "Para contratar nuestros servicios, dirígete a la sección de contacto y completa el formulario." },
    { id: "duda2", mensaje: "En el apartado precios de la página principal encontrarás las diferentes opciones de tarifas." },
    { id: "duda3", mensaje: "Sí, contamos con promociones especiales. Consulta nuestra página de ofertas." },
    { id: "duda4", mensaje: "Sí, <strong>AION</strong> cuenta con automatización de facturas para facilitar tu gestión." },
    { id: "duda5", mensaje: "Sí, las reservas son compatibles con múltiples tipos de negocios." },
    { id: "duda6", mensaje: "Sí, <strong>AION</strong> funciona en dispositivos móviles sin problemas." }
  ];

  
  dudas.forEach(duda => {
    const elemento = document.getElementById(duda.id);
    if (elemento) {
      elemento.addEventListener("click", function () {
        mensajeDuda.innerHTML = `<p>${duda.mensaje}</p>`;
        mensajeDuda.style.display = "block";
      });
    }
  });
}); */

document.addEventListener("DOMContentLoaded", function () {
  const mensajeDuda = document.getElementById("mensajeDuda");

  if (!mensajeDuda) {
      console.error("No se encontró el elemento con id 'mensajeDuda'");
      return;
  }

  const duda1 = document.getElementById("duda1");
  const duda2 = document.getElementById("duda2");
  const duda3 = document.getElementById("duda3");
  const duda4 = document.getElementById("duda4");
  const duda5 = document.getElementById("duda5");
  const duda6 = document.getElementById("duda6");

  duda1.addEventListener("click", function() {
    mensajeDuda.textContent = "<p>Para contratar nuestros servicios, dirígete a la sección de contacto y completa el formulario.</p>"
  })
  duda2.addEventListener("click", function() {
    mensajeDuda.textContent = "<p>En el apartado precios de la página principal encontrarás las diferentes opciones de tarifas.</p>"
  })
  duda3.addEventListener("click", function() {
    mensajeDuda.textContent = "<p>Sí, contamos con promociones especiales. Consulta nuestra página de ofertas.</p>"
  })
  duda4.addEventListener("click", function() {
    mensajeDuda.textContent = "<p>Sí, <strong>AION</strong> cuenta con automatización de facturas para facilitar tu gestión.</p>"
  })
  duda5.addEventListener("click", function() {
    mensajeDuda.textContent = "<p>Sí, las reservas son compatibles con múltiples tipos de negocios.</p>"
  })
  duda6.addEventListener("click", function() {
    mensajeDuda.textContent = "<p>Sí, <strong>AION</strong> funciona en dispositivos móviles sin problemas.</p>"
  })
});