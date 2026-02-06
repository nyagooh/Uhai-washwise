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
    image: '/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg',
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
    image: '/WETLANDS/beautiful-grey-heron-meadow-wonderful-bird-nature-habitat.jpg',
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
    image: '/ocean-with-some-islands.jpg',
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
    image: '/waste management/pollution-concept-water-with-garbage.jpg',
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
    image: '/AI wATER PREDICTING TOOL/Dashboard2.png',
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
        <section className="relative py-20 md:py-32" style={{ backgroundColor: '#0598CE' }}>
          <div className="absolute inset-0">
            <Image
              src="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="container-main relative z-10 text-center px-4">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label justify-center mb-4 md:mb-6 text-xs md:text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <span className="w-2 h-2 rounded-full bg-white inline-block mr-2"></span>
                Our Services
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
                Comprehensive Solutions for{' '}
                <span style={{ color: '#FFFFFF' }}>Water Security</span>
              </h1>
              <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Locally grounded, scalable, and investable solutions supporting sustainable water security and climate resilience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 md:py-32" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
                >
                  <div className="relative h-56 md:h-72">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6 md:p-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-4 md:mb-5 rounded-xl" style={{ backgroundColor: '#E6F5F9' }}>
                      <service.icon className="text-xl md:text-2xl" style={{ color: '#0598CE' }} />
                    </div>
                    <div className="section-label mb-3 md:mb-4 text-sm">{service.subtitle}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: '#0F172A', lineHeight: '1.3' }}>{service.title}</h3>
                    <p className="text-base md:text-lg leading-relaxed mb-5 md:mb-6" style={{ color: '#64748B' }}>{service.description}</p>
                    <ul className="space-y-3 mb-6 md:mb-8">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#64748B' }}>
                          <FiCheck className="mt-1 flex-shrink-0" size={18} style={{ color: '#0598CE' }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-base md:text-lg font-semibold hover:gap-3 transition-all" style={{ color: '#0598CE' }}>
                      Learn More
                      <FiArrowRight />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: '#F1F7FB' }}>
          <div className="container-main px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="section-label justify-center mb-4 md:mb-6">Contact Us</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                Get in <span style={{ color: '#0598CE' }}>Touch</span>
              </h2>
              <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Have questions or ready to partner with us? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/ocean-with-some-islands.jpg"
                  alt="Contact"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                  <div className="text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2">Let's Talk</div>
                  <div className="text-lg md:text-2xl font-bold">Partner with Uhai WashWise</div>
                </div>
              </div>

              <div className="grid gap-4 md:gap-6">
                {[
                  { icon: FiMapPin, title: 'Address', content: 'Posta Flats, Ondiek Road, Kisumu, Kenya\nP.O. Box 865-40123' },
                  { icon: FiMail, title: 'Email', content: 'info@uhaiwashwise.org', href: 'mailto:info@uhaiwashwise.org' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 md:p-8 rounded-xl md:rounded-2xl"
                    style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(5, 152, 206, 0.12)' }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                        <item.icon size={18} className="md:w-5 md:h-5" style={{ color: '#0598CE' }} />
                      </div>
                      <div>
                        <div className="font-bold text-base md:text-lg mb-1" style={{ color: '#0F172A' }}>{item.title}</div>
                        {item.href ? (
                          <a href={item.href} className="text-xs md:text-sm hover:underline" style={{ color: '#0598CE' }}>
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-xs md:text-sm whitespace-pre-line" style={{ color: '#64748B' }}>
                            {item.content}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div>
                  <Link href="/contact" className="btn-primary w-full md:w-auto text-sm md:text-base">
                    Send Us a Message
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
