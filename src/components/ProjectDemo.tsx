import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

export function ProjectDemo({
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
