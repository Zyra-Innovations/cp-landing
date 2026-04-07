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
    <div 
      className="min-h-screen overflow-x-hidden relative"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10">
        <Navbar isScrolled={isScrolled} />
        <Hero />
        <Features />
        <About />
        <CompanyProfile />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
