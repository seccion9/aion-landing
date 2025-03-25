<?php
session_start();
header("Content-Type: application/json");

// Verificar si el usuario está autenticado
if (!isset($_SESSION["usuario_id"])) {
    echo json_encode(["success" => false, "error" => "No autenticado"]);
    exit();
}

// Si ya tenemos los datos en la sesión, los retornamos directamente
if (isset($_SESSION["user"]) && isset($_SESSION["email"])) {
    echo json_encode([
        "success" => true,
        "user" => $_SESSION["user"],
        "email" => $_SESSION["email"]
    ]);
    exit();
}

require_once 'config.php';
require_once 'conexion.php';

$usuario_id = $_SESSION["usuario_id"];

try {
    // Validar conexión a la base de datos
    if (!isset($pdo)) {
        echo json_encode(["success" => false, "error" => "Error de conexión a la base de datos"]);
        exit();
    }

    // Consultar los datos del usuario
    $stmt = $pdo->prepare("SELECT user, email FROM usuarios WHERE id = :id");
    $stmt->bindParam(":id", $usuario_id, PDO::PARAM_INT);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        // Guardamos los datos en sesión para futuras peticiones
        $_SESSION["user"] = $usuario["user"];
        $_SESSION["email"] = $usuario["email"];

        echo json_encode([
            "success" => true,
            "user" => $usuario["user"],
            "email" => $usuario["email"]
        ]);
    } else {
        echo json_encode(["success" => false, "error" => "Usuario no encontrado"]);
    }
} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => "Error en la consulta: " . $e->getMessage()]);
}
?>
