import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'

/**
 * Navbar Component
 * Sticky navigation with logo, menu items, and CTA button
 * Includes mobile hamburger menu
 */
const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Profile', href: '#company-profile' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <motion.nav
      className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.8 }}
      style={{ willChange: 'transform' }}
    >
      <div
        className={`container-max rounded-2xl border backdrop-blur-2xl shadow-xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 border-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.12)]'
            : 'bg-white/70 border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          >
            <img
              src="/logo.png"
              alt="Zyra Innovations logo"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-contain"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient whitespace-nowrap">
              Zyra Innovations
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300 text-sm lg:text-base"
                whileHover={{ y: -1, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA + Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Button variant="primary" size="md" className="hidden sm:flex shadow-md">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
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
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="md:hidden px-1 pb-4 pt-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            >
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block py-2.5 text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, type: 'spring', stiffness: 220, damping: 24 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button variant="primary" className="w-full mt-4 justify-center shadow-md">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
