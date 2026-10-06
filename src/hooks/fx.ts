import { useEffect, useRef, useState } from 'react'

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const finePointer = () => window.matchMedia('(pointer: fine)').matches

export const nodeColor = (x: number, width: number, alpha = 1) =>
  `hsla(${255 - Math.min(Math.max(x / width, 0), 1) * 68}, 100%, 66%, ${alpha})`

export function useInView<T extends Element>(threshold = 0.25, once = true) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setSeen(false)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, seen] as const
}

export function useReady() {
  const [ready, setReady] = useState(() => !document.documentElement.classList.contains('is-loading'))

  useEffect(() => {
    const onReady = () => setReady(true)
    window.addEventListener('lattice:ready', onReady)
    return () => window.removeEventListener('lattice:ready', onReady)
  }, [])

  return ready
}

const GLYPHS = '01<>/{}[]#$%&*+=_'

export function useScramble(text: string, trigger: number) {
  const [out, setOut] = useState(text)

  useEffect(() => {
    if (!trigger || reducedMotion()) return
    let frame = 0
    const id = window.setInterval(() => {
      frame++
      setOut(
        text
          .split('')
          .map((char, i) =>
            char === ' ' || i < frame / 2 ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(''),
      )
      if (frame / 2 >= text.length) clearInterval(id)
    }, 30)
    return () => clearInterval(id)
  }, [text, trigger])

  return out
}

export function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (reducedMotion()) {
      setValue(target)
      return
    }
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return value
}
