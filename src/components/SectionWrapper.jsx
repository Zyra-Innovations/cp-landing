import React from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable SectionWrapper Component
 * Provides consistent padding and layout for sections
 */
const SectionWrapper = ({
  children,
  id = '',
  className = '',
  title = '',
  subtitle = '',
  bgColor = 'bg-white',
}) => {
  return (
    <section id={id} className={`${bgColor} section-padding ${className}`}>
      <div className="container-max">
        {title && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
