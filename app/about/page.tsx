'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiTarget, FiEye, FiHeart } from 'react-icons/fi'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero — Dark with Video */}
        <section className="relative min-h-[75vh] flex items-end overflow-hidden">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
          >
            <source src="/UHAI SEQ.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,51,0.6) 0%, rgba(11,31,51,0.4) 40%, rgba(11,31,51,0.92) 100%)' }} />
          <div className="container-full relative z-10 pb-16 lg:pb-24 pt-40">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fade} className="label-light mb-5">About Us</motion.div>
              <motion.h1 variants={fade} className="h-display text-white max-w-4xl">
                Protecting Water as a <span style={{ color: '#0598CE' }}>Living System</span>
              </motion.h1>
              <motion.p variants={fade} className="body-light max-w-xl mt-5">
                A women-led social enterprise at the intersection of water, sanitation, climate action, and technology.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story — White */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="container-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
                <div className="relative h-[400px] lg:h-[560px] rounded-2xl overflow-hidden">
                  <Image src="/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.28(1).jpeg" alt="Our Team - Women Leaders" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
                <div className="label mb-5">Our Story</div>
                <h2 className="h-xl text-[#0F172A] mb-6">
                  Closing the Loop Between <span style={{ color: '#0598CE' }}>Waste, Water & Ecosystems</span>
                </h2>
                <p className="body-lg mb-5 max-w-xl">
                  Uhai WashWise is a women-led social enterprise designing and implementing solutions that close the loop between waste, water, and ecosystems — with a strong focus on circular economy principles, data-driven decision-making, and community-grounded action.
                </p>
                <p className="body-lg mb-10 max-w-xl">
                  Our work combines research, innovation, and governance support to address water quality degradation, poor sanitation, waste mismanagement, and climate risks across urban and peri-urban African contexts.
                </p>
                <ul className="space-y-3 mb-10">
                  {['AI-powered water quality monitoring and prediction', 'Community-based research and evidence generation', 'Circular economy waste-to-resource solutions', 'Data-driven governance support'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E8F6FC' }}>
                        <FiCheck size={11} style={{ color: '#0598CE' }} />
                      </div>
                      <span className="text-sm text-[#475569]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="btn-primary">Our Services <FiArrowRight size={15} /></Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission/Vision/Purpose — Surface */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
              <div className="label mb-5">What Drives Us</div>
              <h2 className="h-xl text-[#0F172A]">Purpose, Mission & Vision</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FiHeart, title: 'Purpose', content: 'To protect water as a living system by transforming sanitation, waste, and data into practical solutions that safeguard water quality, restore biodiversity, and build climate-resilient communities.', color: '#0598CE', bg: '#E8F6FC' },
                { icon: FiTarget, title: 'Mission', content: 'To advance water security and climate resilience by designing and scaling circular, technology-enabled solutions — turning science, data, and community knowledge into measurable impact.', color: '#0B1F33', bg: '#E8EDF2' },
                { icon: FiEye, title: 'Vision', content: "A future where Africa's water bodies are clean, biodiverse, and resilient — supported by smart sanitation, responsible resource use, and data-driven decision-making.", color: '#2F6F4E', bg: '#F0FDF4' },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-400" style={{ border: '1px solid #E8EDF2' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: item.bg }}>
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                  <p className="body-md">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            HOW IT WORKS — Dark, step-by-step process (matching homepage)
        ================================================================ */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#0B1F33' }}>
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
              <div className="label-light justify-center mb-5">The Process</div>
              <h2 className="h-xl text-white mb-4">
                How Our <span style={{ color: '#0598CE' }}>System</span> Works
              </h2>
              <p className="body-light max-w-xl mx-auto">
                From raw environmental data to actionable intelligence — a seamless pipeline that transforms information into impact.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(5,152,206,0.2), rgba(5,152,206,0.5), rgba(5,152,206,0.2), transparent)' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">
                {[
                  { step: '01', title: 'Collect Data', desc: 'Sensors and field teams gather water quality parameters, environmental conditions, and waste metrics from target sites.' },
                  { step: '02', title: 'Input to System', desc: 'Raw data is ingested into our cloud platform, cleaned, and structured for analysis across multiple variables.' },
                  { step: '03', title: 'Analysis', desc: 'Machine learning models process the data, identifying patterns, anomalies, and predictive contamination signals.' },
                  { step: '04', title: 'Visualize Insights', desc: 'Results are displayed on intuitive dashboards with maps, charts, and trend analysis for decision-makers.' },
                  { step: '05', title: 'Alerts & Action', desc: 'The system generates real-time alerts, quality reports, and actionable recommendations for rapid response.' },
                ].map((item, i) => (
                  <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="relative text-center group">
                    <div className="relative z-10 w-[110px] h-[110px] mx-auto mb-6 rounded-full flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: i === 4 ? 'rgba(47,111,78,0.15)' : 'rgba(5,152,206,0.15)', border: i === 4 ? '2px solid rgba(47,111,78,0.4)' : '2px solid rgba(5,152,206,0.4)' }}>
                      <span className="text-[13px] uppercase tracking-widest font-bold" style={{ color: i === 4 ? '#2F6F4E' : '#0598CE' }}>
                        Step {item.step}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-white/70 max-w-[200px] mx-auto">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team — White */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <div className="label mb-5">Our Team</div>
              <h2 className="h-xl text-[#0F172A]">People Behind the Mission</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Pauline Wambui Maina', role: 'Director | Community Development & Environmental Management', image: '/Our team/IMG_2684.JPG.jpeg' },
                { name: 'William Nyambeka Magwa', role: 'Hydrology & Water Resources Management Expert', image: null },
                { name: 'Anne Nyaguthii', role: 'AI, ICT & Communications Lead', image: null },
              ].map((m, i) => (
                <motion.div key={m.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group">
                  {m.image ? (
                    <div className="relative h-[400px] rounded-2xl overflow-hidden mb-5">
                      <Image src={m.image} alt={m.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  ) : (
                    <div className="relative h-[400px] rounded-2xl overflow-hidden mb-5 bg-gray-200" />
                  )}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1">{m.name}</h3>
                  <p className="text-sm text-[#94A3B8]">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — Dark */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#0B1F33' }}>
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
              <div className="label-light mb-5">Get in Touch</div>
              <h2 className="h-xl text-white mb-6">Ready to <span style={{ color: '#0598CE' }}>Partner</span> With Us?</h2>
              <p className="body-light mb-10 max-w-lg">Have questions or ready to collaborate? We would love to hear from you.</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-primary">Send a Message <FiArrowRight size={15} /></Link>
                <a href="mailto:uhaiwashwise@outlook.com" className="btn-outline">uhaiwashwise@outlook.com</a>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-white/60">Follow us:</span>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/uhai-washwise" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                  <a href="#" 
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 002.856-9.958 10 10 0 01-2.856.9 5 5 0 002.19-2.72v-.26a10 10 0 00-8.5 4.23 5 5 0 00-8.6 5.2A14 14 0 011.07 4.57a5 5 0 001.55 6.68 5 5 0 01-2.27-.616v.06a5 5 0 004.01 4.9 5 5 0 01-2.25.09 5 5 0 004.66 3.48A10 10 0 010 19.54a14 14 0 007.557 2.209c7.332 0 11.34-6.469 11.34-12.076 0-.184-.003-.367-.01-.55A8.1 8.1 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
