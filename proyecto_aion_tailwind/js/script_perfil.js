document.addEventListener("DOMContentLoaded", function() {

    // Verifica que los elementos existen antes de asignar eventos
    const editProfileBtn = document.getElementById("edit-profile-btn");
    const changePasswordBtn = document.getElementById("change-password-btn");
    const updateNotificationsBtn = document.getElementById("update-notifications-btn");
    const logoutBtn = document.getElementById("logout-btn");

    if (editProfileBtn) {
        editProfileBtn.addEventListener("click", editProfile);
    }

    if (changePasswordBtn) {
        changePasswordBtn.addEventListener("click", changePassword);
    }

    if (updateNotificationsBtn) {
        updateNotificationsBtn.addEventListener("click", updateNotifications);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }
    setTimeout(cargarDatosUsuario, 2000); // Espera 2 segundos antes de llamar la función

    // Función para obtener los datos del usuario
    function cargarDatosUsuario() {
        fetch("/rediseño/proyecto_aion_tailwind/PHP/datosUsuario.php")
            .then(response => response.json())
            .then(data => {
                console.log("Datos recibidos:", data); // Verifica en la consola
                if (data.success) {
                    const userName = document.getElementById("user-name");
                    const profileName = document.getElementById("profile-name");
                    const profileEmail = document.getElementById("profile-email");
// Asegúrate de que los elementos estén disponibles
console.log(userName, profileName, profileEmail); 
                    if (userName) userName.textContent = data.user;
                    if (profileName) profileName.textContent = data.user;
                    if (profileEmail) profileEmail.textContent = data.email;
                } else {
                    console.error("Error al obtener los datos del usuario:", data.error);
                }
            })
            .catch(error => console.error("Error en la petición:", error));
    }

    // Cargar datos del usuario al cargar la página
    cargarDatosUsuario();

    // Función para editar el perfil
    function editProfile() {
        const profileName = document.getElementById("profile-name").textContent;
        const profileEmail = document.getElementById("profile-email").textContent;
        const profilePhone = document.getElementById("profile-phone").textContent;

        const newName = prompt("Edita tu nombre:", profileName);
        const newEmail = prompt("Edita tu correo electrónico:", profileEmail);
        const newPhone = prompt("Edita tu teléfono:", profilePhone);

        if (newName && newEmail && newPhone) {
            fetch("updateProfile.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newName, email: newEmail, phone: newPhone })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Perfil actualizado exitosamente.");
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
            fetch("changePassword.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: newPassword })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Contraseña cambiada exitosamente.");
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

    // Función para actualizar notificaciones
    function updateNotifications() {
        const emailNotifications = document.getElementById("email-notifications").checked;
        const smsNotifications = document.getElementById("sms-notifications").checked;

        fetch("updateNotifications.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ emailNotifications, smsNotifications })
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
        fetch("/rediseño/proyecto_aion_tailwind/PHP/logout.php", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "/rediseño/proyecto_aion_tailwind/login.html";
            } else {
                alert("Error al cerrar sesión.");
            }
        })
        .catch(error => console.error("Error:", error));
    }

});
