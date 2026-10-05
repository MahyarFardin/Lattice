import { useState } from 'react'
import { navLinks, siteConfig } from '../data/content'
import './Navbar.css'

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">
          <span className="navbar-mark" aria-hidden="true">
            <span className="navbar-mark-node" />
            <span className="navbar-mark-node is-accent" />
          </span>
          {siteConfig.brandName}
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-underline link-underline-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary navbar-cta">
          Let's work together
        </a>

        <button
          type="button"
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggle-bars">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="navbar-mobile-menu" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Let's work together
          </a>
        </nav>
      )}
    </header>
  )
}
