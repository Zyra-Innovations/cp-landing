import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  Briefcase,
  Target,
  Eye,
  CheckCircle2,
  Layers,
  BarChart3,
  Phone,
  Mail,
  Globe,
  MapPin,
  Linkedin,
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

const serviceOverview = [
  ['Web Application Development', 'Scalable web platforms and portals'],
  ['Mobile App Development', 'iOS and Android native and cross-platform apps'],
  ['Desktop Application Development', 'Windows, Mac, and Linux business software'],
  ['Business Automation and Custom Software', 'Workflow automation and ERP or CRM systems'],
  ['Maintenance and Support', '24/7 monitoring, bug fixes, SLA-backed support'],
  ['Cloud and DevOps', 'Cloud migration, CI/CD, infrastructure as code'],
  ['API Development and Integration', 'REST APIs, microservices, third-party integrations'],
  ['UI/UX Design and Branding', 'User-centered design and digital brand identity'],
  ['Business Analysis and Data Analytics', 'Dashboards, BI reports, and data-driven strategy'],
  ['AI Tools and Automation', 'Intelligent bots, ML models, AI-powered features'],
  ['Cybersecurity Services', 'Penetration testing, compliance, threat management'],
  ['Training and Consulting', 'Technical upskilling and technology advisory'],
]

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

const valueRows = [
  ['Operational Efficiency', 'Automate repetitive processes to reduce errors and cost'],
  ['Faster Market Entry', 'Agile delivery and reusable components accelerate launch'],
  ['Scalable Infrastructure', 'Cloud-native architecture supports growth seamlessly'],
  ['Data-Driven Decisions', 'Dashboards and analytics convert data into action'],
  ['Enhanced Customer Experience', 'User-centered design improves engagement and retention'],
  ['Revenue Growth Enablement', 'Digital channels and integrations expand revenue'],
  ['Reduced Technology Risk', 'Security, compliance, and DR planning protect operations'],
]

const CompanyProfile = () => {
  return (
    <SectionWrapper
      id="company-profile"
      title="Software and IT Services"
      subtitle="We Build. You Grow. Professional software and IT solutions for modern businesses."
      bgColor="bg-white"
    >
      <motion.div
        className="max-w-5xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8 bg-gradient-to-br from-gray-50 to-primary-50">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-gray-500 mb-4">
            <span>Company Profile</span>
            <span>Confidential</span>
            <span>For Client Use Only</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">[Your Company Name]</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a forward-thinking software and IT services company focused on engineering digital
            solutions that transform how businesses operate, scale, and compete.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-4 border border-gray-100">
              <p className="text-3xl font-bold text-primary-600">12+</p>
              <p className="text-sm text-gray-600">Service Categories</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-gray-100">
              <p className="text-3xl font-bold text-primary-600">End-to-End</p>
              <p className="text-sm text-gray-600">Digital Solutions</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-gray-100">
              <p className="text-3xl font-bold text-primary-600">100%</p>
              <p className="text-sm text-gray-600">Client-Focused</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Building2 className="w-5 h-5 text-primary-600" />
            <h3 className="text-xl font-bold">About Us</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">
            We partner with startups, growth-stage companies, and enterprises to design, develop,
            deploy, and support high-impact software products and IT platforms.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our multidisciplinary team includes software engineers, UI/UX designers, data scientists,
            cloud architects, cybersecurity specialists, and business analysts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Briefcase className="w-5 h-5 text-primary-600" />
            <h3 className="text-xl font-bold">What We Do</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Custom web and mobile application development</li>
            <li>• Enterprise software and business automation</li>
            <li>• Cloud infrastructure and DevOps engineering</li>
            <li>• AI-powered tools and intelligent automation</li>
            <li>• Cybersecurity, compliance, and data analytics</li>
            <li>• UI/UX design, branding, training, and consulting</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="rounded-2xl border border-gray-200 p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {expertise.map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <motion.div
          className="rounded-2xl border border-primary-100 bg-primary-50 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Target className="w-5 h-5 text-primary-600" />
            <h3 className="text-xl font-bold">Our Mission</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            "To empower businesses of all sizes with innovative, reliable, and scalable technology
            solutions that accelerate growth, streamline operations, and create lasting competitive advantage."
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-secondary-100 bg-secondary-50 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-3 text-gray-900">
            <Eye className="w-5 h-5 text-secondary-600" />
            <h3 className="text-xl font-bold">Our Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            "To be the most trusted IT partner for growing businesses globally, known for delivering
            technology solutions that are not just functional, but transformational."
          </p>
        </motion.div>
      </div>

      <motion.div
        className="rounded-2xl border border-gray-200 overflow-hidden mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-5 border-b border-gray-200 flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary-600" />
          <h3 className="text-xl font-bold text-gray-900">Our Services Overview</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Service</th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Primary Focus</th>
              </tr>
            </thead>
            <tbody>
              {serviceOverview.map(([service, focus]) => (
                <tr key={service} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-800">{service}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-gray-200 p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {whyChooseUs.map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-600">
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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach: Step-by-Step Workflow</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {workflowSteps.map(([step, title]) => (
            <div key={step} className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-1">{step}</p>
              <p className="text-sm font-semibold text-gray-800">{title}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-gray-200 overflow-hidden mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-5 border-b border-gray-200 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary-600" />
          <h3 className="text-xl font-bold text-gray-900">Value Proposition: How We Help You Grow</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Business Outcome</th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">How We Deliver It</th>
              </tr>
            </thead>
            <tbody>
              {valueRows.map(([outcome, delivery]) => (
                <tr key={outcome} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-800">{outcome}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-gray-200 p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="space-y-2">
            <p><span className="font-semibold">Company Name:</span> [Your Company Name]</p>
            <p className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary-600" /> [www.yourcompany.com]</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-600" /> [contact@yourcompany.com]</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-600" /> [+1 (000) 000-0000]</p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-600" /> [Street Address, City, State, ZIP, Country]</p>
            <p className="flex items-center gap-2"><Linkedin className="w-4 h-4 text-primary-600" /> [linkedin.com/company/yourcompany]</p>
            <p><span className="font-semibold">Working Hours:</span> Monday to Friday, 9:00 AM to 6:00 PM</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 leading-relaxed mb-3">
          Technology is the greatest equalizer in modern business. Whether you are launching your
          first digital product, modernizing a legacy system, or scaling a high-growth platform,
          we are ready to build it the right way.
        </p>
        <p className="text-lg font-bold text-gray-900">We Build. You Grow.</p>
      </motion.div>
    </SectionWrapper>
  )
}

export default CompanyProfile
