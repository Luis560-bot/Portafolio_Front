import { useEffect, useRef, useState } from 'react'

export function NetworkField() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const rotation = useRef(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(preference.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    const element = canvas.current
    if (!element) return
    const context = element.getContext('2d')
    if (!context) return
    let width = 0,
      height = 0,
      frame = 0,
      phase = rotation.current
    let pointer = { x: 0, y: 0 }
    let visible = true,
      inView = true
    const nodes = Array.from({ length: 90 }, (_, i) => {
      const y = 1 - (i / 89) * 2
      const radius = Math.sqrt(1 - y * y)
      const angle = i * Math.PI * (3 - Math.sqrt(5))
      return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius }
    })
    const edges: [number, number][] = []
    nodes.forEach((a, i) =>
      nodes.forEach((b, j) => {
        if (j > i && Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < 0.52)
          edges.push([i, j])
      }),
    )
    const draw = () => {
      context.clearRect(0, 0, width, height)
      const size = Math.min(width * 0.42, height * 0.45, 370)
      const cx = width > 700 ? width * 0.72 : width * 0.65
      const cy = height * 0.48
      const angle = phase + pointer.x * 0.24
      const tilt = 0.22 + pointer.y * 0.2
      const points = nodes.map((node) => {
        const x = node.x * Math.cos(angle) - node.z * Math.sin(angle)
        const z = node.x * Math.sin(angle) + node.z * Math.cos(angle)
        const y = node.y * Math.cos(tilt) - z * Math.sin(tilt)
        const depth = node.y * Math.sin(tilt) + z * Math.cos(tilt)
        const perspective = 2.5 / (2.5 + depth * 0.4)
        return {
          x: cx + x * size * perspective,
          y: cy + y * size * perspective,
          depth,
        }
      })
      edges.forEach(([i, j]) => {
        const a = points[i],
          b = points[j]
        const alpha = 0.1 + ((a.depth + b.depth + 2) / 4) * 0.24
        context.beginPath()
        context.moveTo(a.x, a.y)
        context.lineTo(b.x, b.y)
        context.strokeStyle = `rgba(126, 139, 220, ${alpha})`
        context.lineWidth = 0.8
        context.stroke()
      })
      points.forEach((point, i) => {
        context.beginPath()
        context.arc(point.x, point.y, i % 7 === 0 ? 2 : 1.1, 0, Math.PI * 2)
        context.fillStyle = i % 7 === 0 ? '#ff4057' : '#8e9ddd'
        context.fill()
      })
      for (let i = 0; i < 38; i++) {
        const x = (((i * 719 + 89) % 997) / 997) * width
        const y = (((i * 317 + 37) % 991) / 991) * height
        context.fillStyle = i % 5 === 0 ? '#ff405750' : '#8794be40'
        context.fillRect(x, y, 1.2, 1.2)
      }
    }
    const resize = () => {
      width = element.clientWidth
      height = element.clientHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      element.width = width * ratio
      element.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      draw()
    }
    const observe = new ResizeObserver(resize)
    observe.observe(element)
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || paused || reduced) return
      const bounds = element.getBoundingClientRect()
      pointer = {
        x: (event.clientX - bounds.left) / bounds.width - 0.5,
        y: (event.clientY - bounds.top) / bounds.height - 0.5,
      }
    }
    const reset = () => {
      pointer = { x: 0, y: 0 }
    }
    const visibility = () => {
      visible = !document.hidden && inView
    }
    const intersection = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting
      visibility()
    })
    intersection.observe(element)
    const animate = () => {
      if (visible) {
        phase += 0.0015
        rotation.current = phase
        draw()
      }
      frame = requestAnimationFrame(animate)
    }
    element.parentElement?.addEventListener('pointermove', move)
    element.parentElement?.addEventListener('pointerleave', reset)
    document.addEventListener('visibilitychange', visibility)
    resize()
    if (!paused && !reduced) frame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame)
      observe.disconnect()
      intersection.disconnect()
      element.parentElement?.removeEventListener('pointermove', move)
      element.parentElement?.removeEventListener('pointerleave', reset)
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [paused, reduced])
  return (
    <>
      <canvas ref={canvas} className="network-field" aria-hidden="true" />
      {!reduced && (
        <button
          className="motion-toggle"
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? '▷ Reanudar animación' : 'Ⅱ Pausar animación'}
        </button>
      )}
    </>
  )
}
