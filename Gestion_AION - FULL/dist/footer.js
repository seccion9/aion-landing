//  función para insertar el footer en el contenedor
function crearFooter() {
    const footerContainer = document.getElementById("footer-container");
    if (!footerContainer) return; 

    const footer = document.createElement("footer");
    footer.classList.add("w-full");
    footer.innerHTML = `
        <!-- Footer -->
        <div class="bg-gray-900 text-white py-6 px-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 mx-auto max-w-screen-xl">

                <!-- Sección de Aion -->
                <div class="flex flex-col items-center md:items-start w-full md:w-auto px-8 text-center md:text-left">
                    <h2 class="text-4xl font-bold text-[#ff8000] mb-1">AION</h2>
                    <p class="text-gray-300 text-sm">Tu empresa de confianza <br> para inversiones inteligentes.</p>
                    <div class="mt-2 flex gap-6 justify-center md:justify-start">
                        <a href="https://www.facebook.com" target="_blank" class="relative">
                            <img src="./img/facebook.png" alt="Facebook" class="w-5 h-5 transition duration-300 ease-in-out rounded-full filter invert">
                            <div class="absolute inset-0 bg-[#ff8000] opacity-0 hover:opacity-50 transition-all duration-300 rounded-full"></div>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" class="relative">
                            <img src="./img/X.png" alt="Twitter" class="w-5 h-5 transition duration-300 ease-in-out rounded-full filter invert">
                            <div class="absolute inset-0 bg-[#ff8000] opacity-0 hover:opacity-50 transition-all duration-300 rounded-full"></div>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" class="relative">
                            <img src="./img/instagram.png" alt="Instagram" class="w-5 h-5 transition duration-300 ease-in-out rounded-full filter invert">
                            <div class="absolute inset-0 bg-[#ff8000] opacity-0 hover:opacity-50 transition-all duration-300 rounded-full"></div>
                        </a>
                    </div>
                </div>

                <!-- Sección de inversores -->
                <div class="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
                    <h2 class="text-lg font-bold text-[#ff8000] mb-1">SÚMATE COMO INVERSOR</h2>
                    <p class="text-gray-300 text-sm">Forma parte de un proyecto con alto potencial de crecimiento.</p>
                    <p class="text-gray-300 text-sm">Únete a nosotros y haz que tu inversión cuente.</p>
                </div>

                <!-- Botones -->
                <div class="flex flex-row gap-4 w-full max-w-md px-8">
                    <a href="invertir.html" id="inversiones" class="btn flex-1 bg-[#ff8000] border-0 text-white hover:bg-orange-700 py-4 text-center rounded-md shadow-lg transition-colors duration-500 ease-in-out">
                        INVERTIR
                    </a>

                    <a href="formulario.html" id="contacto" class="btn flex-1 bg-transparent border-2 border-[#ff8000] text-[#ff8000] hover:bg-[#ff8000] hover:text-white py-4 text-center rounded-md shadow transition-colors duration-500 ease-in-out">
                        CONTACTO
                    </a>
                </div>
            </div>
        </div>

        <!-- Sección de politicas -->
        <div class="bg-[#ff8000] text-black text-sm py-3 px-6">
            <div class="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-8 text-center md:text-left gap-4">

                <!-- Frase de derechos -->
                <p class="text-sm">&copy; 2025 - Todos los derechos reservados</p>

                <!-- Links de politicas -->
                <div class="flex flex-col md:flex-row justify-center md:justify-end items-center gap-1 md:gap-3 text-sm">
                    <a href="avisosLegales.html" class="hover:text-primary">Avisos Legales</a>
                    <!-- Guiones solo visibles en pantallas medianas y grandes -->
                    <span class="hidden md:inline">-</span>
                    <a href="terminosCondiciones.html" class="hover:text-primary">Términos y Condiciones</a>
                    <span class="hidden md:inline">-</span>
                    <a href="politicaPrivacidad.html" class="hover:text-primary">Política de Privacidad</a>
                    <span class="hidden md:inline">-</span>
                    <a href="politicaCookies.html" class="hover:text-primary">Política de Cookies</a>
                </div>
            </div>
        </div>
    `;
    footerContainer.appendChild(footer);
}

// Ejecuta la función al cargar la página
document.addEventListener("DOMContentLoaded", crearFooter);
