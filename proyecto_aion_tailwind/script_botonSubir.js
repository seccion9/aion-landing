const botonSubir = document.getElementById("botonSubir");

    // Mostrar el botón al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botonSubir.classList.remove("opacity-0");
        } else {
            botonSubir.classList.add("opacity-0");
        }
    });

    // Volver arriba al hacer clic
    botonSubir.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });