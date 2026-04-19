import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import About from './sections/About'
import CompanyProfile from './sections/CompanyProfile'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const rafId = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) {
        return
      }

      rafId.current = window.requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY > 50
        setIsScrolled((previous) => (previous === nextIsScrolled ? previous : nextIsScrolled))
        rafId.current = null
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'url(/background.png)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_85%_18%,rgba(99,102,241,0.16),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(20,184,166,0.16),transparent_36%)]" />
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />
      </div>

      <main className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 pb-8">
        <Navbar isScrolled={isScrolled} />
        <Hero />
        <Features />
        <About />
        <CompanyProfile />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
