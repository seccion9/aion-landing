# Características Genericas

La Landing Page presenta las siguientes características clave de la aplicación:

## Presentación del Producto

### Demostración Interactiva
La demostración interactiva es una herramienta que permite a los usuarios explorar las funcionalidades principales de la aplicación sin necesidad de registrarse. Esta demostración incluye:
- **Simulación de Tareas**: Muestra cómo se pueden crear y asignar tareas dentro de la aplicación.
- **Colaboración en Tiempo Real**: Demuestra cómo los usuarios pueden colaborar en proyectos simultáneamente.

### Vídeos Explicativos
Los vídeos explicativos son cortos tutoriales que cubren aspectos específicos de la aplicación, como:
- **Configuración Inicial**: Guía paso a paso para configurar la aplicación por primera vez.
- **Uso Avanzado**: Vídeos que explican funcionalidades más avanzadas, como la integración con otras herramientas.

## Formularios de Contacto

### Contratación de Servicios
El formulario de contratación de servicios permite a los usuarios solicitar información sobre cómo implementar la aplicación en su empresa. Incluye campos para:
- **Nombre y Apellido**
- **Correo Electrónico**
- **Mensaje o Consulta**

### Comentarios y Sugerencias
Este formulario es para que los usuarios puedan enviar comentarios o sugerencias sobre la aplicación. Ayuda a mejorar continuamente la experiencia del usuario.

### Consultas de Inversión
Para aquellos interesados en explorar oportunidades de inversión en el producto, este formulario permite enviar consultas directamente al equipo de inversión.

## Diseño Responsivo
La página está optimizada para ser visualizada en dispositivos móviles, tabletas y computadoras de escritorio, asegurando una experiencia de usuario fluida en cualquier dispositivo.

## Otras Características

### Integración con Redes Sociales
La página permite compartir contenido en redes sociales como Twitter, LinkedIn y Facebook, facilitando la difusión de la aplicación.

### Soporte Multilingüe
Aunque actualmente solo está disponible en español, se planea agregar soporte para otros idiomas en el futuro para expandir el alcance global.

## Funcionalidades Futuras
Se están desarrollando nuevas características para mejorar la experiencia del usuario, como:
- **Validación Avanzada de Formularios**: Para asegurar que los datos ingresados sean precisos y completos.
- **Integración con Servicios de Pago**: Para facilitar la compra de servicios adicionales directamente desde la aplicación.



# Características Especificas

La página de aterrizaje presenta las siguientes características clave de la aplicación:

## INDEX.html

### Sección de Presentación
Una sección inicial que introduce la aplicación y sus beneficios principales.

### Sección de Empresas Colaboradoras
Muestra los logos de empresas que ya trabajan con la aplicación.
- **Efecto Hover**: Los logos se muestran en escala de grises y cambian a color al pasar el cursor sobre ellos.

### Carrusel de Casos Reales
Presenta tres imágenes de casos reales de empresas que utilizan la aplicación.
- **Control**: Se maneja mediante funciones de JavaScript para navegar entre las imágenes.

### Sección de Funcionalidades
Contiene cuatro tarjetas con información sobre las principales funcionalidades.
- **Modales Desplegables**: Cada tarjeta tiene un modal asociado que se despliega a la derecha.
- **Contenido del Modal**: Incluye una descripción detallada y una imagen ilustrativa.
- **Nota**: Está preparado para una cuarta imagen (comentado en HTML y JavaScript).

### Sección de Herramientas
Presenta cuatro logos descriptivos de las herramientas principales.
- **Estructura**: Cada herramienta incluye un logo, título y texto explicativo.
- **Botón Interactivo**: Un botón '+' aparece al hacer hover sobre cada logo.
- **Funcionalidad del Botón**: Al hacer clic, muestra imágenes reales de la aplicación y detalles de uso.

### Sección de Precios
Muestra las opciones de precios y planes disponibles.
- **Switch de Planes**: Un botón tipo switch para alternar entre planes mensuales y anuales.
- **Planes Disponibles**: Muestra dos planes con sus respectivas características.
- **Precios Dinámicos**: Los precios se actualizan según la selección mensual/anual.
- **Formulario Modal**: Cada plan tiene un botón que abre un formulario modal para solicitar información.
  - **Campos**: Nombre, teléfono y correo electrónico.
  - **Precio Automático**: Se ajusta según el plan seleccionado.
  - **Implementación**: Utiliza JavaScript, HTML y modales CSS.

