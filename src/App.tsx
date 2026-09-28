import Chat from './components/Chat'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import { Manifesto, Marquee, Process, Services, Stats, Testimonials, Work } from './components/Sections'
import { useRevealAll } from './lib/hooks'

export default function App() {
  useRevealAll()
  return (
    <>
      <Preloader />
      <div className="noise" aria-hidden />
      <a className="skip-link" href="#contact">
        Skip to contact form
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Stats />
        <Process />
        <Work />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
      <Chat />
    </>
  )
}
