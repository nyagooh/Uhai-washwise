'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiArrowUpRight, FiBarChart2, FiDroplet, FiRefreshCw, FiCheck } from 'react-icons/fi'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const capabilities = [
  {
    icon: FiBarChart2,
    title: 'AI Data Visualization',
    subtitle: 'Insights at a Glance',
    image: '/AI wATER PREDICTING TOOL/Dashboard.png',
    desc: 'We build interactive dashboards that transform complex environmental datasets into clear, actionable visual intelligence. Our platform enables policymakers, researchers, and community leaders to understand water quality patterns at a glance.',
    features: ['Real-time data dashboards', 'Geospatial mapping & visualization', 'Predictive trend analytics', 'Automated reporting & exports', 'Multi-stakeholder access levels'],
    accent: '#0598CE',
  },
  {
    icon: FiDroplet,
    title: 'Water Quality Intelligence',
    subtitle: 'Early Warning Systems',
    image: '/AI wATER PREDICTING TOOL/Dashboard2.png',
    desc: 'Our AI-powered monitoring tracks contamination levels, predicts water quality changes, and delivers early warnings to protect communities and ecosystems. From source water to distribution, we provide end-to-end intelligence.',
    features: ['Water quality scoring & grading', 'Contamination detection & alerts', 'Biodiversity impact tracking', 'Source water protection plans', 'Regulatory compliance reporting'],
    accent: '#0598CE',
  },
  {
    icon: FiRefreshCw,
    title: 'Waste Management Solutions',
    subtitle: 'Circular Economy',
    image: '/waste management/IMG_0582.png',
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
                  className={`lg:col-span-5 relative h-[300px] lg:h-[420px] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 25 : -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
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

        {/* Let's Discuss Projects — Dark */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: '#0B1F33' }}>
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="label-light mb-5">Next Steps</div>
              <h2 className="h-xl text-white mb-6 max-w-2xl mx-auto">Let&apos;s Discuss <span style={{ color: '#0598CE' }}>Your Project</span></h2>
              <p className="body-light text-white/70 max-w-xl mx-auto mb-12">Whether you need water quality monitoring, waste management solutions, or environmental assessments, our team is ready to collaborate on innovations that make a real impact.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start the Conversation <FiArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
