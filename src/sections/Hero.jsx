import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '../components/Button'

/**
 * Hero Section
 * Bold headline, subheading, and CTA buttons
 * Features background gradient, parallax effects, and animations
 */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 section-padding">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 24, 0],
          x: [0, 14, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -24, 0],
          x: [0, -14, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-40 left-20 w-20 h-20 bg-primary-300 rounded-full opacity-10 blur-2xl"
        animate={{
          y: [0, -12, 0],
          opacity: [0.1, 0.16, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 bg-secondary-300 rounded-full opacity-10 blur-2xl"
        animate={{
          y: [0, 12, 0],
          opacity: [0.1, 0.14, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 container-max px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span
              className="inline-block px-4 py-2 bg-white/40 backdrop-blur-md text-primary-700 rounded-full text-sm font-semibold border border-white/60 shadow-lg"
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.16)',
                  '0 0 28px rgba(14, 165, 233, 0.26)',
                  '0 0 20px rgba(14, 165, 233, 0.16)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✨ Welcome to the Future
            </motion.span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900"
          >
            Build Amazing Digital
            <br />
            <motion.span
              className="text-gradient"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            >
              Experiences
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Create stunning, high-converting landing pages that engage your audience and drive business growth
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-600 pt-8 border-t border-gray-200"
          >
            {[
              { icon: '✓', text: 'Trusted by 10,000+ users' },
              { icon: '✓', text: 'Industry leaders' },
              { icon: '✓', text: '24/7 Support' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 + idx * 0.08 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  {item.icon}
                </motion.div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="mt-20 rounded-2xl overflow-hidden shadow-2xl"
        >
          <motion.div
            className="relative aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center"
            whileHover={{ boxShadow: '0 24px 48px rgba(0, 0, 0, 0.16)' }}
            transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-center"
            >
              <motion.div
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              >
                <Play className="w-8 h-8 text-primary-600 ml-1" />
              </motion.div>
              <p className="text-gray-600 font-semibold">Product Showcase</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
