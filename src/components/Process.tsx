import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { processSteps } from '../data/content'
import Scramble from './Scramble'
import SplitText from './SplitText'

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const section = sectionRef.current!
    let raf = 0
    const update = () => {
      raf = 0
      const box = section.getBoundingClientRect()
      const span = box.height - window.innerHeight
      const p = span > 0 ? Math.min(Math.max(-box.top / span, 0), 1) : 0
      section.style.setProperty('--p', `${p}`)
      setActive(Math.round(p * (processSteps.length - 1)))
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
    <section id="process" ref={sectionRef} className="process">
      <div className="process-pin">
        <div className="process-head">
          <Scramble className="eyebrow" text="// how we work" />
          <SplitText className="h2" text="Four steps from idea to launch." />
        </div>
        <div className="process-track">
          <div className="process-line" aria-hidden="true">
            <span />
          </div>
          {processSteps.map((step, i) => (
            <article key={step.title} className={`step ${i <= active ? 'is-lit' : ''}`} style={{ '--i': i } as CSSProperties}>
              <span className="step-node" aria-hidden="true" />
              <span className="step-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
