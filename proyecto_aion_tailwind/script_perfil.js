// Espera a que se cargue el DOM antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {

    // Elementos del DOM
    const editProfileBtn = document.getElementById("edit-profile-btn");
    const changePasswordBtn = document.getElementById("change-password-btn");
    const updateNotificationsBtn = document.getElementById("update-notifications-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Manejo de eventos
    editProfileBtn.addEventListener("click", function() {
        editProfile();
    });

    changePasswordBtn.addEventListener("click", function() {
        changePassword();
    });

    updateNotificationsBtn.addEventListener("click", function() {
        updateNotifications();
    });

    logoutBtn.addEventListener("click", function() {
        logout();
    });

    // Función para editar el perfil
    function editProfile() {
        const profileName = document.getElementById("profile-name").textContent;
        const profileEmail = document.getElementById("profile-email").textContent;
        const profilePhone = document.getElementById("profile-phone").textContent;

        const newName = prompt("Edita tu nombre:", profileName);
        const newEmail = prompt("Edita tu correo electrónico:", profileEmail);
        const newPhone = prompt("Edita tu teléfono:", profilePhone);

        if (newName && newEmail && newPhone) {
            // Realizar la petición para actualizar el perfil
            fetch("updateProfile.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: newName,
                    email: newEmail,
                    phone: newPhone
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Perfil actualizado exitosamente.");
                    // Actualizar la interfaz con los nuevos datos
                    document.getElementById("profile-name").textContent = newName;
                    document.getElementById("profile-email").textContent = newEmail;
                    document.getElementById("profile-phone").textContent = newPhone;
                } else {
                    alert("Error al actualizar el perfil.");
                }
            })
            .catch(error => console.error("Error:", error));
        }
    }

    // Función para cambiar la contraseña
    function changePassword() {
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword === confirmPassword) {
            // Realizar la petición para cambiar la contraseña
            fetch("changePassword.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password: newPassword
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Contraseña cambiada exitosamente.");
                    // Limpiar los campos del formulario
                    document.getElementById("new-password").value = "";
                    document.getElementById("confirm-password").value = "";
                } else {
                    alert("Error al cambiar la contraseña.");
                }
            })
            .catch(error => console.error("Error:", error));
        } else {
            alert("Las contraseñas no coinciden.");
        }
    }

    // Función para actualizar las preferencias de notificación
    function updateNotifications() {
        const emailNotifications = document.getElementById("email-notifications").checked;
        const smsNotifications = document.getElementById("sms-notifications").checked;

        // Realizar la petición para actualizar las preferencias
        fetch("updateNotifications.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailNotifications: emailNotifications,
                smsNotifications: smsNotifications
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Preferencias de notificación actualizadas.");
            } else {
                alert("Error al actualizar las preferencias.");
            }
        })
        .catch(error => console.error("Error:", error));
    }

    // Función para cerrar sesión
    function logout() {
        // Realizar la petición para cerrar sesión
        fetch("logout.php", {
            method: "POST"
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirigir al usuario a la página de login
                window.location.href = "login.html";
            } else {
                alert("Error al cerrar sesión.");
            }
        })
        .catch(error => console.error("Error:", error));
    }

});
