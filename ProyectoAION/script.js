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


