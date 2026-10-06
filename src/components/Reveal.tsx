import { type ElementType, type ReactNode } from 'react'
import { useInView } from '../hooks/fx'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: RevealProps) {
  const [ref, seen] = useInView<HTMLElement>(0.15)

  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
