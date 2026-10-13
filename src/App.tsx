import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import './App.css'

const github = 'https://github.com/Luis560-bot'
const projects = [
  {
    id: 'pulse',
    title: 'Pulse',
    type: 'Dashboard',
    description:
      'Datos que se entienden de un vistazo. Un panel con filtros y visualización de actividad.',
    tags: ['React', 'TypeScript', 'Data UI'],
    color: 'purple',
  },
  {
    id: 'forma',
    title: 'Forma',
    type: 'E-commerce',
    description:
      'Una tienda de objetos cotidianos, con una experiencia de compra simple y cuidada.',
    tags: ['React', 'CSS', 'UI design'],
    color: 'green',
  },
  {
    id: 'orbit',
    title: 'Orbit',
    type: 'Productividad',
    description:
      'Un espacio para bajar las ideas a tierra. Organiza tareas y celebra cada pequeño avance.',
    tags: ['React', 'TypeScript', 'UX'],
    color: 'peach',
  },
] as const
type Project = (typeof projects)[number]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function Spark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
      <path
        d="M40 0c4 27 13 36 40 40-27 4-36 13-40 40C36 53 27 44 0 40 27 36 36 27 40 0Z"
        fill="currentColor"
      />
    </svg>
  )
}
function ProjectPreview({ id }: { id: string }) {
  if (id === 'pulse')
    return (
      <div className="preview-dashboard" aria-hidden="true">
        <aside>
          <span className="mini-brand">
            p<span>•</span>
          </span>
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className="dashboard-body">
          <div className="preview-top">
            <b>Overview</b>
            <span>↗</span>
          </div>
          <div className="mini-stats">
            <div>
              <small>Total revenue</small>
              <strong>$24,680</strong>
              <em>↗ 12.8%</em>
            </div>
            <div>
              <small>Active users</small>
              <strong>1,842</strong>
              <em>↗ 8.2%</em>
            </div>
          </div>
          <div className="chart-header">
            Revenue overview <span>This week ▾</span>
          </div>
          <div className="bar-chart">
            {[34, 57, 43, 76, 62, 91, 72, 100, 82, 66, 88, 98].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="chart-days">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </div>
      </div>
    )
  if (id === 'forma')
    return (
      <div className="preview-store" aria-hidden="true">
        <div className="store-header">
          <b>forma.</b>
          <span>Objetos con intención</span>
          <span>Bag (0)</span>
        </div>
        <div className="store-main">
          <div>
            <small>MENOS, PERO MEJOR.</small>
            <h4>
              Lo cotidiano,
              <br />
              extraordinario.
            </h4>
            <span className="mini-shop-button">Explorar colección ↗</span>
          </div>
          <div className="lamp-scene">
            <div className="lamp-shade" />
            <div className="lamp-stem" />
            <div className="lamp-base" />
            <span>Lámpara Alba · S/ 180</span>
          </div>
        </div>
      </div>
    )
  return (
    <div className="preview-tasks" aria-hidden="true">
      <div className="orbit-header">
        <b>◒ orbit</b>
        <span>Tu espacio, tus ideas.</span>
        <i>LU</i>
      </div>
      <h4>
        Hagamos que pase <span>✳</span>
      </h4>
      <div className="mini-board">
        <div>
          <span>
            Por hacer <b>2</b>
          </span>
          <article>
            <small>DISEÑO</small>
            <strong>Explorar nuevas ideas</strong>
            <p>Un poco de inspiración.</p>
            <i>↗</i>
          </article>
          <article>
            <small>PERSONAL</small>
            <strong>Leer un capítulo</strong>
          </article>
        </div>
        <div>
          <span>
            En progreso <b>1</b>
          </span>
          <article>
            <small>DESARROLLO</small>
            <strong>Dar vida al portafolio</strong>
            <p>De la idea al navegador.</p>
            <i>✦</i>
          </article>
        </div>
      </div>
    </div>
  )
}
function Playground() {
  const [view, setView] = useState<'design' | 'code'>('design')
  const [accent, setAccent] = useState('#7954e9')
  const [likes, setLikes] = useState(0)
  return (
    <div
      className="hero-art"
      style={{ '--play-accent': accent } as CSSProperties}
    >
      <div className="orbit-decoration" aria-hidden="true">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
      </div>
      <div className="floating-label label-react">
        <span>⚛</span> React
      </div>
      <div className="floating-label label-css">
        <span>{'{ }'}</span> CSS con intención
      </div>
      <div className="playground-window">
        <div className="window-chrome">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>playground / luis</span>
          <span className="chrome-symbol">↗</span>
        </div>
        <div className="playground-toolbar">
          <span>
            <i className="live-dot" /> LIVE PLAYGROUND
          </span>
          <div className="view-tabs" aria-label="Vista del laboratorio">
            <button
              type="button"
              aria-pressed={view === 'design'}
              onClick={() => setView('design')}
            >
              Diseño
            </button>
            <button
              type="button"
              aria-pressed={view === 'code'}
              onClick={() => setView('code')}
            >
              Código
            </button>
          </div>
        </div>
        {view === 'design' ? (
          <div className="playground-design">
            <div className="art-sculpture">
              <div className="sculpture-back" />
              <div className="sculpture-front" />
              <Spark className="sculpture-spark" />
            </div>
            <span className="playground-eyebrow">
              DE UNA IDEA A UNA EXPERIENCIA
            </span>
            <h3>
              Make it <em>feel.</em>
            </h3>
            <p>Un poco de código. Mucha intención.</p>
            <button
              type="button"
              className="like-button"
              onClick={() => setLikes(likes + 1)}
            >
              Me gusta <span>♡ {likes}</span>
            </button>
          </div>
        ) : (
          <div className="code-preview">
            <span className="code-filename">experience.tsx</span>
            <pre>
              <code>
                <span className="syntax-muted">
                  {'// Los detalles hacen la diferencia\n'}
                </span>
                <span className="syntax-pink">{'const '}</span>
                {'experience = {\n  idea: '}
                <span className="syntax-green">{'"make it feel"'}</span>
                {',\n  builtWith: ['}
                <span className="syntax-green">{'"React", "care"'}</span>
                {'],\n  details: '}
                <span className="syntax-pink">{'true'}</span>
                {',\n  color: '}
                <span className="syntax-green">{`"${accent}"`}</span>
                {'\n}\n\n'}
                <span className="syntax-pink">{'export default '}</span>
                {'experience'}
              </code>
            </pre>
            <span className="code-note">
              La experiencia empieza en los detalles.
            </span>
          </div>
        )}
        <div className="playground-bottom">
          <span>
            Hazlo tuyo <span aria-hidden="true">→</span>
          </span>
          <div className="color-controls" aria-label="Color de la demo">
            {[
              ['#7954e9', 'Violeta'],
              ['#347a67', 'Verde'],
              ['#c45841', 'Coral'],
            ].map(([color, name]) => (
              <button
                key={color}
                type="button"
                style={{ backgroundColor: color }}
                aria-label={`Usar color ${name}`}
                aria-pressed={accent === color}
                onClick={() => setAccent(color)}
              />
            ))}
          </div>
          <span className="build-status">
            <i /> built with care
          </span>
        </div>
      </div>
      <div className="art-caption">
        <span>↖</span> Sí, puedes jugar con esto.
      </div>
      <Spark className="hero-spark" />
    </div>
  )
}
function ProjectDemo({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [period, setPeriod] = useState('Semana')
  const [cart, setCart] = useState<string[]>([])
  const [filter, setFilter] = useState('Todos')
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Explorar ideas para mi próximo proyecto', done: false },
    { id: 2, text: 'Dar vida a una interfaz', done: true },
  ])
  const [cartVisible, setCartVisible] = useState(false)
  const products = [
    {
      name: 'Lámpara Alba',
      price: 180,
      category: 'Iluminación',
      shape: 'lamp',
    },
    { name: 'Jarrón Terra', price: 85, category: 'Decoración', shape: 'vase' },
    {
      name: 'Lámpara Arco',
      price: 220,
      category: 'Iluminación',
      shape: 'arch',
    },
  ]
  useEffect(() => {
    const element = dialog.current
    element?.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      element?.close()
      document.body.style.overflow = previous
    }
  }, [])
  return (
    <dialog
      ref={dialog}
      className={`project-dialog demo-${project.id}`}
      onCancel={onClose}
      onClick={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect()
        if (
          e.target === e.currentTarget &&
          (e.clientX < bounds.left ||
            e.clientX > bounds.right ||
            e.clientY < bounds.top ||
            e.clientY > bounds.bottom)
        )
          onClose()
      }}
      onKeyDown={(e) => {
        if (e.key !== 'Tab') return
        const controls = Array.from(
          e.currentTarget.querySelectorAll<HTMLElement>(
            'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter(
          (control) =>
            !control.hasAttribute('disabled') &&
            control.getClientRects().length > 0,
        )
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }}
      aria-labelledby="demo-title"
    >
      <div className="dialog-heading">
        <div>
          <span className="eyebrow">DEMO INTERACTIVA</span>
          <h2 id="demo-title">
            {project.title}
            <span> / {project.type}</span>
          </h2>
        </div>
        <button
          className="close-button"
          type="button"
          onClick={onClose}
          aria-label="Cerrar demo"
        >
          ×
        </button>
      </div>
      <p className="demo-intro">
        {project.description} Los datos y productos son de ejemplo.
      </p>
      {project.id === 'pulse' && (
        <div className="pulse-demo">
          <div className="demo-control-row">
            <h3>Tu actividad, en perspectiva.</h3>
            <label>
              Período{' '}
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option>Semana</option>
                <option>Mes</option>
                <option>Año</option>
              </select>
            </label>
          </div>
          <div className="demo-metrics">
            <div>
              <span>Ingresos</span>
              <strong>
                {period === 'Semana'
                  ? 'S/ 2,480'
                  : period === 'Mes'
                    ? 'S/ 9,840'
                    : 'S/ 118,080'}
              </strong>
            </div>
            <div>
              <span>Visitas</span>
              <strong>
                {period === 'Semana'
                  ? '1,842'
                  : period === 'Mes'
                    ? '7,368'
                    : '88,416'}
              </strong>
            </div>
            <div>
              <span>Conversión</span>
              <strong>
                {period === 'Semana'
                  ? '4.8%'
                  : period === 'Mes'
                    ? '5.2%'
                    : '6.1%'}
              </strong>
            </div>
          </div>
          <div
            className="demo-chart"
            role="img"
            aria-label={`Gráfico de ingresos de ejemplo por ${period.toLowerCase()}`}
          >
            {(period === 'Semana'
              ? [38, 61, 48, 83, 65, 95, 78]
              : period === 'Mes'
                ? [48, 67, 88, 76]
                : [31, 44, 39, 51, 67, 59, 73, 68, 85, 77, 93, 100]
            ).map((height, i) => (
              <div key={`${period}-${i}`}>
                <i style={{ height: `${height}%` }} />
                <span>
                  {period === 'Semana'
                    ? ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i]
                    : period === 'Mes'
                      ? `Sem ${i + 1}`
                      : i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {project.id === 'forma' && (
        <div className="forma-demo">
          <div className="demo-control-row">
            <div className="shop-filters" aria-label="Filtrar productos">
              {['Todos', 'Iluminación', 'Decoración'].map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="cart-toggle"
              onClick={() => setCartVisible(!cartVisible)}
              aria-expanded={cartVisible}
            >
              Bolsa ({cart.length})
            </button>
          </div>
          <div className="demo-products">
            {products
              .filter((p) => filter === 'Todos' || p.category === filter)
              .map((p) => (
                <article key={p.name}>
                  <div
                    className={`product-object object-${p.shape}`}
                    aria-hidden="true"
                  >
                    <i />
                    <b />
                  </div>
                  <h3>{p.name}</h3>
                  <p>S/ {p.price}</p>
                  <button
                    type="button"
                    onClick={() => setCart([...cart, p.name])}
                  >
                    Añadir a la bolsa <span>+</span>
                  </button>
                </article>
              ))}
          </div>
          <p role="status" className="cart-status">
            {cart.length > 0
              ? `${cart.length} ${cart.length === 1 ? 'objeto en tu bolsa' : 'objetos en tu bolsa'} · S/ ${cart.reduce((sum, name) => sum + (products.find((p) => p.name === name)?.price ?? 0), 0)}`
              : 'Elige un objeto para empezar tu colección.'}
          </p>
          {cartVisible && (
            <div className="cart-details">
              <h3>Tu bolsa</h3>
              {cart.length ? (
                <ul>
                  {cart.map((name, index) => (
                    <li key={index}>
                      <span>{name}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setCart(cart.filter((_, i) => i !== index))
                        }
                        aria-label={`Quitar ${name} de la bolsa`}
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Tu bolsa está vacía.</p>
              )}
              <small>Esta demo no realiza compras ni pagos.</small>
            </div>
          )}
        </div>
      )}
      {project.id === 'orbit' && (
        <div className="orbit-demo">
          <div className="demo-control-row">
            <h3>Un paso a la vez.</h3>
            <span className="task-count" role="status">
              {tasks.filter((t) => t.done).length} de {tasks.length} completadas
            </span>
          </div>
          <form
            className="task-form"
            onSubmit={(e) => {
              e.preventDefault()
              if (task.trim()) {
                setTasks([
                  ...tasks,
                  { id: Date.now(), text: task.trim(), done: false },
                ])
                setTask('')
              }
            }}
          >
            <label className="sr-only" htmlFor="new-task">
              Nueva tarea
            </label>
            <input
              id="new-task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="¿Qué quieres hacer hoy?"
              maxLength={120}
              required
            />
            <button type="submit">
              Añadir <span>+</span>
            </button>
          </form>
          <div className="task-list">
            {tasks.map((item) => (
              <div
                className={item.done ? 'task-item completed' : 'task-item'}
                key={item.id}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() =>
                      setTasks(
                        tasks.map((t) =>
                          t.id === item.id ? { ...t, done: !t.done } : t,
                        ),
                      )
                    }
                  />
                  <span>{item.text}</span>
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setTasks(tasks.filter((t) => t.id !== item.id))
                  }
                  aria-label={`Eliminar tarea: ${item.text}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {tasks.length === 0 && (
            <p className="empty-tasks">
              Un lienzo en blanco. Añade tu primera tarea.
            </p>
          )}
          <p className="demo-footnote">
            Tus tareas viven en esta demo y se reinician al cerrarla.
          </p>
        </div>
      )}
    </dialog>
  )
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeTrigger = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (!selectedProject) closeTrigger.current?.focus()
  }, [selectedProject])
  function closeDemo() {
    setSelectedProject(null)
  }
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#inicio" aria-label="Luis, inicio">
            luis
            <i />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Cerrar ×' : 'Menú +'}
          </button>
          <nav
            id="main-nav"
            className={menuOpen ? 'nav-open' : ''}
            aria-label="Navegación principal"
          >
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
            <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
            <a
              href="#contacto"
              className="nav-contact"
              onClick={() => setMenuOpen(false)}
            >
              Hablemos <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>
      <main id="contenido">
        <section className="hero container" id="inicio">
          <div className="hero-copy">
            <span className="intro-label">
              <i /> HOLA, SOY LUIS <span className="intro-line" /> FRONTEND
              DEVELOPER
            </span>
            <h1>
              Ideas que
              <br />
              cobran vida
              <br />
              en la{' '}
              <span className="outlined-word">
                web
                <svg
                  viewBox="0 0 220 17"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 12Q95-5 216 8M20 16Q125 2 202 12" />
                </svg>
              </span>
              <span className="title-dot">.</span>
            </h1>
            <p>
              Conecto diseño y código para crear interfaces que se sienten bien,
              funcionan mejor y tienen algo que decir.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#proyectos">
                Explorar proyectos <Arrow diagonal />
              </a>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Mi GitHub <Arrow diagonal />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon">&lt;/&gt;</span>
              <span>
                El detalle es pequeño.
                <br />
                <b>La diferencia, enorme.</b>
              </span>
            </div>
          </div>
          <Playground />
          <div className="hero-baseline">
            <span>DISEÑO CON INTENCIÓN. CÓDIGO CON PERSONALIDAD.</span>
            <a href="#proyectos">
              SCROLL PARA EXPLORAR <span>↓</span>
            </a>
          </div>
        </section>
        <div className="tech-strip">
          <div className="container">
            <span className="tech-caption">MI CAJA DE HERRAMIENTAS</span>
            <div className="tech-items">
              <span>
                <b>⚛</b> React
              </span>
              <span>
                <b className="ts-icon">TS</b> TypeScript
              </span>
              <span>
                <b>⌘</b> JavaScript
              </span>
              <span>
                <b>＃</b> HTML & CSS
              </span>
              <span>
                <b>◇</b> Figma
              </span>
              <span>
                <b>⌁</b> Git
              </span>
            </div>
          </div>
        </div>
        <section className="projects-section container" id="proyectos">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORAR, CONSTRUIR, REPETIR</span>
              <h2>
                Un poco de código.
                <br />
                <span>Mucho por descubrir.</span>
              </h2>
            </div>
            <p>
              Ideas hechas interfaz. Tres conceptos para explorar cómo pienso,
              diseño y construyo.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card card-${project.color}`}
                key={project.id}
              >
                <button
                  className="project-preview-button"
                  type="button"
                  aria-label={`Abrir demo de ${project.title}`}
                  onClick={(e) => {
                    closeTrigger.current = e.currentTarget
                    setSelectedProject(project)
                  }}
                >
                  <div className="preview-stage">
                    <ProjectPreview id={project.id} />
                  </div>
                  <span className="preview-open">
                    <Arrow diagonal />
                  </span>
                  <span className="demo-badge">DEMO INTERACTIVA</span>
                </button>
                <div className="project-info">
                  <div className="project-title">
                    <h3>
                      {project.title}
                      <span> / {project.type}</span>
                    </h3>
                    <Arrow diagonal />
                  </div>
                  <p>{project.description}</p>
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
            <span>↳</span> Laboratorio personal: conceptos de demostración, sin
            clientes ni métricas reales.
          </p>
        </section>
        <section className="about-section" id="sobre-mi">
          <div className="container about-grid">
            <div className="about-art" aria-hidden="true">
              <span className="about-art-label">
                ENTRE EL DISEÑO Y EL CÓDIGO
              </span>
              <div className="code-tile">
                &lt; <span>luis</span> /&gt;
              </div>
              <div className="design-tile">
                <Spark />
                <span>ideas → interfaces</span>
              </div>
              <div className="about-art-bottom">
                curiosidad<span>+</span> intención
              </div>
            </div>
            <div className="about-copy">
              <span className="eyebrow">LA PERSONA DETRÁS DE LOS PÍXELES</span>
              <h2>
                Me gusta construir.
                <br />
                <span>Y que se note el cuidado.</span>
              </h2>
              <p>
                Soy Luis, desarrollador frontend. Me interesa ese punto donde
                una buena idea se convierte en algo que puedes tocar, recorrer y
                usar.
              </p>
              <p>
                Disfruto resolver problemas de interfaz, experimentar con
                interacciones y cuidar lo que a veces pasa desapercibido: un
                estado vacío, una transición o cómo se siente una página en el
                móvil.
              </p>
              <div className="about-principles">
                <span>
                  <i>↗</i> Curiosidad para explorar
                </span>
                <span>
                  <i>◎</i> Atención a los detalles
                </span>
                <span>
                  <i>⌘</i> Código que se entiende
                </span>
              </div>
              <a
                href={github}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                Conoce lo que estoy construyendo <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
        <section className="approach-section container">
          <div>
            <span className="eyebrow">CÓMO ME GUSTA TRABAJAR</span>
            <h2>
              De la primera idea
              <br />
              al último detalle.
            </h2>
          </div>
          <div className="approach-steps">
            <article>
              <span>01 / ENTENDER</span>
              <h3>Primero, las personas.</h3>
              <p>
                Qué necesitan, qué les cuesta y cómo una interfaz puede hacerlo
                más fácil.
              </p>
            </article>
            <article>
              <span>02 / CONSTRUIR</span>
              <h3>Dar forma a la idea.</h3>
              <p>
                Componentes claros, diseño adaptable y pequeñas interacciones
                con propósito.
              </p>
            </article>
            <article>
              <span>03 / PULIR</span>
              <h3>La diferencia está ahí.</h3>
              <p>
                Probar, ajustar y cuidar la accesibilidad, la velocidad y cada
                estado de la interfaz.
              </p>
            </article>
          </div>
        </section>
        <section className="contact-section container" id="contacto">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">
                LAS BUENAS IDEAS EMPIEZAN CON UNA CONVERSACIÓN
              </span>
              <h2>
                ¿Creamos algo
                <br />
                <em>que se sienta diferente?</em>
              </h2>
              <p>
                Si tienes una idea, un proyecto o simplemente ganas de conectar,
                <br className="desktop-break" /> nos encontramos en GitHub.
              </p>
              <a
                className="button-primary"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Conectar en GitHub <Arrow diagonal />
              </a>
            </div>
            <Spark className="contact-spark" />
            <span className="contact-doodle" aria-hidden="true">
              hello!
            </span>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <a className="wordmark" href="#inicio" aria-label="Volver al inicio">
          luis
          <i />
        </a>
        <span>Hecho con intención. Y con React.</span>
        <a href="#inicio">
          Volver arriba <span>↑</span>
        </a>
      </footer>
      {selectedProject && (
        <ProjectDemo project={selectedProject} onClose={closeDemo} />
      )}
    </>
  )
}
export default App
