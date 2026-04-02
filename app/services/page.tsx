'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiArrowUpRight, FiBarChart2, FiDroplet, FiRefreshCw, FiCheck, FiMail, FiPhone, FiMapPin, FiActivity } from 'react-icons/fi'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const capabilities = [
  {
    icon: FiBarChart2,
    title: 'AI Data Visualization',
    subtitle: 'Insights at a Glance',
    media: { type: 'video', src: '/ai.MP4' },
    desc: 'We build interactive dashboards that transform complex environmental datasets into clear, actionable visual intelligence. Our platform enables policymakers, researchers, and community leaders to understand water quality patterns at a glance.',
    features: ['Real-time data dashboards', 'Geospatial mapping & visualization', 'Predictive trend analytics', 'Automated reporting & exports', 'Multi-stakeholder access levels'],
    accent: '#0598CE',
  },
  {
    icon: FiDroplet,
    title: 'Water Quality Intelligence',
    subtitle: 'Early Warning Systems',
    media: { type: 'image', src: '/AI wATER PREDICTING TOOL/Dashboard2.png' },
    desc: 'Our AI-powered monitoring tracks contamination levels, predicts water quality changes, and delivers early warnings to protect communities and ecosystems. From source water to distribution, we provide end-to-end intelligence.',
    features: ['Water quality scoring & grading', 'Contamination detection & alerts', 'Biodiversity impact tracking', 'Source water protection plans', 'Regulatory compliance reporting'],
    accent: '#0598CE',
  },
  {
    icon: FiRefreshCw,
    title: 'Waste Management Solutions',
    subtitle: 'Circular Economy',
    media: { type: 'video', src: '/UHAI SEQ.mp4' },
    desc: 'We design and implement circular economy programs that transform waste into valuable resources. Our community-grounded systems create green livelihoods while diverting pollutants from water bodies and critical ecosystems.',
    features: ['Integrated solid waste management', 'Recycling & material recovery', 'Community collection cooperatives', 'Organic waste & composting', 'Impact measurement & reporting'],
    accent: '#2F6F4E',
  },
]



export default function ServicesPage() {
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
            <source src="/UHAI SEQ.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,51,0.6) 0%, rgba(11,31,51,0.4) 40%, rgba(11,31,51,0.92) 100%)' }} />
          <div className="container-full relative z-10 pb-16 lg:pb-24 pt-40">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fade} className="label-light mb-5">What We Do</motion.div>
              <motion.h1 variants={fade} className="h-display text-white max-w-4xl">
                Intelligence, Impact & <span style={{ color: '#0598CE' }}>Innovation</span>
              </motion.h1>
              <motion.p variants={fade} className="body-light max-w-xl mt-5">
                Technology-driven solutions for water security, environmental monitoring, and sustainable waste management across East Africa.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities — alternating */}
        {capabilities.map((s, i) => (
          <section key={s.title} className="py-20 lg:py-28" style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
            <div className="container-full">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className={`lg:col-span-6 relative h-[500px] lg:h-[650px] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {s.media.type === 'video' ? (
                    <video
                      autoPlay muted loop playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      poster="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
                    >
                      <source src={s.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={s.media.src} alt={s.title} fill className="object-cover" />
                  )}
                </motion.div>
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 25 : -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <s.icon size={18} style={{ color: s.accent }} />
                    <span className="text-[11px] uppercase tracking-[0.15em] font-bold" style={{ color: s.accent }}>{s.subtitle}</span>
                  </div>
                  <h3 className="h-md text-[#0F172A] mb-4">{s.title}</h3>
                  <p className="body-lg mb-8 max-w-lg">{s.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <FiCheck className="mt-0.5 flex-shrink-0" size={14} style={{ color: s.accent }} />
                        <span className="text-sm text-[#475569]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3" style={{ color: s.accent }}>
                    Inquire About This <FiArrowUpRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* ================================================================
            CONTACT — Get in Touch (Light background)
        ================================================================ */}
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
                        <FiActivity size={20} style={{ color: '#0598CE' }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] mb-1">Active Across East Africa</h4>
                        <p className="text-xs text-[#94A3B8]">Working with 50+ communities across Kenya, deploying monitoring tools and building local capacity for water security.</p>
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
