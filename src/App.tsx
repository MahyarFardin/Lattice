import { useCallback, useState } from 'react'
import Cursor from './components/Cursor'
import CTA from './components/CTA'
import Flow from './components/Flow'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Process from './components/Process'
import ScrollProgress from './components/ScrollProgress'
import Services from './components/Services'
import Team from './components/Team'
import Trust from './components/Trust'
import Work from './components/Work'
import { useScrolled } from './hooks/useScrolled'

export default function App() {
  const scrolled = useScrolled()
  const [intro, setIntro] = useState(true)
  const endIntro = useCallback(() => setIntro(false), [])

  return (
    <>
      {intro && <Loader onDone={endIntro} />}
      <Cursor />
      <ScrollProgress />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar scrolled={scrolled} />
      <main id="main">
        <Hero />
        <Flow />
        <Services />
        <Flow />
        <Team />
        <Flow />
        <Process />
        <Flow />
        <Work />
        <Flow />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
