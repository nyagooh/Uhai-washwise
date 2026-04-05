'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiTarget, FiHeart, FiMapPin, FiUsers, FiClock } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function WasteManagementProject() {
  return (
    <>
      <main>
        {/* Hero — Dark with Video */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
          >
            <source src="/uhai-seq.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,51,0.6) 0%, rgba(11,31,51,0.4) 40%, rgba(11,31,51,0.92) 100%)' }} />
          <div className="container-full relative z-10 pb-16 lg:pb-24 pt-40">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} className="label-light mb-5">Community Project</motion.div>
              <motion.h1 variants={fadeUp} className="h-display text-white max-w-4xl">
                Waste <span style={{ color: '#2F6F4E' }}>Management</span> Solutions
              </motion.h1>
              <motion.p variants={fadeUp} className="body-light max-w-xl mt-5">
                Transforming waste into valuable resources through circular economy solutions and community-grounded action.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: FiMapPin, label: 'Location', value: 'Lake Victoria Basin' },
                { icon: FiUsers, label: 'Communities Impacted', value: '30+' },
                { icon: FiClock, label: 'Timeline', value: '2022 - Present' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl text-center"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(5, 152, 206, 0.08)' }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E6F5F9' }}>
                    <item.icon size={24} style={{ color: '#0598CE' }} />
                  </div>
                  <div className="text-sm font-medium mb-1" style={{ color: '#64748B' }}>{item.label}</div>
                  <div className="text-xl font-bold" style={{ color: '#0F172A' }}>{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Main Description */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-lg mb-6" style={{ color: '#0598CE' }}>
                  About This Project
                </h2>
                <p className="text-body mb-6">
                  We design and implement circular economy solutions that transform waste into valuable resources. Our waste management initiatives close the loop between waste, water, and ecosystems, with a strong focus on community-grounded action and sustainable practices.
                </p>
                <p className="text-body mb-6">
                  Over 500 tons of waste have been diverted from water bodies and landfills, while creating sustainable livelihoods for 150+ community members through collection, sorting, and recycling programs.
                </p>
                <p className="text-body">
                  Our approach combines environmental education, practical waste management infrastructure, and economic opportunities to create lasting change in communities across the Lake Victoria region.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/waste management/IMG_0596.png"
                  alt="Waste Management"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">Key Features & Impact</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#64748B' }}>
                Comprehensive approach to sustainable waste management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Waste-to-Resource Transformation',
                  description: 'Converting waste into valuable materials through innovative recycling and upcycling processes.',
                  image: '/waste management/pollution-concept-water-with-garbage.jpg'
                },
                {
                  title: 'Community Collection Systems',
                  description: 'Building local capacity through organized collection networks that create jobs and clean environments.',
                  image: '/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg'
                },
                {
                  title: 'Circular Economy Implementation',
                  description: 'Closing the loop between waste, water, and ecosystems for sustainable resource management.',
                  image: '/waste management/IMG_0582.png'
                },
                {
                  title: 'Environmental Education',
                  description: 'Empowering communities with knowledge and tools for long-term sustainable practices.',
                  image: '/waste management/IMG_0596.png'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-3xl overflow-hidden"
                  style={{ backgroundColor: '#F9FAFB', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#0598CE' }}>{feature.title}</h3>
                    <p className="text-body">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20" style={{ backgroundColor: '#E6F5F9' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">Measurable Impact</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#64748B' }}>
                Results that demonstrate our commitment to sustainable change
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { value: '500+', label: 'Tons of Waste Diverted' },
                { value: '150+', label: 'Jobs Created' },
                { value: '30+', label: 'Communities Impacted' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-10 rounded-3xl"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(5, 152, 206, 0.1)' }}
                >
                  <div className="text-5xl font-bold mb-3" style={{ color: '#0598CE' }}>
                    {stat.value}
                  </div>
                  <div className="text-lg" style={{ color: '#64748B' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                Interested in Learning More?
              </h2>
              <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#64748B' }}>
                Get in touch to discover how our waste management solutions can benefit your community.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                  <FiArrowRight />
                </Link>
                <Link href="/impacts" className="btn-white">
                  View All Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
