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
    <SectionWrapper id="about" bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our <span className="text-gradient">Company</span>
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded in 2020, we've been revolutionizing the way companies build digital experiences. Our mission is to empower businesses with cutting-edge tools and designs that drive growth.
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We believe in the power of good design combined with solid engineering. Our team of experienced designers and developers work tirelessly to deliver solutions that exceed expectations.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: benefits.indexOf(benefit) * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: benefits.indexOf(benefit) * 0.15 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                </motion.div>
                <motion.span
                  className="text-gray-700 font-semibold"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
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

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  rotate: [0, -5, 5, 0],
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🚀
              </motion.div>
              <p className="text-gray-700 font-semibold">13+ Years of Excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About
