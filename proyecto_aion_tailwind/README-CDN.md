# Proyecto: Migración de CDNs a Archivos Locales

## 📌 Descripción
En este proyecto, se han eliminado todos los enlaces a CDNs en línea y se han reemplazado por archivos locales para mejorar el rendimiento y la independencia del proyecto respecto a servidores externos. Esta decisión se tomó debido a que la instalación de Tailwind presentaba problemas de compatibilidad al estar utilizando una versión anterior.

## 🔧 Cambios realizados
- Se han eliminado todos los enlaces CDN en línea.
- Se ha descargado cada recurso externo y guardado en archivos locales.
- Se han creado archivos separados para cada recurso según su tipo (CSS o JS).
- Se han enlazado correctamente en el proyecto los archivos descargados.

## 📂 Archivos migrados
A continuación, se detallan los archivos que han sido descargados y almacenados localmente:

### 📜 Archivos CSS
- `tailwind.min.css`
- `daisyi.css`
- `aos.css`
- `all.min.css`

### 📜 Archivos JavaScript
- `aos.js`
- `sweetalert2-11.js`

## 🚀 Implementación
Para asegurarte de que los archivos locales están funcionando correctamente:
1. Asegúrate de que los archivos descargados están en la ubicación correcta dentro del proyecto.
2. Verifica que las rutas en los enlaces `<link>` y `<script>` en el HTML son correctas.
3. Prueba el proyecto en un servidor local o en un entorno de pruebas para confirmar que todo carga correctamente.

## ✅ Beneficios de esta migración
- **Mayor velocidad de carga**: No se depende de servidores externos para cargar los estilos y scripts.
- **Disponibilidad sin conexión**: Los archivos siempre estarán disponibles sin importar la conexión a internet.
- **Mayor control del código**: Se pueden modificar los archivos locales según las necesidades del proyecto.
- **Evita bloqueos de CDN**: En algunos entornos empresariales, los CDNs pueden estar bloqueados, lo que causaría errores en la carga.

---
📌 *Este cambio ayuda a mejorar la estabilidad y el rendimiento del proyecto.* 🚀

