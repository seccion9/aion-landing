<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['usuario_id'])) {
    echo json_encode([
        'authenticated' => true,
        'user' => $_SESSION['user'],
        'email' => $_SESSION['email']
    ]);
} else {
    echo json_encode(['authenticated' => false]);
}
?>