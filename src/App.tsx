import { useEffect, useRef, useState } from 'react'
import { Arrow } from './components/Arrow'
import { ProjectPreview } from './components/ProjectPreview'
import { ProjectDemo } from './components/ProjectDemo'
import { projects } from './data/projects'
import type { Project } from './data/projects'
import './components/ProjectPreview.css'
import './components/ProjectDemo.css'
import './App.css'

const github = 'https://github.com/Luis560-bot'
const projectNotes = {
  pulse: {
    idea: 'Ordenar lo complejo.',
    caption: 'DATA → CLARITY',
  },
  forma: {
    idea: 'Dejar respirar al producto.',
    caption: 'LESS → BETTER',
  },
  orbit: {
    idea: 'Hacer espacio a las ideas.',
    caption: 'IDEAS → ACTION',
  },
}

function Workbench({
  onOpen,
}: {
  onOpen: (project: Project, trigger: HTMLButtonElement) => void
}) {
  const [activeId, setActiveId] = useState<Project['id']>('pulse')
  const [compact, setCompact] = useState(
    () => window.matchMedia('(max-width: 540px)').matches,
  )
  useEffect(() => {
    const query = window.matchMedia('(max-width: 540px)')
    const update = () => setCompact(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  const active = projects.find((project) => project.id === activeId)!
  const notes = projectNotes[active.id]
  return (
    <div className="workbench">
      <div className="workbench-chrome">
        <span>
          <span aria-hidden="true">⌘</span> interface explorer
        </span>
        <span>SELECCIONA. EXPLORA. INTERACTÚA.</span>
        <span className="explorer-status">
          <i /> EN EL NAVEGADOR
        </span>
      </div>
      <div className="workbench-body">
        <div className="workbench-sidebar">
          <span className="overline">ELIGE UNA PERSPECTIVA</span>
          <div
            className="explorer-tabs"
            role="tablist"
            aria-label="Explorar interfaces"
            aria-orientation={compact ? 'horizontal' : 'vertical'}
          >
            {projects.map((project, index) => (
              <button
                type="button"
                role="tab"
                key={project.id}
                id={`tab-${project.id}`}
                aria-controls="explorer-panel"
                aria-selected={active.id === project.id}
                tabIndex={active.id === project.id ? 0 : -1}
                onClick={() => setActiveId(project.id)}
                onKeyDown={(e) => {
                  if (
                    [
                      'ArrowDown',
                      'ArrowUp',
                      'ArrowLeft',
                      'ArrowRight',
                      'Home',
                      'End',
                    ].includes(e.key)
                  ) {
                    e.preventDefault()
                    const next =
                      e.key === 'Home'
                        ? 0
                        : e.key === 'End'
                          ? projects.length - 1
                          : (index +
                              (e.key === 'ArrowDown' || e.key === 'ArrowRight'
                                ? 1
                                : -1) +
                              projects.length) %
                            projects.length
                    setActiveId(projects[next].id)
                    document.getElementById(`tab-${projects[next].id}`)?.focus()
                  }
                }}
              >
                <span className={`project-dot dot-${project.id}`} />
                <span>
                  {project.title}
                  <small>{project.type}</small>
                </span>
                <Arrow />
              </button>
            ))}
          </div>
          <p>
            Conceptos que puedes probar.
            <br />
            Código que puedes explorar.
          </p>
          <span className="sidebar-bottom">
            REACT + TYPESCRIPT <span>↗</span>
          </span>
        </div>
        <div
          className={`explorer-panel scene-${active.id}`}
          id="explorer-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
        >
          <span className="scene-coordinate">
            UI / {active.type.toUpperCase()}
          </span>
          <span className="scene-word" aria-hidden="true">
            {active.title}
          </span>
          <div className="explorer-preview" key={active.id}>
            <ProjectPreview id={active.id} />
          </div>
          <div className="scene-bottom">
            <span>{notes.caption}</span>
            <button
              type="button"
              onClick={(e) => onOpen(active, e.currentTarget)}
            >
              Probar {active.title} <Arrow diagonal />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeTrigger = useRef<HTMLButtonElement | null>(null)
  const menuTrigger = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (!selectedProject) closeTrigger.current?.focus()
  }, [selectedProject])
  function openDemo(project: Project, trigger: HTMLButtonElement) {
    closeTrigger.current = trigger
    setSelectedProject(project)
  }
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#inicio" aria-label="Luis, inicio">
            <span className="brand-symbol">
              L<span>↗</span>
            </span>
            <span>
              LUIS<span className="brand-role">FRONTEND DEVELOPER</span>
            </span>
          </a>
          <button
            ref={menuTrigger}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'CERRAR ×' : 'MENÚ +'}
          </button>
          <nav
            className={menuOpen ? 'nav-open' : ''}
            id="main-nav"
            aria-label="Navegación principal"
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setMenuOpen(false)
                menuTrigger.current?.focus()
              }
            }}
          >
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
            <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              Conectemos <Arrow diagonal />
            </a>
          </nav>
          <a
            className="header-github"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow diagonal />
          </a>
        </div>
      </header>
      <main id="contenido">
        <section className="hero container" id="inicio">
          <div className="hero-topline">
            <span className="overline">
              <i /> PORTAFOLIO PERSONAL / LUIS
            </span>
            <span className="overline">DISEÑO · INTERACCIÓN · CÓDIGO</span>
          </div>
          <h1>
            Un navegador.
            <br />
            <em>Infinitas posibilidades.</em>
          </h1>
          <div className="hero-description">
            <p>
              Soy Luis, desarrollador frontend. Transformo ideas en interfaces
              que dan ganas de explorar.
            </p>
            <a className="inline-link" href="#proyectos">
              Descubre mi trabajo <span className="round-arrow">↓</span>
            </a>
          </div>
          <Workbench onOpen={openDemo} />
          <div className="hero-caption">
            <span>EL FRONTEND ES MI FORMA DE CONECTAR IDEAS Y PERSONAS.</span>
            <span>
              DESLIZA PARA SEGUIR EXPLORANDO <span>↓</span>
            </span>
          </div>
        </section>
        <section className="projects-section container" id="proyectos">
          <div className="section-heading">
            <div>
              <span className="overline">LABORATORIO DE INTERFACES</span>
              <h2>
                Más allá
                <br />
                <em>de lo visible.</em>
              </h2>
            </div>
            <p>
              Cada interfaz es una oportunidad para resolver algo de una forma
              distinta. Estos son mis experimentos.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-row project-${project.id}`}
                key={project.id}
              >
                <div className="project-info">
                  <span className="project-category">
                    <i className={`project-dot dot-${project.id}`} />
                    {project.type} / CONCEPTO PERSONAL
                  </span>
                  <h3>
                    {project.title}
                    <Arrow diagonal />
                  </h3>
                  <h4>{projectNotes[project.id].idea}</h4>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    className="project-open"
                    type="button"
                    aria-label={`Abrir demo de ${project.title}`}
                    onClick={(e) => openDemo(project, e.currentTarget)}
                  >
                    Explorar la demo <Arrow />
                  </button>
                </div>
                <div className={`project-visual scene-${project.id}`}>
                  <span className="visual-corner top-left" />
                  <span className="visual-corner bottom-right" />
                  <ProjectPreview id={project.id} />
                  <span className="visual-caption">
                    {projectNotes[project.id].caption}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note">
            ↳ Demos con datos de ejemplo. Un espacio para experimentar, sin
            clientes ni métricas reales.
          </p>
        </section>
        <section className="about-section" id="sobre-mi">
          <div className="container">
            <div className="about-heading">
              <span className="overline">DETRÁS DE LA PANTALLA</span>
              <span className="about-location">LUIS / FRONTEND</span>
            </div>
            <div className="about-grid">
              <h2>
                Pienso en diseño.
                <br />
                <em>Hablo en código.</em>
              </h2>
              <div className="about-copy">
                <p>
                  Soy Luis. Me gusta entender cómo funcionan las cosas y
                  encontrar una forma más clara, más útil y más interesante de
                  construirlas.
                </p>
                <p>
                  Mi terreno es el navegador: componentes, interacciones,
                  layouts que se adaptan y esos pequeños detalles que hacen que
                  una interfaz se sienta bien.
                </p>
                <a
                  className="inline-link"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Lo que estoy construyendo <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="skill-table">
              <div>
                <span>Construir</span>
                <p>
                  React <i>/</i> TypeScript <i>/</i> JavaScript
                </p>
                <span>COMPONENTES CON PROPÓSITO</span>
              </div>
              <div>
                <span>Dar forma</span>
                <p>
                  HTML & CSS <i>/</i> Responsive <i>/</i> Interacciones
                </p>
                <span>DE LA IDEA A LA PANTALLA</span>
              </div>
              <div>
                <span>Explorar</span>
                <p>
                  Figma <i>/</i> Prototipos <i>/</i> Git
                </p>
                <span>APRENDER EN CADA ITERACIÓN</span>
              </div>
            </div>
          </div>
        </section>
        <section className="details-section container">
          <div className="details-heading">
            <span className="overline">LO QUE NO SIEMPRE SE VE</span>
            <h2>
              Una buena interfaz
              <br />
              <em>también se siente.</em>
            </h2>
          </div>
          <div className="details-grid">
            <article>
              <div
                className="detail-illustration keyboard-art"
                aria-hidden="true"
              >
                <span>tab</span>
                <i>→</i>
                <span>enter ↵</span>
              </div>
              <h3>Un camino para todos.</h3>
              <p>
                Foco visible, navegación por teclado y contenido que se
                entiende. La accesibilidad forma parte del diseño.
              </p>
            </article>
            <article>
              <div
                className="detail-illustration responsive-art"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>
              <h3>El espacio cambia. La idea, no.</h3>
              <p>
                Interfaces que encuentran su lugar en cada pantalla, desde un
                móvil hasta un escritorio.
              </p>
            </article>
            <article>
              <div
                className="detail-illustration feedback-art"
                aria-hidden="true"
              >
                <span>✓</span>
                <i>Listo para explorar</i>
              </div>
              <h3>Cada acción tiene respuesta.</h3>
              <p>
                Estados claros y movimiento con intención. Pequeños detalles que
                acompañan a quien está al otro lado.
              </p>
            </article>
          </div>
        </section>
        <section className="contact-section" id="contacto">
          <div className="container contact-inner">
            <div>
              <span className="overline">¿TIENES UNA IDEA EN MENTE?</span>
              <h2>
                Hagamos
                <br />
                <em>clic.</em>
                <span aria-hidden="true">↗</span>
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                Un proyecto, una colaboración
                <br />o una conversación sobre frontend.
                <br />
                Todo empieza conectando.
              </p>
              <a
                className="contact-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Nos vemos en GitHub <Arrow diagonal />
              </a>
              <span className="contact-handle">@Luis560-bot</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <a href="#inicio" className="footer-brand">
          LUIS<span>↗</span>
        </a>
        <span>Ideas, píxeles y mucho cuidado.</span>
        <a href="#inicio">
          VOLVER AL INICIO <span>↑</span>
        </a>
      </footer>
      {selectedProject && (
        <ProjectDemo
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
export default App
