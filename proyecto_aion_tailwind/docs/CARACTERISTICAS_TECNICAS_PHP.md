# CaracterÃ­sticas Tecnicas

## footer.js

1. Se obtiene el contenedor del footer mediante su ID.
2. Se crea un elemento `<footer>` y se le añade una clase CSS.
3. Se genera el contenido HTML del footer.
4. Se añade el footer al contenedor.



## formularioPrecios.js

## Descripción del Script: Modal de Selección de Plan

Este script maneja la funcionalidad de un modal que se muestra cuando un usuario selecciona un plan de precios. Permite abrir el formulario modal con el precio del plan seleccionado y cerrarlo cuando el usuario interactúa con el botón de cierre o hace clic fuera del modal.

### Componentes Principales

1.  **Selección de Elementos del DOM:**

    *   `modal`: El elemento modal en sí mismo.
    *   `cerrar`: El botón para cerrar el modal.
    *   `inputPrecio`: El campo de entrada (input) donde se muestra el precio del plan seleccionado.
2.  **Función `obtenerPrecioVisible(tarjeta)`:**

    *   Determina si el precio que se muestra en la tarjeta del plan es mensual o anual.
    *   Busca los elementos `span` que contienen los precios mensuales y anuales dentro de la tarjeta.
    *   Si el precio anual está visible (no tiene la clase `hidden`), lo retorna. De lo contrario, retorna el precio mensual.
    *   Si no encuentra ninguno de los precios, retorna "No disponible".
3.  **Función `abrirFormulario(plan, precio)`:**

    *   Se asigna al objeto `window` para que pueda ser llamada desde elementos HTML (por ejemplo, desde un atributo `onclick`).
    *   Establece el valor del campo `inputPrecio` con el precio del plan seleccionado.
    *   Actualiza el título del modal con el nombre del plan seleccionado.
    *   Muestra el modal, removiendo la clase `hidden` y agregando la clase `flex`.
    *   Añade una transición suave de opacidad para que el modal aparezca gradualmente.
4.  **Eventos en los Botones de los Planes:**

    *   Selecciona todos los botones dentro de los elementos con la clase `tarjetaPlan`.
    *   Añade un event listener a cada botón que, al hacer clic:
        *   Obtiene la tarjeta del plan más cercana al botón (`.tarjetaPlan`).
        *   Obtiene el nombre del plan desde el elemento con la clase `subtitulo`.
        *   Obtiene el precio visible utilizando la función `obtenerPrecioVisible(tarjeta)`.
        *   Llama a la función `abrirFormulario(plan, precio)` para mostrar el modal con la información del plan.
5.  **Evento para Cerrar el Modal (Botón):**

    *   Añade un event listener al botón "cerrar" que:
        *   Inicia una transición de opacidad para que el modal se desvanezca.
        *   Después de un breve tiempo (500ms), oculta el modal removiendo la clase `flex` y agregando la clase `hidden`.
6.  **Evento para Cerrar el Modal (Clic Fuera del Modal):**

    *   Añade un event listener al elemento modal que:
        *   Verifica si el clic ocurrió directamente sobre el modal (fuera del contenido del modal).
        *   Si es así, inicia la misma secuencia de transición y ocultamiento que el botón de cierre.

### Funcionalidad General

El script permite que, al hacer clic en el botón de un plan, se abra un modal con un formulario pre-cargado con el precio del plan seleccionado. El modal puede ser cerrado haciendo clic en el botón de cerrar o haciendo clic fuera del contenido del modal.

### Notas Adicionales

*   Este script utiliza clases de CSS (`hidden`, `flex`, `opacity-0`, `opacity-100`) que deben estar definidas en tu hoja de estilos para que las transiciones y la visibilidad del modal funcionen correctamente.
*   La función `abrirFormulario` está asignada al objeto `window`, lo que permite que sea llamada directamente desde el HTML.

## mensajeDuda.js

## Descripción del Script: Toggle de Tarjetas (Acordeón)

Este script implementa un comportamiento de acordeón en un conjunto de tarjetas (elementos con la clase `nueva-card`). Permite abrir y cerrar las tarjetas, mostrando u ocultando su contenido adicional.

