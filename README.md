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

## Personalización

- Nombre, biografía y GitHub: `src/App.tsx`.
- Proyectos: `src/data/projects.ts`.
- Previsualizaciones y demos: `src/components/ProjectPreview.tsx` y `src/components/ProjectDemo.tsx`.
- Colores, tipografía y estilos: `src/index.css` y `src/App.css`.
- Título, descripción e idioma: `index.html`.
- Icono: `public/favicon.svg`.

Pulse, Forma y Orbit son conceptos de demostración. Sus datos no representan clientes ni resultados reales. Las demos permiten cambiar el período del dashboard, filtrar productos y gestionar una bolsa, y crear, completar o eliminar tareas. El estado se reinicia al cerrarlas; no requieren backend ni realizan pagos.

La portada usa una malla esférica original dibujada en Canvas, que responde al puntero, se puede pausar y respeta la preferencia de movimiento reducido. Evita dibujar cuando está fuera de pantalla o la pestaña está oculta. El índice de secciones sigue la posición de lectura. Los diálogos admiten teclado, Escape y recuperación del foco. El menú móvil se puede cerrar con Escape.

Barlow Condensed, DM Sans e IBM Plex Mono se cargan desde Google Fonts con alternativas del sistema. Las ilustraciones y vistas de proyecto se construyen con Canvas, CSS y SVG locales.

## Inspiración

- [Ben Scott](https://benscott.dev/): portada inmersiva e interacción del fondo.
- [Brittany Chiang](https://brittanychiang.com/): índice lateral persistente, lectura clara y etiquetas de tecnologías.
- [Gatzara Studio](https://gatzara.studio/): tipografía de gran escala, contraste y protagonismo visual de los proyectos.

La implementación, los textos, la malla y las demos son propios. No se reutilizan assets ni código de los sitios de referencia.
