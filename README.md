# Luis · Frontend portfolio

Portafolio en español con React, TypeScript y Vite. Diseño adaptable con laboratorio visual, demos interactivas, presentación personal y contacto a través de GitHub.

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

- Nombre, biografía, GitHub y proyectos: `src/App.tsx`.
- Colores, tipografía y estilos: `src/index.css` y `src/App.css`.
- Título, descripción e idioma: `index.html`.
- Icono: `public/favicon.svg`.

Pulse, Forma y Orbit son conceptos de demostración. Sus datos no representan clientes ni resultados reales. Las demos permiten cambiar el período del dashboard, filtrar productos y gestionar una bolsa, y crear, completar o eliminar tareas. El estado se reinicia al cerrarlas; no requieren backend ni realizan pagos.

El laboratorio permite alternar diseño y código, cambiar el color y reaccionar al diseño. Los diálogos admiten teclado, Escape y recuperación del foco. El sitio respeta la preferencia de movimiento reducido.

DM Sans y Space Grotesk se cargan desde Google Fonts con alternativas del sistema. Las ilustraciones y vistas de proyecto se construyen con CSS y SVG locales.