### Componentes Principales

1.  **Event Listener Global para Cerrar Tarjetas:**

    *   Añade un event listener al objeto `document` que escucha los clics en cualquier parte del documento.
    *   Dentro del event listener, primero busca el elemento más cercano con la clase `.nueva-card` que haya sido clickeado.
    *   Si el clic no ocurre dentro de una tarjeta (`if (!card)`), el script procede a cerrar cualquier tarjeta que esté actualmente abierta:
        *   Busca la tarjeta que tiene la clase `.nueva-card.selected` (la tarjeta abierta).
        *   Si encuentra una tarjeta abierta:
            *   Obtiene el elemento con la clase `.nueva-content` dentro de esa tarjeta (el contenido a ocultar).
            *   Obtiene el elemento con la clase `.nueva-flecha` dentro de esa tarjeta (la flecha que indica si la tarjeta está abierta o cerrada).
            *   Establece la altura del contenido a `0` para ocultarlo.
            *   Rota la flecha a su posición original (0 grados).
            *   Remueve la clase `selected` de la tarjeta.
2.  **Función `toggleCard(card)`:**

    *   Esta función recibe como argumento un elemento del DOM que representa una tarjeta (`.nueva-card`).
    *   Obtiene el contenido (`.nueva-content`) y la flecha (`.nueva-flecha`) dentro de la tarjeta.
    *   Verifica si la tarjeta ya está abierta (`card.classList.contains('selected')`):
        *   Si la tarjeta está abierta:
            *   Cierra la tarjeta estableciendo la altura del contenido a `0`.
            *   Rota la flecha a su posición original (0 grados).
            *   Remueve la clase `selected` de la tarjeta.
        *   Si la tarjeta está cerrada:
            *   Primero, cierra cualquier otra tarjeta que pudiera estar abierta:
                *   Selecciona todas las tarjetas con la clase `.nueva-card`.
                *   Itera sobre cada tarjeta:
                    *   Si la tarjeta no es la misma que la que se quiere abrir:
                        *   Remueve la clase `selected` de la tarjeta.
                        *   Establece la altura del contenido a `0`.
                        *   Rota la flecha a su posición original (0 grados).
            *   Después, abre la tarjeta seleccionada:
                *   Establece la altura del contenido a su altura total (`content.scrollHeight`).
                *   Rota la flecha a 90 grados.
                *   Añade la clase `selected` a la tarjeta.

### Funcionalidad General

El script permite que solo una tarjeta esté abierta a la vez. Al hacer clic en una tarjeta cerrada, esta se abre y cualquier otra tarjeta abierta se cierra automáticamente. Si se hace clic fuera de una tarjeta, la tarjeta actualmente abierta se cierra.

### Notas Adicionales

*   Este script utiliza clases de CSS (`selected`, `nueva-content`, `nueva-flecha`) que deben estar definidas en tu hoja de estilos para que las transiciones y la visibilidad del contenido funcionen correctamente.
*   La función `toggleCard` es la que se encarga de realizar el efecto acordeón.
*   La altura del contenido de la tarjeta se establece dinámicamente utilizando `content.scrollHeight` para adaptarse a diferentes cantidades de contenido.


## menu_hamburguesa.js

# Descripción del Script: Menú de Navegación Dinámico

Este script implementa un menú de navegación dinámico, diseñado para ser responsivo y funcional en diferentes dispositivos. Permite abrir y cerrar el menú de navegación al hacer clic en un botón (menú hamburguesa), ajusta la posición del menú según la altura del encabezado y se cierra automáticamente si el usuario hace clic fuera del menú.

## Componentes Principales

1. **Selección de Elementos del DOM:**
   - `menuToggle`: El botón que abre y cierra el menú.
   - `navList`: El contenedor que contiene los enlaces del menú.
   - `header`: El encabezado principal de la página.

2. **Función `actualizarMenu`:**
   - Calcula la altura del encabezado (`header.offsetHeight`).
   - Ajusta dinámicamente la posición vertical del menú (`navList.style.top`) para que quede justo debajo del encabezado, con un margen de 20 píxeles.

