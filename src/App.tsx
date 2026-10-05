import CapabilityList from './components/CapabilityList'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Services from './components/Services'
import Team from './components/Team'
import WhyWorkWithUs from './components/WhyWorkWithUs'
import Work from './components/Work'
import { useScrolled } from './hooks/useScrolled'

export default function App() {
  const scrolled = useScrolled()

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <CapabilityList />
        <Work />
        <Services />
        <Process />
        <Team />
        <WhyWorkWithUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
