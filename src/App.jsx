import React, { useState, useEffect } from 'react'
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
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar scrollPosition={scrollPosition} />
      <Hero />
      <Features />
      <About />
      <CompanyProfile />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
