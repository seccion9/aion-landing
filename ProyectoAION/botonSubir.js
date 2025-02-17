/* Evento que permite el desplazamiento hacia arriba de la página al darle click al boton */
document.getElementById("botonSubir").addEventListener("click", function () {
    const nav = document.getElementById("navegador");
    logo.scrollIntoView({ behavior: "smooth" });
  });