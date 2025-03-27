# CaracterÃ­sticas Tecnicas

## datosUsuario.php

# Descripción del Script: Verificación de Autenticación y Obtención de Datos de Usuario

Este script PHP maneja la autenticación de usuarios y recupera información del usuario autenticado desde una base de datos. Está diseñado para ser utilizado como parte de una API, devolviendo respuestas en formato JSON.

## Componentes Principales

1. **Inicio de Sesión y Configuración de Cabecera:**
   - Inicia la sesión PHP.
   - Establece el tipo de contenido de la respuesta como JSON.

2. **Verificación de Autenticación:**
   - Comprueba si existe `$_SESSION["usuario_id"]`.
   - Si no existe, devuelve un error de "No autenticado".

3. **Verificación de Datos en Sesión:**
   - Si `$_SESSION["user"]` y `$_SESSION["email"]` ya existen, devuelve estos datos inmediatamente.

4. **Conexión a la Base de Datos:**
   - Incluye archivos de configuración y conexión.
   - Verifica si la conexión a la base de datos (`$pdo`) está establecida.

5. **Consulta a la Base de Datos:**
   - Prepara y ejecuta una consulta SQL para obtener `user` y `email` del usuario autenticado.
   - Utiliza una consulta preparada con parámetros para prevenir inyecciones SQL.

6. **Procesamiento de Resultados:**
   - Si se encuentran datos del usuario:
     - Almacena `user` y `email` en la sesión para futuras peticiones.
     - Devuelve estos datos en formato JSON.
   - Si no se encuentra el usuario, devuelve un error.

7. **Manejo de Errores:**
   - Utiliza un bloque try-catch para capturar excepciones de PDO.
   - Devuelve mensajes de error específicos en caso de problemas con la base de datos.

## Características Destacadas

- **Seguridad:** Utiliza sesiones PHP y consultas preparadas para proteger contra ataques.
- **Eficiencia:** Almacena datos en sesión para reducir consultas a la base de datos en peticiones futuras.
- **Formato de Respuesta:** Todas las respuestas se devuelven en formato JSON, ideal para APIs.
- **Manejo de Errores:** Proporciona mensajes de error claros y específicos.

Este script es una parte crucial de un sistema de autenticación, proporcionando una forma segura y eficiente de verificar y recuperar información de usuarios autenticados.



## enviar_invertir.php
## enviar.php
## envirPrecios.php


### Descripción del Script: Envío de Correos con PHPMailer

Este script PHP implementa el envío de correos electrónicos utilizando PHPMailer. Permite enviar dos correos: uno al usuario que llena el formulario y otro al administrador, asegurando una comunicación eficiente y profesional.

#### Componentes Principales

#### Habilitación de CORS
- **Cabeceras HTTP:** 
  - `Access-Control-Allow-Origin: *`: Permite que el script sea accesible desde cualquier dominio.
  - `Access-Control-Allow-Methods: POST`: Restringe las peticiones permitidas al método POST.
  - `Access-Control-Allow-Headers: Content-Type`: Permite cabeceras de tipo `Content-Type`.
  - `Content-Type: application/json; charset=UTF-8`: Establece el formato de respuesta como JSON con codificación UTF-8.

#### Importación de PHPMailer
- Utiliza las clases `PHPMailer`, `SMTP` y `Exception` para gestionar el envío de correos.
- Carga los archivos necesarios mediante `require`.

#### Validación de Datos
- Verifica que los campos `nombre`, `email` y `tel` no estén vacíos.
- Si algún campo está vacío, devuelve un mensaje de error en formato JSON.

#### Configuración de PHPMailer
- **Función `configurarCorreo($mail)`:**
  - Configura PHPMailer para usar SMTP con autenticación.
  - Establece el servidor SMTP (`smtp.ionos.es`), puerto (`587`), usuario y contraseña.
  - Utiliza encriptación TLS para mayor seguridad.

#### Envío de Correos
1. **Correo al Usuario:**
   - Envía un correo de confirmación al usuario que llenó el formulario.
   - Incluye los datos proporcionados por el usuario en un formato HTML atractivo.