3. **Abrir y Cerrar el Menú:**
   - Al hacer clic en el botón (`menuToggle`), se alterna la clase `hidden` en el contenedor del menú (`navList`), mostrando u ocultando el menú.

4. **Cierre Automático del Menú:**
   - Si se hace clic fuera del menú o del botón, se cierra automáticamente añadiendo la clase `hidden` al contenedor del menú.

5. **Actualización Responsiva:**
   - La posición del menú se actualiza cada vez que se cambia el tamaño de la ventana (`resize`), asegurando que siempre esté correctamente alineado con el encabezado.

## Funcionalidad General

- **Mostrar/Ocultar Menú:** Al hacer clic en el botón de alternancia, el menú aparece o desaparece.
- **Cierre Automático:** Si el usuario hace clic fuera del contenido del menú o fuera del botón, este se oculta automáticamente.
- **Posicionamiento Dinámico:** El script ajusta dinámicamente la posición vertical del menú según la altura actual del encabezado.
- **Adaptación Responsiva:** El script asegura que el diseño sea funcional en diferentes tamaños de pantalla.

## Notas Adicionales

- Este script utiliza clases CSS como `hidden`, que deben estar definidas en tu hoja de estilos para controlar la visibilidad del menú.
- La funcionalidad es ideal para menús hamburguesa en aplicaciones móviles o diseños responsivos.
- La transición suave entre estados (mostrar/ocultar) puede ser mejorada con animaciones CSS adicionales si es necesario.

Este script mejora significativamente la experiencia de navegación, especialmente en dispositivos móviles, al proporcionar un control intuitivo sobre el menú.
 

## nav.js

# Descripción del Script: Carga de Navegación y Gestión de Sesión

Este script se encarga de cargar dinámicamente la barra de navegación y gestionar el icono de usuario basado en el estado de la sesión.

## Función `loadNav()`

Esta función carga el HTML de la barra de navegación en el contenedor designado.

### Características principales:

1. **Estructura HTML:**
   - Crea un `<header>` fijo en la parte superior de la página.
   - Incluye un logo, un menú de navegación y un botón de hamburguesa para dispositivos móviles.

2. **Diseño Responsivo:**
   - Utiliza clases de Tailwind CSS para un diseño adaptable.
   - El menú se oculta en dispositivos móviles y se muestra como una lista en pantallas grandes.

3. **Elementos de Navegación:**
   - Links a diferentes secciones: Inicio, Integraciones, Funcionalidades, Precios, Invertir y Contacto.
   - El botón de Contacto tiene un estilo destacado.

4. **Inserción en el DOM:**
   - Inserta el HTML generado en el elemento con id "nav-container".

## Función `cambiarLogoPorSesion()`

Esta función actualiza el icono de usuario basado en el estado de la sesión.

### Proceso:

1. **Verificación de Sesión:**
   - Realiza una petición fetch a '/rediseño/proyecto_aion_tailwind/PHP/verificar_sesion.php'.

2. **Actualización del Logo:**
   - Si el usuario está autenticado, muestra un icono de "logout".
   - Si no está autenticado, muestra un icono de "person".

3. **Manejo de Errores:**
   - Captura y registra cualquier error durante el proceso.

## Evento DOMContentLoaded

Al cargar el DOM completamente:

1. Llama a `loadNav()` para generar y insertar el HTML de la navegación.
2. Llama a `cambiarLogoPorSesion()` para actualizar el icono de usuario según el estado de la sesión.

Este script proporciona una navegación dinámica y responsiva, adaptándose al estado de autenticación del usuario y al tamaño de la pantalla del dispositivo.


## script_animacion_logos.js

# Descripción del Script: Animación de Marquesina

Este script añade dinámicamente una animación de marquesina (texto deslizante) a la página web utilizando CSS keyframes.

## Evento DOMContentLoaded

El script se ejecuta cuando el DOM (Document Object Model) ha sido completamente cargado y parseado.

### Proceso:

