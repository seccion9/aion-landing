<?php

require_once 'config.php';
require_once 'conexion.php';

header('Content-Type: application/json'); // Forzar salida JSON

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$contrasena = isset($_POST['contrasena']) ? $_POST['contrasena'] : '';

// Verifica que ambos campos no estén vacíos antes de validar el usuario
if (empty($usuario) || empty($contrasena)) {
    echo json_encode(['success' => false, 'error' => 'Debe completar ambos campos']);
    exit();
}

// LLAMAR a la función validarUsuario
validarUsuario($usuario, $contrasena);

function validarUsuario($usuario, $contrasena) {
    $conexion = obtenerConexion();

    if (!$conexion) {
        echo json_encode(['success' => false, 'error' => 'Error de conexión']);
        exit();
    }

    $contrasenaMD5 = md5($contrasena);

    $query = "SELECT * FROM aion_users WHERE user = :usuario AND password = :contrasena";
    $stmt = $conexion->prepare($query);
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':contrasena', $contrasenaMD5);

    if (!$stmt->execute()) {
        echo json_encode(['success' => false, 'error' => 'Error en la consulta']);
        exit();
    }

    if ($stmt->rowCount() > 0) {
        session_start();
        $_SESSION['usuario'] = $usuario;
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Usuario o contraseña incorrectos']);
    }

    exit(); // IMPORTANTE: Detiene el script para evitar contenido adicional
}
