import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './Button'

/**
 * Navbar Component
 * Sticky navigation with logo, menu items, and CTA button
 * Includes mobile hamburger menu
 */
const Navbar = ({ scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Profile', href: '#company-profile' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  const isScrolled = scrollPosition > 50

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/30 backdrop-blur-xl shadow-lg border-b border-white/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/logo.png"
              alt="Zyra Innovations logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-gradient">Zyra Innovations</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 hover:text-primary-600 transition duration-300"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA + Menu Button */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="md" className="hidden sm:flex">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <Button variant="primary" className="w-full mt-4 justify-center">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
