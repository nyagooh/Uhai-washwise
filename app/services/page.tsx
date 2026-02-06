'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiDatabase, FiDroplet, FiRefreshCw, FiSearch, FiShield, FiCheck, FiMapPin, FiMail } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const services = [
  {
    id: 'knowledge',
    icon: FiDatabase,
    title: 'Knowledge Management & Learning Systems',
    subtitle: 'Data-Driven Insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    description: 'We support organizations, governments, and programs to generate, manage, and use knowledge effectively.',
    features: [
      'Knowledge Generation & Documentation: Studies, assessments, action research, policy briefs, technical guidelines',
      'Knowledge Systems & Digital Platforms: KM strategies, digital repositories, GIS-enabled platforms, dashboards',
      'Data Management & Analytics: Collection, quality assurance, standardization, and analysis of climate, hydrological, and WASH data',
      'Monitoring, Evaluation, Learning & Adaptation (MEL): Learning-oriented MEL frameworks and adaptive management systems',
      'Capacity Building & Knowledge Transfer: Trainings, communities of practice, peer learning',
      'Policy, Planning & Governance Support: Translating evidence into policy-relevant insights and sector strategies',
      'Knowledge Communication: Infographics, briefs, multimedia products, learning events',
      'Innovation & Scaling Support: Piloting, innovation labs, scaling frameworks, research partnerships'
    ]
  },
  {
    id: 'environmental',
    icon: FiShield,
    title: 'Environmental Management Services',
    subtitle: 'Ecosystem Protection',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800',
    description: 'Comprehensive environmental monitoring and conservation programs to protect vital ecosystems.',
    features: [
      'Environmental Assessments & Compliance: ESIA, Environmental Audits, Strategic Environmental Assessments, EMPs',
      'Solid & Liquid Waste Management: Integrated planning, recycling, resource recovery, composting, landfill design',
      'Pollution Control & Environmental Monitoring: Water, air, soil, and noise quality monitoring',
      'Natural Resource & Ecosystem Management: Wetlands, water resources, biodiversity conservation, ecosystem restoration',
      'Climate Change Mitigation & Adaptation: Climate risk assessments, adaptation planning, nature-based solutions',
      'Urban Environmental Management: Drainage, flood management, green infrastructure, informal settlement upgrading',
      'Environmental Monitoring & Reporting: Regulatory compliance reporting, performance tracking',
      'Environmental Governance & Capacity Building: Policy development, SOPs, training, institutional strengthening',
      'Stakeholder Engagement: Community consultations, awareness campaigns, environmental communication'
    ]
  },
  {
    id: 'water',
    icon: FiDroplet,
    title: 'Integrated Water Resources Management (IWRM)',
    subtitle: 'Clean Water Access',
    image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=800',
    description: 'Integrated water resource management ensuring sustainable access to clean water for communities.',
    features: [
      'Enabling environment and governance assessments for IWRM',
      'Sustainable source water protection and financing mechanisms',
      'Water resources infrastructure planning and development',
      'Catchment and watershed management',
      'Climate-resilient water resource planning'
    ]
  },
  {
    id: 'waste',
    icon: FiRefreshCw,
    title: 'Waste Management Solutions',
    subtitle: 'Circular Economy',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800',
    description: 'Transforming waste into resources through innovative circular economy solutions.',
    features: [
      'Waste characterization and baseline assessments',
      'Integrated solid waste management planning',
      'Waste collection, transport, and logistics systems',
      'Waste segregation, recycling, and material recovery facilities',
      'Organic waste management and composting solutions',
      'Landfill design, rehabilitation, and management',
      'Liquid waste, wastewater, and fecal sludge management',
      'Hazardous, healthcare, e-waste, and special waste management',
      'Capacity building, governance, and community engagement'
    ]
  },
  {
    id: 'research',
    icon: FiSearch,
    title: 'Water Research, Innovation & Digital Solutions',
    subtitle: 'Evidence-Based Solutions',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800',
    description: 'Cutting-edge research and innovation driving sustainable environmental solutions.',
    features: [
      'Water quality research and monitoring',
      'AI-driven water quality prediction and early warning systems',
      'Rural and urban water management technologies',
      'Digital dashboards and decision-support tools',
      'Water governance research and advisory',
      'Publications and technical reports'
    ]
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-32" style={{ backgroundColor: '#0598CE' }}>
          <div className="absolute inset-0">
            <Image
              src="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
              alt="Hero Background"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label justify-center mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <span className="w-2 h-2 rounded-full bg-white inline-block mr-2"></span>
                Our Services
              </div>
              <h1 className="heading-xl mb-6" style={{ color: '#FFFFFF' }}>
                Comprehensive Solutions for{' '}
                <span style={{ color: '#FFFFFF' }}>Water Security</span>
              </h1>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Locally grounded, scalable, and investable solutions supporting sustainable water security and climate resilience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-20 items-center mb-32 last:mb-0`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[500px] overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ backgroundColor: '#E6F5F9' }}>
                    <service.icon className="text-3xl" style={{ color: '#0598CE' }} />
                  </div>
                  <div className="section-label mb-4">{service.subtitle}</div>
                  <h2 className="heading-md mb-6" style={{ lineHeight: '1.2' }}>{service.title}</h2>
                  <p className="text-body mb-8" style={{ fontSize: '18px', lineHeight: '1.8' }}>{service.description}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#E6F5F9' }}>
                          <FiCheck className="text-sm" style={{ color: '#0598CE' }} />
                        </div>
                        <span style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn-primary">
                    Learn More
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="section-label justify-center mb-6">Contact Us</div>
              <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                Get in <span style={{ color: '#0598CE' }}>Touch</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
                Have questions or ready to partner with us? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                  <FiMapPin className="text-2xl" style={{ color: '#0598CE' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1A1A1A' }}>Address</h3>
                <p className="leading-relaxed" style={{ color: '#6B7280', fontSize: '16px' }}>
                  Posta Flats, Ondiek Road<br />
                  Kisumu, Kenya<br />
                  P.O. Box 865-40123, Kisumu
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                  <FiMail className="text-2xl" style={{ color: '#0598CE' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1A1A1A' }}>Email</h3>
                <a href="mailto:info@uhaiwashwise.org" className="leading-relaxed" style={{ color: '#0598CE', fontSize: '16px' }}>
                  info@uhaiwashwise.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                  <FiArrowRight className="text-2xl" style={{ color: '#0598CE' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1A1A1A' }}>Website</h3>
                <a href="http://www.uhaiwashwise.org" target="_blank" rel="noopener noreferrer" className="leading-relaxed" style={{ color: '#0598CE', fontSize: '16px' }}>
                  www.uhaiwashwise.org
                </a>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">
                Send Us a Message
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
