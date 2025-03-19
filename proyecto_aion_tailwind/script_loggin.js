document.addEventListener("DOMContentLoaded", function () {
    const logUser = document.getElementById('logUser');
    logUser.classList.add('cursor-pointer', 'w-8', 'h-8');
    const body = document.body;

    const loginModal = document.createElement('div');
    loginModal.id = 'login-modal';
    loginModal.classList.add(
        'fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-50', 
        'flex', 'justify-center', 'items-center', 'z-50',
        'transition-opacity', 'duration-500', 'opacity-0', 'pointer-events-none', 'hidden'
    );

    const modalContent = document.createElement('div');
    modalContent.classList.add(
        'bg-white', 'p-8', 'rounded-lg', 'w-96', 'relative',
    );

    const form = document.createElement('form');
    form.id = 'login-form';

    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.classList.add('block', 'mb-1', 'text-gray-800');
    usernameLabel.textContent = 'Usuario';

    const usernameInput = document.createElement('input');
    usernameInput.id = 'username';
    usernameInput.type = 'text';
    usernameInput.classList.add(
        'w-full', 'px-4', 'py-2', 'border', 'rounded-md', 'mb-4', 'bg-white',
        'border-gray-300', 'focus:outline-none', 'focus:border-orange-500',
        'focus:ring-2', 'focus:ring-orange-500'
    );
    usernameInput.required = true;

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.classList.add('block', 'mb-1', 'text-gray-800');
    passwordLabel.textContent = 'Contraseña';

    const passwordInput = document.createElement('input');
    passwordInput.id = 'password';
    passwordInput.type = 'password';
    passwordInput.classList.add(
        'w-full', 'px-4', 'py-2', 'border', 'rounded-md', 'mb-4', 'bg-white',
        'border-gray-300', 'focus:outline-none', 'focus:border-orange-500',
        'focus:ring-2', 'focus:ring-orange-500'
    );
    passwordInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add(
        'w-full', 'bg-[#ff8000]', 'text-white', 'py-2', 'rounded-md',
        'hover:bg-orange-700', 'transition-colors', 'duration-500', 'ease-in-out', 'hover:text-white'
    );
    submitButton.textContent = 'Entrar';

    const closeButton = document.createElement('button');
    closeButton.id = 'close-modal';
    closeButton.classList.add(
        'absolute', 'top-2', 'right-4', 'text-2xl', 'cursor-pointer',
        'text-gray-500', 'hover:text-orange-500', 'transition-colors'
    );
    closeButton.textContent = 'x';

    const registerLink = document.createElement('a');
    registerLink.href = '#';
    registerLink.id = 'register-link';
    registerLink.classList.add(
        'text-blue-500', 'mt-2', 'block', 'text-center', 'pb-2',
        'hover:text-blue-800', 'transition-colors'
    );
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

    logUser.addEventListener('click', function () {
        // Aplicar animación de escala al icono del usuario
        logUser.classList.add('scale-90', 'transition-transform', 'duration-300');
        setTimeout(() => {
            logUser.classList.remove('scale-90');
        }, 300);

        loginModal.classList.remove('hidden');
        setTimeout(() => {
            loginModal.classList.remove('opacity-0', 'pointer-events-none');
            loginModal.classList.add('opacity-100');
        }, 10);
    });

    closeButton.addEventListener('click', function () {
        loginModal.classList.remove('opacity-100');
        loginModal.classList.add('opacity-0');
        
        setTimeout(() => {
            loginModal.classList.add('hidden', 'pointer-events-none');
        }, 500);
    });

    document.addEventListener('click', function (event) {
        if (!modalContent.contains(event.target) && !logUser.contains(event.target)) {
            loginModal.classList.remove('opacity-100');
            loginModal.classList.add('opacity-0');
            
            setTimeout(() => {
                loginModal.classList.add('hidden', 'pointer-events-none');
            }, 500);
        }
    });

    // Animación para el cambio de contenido
    function animateContentChange() {
        usernameLabel.classList.add('transition-all', 'duration-300', 'transform', 'scale-95');
        passwordLabel.classList.add('transition-all', 'duration-300', 'transform', 'scale-95');
        submitButton.classList.add('transition-all', 'duration-300', 'transform', 'scale-95');
        registerLink.classList.add('transition-all', 'duration-300', 'transform', 'scale-95');

        setTimeout(() => {
            usernameLabel.classList.remove('scale-95');
            passwordLabel.classList.remove('scale-95');
            submitButton.classList.remove('scale-95');
            registerLink.classList.remove('scale-95');
        }, 300);
    }

    function switchToRegister() {
        animateContentChange();
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
        animateContentChange();
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
        console.log('Iniciar sesión...');
    }

    function handleRegisterSubmit(event) {
        event.preventDefault();
        console.log('Registrarse...');
    }

    function handleLoginLinkClick(event) {
        event.preventDefault();
        switchToLogin();
    }

    function handleRegisterLinkClick(event) {
        event.preventDefault();
        
        // Animación al hacer click en el link de registro
        registerLink.classList.add('scale-90', 'transition-transform', 'duration-300');
        setTimeout(() => {
            registerLink.classList.remove('scale-90');
        }, 100);

        switchToRegister();
    }

    registerLink.addEventListener('click', handleRegisterLinkClick);

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Aplicar una animación de escala más suave y duradera al presionar el botón
        submitButton.classList.add('scale-90', 'transition-transform', 'duration-300');
        setTimeout(() => {
            submitButton.classList.remove('scale-90');
        }, 300);  // Aseguramos que la animación dure más tiempo
    });
});

