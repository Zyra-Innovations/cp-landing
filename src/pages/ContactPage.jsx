import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '../sections/Footer'
import Button from '../components/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message')
      }

      setStatus('success')
      setFeedback(result.message || 'Message sent successfully.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setFeedback(error.message || 'Something went wrong.')
    }
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container-max px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-6 text-gray-700/85">Reach out to us at <a className="text-primary-600" href="mailto:zyrainnovations07@gmail.com">zyrainnovations07@gmail.com</a>.</p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl space-y-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <input
            className="w-full p-3 border rounded-md"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border rounded-md"
            placeholder="Your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-3 border rounded-md"
            rows="6"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="primary" size="lg" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>

          {feedback ? (
            <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {feedback}
            </p>
          ) : null}
        </motion.form>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
