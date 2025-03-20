<?php

require_once 'config.php';
require_once 'conexion.php';


// Obtener los datos del formulario enviados por fetch
$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : ''; // Aseguramos que el campo no esté vacío
$contrasena = isset($_POST['contrasena']) ? $_POST['contrasena'] : ''; // Aseguramos que el campo no esté vacío


function validarUsuario($usuario, $contrasena) {
    $conexion = obtenerConexion();

    if ($conexion === null) {
        return false;
    }

    // Encriptar la contraseña con MD5
    $contrasenaMD5 = md5($contrasena);

    // Consulta SQL para verificar si el usuario existe con la contraseña en MD5
    $query = "SELECT * FROM aion_users WHERE user = :usuario AND password = :contrasena";

    
    $stmt = $conexion->prepare($query);

    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':contrasena', $contrasenaMD5);

    $stmt->execute();
    

    if ($stmt->rowCount() > 0) {
        session_start();
        $_SESSION['usuario'] = $usuario;
        return true; 
    } else {
        return false; 
    }
}

if (validarUsuario($usuario, $contrasena)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$stmt->close();
$link->close();

?>
