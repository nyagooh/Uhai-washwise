'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiCheck, FiTarget, FiEye, FiHeart, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function AboutPage() {
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
                About Us
              </div>
              <h1 className="heading-xl mb-6" style={{ color: '#FFFFFF' }}>
                Protecting Water as a{' '}
                <span style={{ color: '#FFFFFF' }}>Living System</span>
              </h1>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                A social enterprise working at the intersection of water, sanitation, climate action, and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[500px] overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                  <Image
                    src="/WETLANDS/green-grass-growing-near-lake.jpg"
                    alt="Our story"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-label mb-6">Our Story</div>
                <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                  Closing the Loop Between <span style={{ color: '#0598CE' }}>Waste, Water & Ecosystems</span>
                </h2>
                <p className="text-body mb-6" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Uhai WashWise is a social enterprise working at the intersection of water, sanitation, climate action, and technology. 
                  We design and implement solutions that close the loop between waste, water, and ecosystems, with a strong focus on 
                  circular economy principles, data-driven decision-making, and community-grounded action.
                </p>
                <p className="text-body mb-8" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Our work combines research, innovation, and governance support to address water quality degradation, poor sanitation, 
                  waste mismanagement, and climate risks, particularly in urban and peri-urban African contexts.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'AI-powered water quality monitoring and prediction',
                    'Community-based research and evidence generation',
                    'Circular economy waste-to-resource solutions',
                    'Data-driven decision-making and governance support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                        <FiCheck className="text-sm" style={{ color: '#0598CE' }} />
                      </div>
                      <span style={{ color: '#6B7280', fontSize: '16px' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/services" className="btn-primary">
                  Our Services
                  <FiArrowRight />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Purpose */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="text-center mb-20">
              <div className="section-label justify-center mb-6">What Drives Us</div>
              <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>Our Purpose, Mission & Vision</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: FiHeart,
                  title: 'Our Purpose',
                  content: 'To protect water as a living system by transforming sanitation, waste, and data into practical solutions that safeguard water quality, restore biodiversity, and build climate-resilient communities.'
                },
                {
                  icon: FiTarget,
                  title: 'Our Mission',
                  content: 'To advance water security and climate resilience by designing and scaling circular, technology-enabled solutions in water quality, environmental sanitation, waste management, and governance, turning science, data, and community knowledge into measurable impact.'
                },
                {
                  icon: FiEye,
                  title: 'Our Vision',
                  content: 'A future where Africa\'s water bodies are clean, biodiverse, and resilient, supported by smart sanitation systems, responsible resource use, and data-driven decision-making that balances people, planet, and prosperity.'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 transition-all duration-300"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                    <item.icon className="text-3xl" style={{ color: '#0598CE' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A' }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#6B7280', fontSize: '16px' }}>{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-label mb-6">Company Information</div>
                <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                  Get in <span style={{ color: '#0598CE' }}>Touch</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FiMapPin className="text-2xl flex-shrink-0 mt-1" style={{ color: '#0598CE' }} />
                    <div>
                      <h4 className="font-bold mb-1 text-lg" style={{ color: '#1A1A1A' }}>Physical Address</h4>
                      <p style={{ color: '#6B7280', fontSize: '16px' }}>Posta Flats, Ondiek Road, Kisumu</p>
                      <p style={{ color: '#6B7280', fontSize: '16px' }}>P.O. Box 865-40123, Kisumu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <FiMail className="text-2xl flex-shrink-0 mt-1" style={{ color: '#0598CE' }} />
                    <div>
                      <h4 className="font-bold mb-1 text-lg" style={{ color: '#1A1A1A' }}>Email</h4>
                      <a href="mailto:info@uhaiwashwise.org" style={{ color: '#0598CE', fontSize: '16px' }}>info@uhaiwashwise.org</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <FiTarget className="text-2xl flex-shrink-0 mt-1" style={{ color: '#0598CE' }} />
                    <div>
                      <h4 className="font-bold mb-1 text-lg" style={{ color: '#1A1A1A' }}>Website</h4>
                      <a href="http://www.uhaiwashwise.org" target="_blank" rel="noopener noreferrer" style={{ color: '#0598CE', fontSize: '16px' }}>www.uhaiwashwise.org</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden"
                style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}
              >
                <Image
                  src="/waste management/IMG_0594.png"
                  alt="Contact"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategic Partner */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-label mb-6">Strategic Associates</div>
                <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                  Partnership with <span style={{ color: '#0598CE' }}>Ustawi</span>
                </h2>
                <p className="text-body mb-6" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Uhai WashWise partners with Ustawi, an organic waste processor specializing in converting organic waste 
                  into fertilizer using Black Soldier Fly (BSF) technology. This strategic partnership enables us to 
                  deliver comprehensive waste-to-resource solutions.
                </p>
                <p className="text-body mb-8" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Together, we're implementing innovative programs that address water security, environmental conservation, 
                  and community resilience at scale.
                </p>
                <Link href="/contact" className="btn-primary">
                  Partner With Us
                  <FiArrowRight />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden"
                style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}
              >
                <Image
                  src="/waste management/IMG_0595.png"
                  alt="Partnership"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
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
