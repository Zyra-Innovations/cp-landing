/**
 * Animation Utilities
 * Reusable Framer Motion animation configurations
 */

const smoothEase = [0.22, 1, 0.36, 1]

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: smoothEase },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: smoothEase },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -28 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.75, ease: smoothEase },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 28 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.75, ease: smoothEase },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.65, ease: smoothEase },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: smoothEase },
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
}

// Scroll animations
export const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: smoothEase },
  viewport: { once: true, margin: '0px 0px -100px 0px' },
}

// Hover animations
export const cardHover = {
  hover: { y: -8, transition: { duration: 0.25, ease: smoothEase } },
}

export const buttonHover = {
  hover: { scale: 1.02, y: -1, transition: { duration: 0.25, ease: smoothEase } },
  tap: { scale: 0.98 },
}

// Floating animation
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Floating with different timing
export const floatSlow = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatFast = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Rotation animations
export const rotateIn = {
  initial: { opacity: 0, rotate: -20 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.75, ease: smoothEase },
}

export const rotateHover = {
  hover: { rotate: 10, scale: 1.1 },
}

// Pulse animation
export const pulse = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Shimmer animation
export const shimmer = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Bounce animation (currently unused but kept for reference)
export const bounce = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
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
      duration: 1.8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Swing animation
export const swing = {
  animate: {
    rotate: [0, 3, -3, 3, 0],
    transformOrigin: 'top center',
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Slide animations
export const slideInLeft = {
  initial: { x: -64, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.75, ease: smoothEase },
}

export const slideInRight = {
  initial: { x: 64, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.75, ease: smoothEase },
}

// Flip animation
export const flip = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1 },
  transition: { duration: 0.75, ease: smoothEase },
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
      duration: 3.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Text animation
export const textReveal = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: smoothEase },
}

// Number counter animation (for stats)
// eslint-disable-next-line no-unused-vars
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
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Scale pulse animation
export const scalePulse = {
  animate: {
    scale: [1, 1.01, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Expand animation
export const expand = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.65, ease: smoothEase },
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
