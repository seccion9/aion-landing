document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); // Agregar o quitar la clase 'active' al botón hamburguesa
    document.getElementById('nav-list').classList.toggle('active'); // Mostrar u ocultar el menú
  });