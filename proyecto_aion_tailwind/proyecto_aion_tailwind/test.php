<?php
// Datos de conexión
$host = 'db5016659495.hosting-data.io'; // Servidor de la base de datos
$user = 'dbu2592669';  // Usuario de la base de datos
$password = 'Jv9!xPz#3qL@7sD';  // Contraseña de la base de datos
$database = 'dbs13498792'; // Nombre de la base de datos

try {
    $conexion = new PDO("mysql:host=$host;dbname=$database;charset=utf8", $user, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "✅ Conexión exitosa a la base de datos.";
} catch (PDOException $e) {
    echo "❌ Error de conexión: " . $e->getMessage();
}
?>