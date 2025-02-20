
  // Agrega las animaciones en la configuración de Tailwind
  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-200%);
        }
      }

      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `;
    document.head.appendChild(style);
  });