import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Users, TrendingUp, Globe } from 'lucide-react'
import Card from '../components/Card'
import SectionWrapper from '../components/SectionWrapper'

/**
 * Features Section
 * 6 feature cards with icons and descriptions
 * Responsive grid layout with enhanced animations
 */
const Features = () => {
  const features = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Beautiful Design',
      description: 'Modern, pixel-perfect designs that captivate your audience and keep them engaged.',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with fast load times and smooth interactions for better UX.',
    },
    {
      id: 3,
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with regular updates and 99.9% uptime guarantee.',
    },
    {
      id: 4,
      icon: Users,
      title: 'Easy Collaboration',
      description: 'Work seamlessly with your team with real-time collaboration features.',
    },
    {
      id: 5,
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Comprehensive analytics dashboard to track metrics and measure success.',
    },
    {
      id: 6,
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy and scale globally with our worldwide infrastructure and CDN.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <SectionWrapper
      id="features"
      title="Powerful Features"
      subtitle="Everything you need to create stunning digital experiences"
      bgColor="bg-gray-50"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <motion.div key={feature.id} variants={itemVariants}>
              <Card className="p-8 h-full group" hover={true}>
                <motion.div
                  className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg group-hover:shadow-lg"
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)',
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  whileInView={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.1,
                  }}
                >
                  <Icon className="w-7 h-7 text-primary-600" />
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>

                {/* Animated underline on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}

export default Features
