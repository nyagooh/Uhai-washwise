'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiUsers, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const impactProjects = [
  {
    title: 'AI Water Quality Monitoring',
    description: 'Our flagship innovation uses AI-powered technology to monitor and predict water quality in real-time across East African communities. This tool translates scientific and environmental data into actionable insights, enabling early warning systems, rapid response, ecosystem protection, and long-term biodiversity restoration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920',
    stats: [
      { label: 'Communities Served', value: '50+' },
      { label: 'Data Points Analyzed', value: '1M+' },
      { label: 'Early Warnings Issued', value: '200+' }
    ],
    highlights: [
      'Real-time water quality monitoring',
      'Predictive analytics for contamination',
      'Early warning system implementation',
      'Biodiversity restoration tracking',
      'Community health impact assessment'
    ]
  },
  {
    title: 'Waste Management Solutions',
    description: 'We design and implement circular economy solutions that transform waste into valuable resources. Our waste management initiatives close the loop between waste, water, and ecosystems, with a strong focus on community-grounded action and sustainable practices.',
    image: '/waste management/IMG_0582.png',
    stats: [
      { label: 'Waste Diverted', value: '500+ Tons' },
      { label: 'Jobs Created', value: '150+' },
      { label: 'Communities Impacted', value: '30+' }
    ],
    highlights: [
      'Waste-to-resource transformation',
      'Community-based collection systems',
      'Circular economy implementation',
      'Environmental education programs',
      'Sustainable livelihood creation'
    ]
  }
]

export default function ImpactsPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-32" style={{ backgroundColor: '#0598CE' }}>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920"
              alt="Our Impact"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label justify-center mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <span className="w-2 h-2 rounded-full bg-white inline-block mr-2"></span>
                Our Impact
              </div>
              <h1 className="heading-xl mb-6" style={{ color: '#FFFFFF' }}>
                Creating Lasting{' '}
                <span style={{ color: '#FFFFFF' }}>Change</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Through innovation and community partnership, we're transforming lives and protecting our environment for future generations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Projects */}
        {impactProjects.map((project, index) => (
          <section 
            key={project.title}
            className="py-32" 
            style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}
          >
            <div className="container-main">
              <div className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <h2 className="heading-lg mb-6" style={{ color: '#0598CE' }}>
                    {project.title}
                  </h2>
                  <p className="text-body mb-8">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-10 p-6 rounded-2xl" style={{ backgroundColor: index % 2 === 0 ? '#F9FAFB' : '#FFFFFF' }}>
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-bold mb-2" style={{ color: '#0598CE' }}>
                          {stat.value}
                        </div>
                        <div className="text-sm" style={{ color: '#64748B' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FiCheckCircle className="flex-shrink-0 mt-1" size={20} style={{ color: '#0598CE' }} />
                        <span className="text-body-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/portfolio" className="btn-primary">
                    View Project Details
                    <FiArrowRight />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Overall Impact Stats */}
        <section className="py-32" style={{ backgroundColor: '#0598CE' }}>
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="heading-lg mb-6" style={{ color: '#FFFFFF' }}>
                Impact by the Numbers
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Measurable results across our programs
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: FiUsers, value: '75,000+', label: 'People Reached' },
                { icon: FiTrendingUp, value: '85%', label: 'Improvement Rate' },
                { icon: FiCheckCircle, value: '80+', label: 'Projects Completed' },
                { icon: FiArrowRight, value: '30+', label: 'Communities' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <stat.icon size={40} className="mx-auto mb-4" style={{ color: '#FFFFFF' }} />
                  <div className="text-5xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                    {stat.value}
                  </div>
                  <div className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                Be Part of the <span style={{ color: '#0598CE' }}>Solution</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#64748B' }}>
                Join us in creating sustainable change and protecting our environment for future generations.
              </p>
              <Link href="/contact" className="btn-primary">
                Partner With Us
                <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
