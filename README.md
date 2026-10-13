# Luis · Frontend portfolio

Portafolio en español con React, TypeScript y Vite. Dirección visual de estudio de interfaces: azul petróleo, cobre y celeste, tipografía editorial, explorador de proyectos y trabajos presentados en filas amplias.

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

El explorador permite alternar entre las tres interfaces, con pestañas que admiten flechas, Inicio y Fin, y abrir la demo elegida. Los diálogos admiten teclado, Escape y recuperación del foco. El menú móvil se puede cerrar con Escape. El sitio respeta la preferencia de movimiento reducido.

DM Sans, Bricolage Grotesque, Instrument Serif e IBM Plex Mono se cargan desde Google Fonts con alternativas del sistema. Las ilustraciones y vistas de proyecto se construyen con CSS y SVG locales.
