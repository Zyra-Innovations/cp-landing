import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

/**
 * AnimatedCounter Component
 * Animates numbers counting up to target value
 * Used for statistics and metrics
 */
const AnimatedCounter = ({
  from = 0,
  to = 100,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  delay = 0,
}) => {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let startTimestamp = null

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)

      setCount(Math.floor(progress * (to - from) + from))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(step)
    }, delay * 1000)

    return () => clearTimeout(timeoutId)
  }, [from, to, duration, delay])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  )
}

AnimatedCounter.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  duration: PropTypes.number,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
}

export default AnimatedCounter
