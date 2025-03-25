<?php
session_start();
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

validarUsuario($usuario, $contrasena);

function validarUsuario($usuario, $contrasena) {
    $conexion = obtenerConexion();

    if (!$conexion) {
        echo json_encode(['success' => false, 'error' => 'Error de conexión']);
        exit();
    }

    $contrasenaMD5 = md5($contrasena);

    // 1. PRIMERA CONSULTA: Validar usuario
    $query = "SELECT id, user FROM aion_users WHERE user = :usuario AND password = :contrasena";
    $stmt = $conexion->prepare($query);
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':contrasena', $contrasenaMD5);
    $stmt->execute(); // 🔹 Ahora ejecutamos la consulta

    if ($stmt->rowCount() > 0) {
        $usuarioData = $stmt->fetch(PDO::FETCH_ASSOC);
        $usuario_id = $usuarioData['id'];

        // 2. SEGUNDA CONSULTA: Obtener datos adicionales (user y email)
        $query = "SELECT user, email FROM aion_users WHERE id = :id";
        $stmt = $conexion->prepare($query);
        $stmt->bindParam(':id', $usuario_id, PDO::PARAM_INT);
        $stmt->execute(); // 🔹 Ejecutamos la consulta nuevamente
        $usuarioInfo = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($usuarioInfo) {
            // Guardar datos en la sesión
            $_SESSION['usuario_id'] = $usuario_id;
            $_SESSION['user'] = $usuarioInfo['user'];
            $_SESSION['email'] = $usuarioInfo['email'];

            echo json_encode([
                'success' => true,
                'user' => $_SESSION['user'],
                'email' => $_SESSION['email']
            ]);
        } else {
            echo json_encode(['success' => false, 'error' => 'No se pudieron recuperar los datos del usuario']);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'Usuario o contraseña incorrectos']);
    }

    exit(); // IMPORTANTE: Detiene el script para evitar contenido adicional
}
?>