2. **Correo al Administrador:**
   - Envía un correo al administrador con los datos del usuario que llenó el formulario.
   - Utiliza un diseño sencillo en HTML para presentar la información.

3. **Verificación del Envío:**
   - Comprueba si ambos correos fueron enviados correctamente.
   - Devuelve un mensaje de éxito o error en formato JSON.

#### Manejo de Errores
- Captura excepciones generadas por PHPMailer (`Exception`) y devuelve un mensaje de error detallado en formato JSON.

#### Respuesta HTTP
- Si la petición no es POST, devuelve un mensaje de error indicando que el método no está permitido.

### Características Destacadas

- **Seguridad:** Utiliza autenticación SMTP y encriptación TLS para proteger la transmisión de correos.
- **Flexibilidad:** Permite enviar correos personalizados tanto al usuario como al administrador.
- **Formato Profesional:** Utiliza HTML para crear correos visualmente atractivos y fáciles de leer.
- **Manejo Robusto de Errores:** Proporciona mensajes claros en caso de fallos durante el envío.

### Ejemplo de Uso

Este script es ideal para formularios de contacto o solicitudes en sitios web, donde se requiere confirmar la recepción al usuario y notificar a un administrador.

#### Notas Adicionales

Para garantizar que los correos no sean marcados como spam:
- Configura correctamente los registros SPF, DKIM y DMARC en tu dominio.
- Evita palabras o frases que puedan activar filtros de spam (por ejemplo, "gran oferta", "haz clic aquí").



## login.php

# Descripción del Script: Validación de Usuario y Autenticación con PHP

Este script PHP implementa un sistema de autenticación que valida las credenciales de un usuario contra una base de datos. Si las credenciales son correctas, se inicia una sesión y se almacenan los datos del usuario.

## Componentes Principales

### 1. **Inicio de Sesión**
- Utiliza `session_start()` para habilitar el uso de sesiones en PHP.
- Las sesiones permiten almacenar información del usuario durante su interacción con la aplicación.

### 2. **Configuración Inicial**
- Incluye los archivos `config.php` y `conexion.php` para configurar la conexión a la base de datos.
- Establece el encabezado HTTP como JSON (`Content-Type: application/json`) para que las respuestas sean interpretadas correctamente por el cliente.

### 3. **Validación de Entrada**
- Verifica si los campos `usuario` y `contrasena` han sido enviados mediante POST.
- Si alguno está vacío, devuelve un mensaje de error en formato JSON y detiene la ejecución.

### 4. **Función `validarUsuario($usuario, $contrasena)`**
Esta función realiza las siguientes tareas:

#### a) **Conexión a la Base de Datos**
- Llama a `obtenerConexion()` para establecer una conexión con la base de datos.
- Si no se puede conectar, devuelve un mensaje de error.

#### b) **Hash de Contraseña**
- Convierte la contraseña proporcionada por el usuario a su equivalente en MD5 para compararla con la base de datos.

#### c) **Primera Consulta: Validar Credenciales**
- Realiza una consulta SQL preparada para buscar al usuario por nombre y contraseña.
- Si no encuentra coincidencias, devuelve un mensaje indicando que las credenciales son incorrectas.

#### d) **Segunda Consulta: Obtener Información Adicional**
- Si las credenciales son válidas, utiliza el ID del usuario para obtener información adicional (nombre y correo electrónico).
- Los datos obtenidos se almacenan en variables de sesión (`$_SESSION`).

#### e) **Respuesta Exitosa**
- Si todo es correcto, devuelve un objeto JSON con los datos del usuario (`user` y `email`).

### 5. **Manejo de Errores**
- Utiliza mensajes claros para informar al cliente sobre problemas específicos:
  - Credenciales incorrectas.
  - Fallos en la conexión a la base de datos.
  - Problemas al recuperar información adicional del usuario.

### 6. **Salida Controlada**
- El uso explícito de `exit()` asegura que no se ejecutará código adicional después de enviar una respuesta JSON.

## Características Destacadas

1. **Seguridad:**
   - Utiliza consultas preparadas para prevenir ataques de inyección SQL.
   - Almacena contraseñas en formato hash (MD5), aunque sería recomendable usar algoritmos más seguros como `password_hash()`.

