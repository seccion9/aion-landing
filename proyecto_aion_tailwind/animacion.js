/* iniciar AOS*/

AOS.init({
    offset: 100,  // La animación se activará cuando el elemento esté a 100px de la vista
    threshold: 0.25,  // La animación se disparará cuando al menos el 25% del elemento esté visible
    once: true  // La animación solo se activará una vez
  });



/* Rebote de la animacion del titulo */

document.addEventListener("DOMContentLoaded", function() {
    let titulo = document.getElementById("bounce");
  
    // Mostrar el texto con una animación suave
    titulo.style.opacity = "1";
  
    // Efecto de rebote
    titulo.animate([
        { transform: "translateY(0px)" },  
        { transform: "translateY(-80px)" }, 
        { transform: "translateY(0px)" },  
        { transform: "translateY(-40px)" }, 
        { transform: "translateY(0px)" }   
    ], {
        duration: 1000, 
        iterations: 1, 
        easing: "cubic-bezier(0.25, 1, 0.5, 1)" 
    });
  });
  

// Crear el IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    console.log("dentro1");

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("dentro2");

        // Si el elemento entra en la vista, añadir la animación
        entry.target.classList.add("animate__fadeInBottomLeft");
        entry.target.style.opacity = "1"; // Asegurarse de que sea visible
        observer.unobserve(entry.target); // Deja de observar después de que se haya animado
      }
    });
  }, { threshold: 0.5 }); // El umbral puede ajustarse para que la animación se active cuando el 50% del elemento esté visible.

  // Aplicar el observer a todos los elementos con la clase '.mi-elemento'
  document.querySelectorAll('.section-container zonaDerecha').forEach((element) => {
    console.log("dentro3");
    observer.observe(element);
  });
 