1. **Creación de Elemento de Estilo:**
   - Crea un nuevo elemento `<style>` utilizando `document.createElement('style')`.

2. **Definición de la Animación:**
   - Define una animación CSS llamada `marquee` usando `@keyframes`.
   - La animación mueve el elemento desde la derecha (100%) hacia la izquierda (-100%).

3. **Clase de Animación:**
   - Crea una clase CSS llamada `.animate-marquee`.
   - Esta clase aplica la animación `marquee` con una duración de 20 segundos, de forma lineal e infinita.

4. **Inserción en el DOM:**
   - Añade el elemento `<style>` creado al `<head>` del documento usando `document.head.appendChild(style)`.

## Detalles de la Animación

- **Nombre:** `marquee`
- **Duración:** 20 segundos
- **Timing Function:** Linear (velocidad constante)
- **Iteración:** Infinita (se repite continuamente)

## Uso

Para aplicar esta animación a un elemento, simplemente añade la clase `animate-marquee` al elemento HTML deseado. Por ejemplo:



## script_carrusel.js

# Descripción del Script: Carrusel de Imágenes Interactivo

Este script implementa un carrusel de imágenes interactivo con navegación manual y automática.

## Variables Globales

- `currentIndex`: Índice de la diapositiva actual.
- `carousel`: Elemento DOM del carrusel.
- `totalSlides`: Número total de diapositivas.
- `dots`: Elementos de navegación por puntos.
- `interval`: Referencia al intervalo de cambio automático.

## Funciones Principales

### `updateCarousel()`
- Actualiza la posición del carrusel.
- Aplica una transición suave.
- Llama a `updateDots()` para sincronizar los indicadores.

### `updateDots()`
- Actualiza el estilo de los puntos de navegación.
- Resalta el punto correspondiente a la diapositiva actual.

### `prevSlide()`
- Navega a la diapositiva anterior.
- Maneja el ciclo al inicio del carrusel.

### `nextSlide()`
- Avanza a la siguiente diapositiva.
- Maneja el ciclo al final del carrusel.

### `goToSlide(index)`
- Navega a una diapositiva específica.

### `startAutoSlide()`
- Inicia el cambio automático de diapositivas cada 5 segundos.

### `resetInterval()`
- Reinicia el temporizador de cambio automático.

## Inicialización

- Llama a `updateDots()` para configurar los indicadores iniciales.
- Inicia el cambio automático con `startAutoSlide()`.

Este script proporciona un carrusel de imágenes funcional con navegación manual y automática, mejorando la interactividad y la presentación visual de contenido en la página web.


## script_info_tarjetas.js

# Descripción del Script: Manejo de Formulario de Inversión

Este script gestiona el envío del formulario de inversión, incluyendo validaciones y comunicación con el servidor.

## Evento Principal

El script se activa cuando se envía el formulario con ID "formInvertir".

### Proceso:

1. **Prevención del Envío por Defecto:**
   - `event.preventDefault()` evita que el formulario se envíe de la manera tradicional.

2. **Verificación de Términos y Condiciones:**
   - Comprueba si el checkbox de términos está marcado.
   - Si no está marcado, muestra un mensaje de error usando SweetAlert2 y detiene el proceso.

3. **Recopilación de Datos del Formulario:**
   - Crea un objeto `FormData` con los datos del formulario.

4. **Envío de Datos al Servidor:**
   - Utiliza `fetch` para enviar los datos a "/rediseño/proyecto_aion_tailwind/PHP/enviar_invertir.php".
   - Método: POST.

5. **Manejo de la Respuesta del Servidor:**
   - Procesa la respuesta JSON del servidor.
   - Si es exitosa (`status === "success"`):
     - Muestra un mensaje de éxito con SweetAlert2.
     - Reinicia el formulario.
   - Si hay un error:
     - Muestra un mensaje de error con SweetAlert2.

6. **Manejo de Errores de Red:**
   - Captura cualquier error en la comunicación con el servidor.
   - Muestra un mensaje de error genérico.

## Características Adicionales

