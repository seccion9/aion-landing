# Proyecto: Embudo de Ventas

## Descripción

Este proyecto corresponde a una sección de **embudo de ventas** dentro de una página web, que incluye **tarjetas con precios** y un sistema de cambio de estado entre precios **mensuales y anuales**.

## Estructura del Proyecto

```
/embudoVentas
│── index.html      # Archivo principal con la estructura de las tarjetas de precios
│── styles.css      # Archivo CSS con los estilos de la página
│── script.js       # Archivo JavaScript para interacción y animaciones
│── /img           # Carpeta para almacenar imágenes
```

## Archivos Principales

### `index.html`

- Contiene la estructura principal de la sección de precios.
- Incluye un **botón para alternar entre precios mensuales y anuales**.
- Para aplicar estilos, se enlaza el archivo `styles.css` en la sección `<head>`:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```
- Para hacer funcionar la lógica de cambios en los precios, se enlaza `script.js` al final del `<body>`:
  ```html
  <script src="script.js"></script>
  ```

### `styles.css`

- Contiene los **estilos básicos** de la página.
- Aplica diseño a las tarjetas de precios y al botón de alternancia.
- **Nota:** Falta un **CSS global** que unifique el estilo de toda la página para lograr coherencia en el diseño.
- Se deben agregar **media queries** para hacerlo totalmente responsive.

### `script.js`

- Permite **cambiar el color del botón** y **modificar los textos** de las tarjetas según el estado del botón (mensual/anual).
- **Pendiente:** Añadir más dinamismo mediante **animaciones** para que las tarjetas **aparezcan desde los laterales**, simulando la interacción de la página original.

### `/img`

- Carpeta destinada a almacenar imágenes utilizadas en la sección de precios.

## Mejoras Pendientes

 **Unificar estilos**: Crear un CSS general que estilice todas las secciones del proyecto de manera uniforme.
 **Optimización Responsive**: Implementar **media queries** para mejorar la visualización en dispositivos móviles.
 **Animaciones**: Hacer que las tarjetas **aparezcan desde los laterales** para mejorar la experiencia de usuario.

## Instalación y Uso

1. **Descargar el proyecto** o clonarlo desde el repositorio.
2. **Abrir el `index.html` en un navegador** para visualizar la página.
3. Verificar que las imágenes estén en la carpeta `/img` y que `script.js` y `styles.css` están correctamente enlazados.

---
