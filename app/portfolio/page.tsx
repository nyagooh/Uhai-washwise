'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BackgroundVideo from '@/components/BackgroundVideo'
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
    image: '/ocean-with-some-islands.jpg',
    impact: '50,000+ people benefited',
    description: 'AI-powered monitoring system tracking water quality across 25+ locations around Lake Victoria.',
  },
  {
    title: 'Plastic Waste to Products Program',
    location: 'Nairobi, Kenya',
    category: 'Waste Management',
    image: '/waste management/pollution-concept-water-with-garbage.jpg',
    impact: '500+ tons diverted',
    description: 'Circular economy initiative transforming plastic waste into valuable construction materials.',
  },
  {
    title: 'Community Water Systems',
    location: 'Western Kenya',
    category: 'Water Access',
    image: '/WETLANDS/green-grass-growing-near-lake.jpg',
    impact: '30 communities served',
    description: 'Installing and maintaining sustainable water systems in underserved rural communities.',
  },
  {
    title: 'Wetland Restoration Initiative',
    location: 'Kisumu Bay',
    category: 'Environmental',
    image: '/WETLANDS/beautiful-grey-heron-meadow-wonderful-bird-nature-habitat.jpg',
    impact: '200 hectares restored',
    description: 'Comprehensive wetland restoration program protecting vital ecosystems and biodiversity.',
  },
  {
    title: 'Youth Environmental Champions',
    location: 'East Africa',
    category: 'Education',
    image: '/WETLANDS/ducks-pond.jpg',
    impact: '5,000+ youth trained',
    description: 'Capacity building program empowering youth as environmental stewards in their communities.',
  },
  {
    title: 'Smart Waste Collection System',
    location: 'Mombasa, Kenya',
    category: 'Innovation',
    image: '/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg',
    impact: '40% efficiency increase',
    description: 'IoT-enabled waste collection optimization reducing costs and environmental impact.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <main>
        {/* Hero — Dark with Video */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <BackgroundVideo src="https://res.cloudinary.com/dw0jgbbxh/video/upload/uhai-seq_1_nvvetn.mp4" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,51,0.6) 0%, rgba(11,31,51,0.4) 40%, rgba(11,31,51,0.92) 100%)' }} />
          <div className="container-full relative z-10 pb-16 lg:pb-24 pt-40">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} className="label-light mb-5">Our Portfolio</motion.div>
              <motion.h1 variants={fadeUp} className="h-display text-white max-w-4xl">
                Highlights of Our <span style={{ color: '#0598CE' }}>Impactful Work</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="body-light max-w-xl mt-5">
                Explore the projects and initiatives that are transforming communities across East Africa.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary-500">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
    </>
  )
}