- **Logging:** Utiliza `console.log` para registrar cuando se presiona el botón de enviar.
- **Interfaz de Usuario:** Emplea SweetAlert2 para mostrar mensajes al usuario de manera atractiva.
- **Reinicio del Formulario:** Limpia el formulario después de un envío exitoso.

Este script proporciona una experiencia de usuario mejorada al manejar el envío de formularios de manera asíncrona, con validaciones y feedback visual.


## script_invertir.js

xxx

## script_tarjetas.js

xxx

## script_video.js

# Descripción del Script: Transición de Video Promocional

Este script maneja la transición suave entre una imagen de portada y un video promocional incrustado.

## Evento Principal

El script se ejecuta cuando el DOM está completamente cargado (`DOMContentLoaded`).

### Elementos del DOM

- `videoPromo`: Contenedor principal del video.
- `videoCover`: Imagen de portada del video.
- `videoFrame`: iframe que contiene el video real.
- `playButton`: Botón de reproducción superpuesto.

## Funcionalidad Principal

### Función `startTransition()`

1. **Fade Out de la Imagen de Portada:**
   - Remueve la clase `opacity-100` y añade `opacity-0` a `videoCover`.

2. **Transición al Video:**
   - Después de 500ms (duración del fade out):
     - Oculta completamente `videoCover` añadiendo la clase `hidden`.
     - Muestra `videoFrame` removiendo la clase `hidden`.
     - Aplica fade in a `videoFrame` cambiando su opacidad.

### Event Listeners

1. **Click en el Contenedor del Video:**
   - Inicia la transición al hacer clic en cualquier parte del contenedor.

2. **Click en el Botón de Play:**
   - Inicia la transición.
   - Usa `e.stopPropagation()` para evitar que el clic se propague al contenedor.

## Características

- **Transición Suave:** Utiliza clases de opacidad para crear un efecto de desvanecimiento.
- **Interactividad:** Permite iniciar el video tanto desde el botón de play como desde cualquier parte de la imagen de portada.
- **Sincronización:** Usa `setTimeout` para sincronizar la transición entre la imagen y el video.

Este script mejora la experiencia del usuario al proporcionar una transición elegante y atractiva entre la imagen de portada y el video promocional.


## scriptFormContact.js

# Descripción del Script: Manejo de Formulario de Contacto

Este script gestiona el envío del formulario de contacto, procesando la respuesta del servidor y proporcionando feedback al usuario.

## Evento Principal

El script se activa cuando se envía el formulario con ID "formContacto".

### Proceso:

1. **Prevención del Envío por Defecto:**
   - `event.preventDefault()` evita que el formulario se envíe de la manera tradicional.

2. **Recopilación de Datos del Formulario:**
   - Crea un objeto `FormData` con los datos del formulario.

3. **Envío de Datos al Servidor:**
   - Utiliza `fetch` para enviar los datos a "/rediseño/proyecto_aion_tailwind/PHP/enviar.php".
   - Método: POST.

4. **Procesamiento de la Respuesta:**
   - Convierte la respuesta a texto.
   - Intenta parsear el texto como JSON.
   - Si el parseo falla, registra el error y lanza una excepción.

5. **Manejo de la Respuesta del Servidor:**
   - Si es exitosa (`status === "success"`):
     - Muestra un mensaje de éxito con SweetAlert2.
   - Si hay un error:
     - Muestra un mensaje de error con SweetAlert2.

6. **Manejo de Errores:**
   - Captura cualquier error en el proceso.
   - Muestra un mensaje de error genérico con SweetAlert2.
   - Registra el error en la consola.

## Características Destacadas

- **Validación de Respuesta:** Verifica que la respuesta del servidor sea JSON válido.
- **Feedback Visual:** Utiliza SweetAlert2 para mostrar mensajes al usuario de manera atractiva.
- **Manejo de Errores Robusto:** Captura y maneja errores tanto en el parseo de la respuesta como en la comunicación con el servidor.

Este script proporciona una experiencia de usuario mejorada al manejar el envío de formularios de manera asíncrona, con feedback visual claro y manejo de errores efectivo.
