document.getElementById('registroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        nickname: e.target.nickname.value,
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        password: e.target.password.value
    };

    try {
        const response = await fetch('controllers/crearUsuarioController.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const resultado = await response.json();

        if (resultado.success) {
            Swal.fire({
                icon: 'success',
                title: '¡Registro Exitoso!',
                text: 'Te has registrado correctamente.',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al registrarte.',
                confirmButtonText: 'Intentar nuevamente'
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error de Conexión',
            text: 'Hubo un problema con la conexión al servidor.',
            confirmButtonText: 'Cerrar'
        });
    }
});