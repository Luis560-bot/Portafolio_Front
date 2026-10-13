import { useEffect, useRef, useState } from 'react'
import { Arrow } from './components/Arrow'
import { NetworkField } from './components/NetworkField'
import { ProjectPreview } from './components/ProjectPreview'
import { ProjectDemo } from './components/ProjectDemo'
import { projects } from './data/projects'
import type { Project } from './data/projects'
import './components/ProjectPreview.css'
import './components/ProjectArt.css'
import './components/ProjectDemo.css'
import './App.css'

const github = 'https://github.com/Luis560-bot'
const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'enfoque', label: 'Enfoque' },
  { id: 'contacto', label: 'Contacto' },
]
const projectIdeas = {
  pulse: 'La claridad también se diseña.',
  forma: 'Menos pasos. Más intención.',
  orbit: 'De una idea al siguiente paso.',
}
function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.98a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.33 4.69-4.56 4.94.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('sobre-mi')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeTrigger = useRef<HTMLButtonElement | null>(null)
  const menuTrigger = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (!selectedProject) closeTrigger.current?.focus()
  }, [selectedProject])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => setActiveSection(entry.target.id))
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#inicio" aria-label="Luis, inicio">
            luis<span aria-hidden="true">✳</span>
          </a>
          <span className="header-caption">
            DESARROLLO FRONTEND
            <br />& EXPERIENCIAS DIGITALES
          </span>
          <button
            ref={menuTrigger}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Cerrar ×' : 'Menú +'}
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
            <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
            <a
              href="#contacto"
              className="header-contact"
              onClick={() => setMenuOpen(false)}
            >
              Hablemos <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>
      <main id="contenido">
        <section className="hero" id="inicio">
          <NetworkField />
          <div className="container hero-inner">
            <div className="hero-topline">
              <span className="eyebrow">
                <i /> HOLA, SOY LUIS.
              </span>
              <span className="hero-edition">
                PORTAFOLIO PERSONAL / FRONTEND
              </span>
            </div>
            <div className="hero-grid">
              <h1 className="hero-title">
                <span>FRONT</span>
                <span className="title-second">
                  END<span className="title-period">.</span>
                  <span className="title-arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
                <span className="sr-only"> — Desarrollador frontend</span>
              </h1>
              <div className="hero-intro">
                <span className="intro-kicker">
                  DISEÑO EN LA CABEZA.
                  <br />
                  CÓDIGO EN LAS MANOS.
                </span>
                <p>
                  Construyo interfaces que conectan lo que imaginas con lo que
                  puedes explorar.
                </p>
                <a className="hero-cta" href="#proyectos">
                  Explorar proyectos <Arrow />
                </a>
              </div>
            </div>
            <div className="hero-bottom">
              <span>
                REACT <i>+</i> TYPESCRIPT <i>+</i> CREATIVIDAD
              </span>
              <a href="#sobre-mi">
                SIGUE EXPLORANDO <span>↓</span>
              </a>
            </div>
          </div>
        </section>
        <div className="section-divider container">
          <span>DEL PRIMER PÍXEL AL ÚLTIMO DETALLE.</span>
          <span>DISEÑO ↔ DESARROLLO</span>
        </div>
        <div className="portfolio-layout container">
          <aside className="profile-sidebar">
            <div>
              <span className="eyebrow">LA PERSONA DETRÁS DEL CÓDIGO</span>
              <a href="#inicio" className="profile-name">
                Luis<span>.</span>
              </a>
              <p className="profile-role">Frontend Developer</p>
              <p className="profile-bio">
                Me interesa el punto donde una buena idea se convierte en una
                experiencia que se siente bien.
              </p>
              <nav className="section-index" aria-label="Índice de secciones">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-current={
                      activeSection === section.id ? 'location' : undefined
                    }
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="index-line" />
                    {section.label}
                    <span className="index-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="profile-bottom">
              <a
                href={github}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon /> Mi GitHub <Arrow diagonal />
              </a>
              <span>
                SIEMPRE HAY ALGO NUEVO
                <br />
                QUE CONSTRUIR.
              </span>
            </div>
          </aside>
          <div className="portfolio-content">
            <section className="about-section content-section" id="sobre-mi">
              <span className="eyebrow">SOBRE MÍ</span>
              <h2>
                Una buena interfaz
                <br />
                se ve. <span>Y se siente.</span>
              </h2>
              <div className="about-copy">
                <p>
                  Soy Luis, desarrollador frontend. Disfruto unir la lógica del
                  código con la intuición del diseño para construir experiencias
                  claras, accesibles y con personalidad.
                </p>
                <p>
                  Me gusta experimentar, resolver problemas de interfaz y cuidar
                  lo que pasa entre un clic y el siguiente: la respuesta, el
                  movimiento y los pequeños detalles.
                </p>
                <p>
                  Mi espacio de trabajo es el navegador.
                  <br />
                  <strong>Mi punto de partida, la curiosidad.</strong>
                </p>
              </div>
              <div className="stack-list" aria-label="Tecnologías que utilizo">
                {[
                  'React',
                  'TypeScript',
                  'JavaScript',
                  'HTML & CSS',
                  'Figma',
                  'Git',
                ].map((tech, i) => (
                  <span key={tech}>
                    <i>{['⚛', 'TS', 'JS', '#', '◇', '⑂'][i]}</i>
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            <section
              className="projects-section content-section"
              id="proyectos"
            >
              <div className="section-heading">
                <span className="eyebrow">IDEAS QUE YA PUEDES EXPLORAR</span>
                <h2>
                  Selección de
                  <br />
                  <span>interfaces.</span>
                </h2>
                <p>
                  Un laboratorio personal de diseño y desarrollo. Cada concepto
                  se puede probar aquí mismo.
                </p>
              </div>
              <div className="project-list">
                {projects.map((project) => (
                  <article
                    className={`project-card project-${project.id}`}
                    key={project.id}
                  >
                    <button
                      className={`project-cover cover-${project.id}`}
                      type="button"
                      aria-label={`Abrir demo de ${project.title}`}
                      onClick={(e) => {
                        closeTrigger.current = e.currentTarget
                        setSelectedProject(project)
                      }}
                    >
                      <span className="cover-category">
                        {project.type} / CONCEPTO
                      </span>
                      <span className="cover-watermark" aria-hidden="true">
                        {project.title}
                      </span>
                      <div className="cover-preview">
                        <ProjectPreview id={project.id} />
                      </div>
                      <span className="cover-action">
                        Probar interfaz <Arrow diagonal />
                      </span>
                    </button>
                    <div className="project-info">
                      <div className="project-title">
                        <h3>
                          {project.title}
                          <span> / {project.type}</span>
                        </h3>
                        <Arrow diagonal />
                      </div>
                      <p className="project-idea">{projectIdeas[project.id]}</p>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p className="projects-note">
                Los proyectos son demos personales con datos de ejemplo.
              </p>
            </section>
            <section className="approach-section content-section" id="enfoque">
              <span className="eyebrow">MI FORMA DE CONSTRUIR</span>
              <h2>
                El cuidado está
                <br />
                <span>en los detalles.</span>
              </h2>
              <div className="principle-list">
                <article>
                  <span aria-hidden="true">⌘</span>
                  <div>
                    <h3>Que funcione para todos.</h3>
                    <p>
                      Accesibilidad, foco visible y navegación por teclado desde
                      el primer componente.
                    </p>
                  </div>
                </article>
                <article>
                  <span aria-hidden="true">↔</span>
                  <div>
                    <h3>Que encuentre su espacio.</h3>
                    <p>
                      Layouts que se adaptan a la pantalla y mantienen una
                      lectura cómoda.
                    </p>
                  </div>
                </article>
                <article>
                  <span aria-hidden="true">↗</span>
                  <div>
                    <h3>Que cada acción se sienta.</h3>
                    <p>
                      Estados claros y movimiento que acompaña, con respeto por
                      tus preferencias.
                    </p>
                  </div>
                </article>
              </div>
            </section>
            <section className="contact-section content-section" id="contacto">
              <span className="eyebrow">
                EL SIGUIENTE PROYECTO EMPIEZA AQUÍ
              </span>
              <h2>
                ¿Lo llevamos
                <br />
                al navegador<span>?</span>
              </h2>
              <p>
                Una idea, una colaboración o una conversación sobre frontend. Me
                encuentras en GitHub.
              </p>
              <a
                className="contact-cta"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Conectar en GitHub <Arrow diagonal />
              </a>
              <span className="contact-handle">@Luis560-bot</span>
            </section>
          </div>
        </div>
      </main>
      <footer className="container site-footer">
        <a href="#inicio" className="footer-mark" aria-label="Volver al inicio">
          LUIS<span>✳</span>
        </a>
        <div>
          <span>HECHO CON REACT, CURIOSIDAD Y CUIDADO.</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </div>
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
