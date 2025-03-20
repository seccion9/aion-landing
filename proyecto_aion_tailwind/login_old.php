<?php
// login.php            ///// VIEJOOOOOO VERSION DIA 19/03/2025 ******************




include 'db.php'; // Incluir la configuración de la base de datos

// Verificar si los datos del formulario han sido enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $user = $_POST['email'];
    $password = $_POST['password'];

    // Validación de los datos
    if (empty($user) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Por favor, completa todos los campos.']);
        exit;
    }

    // Buscar el usuario en la base de datos
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $user);
    $stmt->execute();
    
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        // El usuario existe y la contraseña es correcta
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['username'];
        $_SESSION['user_email'] = $user['email'];

        echo json_encode(['success' => true, 'message' => 'Inicio de sesión exitoso.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Correo electrónico o contraseña incorrectos.']);
    }
}
?>
