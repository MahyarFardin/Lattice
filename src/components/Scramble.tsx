import { useEffect, useState } from 'react'
import { useInView, useReady, useScramble } from '../hooks/fx'

export default function Scramble({ text, className = '' }: { text: string; className?: string }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.6)
  const ready = useReady()
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {
    if (seen && ready) setTrigger((n) => n + 1)
  }, [seen, ready])

  const shown = useScramble(text, trigger)

  return (
    <span ref={ref} className={className} onPointerEnter={() => setTrigger((n) => n + 1)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
    </span>
  )
}
