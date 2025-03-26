<?php
// conexion.php

// Incluir el archivo de credenciales
require_once 'config.php';

function obtenerConexion() {
    try {
        // Conexión a la base de datos usando PDO
        $conexion = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASSWORD);
        // Configurar el modo de errores de PDO
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conexion;
    } catch (PDOException $e) {
        // Si ocurre un error, se muestra el mensaje
        echo "Error de conexión: " . $e->getMessage();
        return null;
    }
}
?>
