import type { ReactNode } from 'react'

type HighlightColor = 'blue' | 'amber' | 'rose'
type HighlightShift = 'left' | 'right' | 'none'

export default function Highlight({
  children,
  color = 'blue',
  shift = 'none',
}: {
  children: ReactNode
  color?: HighlightColor
  shift?: HighlightShift
}) {
  const shiftClass = shift === 'none' ? '' : ` highlight--shift-${shift}`
  return <mark className={`highlight highlight-${color}${shiftClass}`}>{children}</mark>
}
