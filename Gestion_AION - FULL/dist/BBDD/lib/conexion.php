<?php
require_once __DIR__ . '/../config/Credenciales.php';

class Conexion {
    private static $instancia = null;

    private function __construct() {
        $dsn = "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=".DB_CHARSET;
        $opciones = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        
        try {
            self::$instancia = new PDO($dsn, DB_USER, DB_PASS, $opciones);
        } catch(PDOException $e) {
            exit("Error de conexión: " . $e->getMessage());
        }
    }

    public static function obtenerConexion(): PDO {
        if(!self::$instancia) {
            new self();
        }
        return self::$instancia;
    }
}
