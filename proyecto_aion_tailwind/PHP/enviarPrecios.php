<?php

// Habilitar CORS si la petición viene de otro dominio
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

/* Importar las clases de PHPMailer */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Cargar el autoloader de Composer
require '../PHPMailer/Exception.php';
require '../PHPMailer/PHPMailer.php';
require '../PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['correo'];
    $tel = $_POST['tel'];
    $precio = $_POST['precio'];

    // Validación básica
    if (empty($nombre) || empty($email) || empty($precio) || empty($tel)) {
        echo json_encode(["status" => "error", "message" => "Todos los campos son obligatorios."]);
        exit;
    }

    try {
        // Función para configurar PHPMailer
        function configurarCorreo($mail) {
            $mail->isSMTP();
            $mail->CharSet = 'UTF-8';
            $mail->Host       = 'smtp.ionos.es';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'contacto@gestoraion.com';
            $mail->Password   = '0w2vzKS839!5';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;
        }

        // PRIMER CORREO: Confirmación para el usuario
        $mail1 = new PHPMailer(true);
        configurarCorreo($mail1);

        $mail1->setFrom('contacto@gestoraion.com', 'Gestoria AION');
        $mail1->addAddress($email, $nombre); // Para el usuario

        $mail1->isHTML(true);
        $mail1->Subject = 'Confirmación de registro en tarifa';
        $mail1->Body = '<h3>¡Hola ' . $nombre . '!</h3>
                        <p>Hemos recibido tu solicitud para la tarifa de <b>' . $precio . '</b>.</p>
                        <p>Nos pondremos en contacto contigo pronto para brindarte más información.</p>
                        <p><b>Detalles de tu registro:</b></p>
                        <ul>
                            <li><b>Teléfono:</b> ' . $tel . '</li>
                            <li><b>Tarifa seleccionada:</b> ' . $precio . '</li>
                        </ul>
                        <br>
                        <p>Atentamente,<br><b>Gestoría <span style="color:#ff8000;">AION</span></b></p>';

        $enviadoUsuario = $mail1->send();

        // SEGUNDO CORREO: Notificación para la empresa
        $mail2 = new PHPMailer(true);
        configurarCorreo($mail2);

        $mail2->setFrom('contacto@gestoraion.com', 'Gestoria AION');
        $mail2->addAddress('contacto@gestoraion.com', 'Gestoria AION'); // Para la empresa

        $mail2->isHTML(true);
        $mail2->Subject = 'Nuevo registro en tarifa: ' . $precio;
        $mail2->Body = '<h3>Nuevo registro en tarifa</h3>
                        <p><b>Nombre:</b> ' . $nombre . '</p>
                        <p><b>Email:</b> ' . $email . '</p>
                        <p><b>Teléfono:</b> ' . $tel . '</p>
                        <p><b>Tarifa seleccionada:</b> ' . $precio . '</p>';

        $enviadoEmpresa = $mail2->send();

        // Verificar si ambos correos se enviaron correctamente
        if ($enviadoUsuario && $enviadoEmpresa) {
            echo json_encode(["status" => "success", "message" => "Los correos han sido enviados correctamente."]);
        } else {
            echo json_encode(["status" => "error", "message" => "No se pudo enviar el mensaje a todos los destinatarios."]);
        }

    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Error: {$mail1->ErrorInfo}"]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
?>
