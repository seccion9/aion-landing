document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton-invertir");
    const tarjeta1 = document.getElementById("tarjeta1");
    const tarjeta2 = document.getElementById("tarjeta2");
    let estadoInvertido = false;

    boton.addEventListener("click", function () {
        estadoInvertido = !estadoInvertido;

        // Cambiar la apariencia del botón
        boton.classList.toggle("boton-invertido");

        // Cambiar el texto de tarjeta 1
        const h2Tarjeta1 = tarjeta1.querySelector(".titulo");
        const h6Tarjeta1 = tarjeta1.querySelector(".subtitulo");
        
        if (estadoInvertido) {
            h2Tarjeta1.textContent = "290€";
            h6Tarjeta1.textContent = "Plan Basico";
        } else {
            h2Tarjeta1.textContent = "29€";
            h6Tarjeta1.textContent = "Plan Basico";
        }

        // Cambiar el texto de tarjeta 2
        const h2Tarjeta2 = tarjeta2.querySelector(".titulo");
        const h6Tarjeta2 = tarjeta2.querySelector(".subtitulo");
        
        if (estadoInvertido) {
            h2Tarjeta2.textContent = "550€";
            h6Tarjeta2.textContent = "Plan completo";
        } else {
            h2Tarjeta2.textContent = "55€";
            h6Tarjeta2.textContent = "Plan completo";
        }
    });
});
