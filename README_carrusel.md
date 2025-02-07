# Proyecto: Carrusel Swipper

## Descripción

Este proyecto consiste en un **carrusel de imágenes** utilizando la librería **Swiper.js**. Además, cuenta con un archivo CSS que aplica estilos básicos a la página.

## Estructura del Proyecto

```
/proyecto
│── index.html      # Archivo principal de la página web
│── styles.css      # Archivo CSS con los estilos de la página
│── script.js       # Archivo JavaScript con la configuración de Swiper
│── /img           # Carpeta para almacenar imágenes
```

## Archivos Principales

### `index.html`

- Contiene la estructura principal de la página web.
- Incluye un **carrusel de imágenes** utilizando **Swipper.js**.
- Para aplicar estilos, se enlaza el archivo `styles.css` en la sección `<head>`:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```
- Para usar Swipper.js, se deben añadir los enlaces de la librería en el `<head>` y antes de cerrar el `<body>`:
  ```html
  <!-- Swiper CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">
  ```
  ```html
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
  <script src="swipper.js"></script>
  ```

### `styles.css`

- Contiene los **estilos básicos** de la página.
- Aporta diseño al carrusel y otras secciones de la página.
- **Nota:** Falta un CSS unificado para estilizar todas las partes de la página de manera consistente.

### `script.js`

- Contiene la configuración de Swipper.js para que el carrusel funcione correctamente.
- Se deben definir los parámetros adecuados en el `script.js` para personalizar el carrusel según las necesidades del proyecto.

### `/img`

- Carpeta destinada a almacenar las imágenes utilizadas en el carrusel y en otras secciones de la página.

## Mejoras Pendientes

**Unificar estilos**: Se debe crear un CSS general para estilizar todas las partes de la página de manera homogénea.
**Optimización Responsive**: Es necesario implementar **media queries** en CSS para adaptar el diseño a dispositivos móviles.

## Instalación y Uso

1. **Descargar el proyecto** o clonarlo desde el repositorio.
2. **Abrir el ************`index.html`************ en un navegador** para visualizar la página.
3. Asegurarse de que las imágenes están en la carpeta `/img`.

---


