import React from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable Card Component
 * Used for features, services, testimonials, etc.
 * Now with enhanced animations and interactions
 */
const Card = ({
  children,
  className = '',
  hover = true,
  image = null,
  ...props
}) => {
  const cardClass = `
    rounded-2xl p-6
    bg-white/40 backdrop-blur-md border border-white/60 shadow-xl
    ${hover ? 'cursor-pointer' : ''}
    ${className}
  `

  return (
    <motion.div
      className={cardClass}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              scale: 1.01,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }
          : {}
      }
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        hover: { type: 'spring', stiffness: 260, damping: 24 },
      }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      {...props}
    >
      {image && (
        <motion.div
          className="mb-4 overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={image}
            alt="Card"
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 160, damping: 24 }}
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.16 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Card
