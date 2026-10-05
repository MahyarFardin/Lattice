import { useInView } from '../hooks/fx'

const PATH = 'M100 2 C100 40 40 46 40 80 S100 98 100 118'

export default function Flow() {
  const [ref, seen] = useInView<SVGSVGElement>(0.5)

  return (
    <svg ref={ref} className={`flow ${seen ? 'is-in' : ''}`} viewBox="0 0 200 120" aria-hidden="true">
      <path d={PATH} pathLength={1} className="flow-line" />
      <circle cx="100" cy="2" r="3" />
      <circle cx="40" cy="80" r="3" />
      <circle cx="100" cy="118" r="3" />
      <circle r="2.5" className="flow-dot" style={{ offsetPath: `path('${PATH}')` }} />
    </svg>
  )
}
