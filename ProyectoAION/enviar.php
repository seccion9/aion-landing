<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $tel = htmlspecialchars($_POST["tel"]);
    $ciudad = htmlspecialchars($_POST["ciudad"]);
    $info = htmlspecialchars($_POST["info"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $destinatario = "tuemail@ejemplo.com"; // Cambia esto con tu dirección de correo
    $asunto = "Nuevo mensaje de contacto";

    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Correo Electrónico: $email\n";
    $cuerpoMensaje .= "Teléfono: $tel\n";
    $cuerpoMensaje .= "Ciudad: $ciudad\n";
    $cuerpoMensaje .= "¿Cómo nos conociste?: $info\n\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
} else {
    echo "Acceso denegado.";
}
?>
