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
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $tel = $_POST['tel'];
    $ciudad = $_POST['ciudad'];
    $info = $_POST['info'];

    // Validación básica
    if (empty($nombre) || empty($email) || empty($mensaje)) {
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
        $mail1->Subject = 'Confirmación de contacto - Gestoría AION';
        $mail1->Body = '<h3>¡Gracias por contactarnos, ' . $nombre . '!</h3>
                        <p>Hemos recibido tu solicitud y te atenderemos lo antes posible.</p>
                        <p><b>Resumen de tu mensaje:</b></p>
                        <ul>
                            <li><b>Teléfono:</b> ' . $tel . '</li>
                            <li><b>Ciudad:</b> ' . $ciudad . '</li>
                            <li><b>Nos conociste a través de:</b> ' . $info . '</li>
                        </ul>
                        <p><b>Tu mensaje:</b><br>' . nl2br($mensaje) . '</p>
                        <br>
                        <p>Atentamente,<br><b>Gestoría <span style="color:#ff8000;">AION</span></b></p>';

        $enviadoUsuario = $mail1->send();

        // SEGUNDO CORREO: Notificación para la empresa
        $mail2 = new PHPMailer(true);
        configurarCorreo($mail2);

        $mail2->setFrom('contacto@gestoraion.com', 'Gestoria AION');
        $mail2->addAddress('contacto@gestoraion.com', 'Gestoria AION'); // Para la empresa

        $mail2->isHTML(true);
        $mail2->Subject = 'Nuevo mensaje de contacto - ' . $nombre;
        $mail2->Body = '<h3>Nuevo mensaje de contacto</h3>
                        <p><b>Nombre:</b> ' . $nombre . '</p>
                        <p><b>Email:</b> ' . $email . '</p>
                        <p><b>Teléfono:</b> ' . $tel . '</p>
                        <p><b>Ciudad:</b> ' . $ciudad . '</p>
                        <p><b>Nos ha conocido a través de:</b> ' . $info . '</p>
                        <p><b>Mensaje:</b><br>' . nl2br($mensaje) . '</p>';

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
