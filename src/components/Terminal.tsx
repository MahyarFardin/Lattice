import { useEffect, useState } from 'react'
import { reducedMotion, useInView } from '../hooks/fx'

export default function Terminal({ lines, title }: { lines: string[]; title: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.5)
  const total = lines.reduce((sum, line) => sum + line.length, 0)
  const [typed, setTyped] = useState(0)

  useEffect(() => {
    if (!seen) return
    if (reducedMotion()) {
      setTyped(total)
      return
    }
    const id = window.setInterval(() => setTyped((n) => (n < total ? n + 1 : n)), 38)
    return () => clearInterval(id)
  }, [seen, total])

  return (
    <div ref={ref} className="terminal">
      <div className="terminal-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{title}</span>
      </div>
      <p className="sr-only">{lines.join(' ')}</p>
      <div className="terminal-body" aria-hidden="true">
        {lines.map((line, i) => {
          const before = lines.slice(0, i).reduce((sum, l) => sum + l.length, 0)
          return (
            <div key={i} className={line.startsWith('$') ? 't-cmd' : 't-out'}>
              {line.slice(0, Math.max(typed - before, 0))}
            </div>
          )
        })}
        <span className="caret" />
      </div>
    </div>
  )
}
