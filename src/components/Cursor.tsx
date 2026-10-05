import { useEffect, useRef } from 'react'
import { finePointer, nodeColor, reducedMotion } from '../hooks/fx'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const trail = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!finePointer() || reducedMotion()) return
    const root = document.documentElement
    root.classList.add('has-cursor')
    const canvas = trail.current!
    const ctx = canvas.getContext('2d')!
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const target = { x: -100, y: -100 }
    const ringPos = { x: -100, y: -100 }
    const points: { x: number; y: number }[] = []
    let raf = 0

    const size = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const move = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      dot.current!.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      const hovering = (e.target as Element).closest?.('a, button, [data-cursor]')
      ring.current!.classList.toggle('is-active', !!hovering)
    }
    const down = () => ring.current!.classList.add('is-down')
    const up = () => ring.current!.classList.remove('is-down')

    const loop = () => {
      ringPos.x += (target.x - ringPos.x) * 0.18
      ringPos.y += (target.y - ringPos.y) * 0.18
      ring.current!.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
      points.push({ x: ringPos.x, y: ringPos.y })
      if (points.length > 22) points.shift()

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1]
        const b = points[i]
        const k = i / points.length
        ctx.strokeStyle = nodeColor(b.x, window.innerWidth, k * 0.6)
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
        if (i % 4 === 0) {
          ctx.fillStyle = nodeColor(b.x, window.innerWidth, k)
          ctx.beginPath()
          ctx.arc(b.x, b.y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(loop)
    }

    size()
    raf = requestAnimationFrame(loop)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    window.addEventListener('resize', size)

    return () => {
      cancelAnimationFrame(raf)
      root.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('resize', size)
    }
  }, [])

  return (
    <div aria-hidden="true">
      <canvas ref={trail} className="cursor-trail" />
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </div>
  )
}
