function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = imageSrc;
    
    // Mostrar modal con animación
    modal.classList.remove("invisible", "opacity-0");
    modal.classList.add("opacity-100");
    modalContent.classList.remove("scale-95");
    modalContent.classList.add("scale-100");
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");

    // Ocultar modal con animación
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");

    // Después de la animación, ocultamos completamente el modal
    setTimeout(() => {
        modal.classList.add("invisible");
    }, 300); // Coincide con `duration-300`
}


