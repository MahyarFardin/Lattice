import { useEffect, useRef } from 'react'
import { nodeColor, reducedMotion } from '../hooks/fx'

type MeshNode = { x: number; y: number; vx: number; vy: number; ox: number; oy: number; px: number; py: number }

const LINK_DISTANCE = 140
const MOUSE_RADIUS = 200

export default function NodeMesh({ converge = false }: { converge?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const convergeRef = useRef(converge)

  useEffect(() => {
    convergeRef.current = converge
  }, [converge])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const still = reducedMotion()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    let width = 0
    let height = 0
    let mix = 0
    let raf = 0
    let running = true
    let nodes: MeshNode[] = []

    const frame = () => {
      mix += ((convergeRef.current ? 1 : 0) - mix) * 0.04
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const d = Math.hypot(dx, dy)
        if (d < MOUSE_RADIUS) {
          n.x += dx * 0.012 * (1 - d / MOUSE_RADIUS)
          n.y += dy * 0.012 * (1 - d / MOUSE_RADIUS)
        }
        n.px = n.x + (width / 2 + n.ox - n.x) * mix
        n.py = n.y + (height / 2 + n.oy - n.y) * mix
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.px - b.px, a.py - b.py)
          if (d >= LINK_DISTANCE) continue
          const near = Math.hypot((a.px + b.px) / 2 - mouse.x, (a.py + b.py) / 2 - mouse.y) < 160
          ctx.strokeStyle = nodeColor(a.px, width, (1 - d / LINK_DISTANCE) * (near ? 0.95 : 0.28))
          ctx.lineWidth = near ? 1.4 : 0.8
          ctx.beginPath()
          ctx.moveTo(a.px, a.py)
          ctx.lineTo(b.px, b.py)
          ctx.stroke()
        }
      }

      for (const n of nodes) {
        const near = Math.hypot(n.px - mouse.x, n.py - mouse.y) < 160
        ctx.fillStyle = nodeColor(n.px, width, near ? 1 : 0.7)
        ctx.beginPath()
        ctx.arc(n.px, n.py, near ? 3.2 : 1.8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      if (!running) {
        raf = 0
        return
      }
      frame()
      raf = requestAnimationFrame(loop)
    }

    const resize = () => {
      const box = canvas.parentElement!.getBoundingClientRect()
      width = box.width
      height = box.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(120, Math.round((width * height) / 13000))
      nodes = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          ox: Math.cos(angle) * (170 + Math.random() * width * 0.28),
          oy: Math.sin(angle) * (70 + Math.random() * height * 0.22),
          px: 0,
          py: 0,
        }
      })
      if (still) frame()
    }

    const onPointer = (e: PointerEvent) => {
      const box = canvas.getBoundingClientRect()
      mouse.x = e.clientX - box.left
      mouse.y = e.clientY - box.top
    }

    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas.parentElement!)

    const visibility = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      if (running && !raf && !still) raf = requestAnimationFrame(loop)
    })
    visibility.observe(canvas)

    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      visibility.disconnect()
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="mesh" aria-hidden="true" />
}
