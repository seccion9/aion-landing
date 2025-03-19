    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            user: e.target.user.value,
            password: e.target.password.value
        };

        try {
            const response = await fetch('controllers/LoginController.php', {
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
                    title: '¡Bienvenido!',
                    text: 'Iniciaste sesión correctamente.',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = 'index.html';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Credenciales incorrectas. Por favor, inténtalo de nuevo.',
                    confirmButtonText: 'Aceptar'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error en el servidor. Intenta de nuevo más tarde.',
                confirmButtonText: 'Aceptar'
            });
        }
    });
