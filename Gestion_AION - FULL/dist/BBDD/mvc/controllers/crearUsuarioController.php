<?php
require_once __DIR__ . '/../models/UsuarioModel.php';

class UsuarioController {
    public function guardarUsuario() {
        header('Content-Type: application/json');
        
        $datos = json_decode(file_get_contents('php://input'), true);
        
        // Validación básica
        if(empty($datos['password'])) {
            echo json_encode(['success' => false, 'error' => 'Contraseña requerida']);
            exit;
        }
        
        // Sanitizar inputs
        $datos['nombre'] = filter_var($datos['nombre'], FILTER_SANITIZE_STRING);
        $datos['email'] = filter_var($datos['email'], FILTER_SANITIZE_EMAIL);
        $datos['user'] = filter_var($datos['user'], FILTER_SANITIZE_STRING);
        
        $modelo = new UsuarioModel();
        $resultado = $modelo->crearUsuario($datos);
        
        echo json_encode(['success' => $resultado]);
        exit;
    }    
}

// Ejecución
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controlador = new UsuarioController();
    $controlador->guardarUsuario();
}
