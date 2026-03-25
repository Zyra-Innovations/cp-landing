import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

/**
 * Footer Section
 * Company info, quick links, social media, and contact details
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = {
    Product: ['Features', 'Pricing', 'Security', 'Team Plans'],
    Company: ['About', 'Blog', 'Contact', 'Careers'],
    Resources: ['Documentation', 'API Reference', 'Help Center', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'License'],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@company.com', label: 'Email' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'hello@company.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Innovation St, Tech City, TC 12345' },
  ]

  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">Company</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building amazing digital experiences that drive growth and engagement.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Icon className="w-4 h-4 text-primary-500" />
                    <span>{info.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(sections).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 relative inline-block"
                      whileHover={{ color: '#ffffff', x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Company. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white relative"
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    rotateZ: 360,
                    boxShadow: '0 0 25px rgba(14, 165, 233, 0.6)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Icon className="w-5 h-5" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.6 }}
                    style={{ zIndex: -1 }}
                  />
                </motion.a>
              )
            })}
          </div>

          {/* Additional Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
