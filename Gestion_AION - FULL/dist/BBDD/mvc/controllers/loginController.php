<?php
require_once __DIR__ . '/../models/UsuarioModel.php';

class LoginController {
    public function verificarCredenciales() {
        header('Content-Type: application/json');
        
        $datos = json_decode(file_get_contents('php://input'), true);
        
        // Sanitización de entradas
        $user = filter_var($datos['user']);
        $password = $datos['password']; // No sanitizamos la contraseña para no alterarla
        
        $modelo = new UsuarioModel();
        $valido = $modelo->validarUsuario($user, $password);
        
        echo json_encode(['success' => $valido]);
        exit;
    }
}

// Ejecución
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controlador = new LoginController();
    $controlador->verificarCredenciales();
}
