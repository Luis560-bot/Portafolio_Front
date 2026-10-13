export interface Project {
  id: string
  title: string
  type: string
  idea: string
  description: string
  tags: readonly string[]
  repoUrl: string
  liveUrl?: string
  image: string
  imageAlt: string
  previewLabel: string
}

// Datos contrastados con los README, dependencias y código de los repositorios públicos.
export const projects: readonly Project[] = [
  {
    id: 'limpio-peru',
    title: 'Limpio Perú',
    type: 'Participación ciudadana',
    idea: 'Del reporte ciudadano al seguimiento.',
    description:
      'Registro y gestión de reportes ambientales con interfaces para ciudadanos, operadores y administradores. React consume una API FastAPI con persistencia en PostgreSQL.',
    tags: ['React', 'CSS', 'FastAPI', 'PostgreSQL'],
    repoUrl: 'https://github.com/Luis560-bot/Informa-peru',
    liveUrl: 'https://limpio-peru.onrender.com/',
    image: '/projects/limpio-peru.jpg',
    imageAlt:
      'Captura de Limpio Perú: presentación de la plataforma y pantalla de acceso.',
    previewLabel: 'CAPTURA DE LA APLICACIÓN',
  },
  {
    id: 'airware',
    title: 'Airware',
    type: 'Monitoreo ambiental',
    idea: 'El aire no se ve. Se lee.',
    description:
      'Lecturas de PM2.5 para Lima con datos de Open-Meteo, una escala visual, catálogo de contaminantes y glosario. Una interfaz que conecta el dato con su contexto.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Open-Meteo'],
    repoUrl: 'https://github.com/Luis560-bot/Airware',
    liveUrl: 'https://airware-4iyb.onrender.com/',
    image: '/projects/airware.jpg',
    imageAlt:
      'Captura de Airware: lectura de PM2.5 para Lima y escala visual de calidad del aire.',
    previewLabel: 'CAPTURA DE LA APLICACIÓN',
  },
  {
    id: 'task-p',
    title: 'Task-P',
    type: 'Gestión de tareas',
    idea: 'Organizar, crear y actualizar tareas.',
    description:
      'Aplicación de gestión de tareas con frontend React, estilos con Tailwind CSS y una API FastAPI. MongoDB guarda las tareas y el backend expone las operaciones de creación, consulta, actualización y eliminación.',
    tags: ['React', 'Tailwind CSS', 'FastAPI', 'MongoDB'],
    repoUrl: 'https://github.com/Luis560-bot/sistema-de-gestion-de-tareas',
    image: '/projects/task-p.svg',
    imageAlt:
      'Arquitectura de Task-P: interfaz React, API FastAPI y persistencia en MongoDB.',
    previewLabel: 'ARQUITECTURA DEL PROYECTO',
  },
]

export const additionalProjects = [
  {
    title: 'Portafolio Full Stack',
    description:
      'Sitio personal con presentación, tecnologías y proyectos. Construido con React y Vite.',
    tags: ['React', 'Vite', 'CSS'],
    repoUrl: 'https://github.com/Luis560-bot/Portafolio',
  },
  {
    title: 'Aprendiendo React',
    description:
      'Ejercicios de componentes, props, estado, formularios, sesión y consumo de APIs.',
    tags: ['React', 'JavaScript'],
    repoUrl: 'https://github.com/Luis560-bot/aprendiendo-react-pasos',
  },
] as const
