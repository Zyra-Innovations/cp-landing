import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'

/**
 * CTA Section
 * Strong conversion-focused section
 * Includes newsletter subscription form
 */
const CTA = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <SectionWrapper id="cta" bgColor="bg-gradient-to-r from-primary-700/70 to-secondary-700/70 backdrop-blur-md">
      <motion.div
        className="max-w-4xl mx-auto text-center text-white rounded-3xl border border-white/20 bg-black/20 backdrop-blur-lg px-6 py-10 md:px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
          Join thousands of companies already using our platform to grow faster, smarter, and more profitably.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/80" />
            <motion.input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/85 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white shadow-lg text-gray-900 placeholder:text-gray-500 transition-all"
              whileFocus={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                scale: 1.01,
              }}
              required
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
            variant="outline"
            size="lg"
            onClick={handleSubmit}
            className="!border-white !text-white hover:!bg-white/20 whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          </motion.div>
        </form>

        {/* Confirmation Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg inline-block"
          >
            ✓ Thank you! Check your email for next steps.
          </motion.div>
        )}

        {/* Features List */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-lg p-4 cursor-pointer border border-white/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: '0 16px 28px rgba(255,255,255,0.08)' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-3xl mb-2"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              ⚡
            </motion.div>
            <p className="font-semibold">Fast Setup</p>
            <p className="text-sm text-white/80">Start in minutes</p>
          </motion.div>
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-lg p-4 cursor-pointer border border-white/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: '0 16px 28px rgba(255,255,255,0.08)' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-3xl mb-2"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              🔒
            </motion.div>
            <p className="font-semibold">Secure</p>
            <p className="text-sm text-white/80">Enterprise security</p>
          </motion.div>
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-lg p-4 cursor-pointer border border-white/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: '0 16px 28px rgba(255,255,255,0.08)' }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.16 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-3xl mb-2"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              🎯
            </motion.div>
            <p className="font-semibold">Results</p>
            <p className="text-sm text-white/80">Proven success</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

export default CTA