2. **Eficiencia:**
   - Realiza dos consultas SQL separadas para validar credenciales y obtener información adicional solo si es necesario.
   - Almacena los datos del usuario en sesión para evitar consultas repetitivas en futuras solicitudes.

3. **Formato JSON:**
   - Todas las respuestas (éxito o error) se devuelven en formato JSON, facilitando la integración con aplicaciones frontend.

4. **Manejo Robusto de Errores:**
   - Proporciona mensajes claros y específicos sobre el estado de la autenticación o problemas técnicos.

## Ejemplo de Respuestas JSON

### Respuesta Exitosa:
{
"success": true,
"user": "nombre_usuario",
"email": "correo@ejemplo.com"
}
### Respuesta por Error:
{
"success": false,
"error": "Usuario o contraseña incorrectos"
}

## validarUsuario.php

# Descripción del Script: Validación de Usuario y Autenticación con PHP

Este script PHP implementa un sistema de autenticación que valida las credenciales de un usuario contra una base de datos. Si las credenciales son correctas, se inicia una sesión y se almacenan los datos del usuario.

## Componentes Principales

### 1. **Inicio de Sesión y Configuración**
- Utiliza `session_start()` para habilitar el uso de sesiones en PHP.
- Incluye los archivos `config.php` y `conexion.php` para la configuración de la base de datos.
- Establece el encabezado HTTP como JSON (`Content-Type: application/json`).

### 2. **Validación de Entrada**
- Verifica si los campos `usuario` y `contrasena` han sido enviados mediante POST.
- Si alguno está vacío, devuelve un mensaje de error en formato JSON y detiene la ejecución.

### 3. **Función `validarUsuario($usuario, $contrasena)`**

#### a) **Conexión a la Base de Datos**
- Llama a `obtenerConexion()` para establecer una conexión con la base de datos.
- Si no se puede conectar, devuelve un mensaje de error.

#### b) **Hash de Contraseña**
- Convierte la contraseña proporcionada a su equivalente en MD5.

#### c) **Consulta SQL**
- Realiza una consulta SQL preparada para buscar al usuario por nombre y contraseña.
- Utiliza parámetros vinculados para prevenir inyecciones SQL.

#### d) **Verificación de Credenciales**
- Si encuentra un usuario, almacena sus datos en variables de sesión.
- Devuelve un objeto JSON con el nombre de usuario y correo electrónico.
- Si no encuentra coincidencias, devuelve un mensaje de error.

### 4. **Manejo de Errores**
- Proporciona mensajes claros para diferentes tipos de errores:
  - Campos incompletos
  - Error de conexión a la base de datos
  - Error en la consulta SQL
  - Credenciales incorrectas

## Características Destacadas

1. **Seguridad:**
   - Utiliza consultas preparadas para prevenir ataques de inyección SQL.
   - Almacena contraseñas en formato hash (MD5), aunque sería recomendable usar algoritmos más seguros.

2. **Eficiencia:**
   - Realiza una sola consulta SQL para validar credenciales y obtener información del usuario.

3. **Formato JSON:**
   - Todas las respuestas se devuelven en formato JSON, facilitando la integración con aplicaciones frontend.

4. **Manejo de Sesiones:**
   - Almacena datos relevantes del usuario en la sesión para su uso posterior.

## Recomendaciones

1. **Mejorar Seguridad:**
   - Sustituir MD5 por algoritmos más seguros como bcrypt (`password_hash()` y `password_verify()`).
   - Implementar HTTPS para proteger las credenciales durante la transmisión.

2. **Manejo de Errores:**
   - Considerar el uso de try-catch para un manejo más robusto de excepciones PDO.

3. **Validación Adicional:**
   - Implementar validaciones adicionales en el lado del servidor para los datos de entrada.

Este script proporciona una base sólida para un sistema de autenticación, siendo adecuado para aplicaciones web que requieren un control de acceso básico.

### Ejemplo de Uso

Para utilizar este script, simplemente envía una petición POST con los campos `usuario` y `contrasena` al archivo PHP correspondiente. El script devolverá un objeto JSON con los datos del usuario si las credenciales son correctas o un mensaje de error si no lo son.

