'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiTarget, FiEye, FiHeart, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

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
          >
            <source src="https://res.cloudinary.com/dw0jgbbxh/video/upload/uhai-seq_1_nvvetn.mp4" type="video/mp4" />
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

        {/* CTA — Get in Touch (light background, matching homepage) */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="container-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
                <div className="label mb-5">Get in Touch</div>
                <h2 className="h-xl text-[#0F172A] mb-6">
                  Let&apos;s Build a Resilient Future <span style={{ color: '#0598CE' }}>Together</span>
                </h2>
                <p className="body-lg mb-10 max-w-lg">
                  Whether you are an investor, government partner, researcher, or community leader — we are ready to collaborate on meaningful impact.
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  <a href="mailto:uhaiwashwise@outlook.com" className="btn-primary">
                    Partner With Us <FiMail size={15} />
                  </a>
                  <Link href="/contact" className="btn-outline-dark">
                    Send a Message <FiArrowRight size={15} />
                  </Link>
                </div>

                <div className="pt-8" style={{ borderTop: '1px solid #E8EDF2' }}>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#0F172A] mb-4">Quick Contact</p>
                  <div className="space-y-3">
                    {[
                      { icon: FiMail, text: 'uhaiwashwise@outlook.com', href: 'mailto:uhaiwashwise@outlook.com' },
                      { icon: FiPhone, text: '0710433161 / 0724318117' },
                      { icon: FiMapPin, text: 'Posta Flats, Ondiek Road, Kisumu, Kenya' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E8F6FC' }}>
                          <item.icon size={14} style={{ color: '#0598CE' }} />
                        </div>
                        {item.href ? (
                          <a href={item.href} className="text-sm hover:underline" style={{ color: '#0598CE' }}>{item.text}</a>
                        ) : (
                          <span className="text-sm text-[#475569]">{item.text}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image src="/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg" alt="Field work" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,31,51,0.4) 0%, transparent 100%)' }} />
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255,255,255,0.95)', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E8F6FC' }}>
                        <FiMapPin size={20} style={{ color: '#0598CE' }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] mb-1">Based in Kenya</h4>
                        <p className="text-xs text-[#94A3B8]">Operating across East Africa, partnering with 50+ communities on water security and environmental resilience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