### Sección de Video
Incluye un texto persuasivo y un video de YouTube integrado.
- **Contenido del Video**: Tutorial que muestra cómo crear descuentos a través de la aplicación.
- **Reproducción**: Permite la reproducción directa en la página.

#### Código de Implementación

XXXXX


## Formulario.html 

### Formulario de Contacto

El formulario de contacto, implementado en `formulario.html`, incluye los siguientes campos:
- **Nombre**: Campo de texto para nombre completo.
- **Email**: Validación automática de formato de correo electrónico.
- **Teléfono**: Validación numérica y formato internacional.
- **Ciudad**: Campo de texto.
- **¿Cómo nos conociste?**: Dropdown con opciones:
  - Redes Sociales
  - Recomendación
  - Google
  - Otros
- **Consulta**: Área de texto multilínea.

#### Funcionalidad
1. **Validación del Lado del Cliente**:
   - Usa el evento `submit` de JavaScript para validación previa.
   - Regex para validar email y teléfono.

2. **Procesamiento con PHP**:
   - Sanitización de datos con `filter_input()`.
   - Envío de correos electrónicos utilizando **PHPMailer**.

3. **Feedback con SweetAlert2**:
   - Respuestas dinámicas según resultado del envío.

### Sección de Preguntas Frecuentes (FAQ)

#### Implementación
- **Estructura HTML**: Tarjetas que contienen preguntas y respuestas ocultas.
- **Animación CSS**: Transiciones suaves para mostrar u ocultar las respuestas.
- **Interactividad con JavaScript**: Eventos de clic para activar las tarjetas.

#### Funcionamiento
- Al hacer clic en una pregunta, se despliega la respuesta correspondiente.
- Las respuestas se muestran con una animación suave gracias a CSS Transitions.

#### Código de Implementación

XXXXX


## INVERTIR.html

### Página de Inversión (invertir.html)

La página de inversión está diseñada para captar el interés de potenciales inversores y facilitar su contacto inicial.

#### Estructura de la Página

1. **Texto Explicativo de Enganche**
   - Contenido persuasivo que destaca las oportunidades de inversión.
   - Diseñado para atraer y motivar a potenciales inversores.

2. **Formulario de Contacto para Inversores**
   El formulario incluye los siguientes campos:
   - **Nombre**: Campo de texto para el nombre completo del inversor.
   - **Teléfono**: Para contacto directo.
   - **Correo Electrónico**: Para comunicaciones y seguimiento.
   - **Aceptación de Términos y Condiciones**: Casilla de verificación.
   - **Aceptación de Política de Privacidad**: Casilla de verificación.
   - Ambas casillas incluyen hiperenlaces a los documentos correspondientes.

#### Funcionalidad del Formulario

- **Envío del Formulario**: 
  - Implementado con JavaScript para la interacción del lado del cliente.
  - Procesamiento en el servidor realizado con PHP.

- **Gestión de Correos Electrónicos**:
  - Utiliza la biblioteca PHPMailer para el envío seguro y confiable de correos.

- **Feedback al Usuario**:
  - Implementado con la librería SweetAlert2.
  - Proporciona respuestas visuales atractivas:
    - Mensaje de éxito cuando el formulario se envía correctamente.
    - Mensajes de error detallados en caso de problemas, explicando la razón del fallo.

#### Características Técnicas

- **Validación de Formularios**: Asegura que todos los campos requeridos estén completos y sean válidos.
- **Seguridad**: Implementa medidas para prevenir inyecciones de código y otros ataques comunes.
- **Diseño Responsivo**: Garantiza una experiencia de usuario óptima en dispositivos móviles y de escritorio.

#### Código de Implementación

XXXXX


## NAV

### Barra de Navegación (Nav.js)

La barra de navegación es un componente consistente en todas las páginas del sitio, implementada mediante JavaScript para una experiencia de usuario uniforme.

#### Características Principales

- **Implementación**: Creada dinámicamente con JavaScript e insertada en cada página HTML.
- **Elementos de Navegación**:
  - Logotipo de la empresa (funciona como enlace a la página de inicio)
  - Botones de navegación:
    - Inicio
    - Integraciones
    - Funcionalidades
    - Precios
    - ¿Quieres invertir?
    - Contacto
