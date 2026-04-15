import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Card from '../components/Card'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedCounter from '../components/AnimatedCounter'

/**
 * Testimonials Section
 * Customer reviews with avatars
 * Carousel layout with navigation
 * Enhanced with animated statistics
 */
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Anderson',
      role: 'CEO, TechStartup Inc',
      avatar: '👩‍💼',
      content: 'Their team transformed our vision into reality. The attention to detail and customer service is exceptional!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, Digital Co',
      avatar: '👨‍💻',
      content: 'Working with this company was a game-changer. They delivered on time, on budget, and exceeded expectations.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Founder, Creative Agency',
      avatar: '👩‍🎨',
      content: 'Best investment we made. Their platform increased our conversions by 45% in just 3 months.',
      rating: 5,
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Marketing Director, Growth Co',
      avatar: '👨‍💼',
      content: 'Fantastic support team and amazing features. Highly recommend to anyone looking for quality solutions.',
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = 1
    const result = []
    for (let i = 0; i < visible; i++) {
      result.push(testimonials[(activeIndex + i) % testimonials.length])
    }
    return result
  }

  return (
    <SectionWrapper
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Real stories from satisfied customers"
      bgColor="bg-white/20 backdrop-blur-md"
    >
      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {testimonials.slice(0, 2).map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <motion.div
                className="flex items-start gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-4xl"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-700">{testimonial.role}</p>
                </div>
              </motion.div>
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.45, delay: 0.16 + i * 0.06 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-primary-400 text-primary-400" />
                    </motion.div>
                  ))}
              </motion.div>
              <p className="text-gray-800 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Mobile & Carousel View */}
      <div className="lg:hidden">
        <div className="relative">
          {getVisibleTestimonials().map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-8 relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-700">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                    ))}
                </div>
                <p className="text-gray-800 italic text-lg">&ldquo;{testimonial.content}&rdquo;</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handlePrev}
            className="p-2 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-2 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Indicators */}
        <motion.div
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
              animate={
                index === activeIndex
                  ? { boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)' }
                  : { boxShadow: '0 0 0px rgba(14, 165, 233, 0)' }
              }
              transition={{ duration: 0.45 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Animated Stats */}
      <motion.div
        className="mt-16 grid grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        >
          <div className="text-4xl font-bold text-primary-600 mb-2">
            <AnimatedCounter from={0} to={10000} duration={2} suffix="+" />
          </div>
          <p className="text-gray-800">Happy Clients</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        >
          <div className="text-4xl font-bold text-primary-600 mb-2">
            <AnimatedCounter from={0} to={98} duration={2} suffix="%" />
          </div>
          <p className="text-gray-800">Satisfaction Rate</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        >
          <div className="text-4xl font-bold text-primary-600 mb-2">
            <AnimatedCounter from={0} to={50} duration={2} suffix="+" />
          </div>
          <p className="text-gray-800">Awards Won</p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Testimonials
