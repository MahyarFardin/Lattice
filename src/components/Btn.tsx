import { type MouseEvent, type ReactNode, useRef } from 'react'

type BtnProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  size?: 'md' | 'lg'
}

export default function Btn({ href, children, variant = 'primary', external = false, size = 'md' }: BtnProps) {
  const ref = useRef<HTMLAnchorElement>(null)

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
      onClick={ripple}
    >
      <span className="btn-label">{children}</span>
    </a>
  )
}
