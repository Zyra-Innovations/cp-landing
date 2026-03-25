import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Monitor,
  Workflow,
  ShieldCheck,
  Cloud,
  Plug,
  Palette,
  BarChart3,
  Bot,
  Lock,
  GraduationCap,
  ChevronDown,
} from 'lucide-react'
import Card from '../components/Card'
import SectionWrapper from '../components/SectionWrapper'

/**
 * Services Section
 * Key services offered with icons and descriptions
 * Card-based layout
 */
const Services = () => {
  const [expandedId, setExpandedId] = useState(null)

  const services = [
    {
      id: 1,
      icon: Code2,
      title: 'Web Application Development',
      overview: 'We build secure, scalable web platforms from customer portals to SaaS products.',
      stack: 'React, Next.js, Node.js, Django, ASP.NET Core, PostgreSQL, Redis, Docker, Kubernetes',
      provides: ['Custom web apps from concept to deployment', 'SPA and PWA development', 'E-commerce and enterprise dashboard platforms'],
      features: ['Role-based access with SSO, OAuth, and MFA', 'CI/CD pipelines with safe release workflows', 'Performance and SEO optimization with SSR'],
      benefits: ['Faster go-to-market for digital products', 'Higher revenue through 24/7 self-service channels', 'Lower infrastructure costs with cloud-native architecture'],
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Mobile Application Development',
      overview: 'We deliver native and cross-platform mobile apps for iOS and Android with offline-first capability.',
      stack: 'Flutter, React Native, Swift, Kotlin, Firebase, SQLite, GraphQL, REST APIs',
      provides: ['Native iOS and Android app development', 'Cross-platform apps with Flutter and React Native', 'App Store and Google Play deployment support'],
      features: ['Push notifications with deep linking', 'Offline sync and secure local storage', 'Real-time interactions and analytics integration'],
      benefits: ['Stronger customer engagement and retention', 'Improved field productivity with mobile workflows', 'New revenue via subscriptions and in-app purchases'],
    },
    {
      id: 3,
      icon: Monitor,
      title: 'Desktop Application Development',
      overview: 'We create desktop software for Windows, macOS, and Linux where performance and offline reliability matter.',
      stack: 'Electron, Tauri, C# WPF, Swift, JavaFX, Python PyQt, SQLite, PostgreSQL',
      provides: ['Cross-platform and native desktop apps', 'Legacy system modernization', 'Hardware-integrated desktop solutions'],
      features: ['Offline-first architecture with cloud sync options', 'Local high-performance data processing', 'Auto-update and installer packaging'],
      benefits: ['Reliable operations with limited internet', 'Direct hardware integrations', 'Compliance with on-prem data locality requirements'],
    },
    {
      id: 4,
      icon: Workflow,
      title: 'Business Automation and Custom Software',
      overview: 'We replace repetitive manual processes with intelligent automation and custom internal systems.',
      stack: 'Python, Node.js, Django, .NET, UiPath, Power Automate, RabbitMQ, Kafka, PostgreSQL',
      provides: ['Custom ERP and CRM systems', 'Workflow and approval automation', 'RPA for repetitive high-volume tasks'],
      features: ['Visual workflow designers and configurable rules', 'Audit trails and activity logging', 'Real-time process health dashboards'],
      benefits: ['Reduced process time and manual error rates', 'Improved compliance and accountability', 'Scalable operations without proportional headcount growth'],
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: 'Maintenance and Support',
      overview: 'We keep software healthy post-launch through SLA-backed support, monitoring, and continuous improvements.',
      stack: 'Datadog, New Relic, Prometheus, Grafana, PagerDuty, Sentry, ELK, Docker, Kubernetes',
      provides: ['Incident response and bug fixing by severity', 'Performance tuning and security patching', 'Backup, disaster recovery testing, and restoration'],
      features: ['Proactive health monitoring and alert escalation', 'Root cause analysis and monthly health reports', 'Controlled change management process'],
      benefits: ['Reduced downtime and MTTR', 'Better continuity and reliability', 'More internal focus on innovation instead of firefighting'],
    },
    {
      id: 6,
      icon: Cloud,
      title: 'Cloud and DevOps Infrastructure',
      overview: 'We architect scalable cloud platforms and automate deployments for speed, resilience, and governance.',
      stack: 'AWS, Azure, GCP, Terraform, Docker, Kubernetes, Helm, GitHub Actions, ArgoCD, Vault',
      provides: ['Cloud migration and architecture design', 'Infrastructure as Code and CI/CD setup', 'Cost optimization and high-availability design'],
      features: ['Blue-green and canary deployment strategies', 'Auto-scaling and observability stack', 'Secrets management and immutable infrastructure'],
      benefits: ['Faster provisioning and safer releases', 'Lower cloud spend via right-sizing', 'Higher reliability through resilient architecture'],
    },
    {
      id: 7,
      icon: Plug,
      title: 'API Development and Integration',
      overview: 'We design robust APIs and integrate business systems for seamless, secure, real-time data flow.',
      stack: 'Node.js, FastAPI, Spring Boot, GraphQL, gRPC, Kafka, Kong, OpenAPI, OAuth 2.0, JWT',
      provides: ['REST, GraphQL, and event-driven API development', 'Third-party and legacy system integrations', 'API gateway setup, versioning, and governance'],
      features: ['Schema validation and request/response sanitization', 'Rate limiting, throttling, and idempotency handling', 'Interactive documentation and mock environments'],
      benefits: ['Eliminates data silos across systems', 'Accelerates product delivery through reusable services', 'Enables partner ecosystems and new revenue models'],
    },
    {
      id: 8,
      icon: Palette,
      title: 'UI and UX Design and Branding',
      overview: 'We design intuitive, conversion-focused interfaces backed by user research and strong visual identity.',
      stack: 'Figma, Adobe XD, Framer, Storybook, Hotjar, Google Analytics, Tailwind CSS',
      provides: ['User research, IA, and journey mapping', 'Wireframes, prototypes, and design systems', 'Brand identity and accessibility-ready interface design'],
      features: ['Interactive prototypes before development', 'Reusable component systems for consistency', 'Developer-ready handoff assets and specifications'],
      benefits: ['Higher user adoption and conversion rates', 'Lower support burden from better usability', 'Reduced rework by validating UX early'],
    },
    {
      id: 9,
      icon: BarChart3,
      title: 'Business Analysis and Data Analytics',
      overview: 'We convert fragmented business data into actionable intelligence through dashboards and predictive analytics.',
      stack: 'Python, SQL, dbt, Airflow, Spark, Power BI, Tableau, Snowflake, BigQuery, Databricks',
      provides: ['Business requirements and KPI framework definition', 'ETL and data platform development', 'Executive dashboards and predictive models'],
      features: ['Self-service BI with drill-down exploration', 'Cross-source data blending and lineage tracking', 'Real-time monitoring and anomaly alerts'],
      benefits: ['Data-driven decision making at every level', 'Faster reporting turnaround', 'Early detection of risks and opportunities'],
    },
    {
      id: 10,
      icon: Bot,
      title: 'AI Tools and Automation Services',
      overview: 'We build practical AI systems that automate work, improve decisions, and enable 24/7 intelligent support.',
      stack: 'OpenAI, Claude, Gemini, LangChain, LlamaIndex, HuggingFace, FastAPI, Pinecone, Weaviate',
      provides: ['AI assistants and chatbot implementations', 'RAG solutions over internal knowledge', 'Document intelligence and recommendation systems'],
      features: ['Multi-turn conversational workflows', 'Confidence-based human escalation paths', 'Guardrails, monitoring, and model evaluation loops'],
      benefits: ['Lower support costs through query deflection', 'Faster document and knowledge workflows', 'New productivity gains in high-value teams'],
    },
    {
      id: 11,
      icon: Lock,
      title: 'Cybersecurity Services',
      overview: 'We secure applications, infrastructure, and identities through proactive testing and defense-in-depth controls.',
      stack: 'Burp Suite, Nessus, Nmap, Splunk, QRadar, CrowdStrike, Okta, Vault, Azure Defender',
      provides: ['Penetration testing and vulnerability assessments', 'Security architecture review and hardening', 'Compliance readiness for SOC 2, ISO 27001, HIPAA, and GDPR'],
      features: ['OWASP-focused application security testing', 'SIEM-driven monitoring and detection workflows', 'Incident response planning and simulation exercises'],
      benefits: ['Reduced breach likelihood and impact', 'Faster compliance readiness', 'Improved customer trust and business continuity'],
    },
    {
      id: 12,
      icon: GraduationCap,
      title: 'Training and Consulting',
      overview: 'We equip teams and leadership with strategy, architecture guidance, and practical technical capability growth.',
      stack: 'Agile and Scrum, Jira, React, Node.js, Python, Docker, Kubernetes, Terraform, OWASP, Power BI',
      provides: ['Technology strategy and roadmap consulting', 'CTO-as-a-Service and architecture reviews', 'Hands-on training for development and product teams'],
      features: ['Customized curriculum by team maturity', 'Workshop-based learning with real scenarios', 'Actionable recommendations with prioritized next steps'],
      benefits: ['Stronger internal capability and speed', 'Better technology investment decisions', 'Reduced long-term external dependency'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <SectionWrapper
      id="services"
      title="Detailed Services Catalog"
      subtitle="We Build. You Grow. 12 Comprehensive Service Areas and End-to-End Digital Solutions."
      bgColor="bg-gray-50"
    >
      <motion.div
        className="max-w-4xl mx-auto mb-10 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 leading-relaxed">
          We offer a full spectrum of software and IT services tailored for startups, growing companies,
          and enterprises modernizing legacy systems. Each service area below includes scope,
          implementation capability, technical stack, and measurable business value.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
      >
        {services.map((service, idx) => {
          const Icon = service.icon
          const isExpanded = expandedId === service.id

          return (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="p-6 group h-full">
                <motion.div
                  className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl text-white"
                  whileHover={{
                    rotate: 45,
                    scale: 1.15,
                    boxShadow: '0 15px 40px rgba(14, 165, 233, 0.4)',
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.1,
                  }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {service.overview}
                  </motion.span>
                </p>

                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  <span className="font-semibold text-gray-700">Tech Stack:</span> {service.stack}
                </p>

                <motion.a
                  href="#services"
                  className="inline-flex items-center text-primary-600 font-semibold overflow-hidden"
                  whileHover={{ color: '#0284c7' }}
                  onClick={(e) => {
                    e.preventDefault()
                    setExpandedId(isExpanded ? null : service.id)
                  }}
                >
                  {isExpanded ? 'Show less' : 'View detailed scope'}
                  <motion.span
                    className="ml-2 inline-block"
                    animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </motion.a>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden mt-5 border-t border-gray-100 pt-4"
                    >
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">What We Provide</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {service.provides.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Key Features</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {service.features.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Business Benefits</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {service.benefits.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}

export default Services
