import { type ComponentProps, type PointerEvent, useRef } from 'react'
import { reducedMotion } from '../hooks/fx'

type CardProps = ComponentProps<'article'> & { tilt?: boolean }

export default function Card({ tilt = false, className = '', children, ...rest }: CardProps) {
  const ref = useRef<HTMLElement>(null)

  const move = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || reducedMotion()) return
    const el = ref.current!
    const box = el.getBoundingClientRect()
    const x = (e.clientX - box.left) / box.width
    const y = (e.clientY - box.top) / box.height
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    if (tilt) {
      el.style.setProperty('--rx', `${(0.5 - y) * 9}deg`)
      el.style.setProperty('--ry', `${(x - 0.5) * 11}deg`)
    }
  }

  const leave = () => {
    ref.current!.style.setProperty('--rx', '0deg')
    ref.current!.style.setProperty('--ry', '0deg')
  }

  return (
    <article ref={ref} className={`card ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </article>
  )
}
