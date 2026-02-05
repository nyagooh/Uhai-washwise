'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiDatabase, FiDroplet, FiRefreshCw, FiSearch, FiShield } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const services = [
  {
    id: 'knowledge',
    icon: FiDatabase,
    title: 'Knowledge Management',
    subtitle: 'Data-Driven Insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    description: 'We centralize and disseminate critical environmental data to inform decision-making and policy development.',
    features: [
      'Environmental data collection and analysis',
      'Knowledge sharing platforms',
      'Policy research and advocacy',
      'Capacity building and training',
    ]
  },
  {
    id: 'environmental',
    icon: FiShield,
    title: 'Environmental Management',
    subtitle: 'Ecosystem Protection',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800',
    description: 'Comprehensive environmental monitoring and conservation programs to protect vital ecosystems.',
    features: [
      'Biodiversity conservation',
      'Habitat restoration',
      'Environmental impact assessments',
      'Climate adaptation strategies',
    ]
  },
  {
    id: 'water',
    icon: FiDroplet,
    title: 'Water Resources Management',
    subtitle: 'Clean Water Access',
    image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=800',
    description: 'Integrated water resource management ensuring sustainable access to clean water for communities.',
    features: [
      'Water quality monitoring',
      'Community water systems',
      'Watershed management',
      'AI-powered early warning systems',
    ]
  },
  {
    id: 'waste',
    icon: FiRefreshCw,
    title: 'Waste Management',
    subtitle: 'Circular Economy',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800',
    description: 'Transforming waste into resources through innovative circular economy solutions.',
    features: [
      'Waste collection and sorting',
      'Recycling programs',
      'Organic waste composting',
      'Plastic waste upcycling',
    ]
  },
  {
    id: 'research',
    icon: FiSearch,
    title: 'Research & Innovation',
    subtitle: 'Evidence-Based Solutions',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800',
    description: 'Cutting-edge research and innovation driving sustainable environmental solutions.',
    features: [
      'Applied research programs',
      'Technology development',
      'Pilot projects and scaling',
      'Partnership with academic institutions',
    ]
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-secondary-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1920"
              alt="Services"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label text-primary-400 before:bg-primary-400 justify-center">
                Our Services
              </div>
              <h1 className="heading-xl text-white mb-6">
                Bringing Hope to{' '}
                <span className="text-primary-500">Every Community</span>
              </h1>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto">
                Comprehensive solutions for water security, environmental protection, and sustainable development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-white">
          <div className="container-main">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center mb-24 last:mb-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-primary-500 text-2xl" />
                  </div>
                  <div className="section-label">{service.subtitle}</div>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-body mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-secondary-600">{feature}</span>
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

        {/* CTA */}
        <section className="py-24 bg-secondary-900">
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label text-primary-400 before:bg-primary-400 justify-center">
                Get Started
              </div>
              <h2 className="heading-lg text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto mb-10">
                Let's work together to create sustainable impact in your community.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
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
