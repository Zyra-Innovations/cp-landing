import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'
import { CheckCircle2 } from 'lucide-react'

/**
 * About Section
 * Company description, mission and vision
 * Image and content layout
 */
const About = () => {
  const benefits = [
    'Industry-leading expertise',
    'Proven track record',
    'Customer-centric approach',
    'Continuous innovation',
  ]

  return (
    <SectionWrapper id="about" bgColor="bg-white/20 backdrop-blur-md">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Zyra Innovations</span>
          </h2>

          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Founded in 2026, we&apos;ve been revolutionizing the way companies build digital experiences. Our mission is to empower businesses with cutting-edge tools and designs that drive growth.
          </p>

          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            We believe in the power of good design combined with solid engineering. Our team of experienced designers and developers work tirelessly to deliver solutions that exceed expectations.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: benefits.indexOf(benefit) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <motion.div>
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                </motion.div>
                <motion.span
                  className="text-gray-900 font-semibold"
                  whileHover={{ x: 2 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  {benefit}
                </motion.span>
              </motion.div>
            ))}
          </div>

          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About
