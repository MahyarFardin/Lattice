import { useEffect, useState } from 'react'
import { siteConfig, stats, testimonials } from '../data/content'
import { reducedMotion, useCountUp, useInView } from '../hooks/fx'
import Reveal from './Reveal'
import Scramble from './Scramble'
import SplitText from './SplitText'

function Stat({ value, suffix, label, active }: (typeof stats)[number] & { active: boolean }) {
  const shown = useCountUp(value, active)
  return (
    <div className="stat">
      <strong>
        {shown}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.7L12 17.6 6.1 20.8l1.3-6.7L2.5 9.5l6.6-.8z" />
  </svg>
)

export default function Trust() {
  const [statsRef, seen] = useInView<HTMLDivElement>(0.4)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(() => reducedMotion())
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (paused || hovering) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [paused, hovering])

  const go = (next: number) => setIndex((next + testimonials.length) % testimonials.length)

  return (
    <section id="trust" className="section">
      <div className="container">
        <Scramble className="eyebrow" text="// trust" />
        <SplitText className="h2" text="Work you can check on Upwork." />

        <div ref={statsRef} className="stats">
          {stats.map((s) => (
            <Stat key={s.label} {...s} active={seen} />
          ))}
          <a href={siteConfig.upworkUrl} target="_blank" rel="noreferrer" className="badge">
            <span className="badge-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} />
              ))}
            </span>
            <strong>{siteConfig.upworkRating} on Upwork</strong>
            <span>[Top Rated badge]</span>
          </a>
        </div>

        <Reveal
          className="slider"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div
            className="slider-viewport"
            onPointerEnter={() => setHovering(true)}
            onPointerLeave={() => setHovering(false)}
            onFocus={() => setHovering(true)}
            onBlur={() => setHovering(false)}
          >
            <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t, i) => (
                <figure key={i} className="slide" inert={i !== index} aria-label={`${i + 1} of ${testimonials.length}`}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    {t.name} <span>{t.company}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="slider-controls">
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous testimonial">
              Prev
            </button>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === index ? 'is-on' : ''}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next testimonial">
              Next
            </button>
            <button type="button" onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
              {paused ? 'Play' : 'Pause'}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
