# Luis · Frontend portfolio

Portafolio en español con React, TypeScript y Vite. Portada tipográfica inmersiva, malla animada original, índice lateral persistente y proyectos con previews amplias. Paleta carbón y rojo, con Barlow Condensed para los títulos.

## Desarrollo

```sh
npm install
npm run dev
```

## Verificación y producción

```sh
npm run lint
npm run build
npm run preview
```

La compilación genera `dist/`. Para GitHub Pages bajo una subruta, configura `base` en `vite.config.ts` según la URL de publicación.

## Docker

Construye y ejecuta la versión de producción con:

```sh
docker build -t portafolio-front .
docker run --rm -p 8080:80 portafolio-front
```

El portafolio quedará disponible en `http://localhost:8080`.

## Personalización

- Nombre, biografía y GitHub: `src/App.tsx`.
- Proyectos: `src/data/projects.ts`.
- Capturas y diagrama de los proyectos: `public/projects/`.
- Colores, tipografía y estilos: `src/index.css` y `src/App.css`.
- Título, descripción e idioma: `index.html`.
- Icono: `public/favicon.svg`.

Los proyectos destacados son [Limpio Perú](https://github.com/Luis560-bot/Informa-peru), [Airware](https://github.com/Luis560-bot/Airware) y [Task-P](https://github.com/Luis560-bot/sistema-de-gestion-de-tareas). Se verificaron los README, las dependencias y el código público. Limpio Perú y Airware enlazan a sus aplicaciones publicadas y muestran capturas reales guardadas localmente. Task-P enlaza a su repositorio y presenta un diagrama de su arquitectura, sin simular una demo.

También se incluyen [Portafolio Full Stack](https://github.com/Luis560-bot/Portafolio) y [Aprendiendo React](https://github.com/Luis560-bot/aprendiendo-react-pasos). El repositorio `smart-booking-technical-test` no se muestra porque no contiene commits. Este propio portafolio tampoco se repite en la selección.

La portada usa una malla esférica original dibujada en Canvas, que responde al puntero, se puede pausar y respeta la preferencia de movimiento reducido. Evita dibujar cuando está fuera de pantalla o la pestaña está oculta. El índice de secciones sigue la posición de lectura. El menú móvil se puede cerrar con Escape. Los enlaces de proyectos abren las aplicaciones o sus repositorios en otra pestaña.

Barlow Condensed, DM Sans e IBM Plex Mono se cargan desde Google Fonts con alternativas del sistema. Las ilustraciones y vistas de proyecto se construyen con Canvas, CSS y SVG locales.

## Inspiración

- [Ben Scott](https://benscott.dev/): portada inmersiva e interacción del fondo.
- [Brittany Chiang](https://brittanychiang.com/): índice lateral persistente, lectura clara y etiquetas de tecnologías.
- [Gatzara Studio](https://gatzara.studio/): tipografía de gran escala, contraste y protagonismo visual de los proyectos.

La composición, los textos y la malla de este portafolio son propios. Las capturas corresponden a los proyectos del usuario. No se reutilizan assets ni código de los sitios de referencia visual.
