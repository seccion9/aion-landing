<?php


// Habilitar CORS si la petición viene de otro dominio
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("Content-Type: application/json; charset=UTF-8");



/* Importar las clases de PHPMailer */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Cargar el autoloader de Composer
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

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


    // Crear una instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;  //Se pasa a producion por eso se comenta
        $mail->isSMTP();
        $mail->CharSet = 'UTF-8';
        $mail->Host       = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'e25473dc785a61';
        $mail->Password   = '85483ae9558c51';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Establecer destinatarios
        $mail->setFrom($email, $nombre);
        $mail->addAddress('reciboprueba@reciboprueba.com', 'Gestoria AION');

        // Contenido del mensaje
        $mail->isHTML(true);
        $mail->Subject = 'Registro en tarifa: ' . $precio;
        $mail->Body    = '<h3>Datos de contacto: </h3>
                          <p><b>Nombre:</b> ' . $nombre . '</p>
                          <p><b>Email:</b> ' . $email . '</p>
                          <p><b>Precio seleccionado:</b> ' . $precio . '</p>
                          <p><b>Telefono de contacto:</b> ' . $tel . '</p>';


        
        // Enviar el correo
        //$mail->send();

        // Enviar correo
        if ($mail->send()) {
            echo json_encode(["status" => "success", "message" => "Tu mensaje ha sido enviado correctamente."]);
        } else {
            echo json_encode(["status" => "error", "message" => "No se pudo enviar el mensaje."]);
        }

    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Error: {$mail->ErrorInfo}"]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
?>
