import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

/**
 * Reusable Button Component
 * Supports primary, secondary, and outline variants
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  href = null,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-300 inline-flex items-center justify-center whitespace-nowrap cursor-pointer transform-gpu'

  const variants = {
    primary: 'bg-gradient-to-r from-primary-600/80 to-primary-600/60 backdrop-blur-md text-white hover:from-primary-600 hover:to-primary-600/80 shadow-lg hover:shadow-xl hover:scale-105 border border-white/20',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'text-primary-600 hover:bg-primary-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClass}
        whileHover={{ y: -1, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  href: PropTypes.string,
}

export default Button
