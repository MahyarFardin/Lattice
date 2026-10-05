import { useState } from 'react'
import { navLinks, siteConfig } from '../data/content'
import Btn from './Btn'
import Logo from './Logo'

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Logo />

        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-cta">
          <Btn href={siteConfig.upworkUrl} external>
            Hire us
          </Btn>
        </div>

        <button
          type="button"
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="navbar-mobile" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Btn href={siteConfig.upworkUrl} external>
            Hire us on Upwork
          </Btn>
        </nav>
      )}
    </header>
  )
}
