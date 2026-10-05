import { type CSSProperties, type ElementType } from 'react'
import { useInView } from '../hooks/fx'

type SplitTextProps = {
  text: string
  as?: ElementType
  className?: string
  shimmer?: string[]
}

export default function SplitText({ text, as: Tag = 'h2', className = '', shimmer = [] }: SplitTextProps) {
  const [ref, seen] = useInView<HTMLElement>(0.3)

  return (
    <Tag ref={ref} className={`split ${seen ? 'is-in' : ''} ${className}`.trim()} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="split-mask" aria-hidden="true">
          <span
            className={`split-word ${shimmer.includes(word) ? 'shimmer' : ''}`.trim()}
            style={{ '--i': i } as CSSProperties}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
