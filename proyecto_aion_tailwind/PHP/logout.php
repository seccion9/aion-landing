<?php
session_start();
session_unset();  // Eliminar todas las variables de sesión
session_destroy(); // Destruir la sesión

// Redirigir al usuario al index
header("Location: /rediseño/proyecto_aion_tailwind/index.html");
exit();
?>