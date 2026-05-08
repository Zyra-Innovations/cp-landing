import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const rafId = useRef(null)
  const lastScrollTime = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now()
      // Throttle to 60fps (16.67ms)
      if (now - lastScrollTime.current < 16) return
      lastScrollTime.current = now

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
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="min-h-screen overflow-x-hidden relative">
        <Navbar isScrolled={isScrolled} />

        <Routes>
          <Route path="/" element={<Home isScrolled={isScrolled} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

export default App
