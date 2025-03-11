function loadNav() {
    const navHTML = `
    <header class="bg-gray-200 fixed top-0 left-0 w-full h-16 z-[9999]">
        <div class="max-w-screen-xl mx-auto flex items-center h-full px-4">
            <nav class="container mx-auto flex justify-between items-center p-4 relative">
                <a href="index.html" class="text-3xl font-bold text-[#ff8000]">AION</a>

                <!-- Botón de menú solo en dispositivos móviles-->
                <div class="lg:hidden">
                    <button id="menu-toggle" class="btn btn-ghost" aria-label="Abrir menú">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </button>
                </div>

                <!-- Menú de navegación -->
                <ul id="nav-list" class="hidden lg:flex gap-x-6">
                    <li><a href="index.html" class="btn btn-ghost bg-transparent border-0 text-black hover:text-orange-600 hover:bg-transparent">Inicio</a></li>
                    <li><a id="integraciones" href="index.html#carrusel" class="btn btn-ghost bg-transparent border-0 text-black hover:text-orange-600 hover:bg-transparent">Integraciones</a></li>
                    <li><a id="funcional" href="index.html#funcionalidades" class="btn btn-ghost bg-transparent border-0 text-black hover:text-orange-600 hover:bg-transparent">Funcionalidades</a></li>
                    <li><a id="planes" href="index.html#precios" class="btn btn-ghost bg-transparent border-0 text-black hover:text-orange-600 hover:bg-transparent">Precios</a></li>
                    <li><a href="invertir.html" class="btn btn-ghost bg-transparent border-transparent text-black hover:text-orange-600 hover:bg-transparent">¿Quieres invertir?</a></li>
                    <li>
                        <a href="formulario.html" id="contacto" class="btn btn-ghost bg-[#ff8000] border-0 text-white hover:bg-orange-700 hover:text-white transition-colors duration-500 ease-in-out">
                            Contacto
                        </a>
                    </li>

                </ul>            
            </nav>
        </div>
    </header>
    `;

    document.getElementById("nav-container").innerHTML = navHTML;
}

// Llamar la función al cargar el DOM
document.addEventListener("DOMContentLoaded", loadNav);
