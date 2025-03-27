document.addEventListener("DOMContentLoaded", function () {
    // Primero verificar sesión
    document.getElementById("logUser").addEventListener("click", verificarSesion);
});

function verificarSesion() {
    fetch('/rediseño/proyecto_aion_tailwind/PHP/verificar_sesion.php')
    .then(response => response.json())
    .then(data => {
        if (data.authenticated) {
            window.location.href = "/rediseño/proyecto_aion_tailwind/perfilUsuario.html";
        } else {
            inicializarModal();
        }
    })
    .catch(error => console.error('Error:', error));
}

function inicializarModal() {
    // Código para mostrar el modal de inicio de sesión
    const logUser = document.getElementById('logUser');
    const body = document.body;

    // Crear el modal de inicio de sesión
    const loginModal = document.createElement('div');
    loginModal.id = 'login-modal';
    loginModal.classList.add(
        'fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-50', 
        'flex', 'justify-center', 'items-center', 'z-50',
        'transition-opacity', 'duration-500', 'opacity-0', 'pointer-events-none', 'hidden'
    );

    const modalContent = document.createElement('div');
    modalContent.classList.add(
        'bg-white', 'p-8', 'rounded-lg', 'w-96', 'relative'
    );

    const form = document.createElement('form');
    form.id = 'login-form';

    // Configuración de elementos del formulario
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
    closeButton.textContent = '×';

    // Ensamblar componentes
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    modalContent.appendChild(closeButton);
    modalContent.appendChild(form);
    loginModal.appendChild(modalContent);
    body.appendChild(loginModal);

    // Event Listeners
    logUser.addEventListener('click', function () {
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

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const usuario = usernameInput.value;
        const contrasena = passwordInput.value;
    
        fetch('/rediseño/proyecto_aion_tailwind/PHP/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `usuario=${encodeURIComponent(usuario)}&contrasena=${encodeURIComponent(contrasena)}`
        })
        .then(response => response.text())
        .then(text => {
            console.log("Respuesta del servidor:", text);
            return text ? JSON.parse(text) : {};
        })
        .then(data => {
            if (data.success) {
                Swal.fire({
                    title: '¡Inicio de sesión exitoso!',
                    text: 'Serás redirigido en breve.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    window.location.href = '/rediseño/proyecto_aion_tailwind/perfilUsuario.html';
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: data.error || 'Usuario o contraseña incorrectos',
                    icon: 'error',
                    confirmButtonColor: '#ff8000'
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error',
                text: 'Ocurrió un problema con la conexión.',
                icon: 'error',
                confirmButtonColor: '#ff8000'
            });
        });
    });
}
