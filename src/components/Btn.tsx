import { type MouseEvent, type PointerEvent, type ReactNode, useRef } from 'react'
import { reducedMotion } from '../hooks/fx'

type BtnProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  size?: 'md' | 'lg'
}

export default function Btn({ href, children, variant = 'primary', external = false, size = 'md' }: BtnProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const move = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse' || reducedMotion()) return
    const el = ref.current!
    const box = el.getBoundingClientRect()
    el.style.setProperty('--tx', `${(e.clientX - box.left - box.width / 2) * 0.28}px`)
    el.style.setProperty('--ty', `${(e.clientY - box.top - box.height / 2) * 0.4}px`)
  }

  const leave = () => {
    ref.current!.style.setProperty('--tx', '0px')
    ref.current!.style.setProperty('--ty', '0px')
  }

  const ripple = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current!
    const box = el.getBoundingClientRect()
    const wave = document.createElement('span')
    wave.className = 'ripple'
    wave.style.left = `${e.clientX - box.left}px`
    wave.style.top = `${e.clientY - box.top}px`
    el.appendChild(wave)
    wave.addEventListener('animationend', () => wave.remove())
  }

  return (
    <a
      ref={ref}
      href={href}
      className={`btn btn-${variant} btn-${size}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onPointerMove={move}
      onPointerLeave={leave}
      onClick={ripple}
    >
      <span className="btn-label">{children}</span>
    </a>
  )
}
