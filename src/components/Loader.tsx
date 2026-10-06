import { useEffect, useRef, useState } from 'react'
import { nodeColor, reducedMotion } from '../hooks/fx'

type Dot = { sx: number; sy: number; tx: number; ty: number; at: number }

const clamp = (v: number) => Math.min(Math.max(v, 0), 1)
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const openPage = () => {
  document.documentElement.classList.remove('is-loading')
  window.dispatchEvent(new Event('lattice:ready'))
}

export default function Loader({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (reducedMotion()) {
      openPage()
      onDone()
      return
    }

    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const width = window.innerWidth
    const height = window.innerHeight
    if (!width || !height) {
      openPage()
      onDone()
      return
    }
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    let raf = 0
    let cancelled = false
    let finished = false
    let exitTimer = 0

    const finish = () => {
      if (finished) return
      finished = true
      setLeaving(true)
      openPage()
      exitTimer = window.setTimeout(onDone, 700)
    }

    const start = () => {
      if (cancelled) return
      const sample = document.createElement('canvas')
      sample.width = width
      sample.height = height
      const sctx = sample.getContext('2d', { willReadFrequently: true })!
      sctx.font = '700 100px "Space Grotesk", sans-serif'
      const fontSize = Math.min(220, (width * 0.82) / (sctx.measureText('LATTICE').width / 100))
      sctx.font = `700 ${fontSize}px "Space Grotesk", sans-serif`
      sctx.textAlign = 'center'
      sctx.textBaseline = 'middle'
      sctx.fillStyle = '#fff'
      sctx.fillText('LATTICE', width / 2, height / 2)
      const pixels = sctx.getImageData(0, 0, width, height).data
      const step = Math.max(5, Math.round(fontSize / 15))
      const reach = step * 1.9
      const dots: Dot[] = []
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          if (pixels[(y * width + x) * 4 + 3] > 128) {
            dots.push({ tx: x, ty: y, sx: Math.random() * width, sy: Math.random() * height, at: Math.random() * 1400 })
          }
        }
      }

      const t0 = performance.now()
      const loop = (now: number) => {
        const t = now - t0
        const p = ease(clamp((t - 1500) / 1300))
        const threshold = 120 + (reach - 120) * p
        const pulse = t > 3000 ? 1 + Math.sin((t - 3000) / 90) * 0.25 : 1
        const pos = dots.map((d) => ({
          x: d.sx + (d.tx - d.sx) * p,
          y: d.sy + (d.ty - d.sy) * p,
          a: clamp((t - d.at) / 250),
        }))

        ctx.clearRect(0, 0, width, height)
        for (let i = 0; i < pos.length; i++) {
          for (let j = i + 1; j < pos.length; j++) {
            const d = Math.hypot(pos[i].x - pos[j].x, pos[i].y - pos[j].y)
            if (d >= threshold) continue
            ctx.strokeStyle = nodeColor(pos[i].x, width, Math.min(pos[i].a, pos[j].a) * (1 - d / threshold) * 0.55)
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(pos[i].x, pos[i].y)
            ctx.lineTo(pos[j].x, pos[j].y)
            ctx.stroke()
          }
        }
        for (const n of pos) {
          ctx.fillStyle = nodeColor(n.x, width, n.a)
          ctx.beginPath()
          ctx.arc(n.x, n.y, (2 + p * 0.8) * pulse, 0, Math.PI * 2)
          ctx.fill()
        }

        if (t > 3600) finish()
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    Promise.race([
      document.fonts.load('700 100px "Space Grotesk"'),
      new Promise((resolve) => window.setTimeout(resolve, 1200)),
    ])
      .catch(() => undefined)
      .finally(start)

    window.addEventListener('pointerdown', finish)
    window.addEventListener('keydown', finish)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      clearTimeout(exitTimer)
      window.removeEventListener('pointerdown', finish)
      window.removeEventListener('keydown', finish)
    }
  }, [onDone])

  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-label="Loading Lattice">
      <canvas ref={canvasRef} />
      <p className="loader-hint">building network / click to skip</p>
    </div>
  )
}
