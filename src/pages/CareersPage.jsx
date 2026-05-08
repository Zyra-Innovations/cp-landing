import React from 'react'
import Footer from '../sections/Footer'

const CareersPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-max px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Careers</h1>
        <p className="text-gray-700/85 mb-6">We're growing — check back for open positions or email us your CV at <a className="text-primary-600" href="mailto:zyrainnovations07@gmail.com">zyrainnovations07@gmail.com</a>.</p>

        <div className="grid gap-6">
          <div className="p-6 border rounded-md">
            <h3 className="font-semibold">Frontend Engineer</h3>
            <p className="text-sm text-gray-600">React, Tailwind, Vite — remote</p>
          </div>
          <div className="p-6 border rounded-md">
            <h3 className="font-semibold">Full-stack Engineer</h3>
            <p className="text-sm text-gray-600">Node.js, Cloud — hybrid</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareersPage
