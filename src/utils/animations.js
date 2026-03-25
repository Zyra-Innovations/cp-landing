/**
 * Animation Utilities
 * Reusable Framer Motion animation configurations
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Scroll animations
export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' },
  viewport: { once: true, margin: '0px 0px -100px 0px' },
}

// Hover animations
export const cardHover = {
  hover: { y: -10, transition: { duration: 0.3 } },
}

export const buttonHover = {
  hover: { scale: 1.05, y: -2, transition: { duration: 0.3 } },
  tap: { scale: 0.98 },
}

// Floating animation
export const float = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Floating with different timing
export const floatSlow = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatFast = {
  animate: {
    y: [0, -25, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Rotation animations
export const rotateIn = {
  initial: { opacity: 0, rotate: -20 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6 },
}

export const rotateHover = {
  hover: { rotate: 10, scale: 1.1 },
}

// Pulse animation
export const pulse = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

// Shimmer animation
export const shimmer = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
}

// Bounce animation
export const bounce = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Wobble animation
export const wobble = {
  animate: {
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
}

// Swing animation
export const swing = {
  animate: {
    rotate: [0, 3, -3, 3, 0],
    transformOrigin: 'top center',
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

// Slide animations
export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

// Flip animation
export const flip = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1 },
  transition: { duration: 0.6 },
}

// Glow animation
export const glow = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(14, 165, 233, 0.5)',
      '0 0 40px rgba(14, 165, 233, 0.8)',
      '0 0 20px rgba(14, 165, 233, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

// Text animation
export const textReveal = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

// Number counter animation (for stats)
export const counterAnimation = (from = 0, to = 100, duration = 2) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration },
})

// Background animation
export const gradientShift = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Scale pulse animation
export const scalePulse = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

// Expand animation
export const expand = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  containerVariants,
  itemVariants,
  scrollReveal,
  cardHover,
  buttonHover,
  float,
  floatSlow,
  floatFast,
  rotateIn,
  rotateHover,
  pulse,
  shimmer,
  bounce,
  wobble,
  swing,
  slideInLeft,
  slideInRight,
  flip,
  glow,
  textReveal,
  counterAnimation,
  gradientShift,
  scalePulse,
  expand,
}
