# Proyecto: Sección de Video Promocional y Footer

## Descripción

Este documento explica la estructura y funcionalidad de la parte del código que incluye la **sección del video promocional** y el **footer** de la página web.

## Estructura del Proyecto

```
/videoYfooter
│── index.html       # Archivo principal con la estructura de video y footer
│── styles.css       # Archivo CSS con los estilos de esta sección
│── /img             # Carpeta con las imágenes generadas por IA
```

## Archivos Principales

### `index.html`

- Contiene la sección del **video promocional** y el **footer**.
- En la sección del video se utiliza un **video embebido o local** para mostrar contenido promocional.
- El footer incluye **enlaces de navegación**, **información de la empresa** y **redes sociales**.
- Es importante tener en cuenta que los enlaces de referencia son **anchor links (`#`)**, por lo que, una vez completada la página, se deben actualizar con las rutas correctas.
- Para aplicar estilos, se enlaza el archivo `styles.css` en la sección `<head>`:

  ```html
  <link rel="stylesheet" href="styles.css">
  ```

### `styles.css`

- Contiene los **estilos específicos** para la sección del video y el footer.
- Define la **distribución y diseño responsivo** de estos elementos.
- **Nota:** Falta un **CSS unificado** que mantenga la coherencia de diseño en toda la página.

### `/img`

- Carpeta con las **imágenes generadas por IA**, ya que aún falta material oficial de la empresa.

## Mejoras Pendientes

 **Actualizar enlaces**: Es necesario completar los enlaces anchor (`#`) con las rutas correctas.
 **Redes Sociales**: Se deben agregar los enlaces correctos a las redes sociales en el footer.
 **Unificar estilos**: Se recomienda desarrollar un **CSS global** que mantenga la coherencia en todo el proyecto.
 **Optimización Responsive**: Implementar **media queries** para garantizar una visualización adecuada en todos los dispositivos.

## Instalación y Uso

1. **Descargar el proyecto** o clonarlo desde el repositorio.
2. **Abrir el `index.html` en un navegador** para visualizar la sección.
3. **Revisar y actualizar los enlaces** una vez que la página esté completa.

---
