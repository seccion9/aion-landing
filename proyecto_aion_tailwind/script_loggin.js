document.addEventListener("DOMContentLoaded", function() {
    const logUser = document.getElementById('logUser'); 
    const body = document.body; 

    const loginModal = document.createElement('div');
    loginModal.id = 'login-modal';
    loginModal.classList.add('fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-50', 'hidden', 'flex', 'justify-center', 'items-center', 'z-50');

    const modalContent = document.createElement('div');
    modalContent.classList.add('bg-white', 'p-8', 'rounded-lg', 'w-96');

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

    const registerLink = document.createElement('a');
    registerLink.href = '#';
    registerLink.id = 'register-link';
    registerLink.classList.add('text-blue-500', 'mt-2', 'block', 'text-center');
    registerLink.textContent = '¿No tienes una cuenta? Regístrate';

    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(registerLink);  
    form.appendChild(submitButton);

    modalContent.appendChild(closeButton);
    modalContent.appendChild(form);

    loginModal.appendChild(modalContent);

    body.appendChild(loginModal);

    logUser.addEventListener('click', function() {
        loginModal.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        loginModal.classList.add('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!modalContent.contains(event.target) && !logUser.contains(event.target)) {
            loginModal.classList.add('hidden');
        }
    });

    function switchToRegister() {
        registerLink.textContent = '¿Ya tienes cuenta? Inicia sesión';

        usernameLabel.textContent = 'Correo electrónico';
        passwordLabel.textContent = 'Contraseña';

        submitButton.textContent = 'Registrarse';

        submitButton.removeEventListener('click', handleLoginSubmit);
        submitButton.addEventListener('click', handleRegisterSubmit);

        registerLink.removeEventListener('click', handleRegisterLinkClick);
        registerLink.addEventListener('click', handleLoginLinkClick);
    }

    function switchToLogin() {
        registerLink.textContent = '¿No tienes una cuenta? Regístrate';

        usernameLabel.textContent = 'Usuario';
        passwordLabel.textContent = 'Contraseña';

        submitButton.textContent = 'Entrar';

        submitButton.removeEventListener('click', handleRegisterSubmit);
        submitButton.addEventListener('click', handleLoginSubmit);

        registerLink.removeEventListener('click', handleLoginLinkClick);
        registerLink.addEventListener('click', handleRegisterLinkClick);
    }

    function handleLoginSubmit(event) {
        event.preventDefault();
        // Aquí iría la lógica para iniciar sesión
        console.log('Iniciar sesión...');
    }

    function handleRegisterSubmit(event) {
        event.preventDefault();
        // Aquí iría la lógica para registrarse
        console.log('Registrarse...');
    }

    function handleLoginLinkClick(event) {
        event.preventDefault();
        switchToLogin();
    }

    function handleRegisterLinkClick(event) {
        event.preventDefault();
        switchToRegister();
    }

    registerLink.addEventListener('click', handleRegisterLinkClick);

});

