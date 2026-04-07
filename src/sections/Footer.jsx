import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react'

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
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zyra-innovations/?viewAsMember=true', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/zyra_innovations?igsh=dXlnbGw5ZXZ2aG00', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Zyra-Innovations', label: 'GitHub' },
    { icon: Mail, href: 'mailto:zyrainnovations07@gmail.com', label: 'Email' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'zyrainnovations07@gmail.com' },
    { icon: Phone, text: '9739360260' },
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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo.png"
                alt="Zyra Innovations logo"
                className="h-10 w-10 rounded-lg object-contain"
              />
              <h3 className="text-2xl font-bold text-white">Zyra Innovations</h3>
            </div>
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
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 relative inline-block"
                      whileHover={{ color: '#ffffff', x: 2 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    >
                      {link}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
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
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Zyra Innovations. All rights reserved.
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
                    scale: 1.06,
                    y: -2,
                    boxShadow: '0 0 18px rgba(14, 165, 233, 0.35)',
                  }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <Icon className="w-5 h-5" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ zIndex: -1 }}
                  />
                </motion.a>
              )
            })}
          </div>

          {/* Additional Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
