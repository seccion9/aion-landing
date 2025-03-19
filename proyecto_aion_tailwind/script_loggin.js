document.addEventListener("DOMContentLoaded", function() {
    const logUser = document.getElementById('logUser'); // Imagen en la que se hace clic
    const body = document.body; // Para añadir el modal al body

    // Crear el modal de inicio de sesión
    const loginModal = document.createElement('div');
    loginModal.id = 'login-modal';
    loginModal.classList.add('fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-50', 'hidden', 'flex', 'justify-center', 'items-center', 'z-50');

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('bg-white', 'p-8', 'rounded-lg', 'w-96');

    // Crear el formulario de inicio de sesión
    const form = document.createElement('form');
    form.id = 'login-form';

    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.classList.add('block', 'mb-1');
    usernameLabel.textContent = 'Usuario';

    const usernameInput = document.createElement('input');
    usernameInput.id = 'username';
    usernameInput.type = 'text';
    usernameInput.classList.add('w-full', 'px-4', 'py-2', 'border', 'rounded-md');
    usernameInput.required = true;

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.classList.add('block', 'mb-1');
    passwordLabel.textContent = 'Contraseña';

    const passwordInput = document.createElement('input');
    passwordInput.id = 'password';
    passwordInput.type = 'password';
    passwordInput.classList.add('w-full', 'px-4', 'py-2', 'border', 'rounded-md');
    passwordInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('w-full', 'bg-blue-500', 'text-white', 'py-2', 'rounded-md');
    submitButton.textContent = 'Entrar';

    const closeButton = document.createElement('button');
    closeButton.id = 'close-modal';
    closeButton.classList.add('absolute', 'top-2', 'right-2', 'text-lg');
    closeButton.textContent = 'X';

    // Agregar los elementos al formulario
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    // Agregar los elementos al contenido del modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(form);

    // Agregar el contenido al modal
    loginModal.appendChild(modalContent);

    // Agregar el modal al body
    body.appendChild(loginModal);

    // Mostrar el modal cuando se hace clic en el logo
    logUser.addEventListener('click', function() {
        loginModal.classList.remove('hidden');
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeButton.addEventListener('click', function() {
        loginModal.classList.add('hidden');
    });

    // Cerrar el modal si se hace clic fuera del modal
    document.addEventListener('click', function(event) {
        if (!modalContent.contains(event.target) && !logUser.contains(event.target)) {
            loginModal.classList.add('hidden');
        }
    });
});
