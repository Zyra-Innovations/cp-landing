import React from 'react'
import PropTypes from 'prop-types'
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
  bgColor = '',
}) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-max">
        <div className={`glass-surface px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12 ${bgColor}`}>
          {title && (
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 22 }}
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
      </div>
    </section>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
}

export default SectionWrapper
