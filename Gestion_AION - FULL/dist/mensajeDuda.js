document.addEventListener('click', function(event) {
    const card = event.target.closest('.nueva-card');
    
    // Verificamos si el clic no fue dentro de una tarjeta
    if (!card) {
        // Cerramos la tarjeta seleccionada si hay alguna abierta
        const openCard = document.querySelector('.nueva-card.selected');
        if (openCard) {
            const content = openCard.querySelector('.nueva-content');
            const flecha = openCard.querySelector('.nueva-flecha');
            content.style.height = '0';
            flecha.style.transform = 'rotate(0deg)';
            openCard.classList.remove('selected');
        }
    }
});

function toggleCard(card) {
    const content = card.querySelector('.nueva-content');
    const flecha = card.querySelector('.nueva-flecha');

    if (card.classList.contains('selected')) {
        // Si ya está abierta, la cerramos
        content.style.height = '0';
        flecha.style.transform = 'rotate(0deg)';
        card.classList.remove('selected');
    } else {
        // Cerramos cualquier otra tarjeta abierta antes de abrir la actual
        document.querySelectorAll('.nueva-card').forEach(tarjeta => {
            if (tarjeta !== card) {
                tarjeta.classList.remove('selected');
                tarjeta.querySelector('.nueva-content').style.height = '0';
                tarjeta.querySelector('.nueva-flecha').style.transform = 'rotate(0deg)';
            }
        });

        // Abrimos la tarjeta seleccionada
        content.style.height = content.scrollHeight + 'px';
        flecha.style.transform = 'rotate(90deg)';
        card.classList.add('selected');
    }
}































