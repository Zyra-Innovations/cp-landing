import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  Briefcase,
  CheckCircle2,
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

const expertise = [
  'Full-stack web development (React, Angular, Node.js, Django, Laravel, .NET)',
  'Mobile platforms (iOS, Android, Flutter, React Native)',
  'Cloud platforms (AWS, Azure, Google Cloud)',
  'Database management (PostgreSQL, MySQL, MongoDB, Redis)',
  'DevOps and CI/CD pipelines (Docker, Kubernetes, Jenkins, GitHub Actions)',
  'AI and ML frameworks (TensorFlow, PyTorch, OpenAI APIs, LangChain)',
  'Cybersecurity (penetration testing, SIEM, compliance frameworks)',
  'Business intelligence tools (Power BI, Tableau, Metabase)',
]

const whyChooseUs = [
  'End-to-end ownership from discovery to post-launch support',
  'Business-first approach tied directly to KPIs and growth goals',
  'Transparent communication and professional delivery timelines',
  'Agile and adaptive delivery through iterative sprint cycles',
  'Proven technology stack for scalability, security, and longevity',
  'Security integrated at every layer of the delivery lifecycle',
  'Cost-effective engagement models for different budget needs',
  'Knowledge transfer and training for long-term client ownership',
]

const workflowSteps = [
  ['Step 1', 'Discovery and Requirements Analysis'],
  ['Step 2', 'Strategy and Solution Design'],
  ['Step 3', 'UI/UX Design and Prototyping'],
  ['Step 4', 'Agile Development'],
  ['Step 5', 'Quality Assurance and Testing'],
  ['Step 6', 'Deployment and Go-Live'],
  ['Step 7', 'Training and Handover'],
  ['Step 8', 'Maintenance and Continuous Improvement'],
]

const CompanyProfile = () => {
  return (
    <SectionWrapper
      id="company-profile"
      title="Software and IT Services"
      subtitle="We Build. You Grow. Professional software and IT solutions for modern businesses."
      bgColor="bg-white/20 backdrop-blur-md"
    >
      <motion.div
        className="max-w-5xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl border border-white/50 backdrop-blur-lg p-6 md:p-8 bg-gradient-to-br from-white/40 via-primary-100/30 to-white/40 shadow-xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-gray-500 mb-4">
            <span>About Us</span>
            <span>Confidential</span>
            <span>For Client Use Only</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Zyra Innovations</h3>
          <p className="text-gray-800 leading-relaxed mb-6">
            We are a forward-thinking software and IT services company dedicated to engineering digital solutions
            that transform the way businesses operate, scale, and compete. From startups laying their digital
            foundation to established enterprises seeking modernization, we serve as a trusted technology partner
            at every stage of the journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-4 border border-gray-100">
              <p className="text-3xl font-bold text-primary-600">12+</p>
              <p className="text-sm text-gray-800">Service Categories</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-gray-100">
              <p className="text-3xl font-bold text-primary-600">End-to-End</p>
              <p className="text-sm text-gray-800">Digital Solutions</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-gray-100">
              <p className="text-3xl font-bold text-primary-600">100%</p>
              <p className="text-sm text-gray-800">Client-Focused</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/50 backdrop-blur-lg p-7 md:p-8 bg-gradient-to-br from-white/40 via-primary-100/20 to-white/40 shadow-xl self-start"
        >
          <div className="absolute -top-16 -right-14 h-40 w-40 rounded-full bg-primary-100/70 blur-2xl" />
          <div className="relative flex items-center gap-3 mb-4 text-gray-900">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600/10 border border-primary-200">
              <Building2 className="w-6 h-6 text-primary-600" />
            </span>
            <h3 className="text-2xl font-bold tracking-tight">Who We Are</h3>
          </div>
          <p className="relative text-gray-800 leading-relaxed mb-4 text-lg">
            Founded on the belief that technology should work for people - not the other way around - our team
            comprises experienced software engineers, UI/UX designers, data scientists, cloud architects,
            cybersecurity specialists, and business analysts.
          </p>
          <p className="relative text-gray-800 leading-relaxed text-lg">
            We bring a multidisciplinary approach to every engagement and operate as problem-solvers first,
            technologists second. Every solution we deliver is shaped by a deep understanding of your industry,
            your users, and your strategic goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/50 backdrop-blur-lg p-7 md:p-8 bg-gradient-to-br from-white/40 via-secondary-100/20 to-white/40 shadow-xl self-start"
        >
          <div className="absolute -bottom-16 -left-14 h-40 w-40 rounded-full bg-secondary-100/70 blur-2xl" />
          <div className="relative flex items-center gap-3 mb-4 text-gray-900">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-600/10 border border-secondary-200">
              <Briefcase className="w-6 h-6 text-secondary-600" />
            </span>
            <h3 className="text-2xl font-bold tracking-tight">What We Do</h3>
          </div>
          <p className="relative text-gray-800 leading-relaxed mb-5 text-lg">
            We design, develop, deploy, and support software products and IT infrastructure across a broad spectrum
            of industries including finance, healthcare, retail, logistics, education, and manufacturing.
          </p>
          <ul className="relative grid grid-cols-1 gap-3 text-gray-800">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span className="text-gray-800">Custom web and mobile application development</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span>Enterprise software and business automation</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span>Cloud infrastructure and DevOps engineering</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span>AI-powered tools and intelligent automation</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span>Cybersecurity and compliance solutions</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span>Data analytics and business intelligence</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span>UI/UX design, branding, and digital strategy</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-secondary-600 flex-shrink-0" /><span>IT training, consulting, and managed support</span></li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="rounded-3xl border border-white/50 backdrop-blur-lg p-6 mb-10 bg-gradient-to-br from-white/40 via-primary-100/20 to-white/40 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Expertise</h3>
        <p className="text-gray-800 leading-relaxed mb-4">
          With deep expertise across modern technology stacks and frameworks, our engineers are proficient
          in building robust, scalable, and secure systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {expertise.map((item, idx) => (
            <motion.div
              key={item}
              className="flex items-start gap-2 text-gray-800 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-3 shadow-md"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: idx % 2 === 0 ? 3 : -3, y: -1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-gray-200 p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {whyChooseUs.map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-gray-200 p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach: Step-by-Step Workflow</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {workflowSteps.map(([step, title]) => (
            <div key={step} className="rounded-xl bg-white/40 backdrop-blur-md border border-white/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-1">{step}</p>
              <p className="text-sm font-semibold text-gray-900">{title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default CompanyProfile
