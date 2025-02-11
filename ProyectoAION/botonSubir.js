/* Evento que permite el desplazamiento hacia arriba de la página al darle click al boton */
document.getElementById("botonSubir").addEventListener("click", function () {
    const logo = document.getElementById("logo");
    logo.scrollIntoView({ behavior: "smooth" });
  });