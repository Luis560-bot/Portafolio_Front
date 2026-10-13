export const projects = [
  {
    id: 'pulse',
    title: 'Pulse',
    type: 'Dashboard',
    description:
      'Datos que se entienden de un vistazo. Un panel con filtros y visualización de actividad.',
    tags: ['React', 'TypeScript', 'Data UI'],
  },
  {
    id: 'forma',
    title: 'Forma',
    type: 'E-commerce',
    description:
      'Una tienda de objetos cotidianos, con una experiencia de compra simple y cuidada.',
    tags: ['React', 'CSS', 'UI design'],
  },
  {
    id: 'orbit',
    title: 'Orbit',
    type: 'Productividad',
    description:
      'Un espacio para bajar las ideas a tierra. Organiza tareas y celebra cada pequeño avance.',
    tags: ['React', 'TypeScript', 'UX'],
  },
] as const
export type Project = (typeof projects)[number]
