import { useEffect, useState } from 'react'

const NODES = 10

export default function ScrollProgress() {
  const [lit, setLit] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      const root = document.documentElement.style
      root.setProperty('--sy', `${window.scrollY}`)
      root.setProperty('--sp', `${p}`)
      setLit(Math.round(p * (NODES - 1)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="progress" aria-hidden="true">
      {Array.from({ length: NODES }, (_, i) => (
        <i key={i} className={i <= lit ? 'on' : ''} />
      ))}
    </div>
  )
}
