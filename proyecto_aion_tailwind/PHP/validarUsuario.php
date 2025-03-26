<?php
session_start();
require_once 'config.php';
require_once 'conexion.php';

header('Content-Type: application/json');

// Recoger los datos enviados
$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$contrasena = isset($_POST['contrasena']) ? $_POST['contrasena'] : '';

if (empty($usuario) || empty($contrasena)) {
    echo json_encode(['success' => false, 'error' => 'Debe completar ambos campos']);
    exit();
}

validarUsuario($usuario, $contrasena);

function validarUsuario($usuario, $contrasena) {
    $conexion = obtenerConexion();

    if (!$conexion) {
        echo json_encode(['success' => false, 'error' => 'Error de conexión']);
        exit();
    }

    $contrasenaMD5 = md5($contrasena);
    $query = "SELECT user, email FROM aion_users WHERE user = :usuario AND password = :contrasena";
    $stmt = $conexion->prepare($query);
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':contrasena', $contrasenaMD5);

    if (!$stmt->execute()) {
        echo json_encode(['success' => false, 'error' => 'Error en la consulta']);
        exit();
    }

    $usuarioData = $stmt->fetch(PDO::FETCH_ASSOC); // Obtener datos del usuario

    if ($usuarioData) {
        // Guardar los datos en la sesión
        $_SESSION['usuario_id'] = $usuarioData['user'];  // Identificador de usuario
        $_SESSION['usuario'] = $usuarioData['user'];     // Nombre de usuario
        $_SESSION['correo'] = $usuarioData['email'];     // Correo electrónico
        
        // Devolver los datos en JSON
        echo json_encode([
            'success' => true,
            'usuario' => $_SESSION['usuario'],
            'correo' => $_SESSION['correo']
        ]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Usuario o contraseña incorrectos']);
    }

    exit();
}
?>
