'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BackgroundVideo from '@/components/BackgroundVideo'
import { FiArrowRight, FiCheckCircle, FiBarChart2, FiZap, FiShield, FiMapPin, FiUsers, FiClock } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function AIWaterQualityProject() {
  return (
    <>
      <main>
        {/* Hero — Dark with Video */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <BackgroundVideo src="https://res.cloudinary.com/dw0jgbbxh/video/upload/uhai-seq_1_nvvetn.mp4" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,51,0.6) 0%, rgba(11,31,51,0.4) 40%, rgba(11,31,51,0.92) 100%)' }} />
          <div className="container-full relative z-10 pb-16 lg:pb-24 pt-40">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} className="label-light mb-5">Innovation Project</motion.div>
              <motion.h1 variants={fadeUp} className="h-display text-white max-w-4xl">
                AI <span style={{ color: '#0598CE' }}>Water Quality</span> Monitoring
              </motion.h1>
              <motion.p variants={fadeUp} className="body-light max-w-xl mt-5">
                Using AI-powered technology to monitor and predict water quality in real-time across East African communities.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: FiMapPin, label: 'Location', value: 'Lake Victoria Region' },
                { icon: FiUsers, label: 'Communities Served', value: '50+' },
                { icon: FiClock, label: 'Timeline', value: '2023 - Present' }
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
                  Our flagship innovation uses AI-powered technology to monitor and predict water quality in real-time across East African communities. This tool translates scientific and environmental data into actionable insights, enabling early warning systems, rapid response, ecosystem protection, and long-term biodiversity restoration.
                </p>
                <p className="text-body mb-6">
                  The system analyzes over 1 million data points to provide accurate predictions and early warnings about water contamination, helping communities take proactive measures to protect their water sources and health.
                </p>
                <p className="text-body">
                  By combining cutting-edge AI technology with local knowledge and community engagement, we&apos;re creating a sustainable approach to water quality management that can be scaled across the region.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/AI wATER PREDICTING TOOL/Dashboard2.png"
                  alt="AI Dashboard"
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
                Comprehensive solutions for sustainable water quality management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Real-time Monitoring',
                  description: 'Continuous water quality tracking with instant alerts and notifications for rapid response.',
                  image: '/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg'
                },
                {
                  title: 'Predictive Analytics',
                  description: 'Advanced AI algorithms that forecast contamination risks before they become critical.',
                  image: '/AI wATER PREDICTING TOOL/human-ai-touch-connection-technology-innovation.jpg'
                },
                {
                  title: 'Early Warning System',
                  description: 'Community-focused alerts that enable proactive measures and prevent health crises.',
                  image: '/AI wATER PREDICTING TOOL/Dashboard.png'
                },
                {
                  title: 'Biodiversity Tracking',
                  description: 'Ecosystem health monitoring to support long-term environmental restoration efforts.',
                  image: '/AI wATER PREDICTING TOOL/Dashboard2.png'
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
                { value: '50+', label: 'Communities Served' },
                { value: '1M+', label: 'Data Points Analyzed' },
                { value: '200+', label: 'Early Warnings Issued' }
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
                Get in touch to discover how our AI water quality monitoring solution can benefit your community.
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
