import React from 'react'
import About from '../sections/About'
import Footer from '../sections/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-max px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
