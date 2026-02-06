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
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
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
                <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/AI wATER PREDICTING TOOL/Dashboard2.png"
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
        <section className="py-32" style={{ backgroundColor: '#EEF6FB' }}>
          <div className="container-main">
            <div className="text-center mb-16">
              <div className="section-label justify-center mb-4">What Drives Us</div>
              <h2 className="heading-lg mb-4">Our Purpose, Mission & Vision</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#64748B' }}>
                A clear direction that guides our work and partnerships.
              </p>
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
                  className="p-10 text-left transition-all duration-300 rounded-2xl"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(5, 152, 206, 0.12)', borderTop: '4px solid #0598CE' }}
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#E6F5F9' }}>
                    <item.icon className="text-2xl" style={{ color: '#0598CE' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#64748B', fontSize: '16px' }}>{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="text-center mb-16">
              <div className="section-label justify-center mb-4">Our Team</div>
              <h2 className="heading-lg mb-4">People Behind the Mission</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#64748B' }}>
                A multidisciplinary team blending science, innovation, and community practice.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Pauline Wambui Maina',
                  role: 'Director | Community Development & Environmental Management',
                  image: '/WhatsApp Image 2026-02-06 at 14.05.50.jpeg'
                },
                {
                  name: 'William Nyambeka Magwa',
                  role: 'Hydrology & Water Resources Management Expert',
                  image: '/WhatsApp Image 2026-02-06 at 14.05.50(1).jpeg'
                },
                {
                  name: 'Anne Nyaguthii',
                  role: 'AI, ICT & Communications Lead',
                  image: '/WhatsApp Image 2026-02-06 at 14.05.51.jpeg'
                },
              ].map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-xl bg-white"
                >
                  <div className="relative h-72">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="font-bold text-lg mb-2" style={{ color: '#0F172A' }}>{member.name}</div>
                    <div className="text-sm" style={{ color: '#64748B' }}>{member.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="py-32" style={{ backgroundColor: '#F1F7FB' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="section-label justify-center mb-6">Contact Us</div>
              <h2 className="heading-lg mb-6" style={{ lineHeight: '1.2' }}>
                Get in <span style={{ color: '#0598CE' }}>Touch</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Have questions or ready to partner with us? We’d love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/ocean-with-some-islands.jpg"
                  alt="Contact"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-sm uppercase tracking-wider mb-2">Let’s Talk</div>
                  <div className="text-2xl font-bold">Partner with Uhai WashWise</div>
                </div>
              </div>

              <div className="grid gap-6">
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
                    className="p-8 rounded-2xl"
                    style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(5, 152, 206, 0.12)' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                        <item.icon size={20} style={{ color: '#0598CE' }} />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1" style={{ color: '#0F172A' }}>{item.title}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm hover:underline" style={{ color: '#0598CE' }}>
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-sm whitespace-pre-line" style={{ color: '#64748B' }}>
                            {item.content}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div>
                  <Link href="/contact" className="btn-primary">
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
