export function ProjectPreview({ id }: { id: string }) {
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
