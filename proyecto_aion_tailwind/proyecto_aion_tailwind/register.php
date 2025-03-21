<?php
// register.php         ///// VIEJOOOOOO VERSION DIA 19/03/2025 ******************


include 'db.php'; // Incluir la configuración de la base de datos

// Verificar si los datos del formulario han sido enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $username = $_POST['username'];
    $email = $_POST['email']; // Usamos un email en lugar de un username
    $password = $_POST['password'];
    
    // Validación de los datos
    if (empty($email) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Por favor, completa todos los campos.']);
        exit;
    }

    // Verificar si el usuario ya existe en la base de datos
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => false, 'message' => 'El correo electrónico ya está registrado.']);
        exit;
    }

    // Hashear la contraseña
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insertar el nuevo usuario en la base de datos
    $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:email, :password)");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $hashedPassword);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Usuario registrado exitosamente.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Hubo un problema al registrar el usuario.']);
    }
}
?>
