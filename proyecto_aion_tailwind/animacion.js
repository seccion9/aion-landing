AOS.init({
    offset: 100, 
    threshold: 0.25,  
    once: true  
  });

// Crear el IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    console.log("dentro1");

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("dentro2");

        // Si el elemento entra en la vista, añadir la animación
        entry.target.classList.add("animate__fadeInBottomLeft");
        entry.target.style.opacity = "1"; 
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.5 });

  // Aplicar el observer a todos los elementos con la clase '.mi-elemento'
  document.querySelectorAll('.section-container zonaDerecha').forEach((element) => {
    console.log("dentro3");
    observer.observe(element);
  });
 
