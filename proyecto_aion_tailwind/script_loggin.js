document.addEventListener("DOMContentLoaded", function() {
    const logUser = document.getElementById('logUser'); 
    const body = document.body; 

    // Crear el modal de inicio de sesión
    const loginModal = document.createElement('div');
    loginModal.id = 'login-modal';
    loginModal.classList.add('fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-50', 'hidden', 'flex', 'justify-center', 'items-center', 'z-50');

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('bg-white', 'p-8', 'rounded-lg', 'w-96');

    // Crear el formulario de inicio de sesión
    // ATENCION las clases llevan tailwind
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

    // Crear el texto de enlace para cambiar a registro
    const registerLink = document.createElement('a');
    registerLink.href = '#';
    registerLink.id = 'register-link';
    registerLink.classList.add('text-blue-500', 'mt-2', 'block', 'text-center');
    registerLink.textContent = '¿No tienes una cuenta? Regístrate';

    // Agregar los elementos al formulario
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(registerLink);  
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

    // Función para cambiar a la vista de registro
    function switchToRegister() {
        // Cambiar texto del enlace
        registerLink.textContent = '¿Ya tienes cuenta? Inicia sesión';

        // Cambiar los campos del formulario a registro
        usernameLabel.textContent = 'Correo electrónico';
        passwordLabel.textContent = 'Contraseña';

        // Cambiar el botón a 'Registrarse'
        submitButton.textContent = 'Registrarse';

        // Reemplazar la lógica de envío para el registro
        submitButton.removeEventListener('click', handleLoginSubmit);
        submitButton.addEventListener('click', handleRegisterSubmit);

        // Cambiar el evento del enlace para volver al inicio de sesión
        registerLink.removeEventListener('click', handleRegisterLinkClick);
        registerLink.addEventListener('click', handleLoginLinkClick);
    }

    // Función para volver al inicio de sesión
    function switchToLogin() {
        // Cambiar texto del enlace
        registerLink.textContent = '¿No tienes una cuenta? Regístrate';

        // Cambiar los campos del formulario a inicio de sesión
        usernameLabel.textContent = 'Usuario';
        passwordLabel.textContent = 'Contraseña';

        // Cambiar el botón a 'Entrar'
        submitButton.textContent = 'Entrar';

        // Reemplazar la lógica de envío para el login
        submitButton.removeEventListener('click', handleRegisterSubmit);
        submitButton.addEventListener('click', handleLoginSubmit);

        // Cambiar el evento del enlace para ir al registro
        registerLink.removeEventListener('click', handleLoginLinkClick);
        registerLink.addEventListener('click', handleRegisterLinkClick);
    }

    // Función que maneja el inicio de sesión
    function handleLoginSubmit(event) {
        event.preventDefault();
        // Aquí iría la lógica para iniciar sesión
        console.log('Iniciar sesión...');
    }

    // Función que maneja el registro
    function handleRegisterSubmit(event) {
        event.preventDefault();
        // Aquí iría la lógica para registrarse
        console.log('Registrarse...');
    }

    // Función que cambia al formulario de inicio de sesión
    function handleLoginLinkClick(event) {
        event.preventDefault();
        switchToLogin();
    }

    // Función que cambia al formulario de registro
    function handleRegisterLinkClick(event) {
        event.preventDefault();
        switchToRegister();
    }

    // Evento de clic en el enlace para cambiar a registro
    registerLink.addEventListener('click', handleRegisterLinkClick);

});

