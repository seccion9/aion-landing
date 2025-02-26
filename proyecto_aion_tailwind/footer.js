// Crea una función para insertar el footer en el contenedor
function loadFooter() {
    const footerHTML = `
        <!-- Footer -->
        <div class="bg-neutral-100 py-10 px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:text-left px-6">
                <!-- Columna 1 -->
                <div>
                    <div class="text-left md:text-left">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">
                            <span class="text-[#ff8000]">AION</span>
                        </h2>
                        <p class="text-gray-600">Tu empresa de confianza</p>
                        <p class="text-gray-600">para inversiones inteligentes.</p>
                    </div>

                    <div class="mt-3 flex justify-center md:justify-start gap-4">
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="./img/facebook.png" alt="Facebook" class="w-6 h-6 hover:opacity-75">
                        </a>                            
                        <a href="https://www.twitter.com" target="_blank">
                            <img src="./img/X.png" alt="Twitter" class="w-6 h-6 hover:opacity-75">
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src="./img/instagram.png" alt="Instagram" class="w-6 h-6 hover:opacity-75">
                        </a>
                    </div>
                </div>
        
                <!-- Columna 2 -->
                <div class="text-center mt-8 md:text-center">
                    <ul class="mt-4 flex flex-wrap justify-center md:justify-start gap-6">
                        <li><a href="index.html" class="hover:text-[#ff8000]">Inicio</a></li>
                        <li><a href="#carrusel" class="hover:text-[#ff8000]">Integraciones</a></li>
                        <li><a href="#funcionalidades" class="hover:text-[#ff8000]">Funcionalidades</a></li>
                        <li><a href="#precios" class="hover:text-[#ff8000]">Precios</a></li>
                    </ul>
                </div>
        
                <!-- Columna 3 -->
                <div>
                    <div class="text-center md:text-right">
                        <a href="formulario.html" id="contacto" class="btn bg-[#ff8000] my-10 border-0 text-white hover:bg-orange-700">Contacto</a>
                    </div>
                </div>
            </div>
    
            <!-- Sección Naranja -->
            <div class="bg-[#ff8000] text-white text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
                <p class="text-sm">&copy; 2025 - Todos los derechos reservados</p>
                <div class="flex space-x-4 text-sm">
                    <a href="avisosLegales.html" class="hover:text-primary">Avisos Legales</a>
                    <span>-</span>
                    <a href="terminosCondiciones.html" class="hover:text-primary">Términos y Condiciones</a>
                    <span>-</span>
                    <a href="politicaPrivacidad.html" class="hover:text-primary">Política de Privacidad</a>
                    <span>-</span>
                    <a href="politicaCookies.html" class="hover:text-primary">Política de Cookies</a>
                </div>
            </div>
        </div>
        <!-- Fin del Footer -->
    `;
    
    // Encuentra el contenedor donde se insertará el footer
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}
