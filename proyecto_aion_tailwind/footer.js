//  función para insertar el footer en el contenedor
function crearFooter() {
    const footerContainer = document.getElementById("footer-container");
    if (!footerContainer) return; 

    const footer = document.createElement("footer");
    footer.classList.add("w-full");
    footer.innerHTML = `
        <!-- PARTE GRIS -->
        <div class="bg-gray-900 text-white py-4 px-6">
            <div class="flex flex-wrap justify-between gap-0 mx-auto max-w-screen-xl">
                <div class="flex flex-col items-start w-full md:w-auto pl-6">
                    <h2 class="text-lg font-bold text-[#ff8000] mb-1">SÚMATE COMO INVERSOR</h2>
                    <p class="text-gray-300 text-sm">Forma parte de un proyecto con alto potencial de crecimiento.</p>
                    <p class="text-gray-300 text-sm">Únete a nosotros y haz que tu inversión cuente.</p>
                </div>
                <div class="flex justify-end items-center w-full md:w-auto pr-6 mt-4 md:mt-0">
                    <a href="invertir.html" id="inversiones" class="btn bg-[#ff8000] border-0 text-white hover:bg-orange-700 px-7 py-4">
                        INVERTIR
                    </a>
                </div>
            </div>
        </div>

        <!-- PARTE BLANCA -->
        <div class="bg-neutral-100 py-4 px-6">
            <div class="flex flex-wrap justify-between gap-0 mx-auto max-w-screen-xl">
                <div class="flex flex-col items-start w-full md:w-auto pl-6">
                    <h2 class="text-4xl font-bold text-gray-800 mb-1">
                        <span class="text-[#ff8000]">AION</span>
                    </h2>
                    <p class="text-gray-600 text-sm">Tu empresa de confianza <br> para inversiones inteligentes.</p>
                    <div class="mt-2 flex gap-6">
                        <a href="https://www.facebook.com" target="_blank" class="relative">
                            <img src="./img/facebook.png" alt="Facebook" class="w-5 h-5 transition duration-300 ease-in-out rounded-full">
                            <div class="absolute inset-0 bg-[#ff8000] opacity-0 hover:opacity-50 transition-all duration-300 rounded-full"></div>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" class="relative">
                            <img src="./img/X.png" alt="Twitter" class="w-5 h-5 transition duration-300 ease-in-out">
                            <div class="absolute inset-0 bg-[#ff8000] opacity-0 hover:opacity-50 transition-all duration-300"></div>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" class="relative">
                            <img src="./img/instagram.png" alt="Instagram" class="w-5 h-5 transition duration-300 ease-in-out rounded-full">
                            <div class="absolute inset-0 bg-[#ff8000] opacity-0 hover:opacity-50 transition-all duration-300 rounded-full"></div>
                        </a>
                    </div>
                </div>
                <div class="flex justify-center items-center w-full md:w-auto">
                    <ul class="flex gap-10 text-lg text-gray-600"> 
                        <li><a href="index.html" class="hover:text-[#ff8000]">Inicio</a></li>
                        <li><a href="#carrusel" class="hover:text-[#ff8000]">Integraciones</a></li>
                        <li><a href="#funcionalidades" class="hover:text-[#ff8000]">Funcionalidades</a></li>
                        <li><a href="#precios" class="hover:text-[#ff8000]">Precios</a></li>
                    </ul>
                </div>
                <div class="flex justify-end items-center w-full md:w-auto pr-6">
                    <a href="formulario.html" id="contacto" class="btn bg-[#ff8000] border-0 text-white hover:bg-orange-700 px-5 py-4">
                        CONTACTO
                    </a>
                </div>
            </div>
        </div>

        <!-- PARTE NARANJA -->
        <div class="bg-[#ff8000] text-black text-sm py-3 px-6 flex justify-between items-center"> 
            <p class="text-sm pl-8">&copy; 2025 - Todos los derechos reservados</p>
            <div class="flex space-x-3 pr-8 text-sm"> 
                <a href="avisosLegales.html" class="hover:text-primary">Avisos Legales</a>
                <span>-</span>
                <a href="terminosCondiciones.html" class="hover:text-primary">Términos y Condiciones</a>
                <span>-</span>
                <a href="politicaPrivacidad.html" class="hover:text-primary">Política de Privacidad</a>
                <span>-</span>
                <a href="politicaCookies.html" class="hover:text-primary">Política de Cookies</a>
            </div>
        </div>
    `;
    footerContainer.appendChild(footer);
}

// Ejecuta la función al cargar la página
document.addEventListener("DOMContentLoaded", crearFooter);