- **Funcionalidad de Anclaje**: Los botones que dirigen a secciones dentro de `index.html` funcionan como anclajes suaves.

#### Diseño Responsivo

- **Versión de Escritorio**: Muestra todos los elementos de navegación.
- **Versión Móvil**: 
  - Implementa un menú de hamburguesa.
  - Los botones de navegación se ocultan y se muestran al activar el menú.
  - Funcionalidad creada con JavaScript para toggle del menú.

#### Funcionalidad Adicional

- **Barra Fija**: Se mantiene en la parte superior de la página durante el scroll.
- **Seguimiento de Scroll**: Permanece visible mientras el usuario se desplaza por la página.

#### Código de Implementación

XXXXX

## FOOTER

### Footer.js

El footer es un componente consistente en todas las páginas del sitio, implementado dinámicamente mediante JavaScript para garantizar uniformidad y facilidad de mantenimiento.

#### Características Principales

- **Implementación**: Creado e insertado dinámicamente en cada página HTML utilizando JavaScript.
- **Diseño Responsivo**: Adaptado para una visualización óptima en dispositivos móviles y de escritorio.

#### Elementos del Footer

1. **Enlaces a Redes Sociales**
   - Iconos clickeables que dirigen a los perfiles oficiales de la empresa en diversas plataformas sociales.

2. **Sección de Inversión**
   - **Texto de Enganche**: Mensaje persuasivo para atraer potenciales inversores.
   - **Botón "Invertir"**: Enlace directo a la página de inversión (`invertir.html`).

3. **Botón de Contacto**
   - Dirige a los usuarios a la página de contacto (`formulario.html`).

4. **Información Legal**
   - Texto de derechos reservados.
   - Enlaces importantes:
     - Aviso Legal
     - Términos y Condiciones
     - Política de Privacidad
     - Política de Cookies

#### Funcionalidad

- **Navegación Rápida**: Proporciona acceso directo a páginas clave del sitio.
- **Consistencia**: Asegura una experiencia de usuario uniforme en todas las páginas.
- **Cumplimiento Legal**: Facilita el acceso a información legal importante.

#### Código de Implementación

xxxx

## Documentos Legales

### Aviso Legal
### Términos y Condiciones
### Política de Privacidad
### Aviso Legal

El sitio web incluye cuatro documentos legales cruciales, diseñados para cumplir con la legislación vigente y proporcionar transparencia a los usuarios.

#### Páginas Legales Incluidas

1. **Aviso Legal**
2. **Términos y Condiciones**
3. **Política de Privacidad**
4. **Política de Cookies**

#### Características Principales

- **Cumplimiento Normativo**: Adaptadas a la legislación vigente, incluyendo RGPD y LOPDGDD.
- **Información Detallada**: Contienen datos específicos sobre prácticas de la empresa, derechos de los usuarios y uso de datos personales.
- **Enlaces Funcionales**: Incluyen accesos directos a:
  - Formulario de contacto de la empresa
  - Hojas de reclamación

#### Contenido Clave

- **Aviso Legal**: 
  - Información sobre la empresa
  - Condiciones de uso del sitio web

- **Términos y Condiciones**:
  - Normas de uso del servicio
  - Responsabilidades del usuario y la empresa

- **Política de Privacidad**:
  - Detalles sobre recolección y uso de datos personales
  - Derechos de los usuarios (acceso, rectificación, supresión, oposición)

- **Política de Cookies**:
  - Tipos de cookies utilizadas
  - Finalidad, duración y titular de cada cookie
  - Opciones para gestionar o desactivar cookies

#### Funcionalidades Destacadas

- **Enlaces de Contacto**: Facilitan la comunicación directa con la empresa para consultas o ejercicio de derechos.
- **Acceso a Reclamaciones**: Proporcionan información o enlaces para presentar reclamaciones formales.
- **Actualizaciones**: Se revisan y actualizan periódicamente para mantener la conformidad con la legislación vigente.

#### Importancia

1. **Cumplimiento Legal**: Aseguran que el sitio web opera dentro del marco legal establecido.
2. **Transparencia**: Ofrecen claridad sobre las prácticas de la empresa en materia de privacidad y protección de datos.
3. **Confianza del Usuario**: Fomentan la confianza al proporcionar información detallada y accesible.

