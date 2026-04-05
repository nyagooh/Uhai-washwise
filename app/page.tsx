'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BackgroundVideo from '@/components/BackgroundVideo'
import {
  FiArrowRight, FiArrowUpRight, FiX,
  FiDroplet, FiTarget, FiEye, FiHeart,
  FiCpu, FiActivity, FiBarChart2, FiAlertTriangle,
  FiDatabase, FiRefreshCw, FiLayers,
  FiMail, FiPhone, FiMapPin,
} from 'react-icons/fi'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string; desc: string } | null>(null)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted on client before rendering animations
  useEffect(() => {
    setMounted(true)
  }, [])

  const gallery = [
    { src: '/KEWASNET COFFE CONNECT/IMG_2464.JPG.jpeg', title: 'KEWASNET Leadership Forum', desc: 'Key stakeholders convening at the Kenya Water and Sanitation Network forum to align strategies for improved water governance across the region.' },
    { src: '/KEWASNET COFFE CONNECT/IMG_2471.JPG.jpeg', title: 'KEWASNET Coffee Connect', desc: 'A collaborative gathering of water sector professionals sharing insights and building partnerships for sustainable water management in East Africa.' },
    { src: '/waste management/WhatsApp Image 2026-04-02 at 09.48.35.jpeg', title: 'Wetland Assessment', desc: 'Our team conducting on-site water body assessments, identifying pollution entry points and mapping contamination patterns for targeted intervention.' },
    { src: '/waste management/IMG_0583.png', title: 'Community Waste Champions', desc: 'Local waste management champions trained through our programs, driving circular economy practices within their communities.' },
    { src: '/waste management/WhatsApp Image 2026-04-02 at 09.48.37.jpeg', title: 'Urban Water Pollution', desc: 'Documenting water contamination in urban settlements — evidence that drives our AI monitoring and policy advocacy work.' },
    { src: '/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.28(1).jpeg', title: 'Women in Water Leadership', desc: 'Women leaders in the water sector collaborating at the KEWASNET forum, championing gender equity in environmental governance.' },
    { src: '/waste management/IMG_0582.png', title: 'Waste Collection Operations', desc: 'Organized waste collection and sorting — transforming community waste management through systematic circular economy solutions.' },
    { src: '/waste management/WhatsApp Image 2026-04-02 at 09.48.38.jpeg', title: 'Stream Monitoring', desc: 'Monitoring water flow and quality at natural discharge points, tracking ecosystem health indicators in real-time.' },
    { src: '/SWA Accountability and Commitments Forum/WhatsApp Image 2026-02-06 at 14.05.51(1).jpeg', title: 'SWA Policy Workshop', desc: 'Stakeholders working on water policy frameworks at the Sanitation and Water for All Accountability Forum.' },
    { src: '/waste management/WhatsApp Image 2026-04-02 at 09.48.39.jpeg', title: 'Community Field Assessment', desc: 'Ground-level environmental assessments in informal settlements, documenting waste infrastructure gaps and community needs.' },
    { src: '/waste management/IMG_0596.png', title: 'Recycling & Material Recovery', desc: 'Active material recovery operations creating green jobs while diverting waste from water bodies and landfills.' },
    { src: '/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.28.jpeg', title: 'Stakeholder Roundtable', desc: 'Cross-sector dialogue on water governance, bringing together government, civil society, and community representatives.' },
    { src: '/waste management/IMG_0594.png', title: 'Waste Sorting Facility', desc: 'Our waste sorting and processing operations — the backbone of circular economy programs that turn waste into valuable resources.' },
    { src: '/waste management/WhatsApp Image 2026-04-02 at 09.48.39(1).jpeg', title: 'Pollution Source Tracking', desc: 'Investigating sewage and waste discharge into water systems, building the evidence base for AI-powered contamination prediction.' },
    { src: '/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.27.jpeg', title: 'KEWASNET Partnership', desc: 'Strengthening collaboration with the Kenya Water and Sanitation Network to advance water governance and accountability.' },
    { src: '/waste management/IMG_0595.png', title: 'Community Engagement', desc: 'Working alongside communities to build awareness and participation in sustainable waste management programs.' },
    { src: '/WETLANDS/beautiful-grey-heron-meadow-wonderful-bird-nature-habitat.jpg', title: 'Wetland Biodiversity', desc: 'A grey heron in its natural wetland habitat — a key indicator species we track through our biodiversity restoration programs.' },
    { src: '/waste management/IMG_0597.png', title: 'Environmental Education', desc: 'Training sessions and community workshops building local capacity for waste management and environmental stewardship.' },
    { src: '/SWA Accountability and Commitments Forum/WhatsApp Image 2026-02-06 at 14.05.51.jpeg', title: 'SWA Forum Representation', desc: 'Representing East Africa at the global Sanitation and Water for All Forum, shaping international water policy.' },
    { src: '/waste management/IMG_0598.png', title: 'Collection Infrastructure', desc: 'Developing community waste collection infrastructure that serves as the foundation for sustainable resource recovery.' },
    { src: '/WETLANDS/green-grass-growing-near-lake.jpg', title: 'Lake Ecosystem Health', desc: 'Monitoring lake-adjacent ecosystems — healthy shorelines are critical indicators of water body resilience and biodiversity.' },
    { src: '/waste management/close-up-hand-holding-plastic-bottle.jpg', title: 'Plastic Recovery', desc: 'Every piece of plastic diverted from waterways represents a step toward cleaner water bodies and healthier ecosystems.' },
    { src: '/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg', title: 'Volunteer Cleanup Drive', desc: 'Community volunteers participating in organized cleanup campaigns — grassroots action powering environmental change.' },
    { src: '/WETLANDS/ducks-pond.jpg', title: 'Wetland Restoration', desc: 'Restored wetland habitats supporting diverse wildlife populations — a direct outcome of our ecosystem protection work.' },
  ]

  return (
    <>
      <main>

        {/* ================================================================
            1. HERO — Cinematic video (uhai-seq.mp4)
        ================================================================ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <BackgroundVideo src="https://res.cloudinary.com/dw0jgbbxh/video/upload/uhai-seq_1_nvvetn.mp4" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(11,31,51,0.7) 0%, rgba(11,31,51,0.35) 40%, rgba(11,31,51,0.88) 100%)',
          }} />

          <div className="container-full relative z-10 pt-32 pb-20">
            <motion.div initial={mounted ? "hidden" : false} animate={mounted ? "visible" : false} variants={stagger} className="max-w-3xl">
              <motion.div variants={fade} className="label-light mb-6">
                Water Quality Intelligence for Africa
              </motion.div>
              <motion.h1 variants={fade} className="h-display text-white mb-6">
                Turning Data into <span style={{ color: '#0598CE' }}>Action</span>,{' '}
                Waste into Opportunity
              </motion.h1>
              <motion.p variants={fade} className="body-light max-w-xl mb-10">
                Real-time water quality monitoring, predictive intelligence, and circular economy
                solutions. We close the loop between waste, water, and ecosystems.
              </motion.p>
              <motion.div variants={fade} className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Partner With Us <FiArrowRight size={15} />
                </Link>
                <Link href="/about" className="btn-outline">
                  Our Story
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats row - removed */}
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
            <div className="w-px h-10 bg-white/20 animate-pulse" />
          </motion.div>
        </section>

        {/* ================================================================
            2. PURPOSE, MISSION & VISION — Surface (top for credibility)
        ================================================================ */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
              <div className="label justify-center mb-5">Our Foundations</div>
              <h2 className="h-xl text-[#0F172A]">What Drives Us</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FiHeart, title: 'Purpose', content: 'To protect water as a living system by transforming sanitation, waste, and data into practical solutions that safeguard water quality, restore biodiversity, and build climate-resilient communities.', color: '#0598CE', bg: '#E8F6FC' },
                { icon: FiTarget, title: 'Mission', content: 'To advance water security and climate resilience by designing and scaling circular, technology-enabled solutions — turning science, data, and community knowledge into measurable impact.', color: '#0B1F33', bg: '#E8EDF2' },
                { icon: FiEye, title: 'Vision', content: "A future where Africa's water bodies are clean, biodiverse, and resilient — supported by smart sanitation, responsible resource use, and data-driven decision-making.", color: '#2F6F4E', bg: '#F0FDF4' },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 group" style={{ border: '1px solid #E8EDF2' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: item.bg }}>
                    <item.icon size={22} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                  <p className="body-md">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            3. ABOUT — White with editorial split
        ================================================================ */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="container-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
                <div className="relative h-[420px] lg:h-[580px] rounded-2xl overflow-hidden">
                  <Image src="/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg" alt="Field research" fill className="object-cover" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
                <div className="label mb-5">About Uhai WashWise</div>
                <h2 className="h-xl text-[#0F172A] mb-6">
                  Protecting Water as a <span style={{ color: '#0598CE' }}>Living System</span>
                </h2>
                <p className="body-lg mb-5 max-w-lg">
                  We are a social enterprise at the intersection of water, sanitation, climate action, and technology. Our solutions close the loop between waste, water, and ecosystems.
                </p>
                <p className="body-lg mb-10 max-w-lg">
                  Our flagship AI-powered water quality monitoring tool translates scientific data into real-time insights — enabling early warning, rapid response, and long-term biodiversity restoration.
                </p>
                <Link href="/about" className="btn-dark">
                  Discover More <FiArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            4. HOW IT WORKS — Dark, step-by-step AI process
        ================================================================ */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#0B1F33' }}>
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
              <div className="label-light justify-center mb-5">The Process</div>
              <h2 className="h-xl text-white mb-4">
                How Our <span style={{ color: '#0598CE' }}>AI System</span> Works
              </h2>
              <p className="body-light max-w-xl mx-auto">
                From raw environmental data to actionable intelligence — a seamless pipeline
                that transforms information into impact.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(5,152,206,0.2), rgba(5,152,206,0.5), rgba(5,152,206,0.2), transparent)' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">
                {[
                  { step: '01', icon: FiDatabase, title: 'Collect Data', desc: 'Sensors and field teams gather water quality parameters, environmental conditions, and waste metrics from target sites.', color: '#0598CE' },
                  { step: '02', icon: FiLayers, title: 'Input to System', desc: 'Raw data is ingested into our cloud platform, cleaned, and structured for analysis across multiple variables.', color: '#22ADD8' },
                  { step: '03', icon: FiCpu, title: 'AI Analysis', desc: 'Machine learning models process the data, identifying patterns, anomalies, and predictive contamination signals.', color: '#0598CE' },
                  { step: '04', icon: FiBarChart2, title: 'Visualize Insights', desc: 'Results are displayed on intuitive dashboards with maps, charts, and trend analysis for decision-makers.', color: '#22ADD8' },
                  { step: '05', icon: FiAlertTriangle, title: 'Alerts & Action', desc: 'The system generates real-time alerts, quality reports, and actionable recommendations for rapid response.', color: '#2F6F4E' },
                ].map((item, i) => (
                  <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="relative text-center group">
                    <div className="relative z-10 w-[110px] h-[110px] mx-auto mb-6 rounded-full flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15`, border: `2px solid ${item.color}40` }}>
                      <item.icon size={26} style={{ color: item.color }} />
                      <span className="text-[9px] uppercase tracking-widest font-bold mt-1.5" style={{ color: item.color }}>
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

        {/* ================================================================
            5. WHAT WE DO — Three service cards with media
        ================================================================ */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
              <div className="label mb-5">What We Do</div>
              <h2 className="h-xl text-[#0F172A] mb-4">
                <span style={{ color: '#0598CE' }}>Water Quality,</span> Predictive Water Quality, Waste Management & <span style={{ color: '#0598CE' }}>Integrated Water Resource Management</span>
              </h2>
              <p className="body-lg max-w-xl">
                We combine water data visualization, predictive water quality modeling, and integrated waste management to protect water systems and build resilient communities across East Africa.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card 1: Water Data Visualization with Video */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="relative h-[450px] bg-gray-900 overflow-hidden">
                  <BackgroundVideo src="https://res.cloudinary.com/dw0jgbbxh/video/upload/ai_pnujrn.mp4" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#0598CE' }}>
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Water Data Visualization</h3>
                    <p className="text-sm text-white/80">Real-time dashboards that make complex water quality data accessible to decision-makers.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Predictive Water Quality with Image */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="relative h-[450px] bg-gray-900 overflow-hidden">
                  <Image 
                    src="/AI wATER PREDICTING TOOL/Dashboard.png" 
                    alt="Predictive Water Quality Dashboard" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#0598CE' }}>
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Predictive Water Quality</h3>
                    <p className="text-sm text-white/80">Predictive models that forecast contamination risks and guide targeted interventions before crises emerge.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Integrated Water Resource Management with Image */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="relative h-[450px] bg-gray-900 overflow-hidden">
                  <Image 
                    src="/waste management/IMG_0583.png" 
                    alt="Integrated Water Resource Management" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#2F6F4E' }}>
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Integrated Water Resource Management</h3>
                    <p className="text-sm text-white/80">Holistic water management combining waste reduction, ecosystem restoration, and community-driven circular economy programs.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            6. DATA INTELLIGENCE — Dark, SaaS product feel
        ================================================================ */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#0B1F33' }}>
          <div className="container-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
                <div className="label-light mb-5">Data Intelligence</div>
                <h2 className="h-xl text-white mb-6">
                  See What Our <span style={{ color: '#0598CE' }}>Platform</span> Delivers
                </h2>
                <p className="body-light mb-5 max-w-lg">
                  Our AI platform processes millions of data points to generate real-time water quality scores, contamination forecasts, and environmental health reports.
                </p>
                <p className="text-sm text-white/40 mb-10 max-w-lg leading-relaxed">
                  Designed for decision-makers — from local water committees to national regulators — the dashboard makes complex data accessible and actionable.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { v: '99.2%', l: 'Prediction Accuracy' },
                    { v: '<30s', l: 'Alert Response Time' },
                    { v: '24/7', l: 'Continuous Monitoring' },
                  ].map((s) => (
                    <div key={s.l} className="flex items-center gap-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="font-display text-2xl lg:text-3xl font-bold" style={{ color: '#0598CE' }}>{s.v}</div>
                      <div className="text-sm text-white/35">{s.l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Image src="/AI wATER PREDICTING TOOL/Dashboard.png" alt="AI Water Quality Dashboard" width={900} height={520} className="w-full h-auto" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-[55%] rounded-xl overflow-hidden shadow-xl hidden lg:block" style={{ border: '2px solid rgba(255,255,255,0.1)' }}>
                    <Image src="/AI wATER PREDICTING TOOL/Dashboard2.png" alt="Analytics Dashboard" width={500} height={300} className="w-full h-auto" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            7b. GALLERY — White section with Varied Community & Impact Images
        ================================================================ */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
              <div className="label mb-5">Community Impact</div>
              <h2 className="h-xl text-[#0F172A] mb-4">
                Stories From The <span style={{ color: '#0598CE' }}>Ground</span>
              </h2>
              <p className="body-lg max-w-xl">
                Real moments of transformation, partnership, and environmental action across East African communities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/KEWASNET COFFE CONNECT/IMG_2471.JPG.jpeg', title: 'Water Governance Forum', desc: 'Stakeholders convening at the Kenya Water and Sanitation Network forum to align strategies for improved water governance.' },
                { src: '/waste management/IMG_0583.png', title: 'Community Champions', desc: 'Water sector professionals sharing insights and building partnerships for sustainable water management in East Africa.' },
                { src: '/waste management/WhatsApp Image 2026-04-02 at 09.48.35.jpeg', title: 'Wetland Assessment Work', desc: 'Our team conducting on-site water body assessments, identifying pollution entry points and mapping contamination patterns.' },
                { src: '/waste management/WhatsApp Image 2026-04-02 at 09.48.37.jpeg', title: 'Water Monitoring', desc: 'Field teams documenting water quality conditions in urban settlements to drive our monitoring and advocacy work.' },
                { src: '/waste management/IMG_0582.png', title: 'Waste Collection Impact', desc: 'Organized waste collection operations transforming community waste management through systematic circular economy solutions.' },
                { src: '/waste management/IMG_0594.png', title: 'Waste Sorting & Recovery', desc: 'Processing operations that are the backbone of circular economy programs turning waste into valuable resources.' },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-[300px] overflow-hidden bg-gray-200">
                    <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-white/80 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            8. GALLERY — White editorial, masonry grid with hover + lightbox
        ================================================================ */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
              <div>
                <div className="label mb-5">Our Work in Action</div>
                <h2 className="h-xl text-[#0F172A]">Gallery</h2>
              </div>
              <p className="text-sm max-w-sm text-[#475569]">
                Real moments of impact and transformation. Click any image to explore the story behind it.
              </p>
            </motion.div>

            {/* Editorial masonry grid — all images */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  onClick={() => setLightbox(img)}
                  className="relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">{img.title}</h4>
                    <p className="text-[11px] text-[#475569] line-clamp-2 hidden sm:block">{img.desc}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: '#0598CE' }}>View Story</span>
                      <FiArrowUpRight size={11} style={{ color: '#0598CE' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            9. READY TO DISCUSS PROJECT — Engagement CTA
        ================================================================ */}
        <section className="py-24 lg:py-36" style={{ backgroundColor: '#0B1F33' }}>
          <div className="container-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
              <div className="label-light justify-center mb-6">Next Step</div>
              <h2 className="h-xl text-white mb-6">
                Ready to <span style={{ color: '#0598CE' }}>Discuss Your Project</span>?
              </h2>
              <p className="body-light max-w-xl mx-auto mb-10">
                Whether you&apos;re interested in deploying our water quality platform, exploring waste management solutions, or partnering on environmental research — let&apos;s find the right fit for your community or organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:uhaiwashwise@outlook.com" className="btn-primary">
                  Start a Conversation <FiMail size={15} />
                </a>
                <Link href="/contact" className="btn-outline">
                  Schedule a Call <FiArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            10. CONTACT — Surface, clean structured (GET IN TOUCH)
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
                        <p className="text-xs text-[#94A3B8]">Working with 50+ communities across Kenya, deploying AI monitoring tools and building local capacity for water security.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* ================================================================
          LIGHTBOX — Full screen with image + description
      ================================================================ */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox-overlay" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}>
              <FiX size={20} />
            </button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto px-6"
              onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full lg:w-[65%] h-[50vh] lg:h-[70vh] rounded-xl overflow-hidden">
                <Image src={lightbox.src} alt={lightbox.title} fill className="object-contain" />
              </div>
              <div className="lg:w-[35%] text-white">
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">{lightbox.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{lightbox.desc}</p>
                <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#0598CE' }}>Uhai WashWise</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
