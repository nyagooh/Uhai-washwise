'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiMapPin, FiUsers, FiDroplet } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const projects = [
  {
    title: 'Lake Victoria Water Quality Monitoring',
    location: 'Kisumu, Kenya',
    category: 'Water Resources',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800',
    impact: '50,000+ people benefited',
    description: 'AI-powered monitoring system tracking water quality across 25+ locations around Lake Victoria.',
  },
  {
    title: 'Plastic Waste to Products Program',
    location: 'Nairobi, Kenya',
    category: 'Waste Management',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800',
    impact: '500+ tons diverted',
    description: 'Circular economy initiative transforming plastic waste into valuable construction materials.',
  },
  {
    title: 'Community Water Systems',
    location: 'Western Kenya',
    category: 'Water Access',
    image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=800',
    impact: '30 communities served',
    description: 'Installing and maintaining sustainable water systems in underserved rural communities.',
  },
  {
    title: 'Wetland Restoration Initiative',
    location: 'Kisumu Bay',
    category: 'Environmental',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800',
    impact: '200 hectares restored',
    description: 'Comprehensive wetland restoration program protecting vital ecosystems and biodiversity.',
  },
  {
    title: 'Youth Environmental Champions',
    location: 'East Africa',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800',
    impact: '5,000+ youth trained',
    description: 'Capacity building program empowering youth as environmental stewards in their communities.',
  },
  {
    title: 'Smart Waste Collection System',
    location: 'Mombasa, Kenya',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800',
    impact: '40% efficiency increase',
    description: 'IoT-enabled waste collection optimization reducing costs and environmental impact.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-secondary-900">
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
              <div className="section-label text-primary-400 before:bg-primary-400 justify-center">
                Our Portfolio
              </div>
              <h1 className="heading-xl text-white mb-6">
                Highlights of Our{' '}
                <span className="text-primary-500">Impactful Work</span>
              </h1>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto">
                Explore the projects and initiatives that are transforming communities across East Africa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary-500">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '50+', label: 'Communities Served' },
                { value: '25+', label: 'Water Bodies Monitored' },
                { value: '500+', label: 'Tons Waste Diverted' },
                { value: '75K+', label: 'Lives Impacted' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-white">
          <div className="container-main">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-secondary-500 text-sm mb-3">
                      <FiMapPin className="text-primary-500" />
                      {project.location}
                    </div>
                    <h3 className="font-bold text-lg text-secondary-900 mb-3">{project.title}</h3>
                    <p className="text-secondary-500 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-primary-500 font-semibold text-sm">
                      <FiUsers />
                      {project.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Partner With Us
              </div>
              <h2 className="heading-lg text-white mb-6">
                Want to Support Our Work?
              </h2>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto mb-10">
                Join us in creating lasting impact. Your partnership can help us reach more communities and expand our programs.
              </p>
              <Link href="/contact" className="btn-primary">
                Get In Touch
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
