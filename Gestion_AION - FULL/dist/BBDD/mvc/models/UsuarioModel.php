<?php
require_once __DIR__ . '/../lib/Conexion.php';

class UsuarioModel {
    public function crearUsuario($datos) {
        $pdo = Conexion::obtenerConexion();
        
        // Generar hash de la contraseña
        $hashedPassword = password_hash($datos['password'], PASSWORD_DEFAULT);
    
        $sql = "INSERT INTO usuarios (nombre, email, user, hashedPassword) 
                VALUES (:nombre, :email, :user, :hashedPassword)";
        
        $stmt = $pdo->prepare($sql);
        
        return $stmt->execute([
            ':nombre' => $datos['nombre'],
            ':email' => $datos['email'],
            ':user' => $datos['user'],
            ':password' => $hashedPassword  // Enviamos el hash
        ]);
    }
    public function validarUsuario($user, $password) {
        $pdo = Conexion::obtenerConexion();
        
        $sql = "SELECT password FROM usuarios WHERE user = :user";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':user' => $user]);
        
        $usuario = $stmt->fetch();
        
        if($usuario) {
            return password_verify($password, $usuario['password']);
        }
        return false;
    }
    
}
