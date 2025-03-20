document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const header = document.getElementById('header');

    // Función para actualizar la posición dem menú
    function actualizarMenu(){
      const headerAltura = header.offsetHeight;
      navList.style.top = `${headerAltura - 20}px`;
    }

    // Abrir y cerrar el menú
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('hidden');
    });

    // Cerrar el menú si se hace clic fuera del menú o el botón
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
            navList.classList.add('hidden');
        }
    });

    // Llamamos a la función al cargar la página y cada vez que se cambie el tamaño de la ventana
    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
});