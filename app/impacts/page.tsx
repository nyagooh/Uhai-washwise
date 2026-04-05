'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BackgroundVideo from '@/components/BackgroundVideo'
import { FiArrowRight, FiArrowUpRight, FiDroplet, FiUsers, FiTrendingUp, FiAward, FiCheckCircle } from 'react-icons/fi'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const projects = [
  {
    title: 'AI Water Quality Monitoring',
    desc: 'Our flagship innovation uses AI-powered technology to monitor and predict water quality in real-time across East African communities. This tool translates scientific and environmental data into actionable insights, enabling early warning systems, rapid response, ecosystem protection, and long-term biodiversity restoration.',
    image: '/AI wATER PREDICTING TOOL/Dashboard.png',
    link: '/projects/ai-water-quality',
    gallery: ['/AI wATER PREDICTING TOOL/Dashboard.png', '/AI wATER PREDICTING TOOL/Dashboard2.png', '/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg'],
    stats: [{ v: '50+', l: 'Communities Served' }, { v: '1M+', l: 'Data Points' }, { v: '200+', l: 'Early Warnings' }],
    highlights: ['Real-time water quality monitoring', 'Predictive analytics for contamination', 'Early warning system implementation', 'Biodiversity restoration tracking', 'Community health impact assessment'],
    accent: '#0598CE',
  },
  {
    title: 'Waste Management Solutions',
    desc: 'We design and implement circular economy solutions that transform waste into valuable resources. Our initiatives close the loop between waste, water, and ecosystems, with a strong focus on community-grounded action and sustainable practices.',
    image: '/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg',
    link: '/projects/waste-management',
    gallery: ['/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg', '/waste management/IMG_0596.png', '/waste management/pollution-concept-water-with-garbage.jpg'],
    stats: [{ v: '500+', l: 'Tons Diverted' }, { v: '150+', l: 'Jobs Created' }, { v: '30+', l: 'Communities' }],
    highlights: ['Waste-to-resource transformation', 'Community-based collection systems', 'Circular economy implementation', 'Environmental education', 'Sustainable livelihood creation'],
    accent: '#2F6F4E',
  }
]

export default function ImpactsPage() {
  return (
    <>
      <main>
        {/* Hero — Dark with Video */}
        <section className="relative min-h-[75vh] flex items-end overflow-hidden">
          <BackgroundVideo src="https://res.cloudinary.com/dw0jgbbxh/video/upload/uhai-seq_1_nvvetn.mp4" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,51,0.5) 0%, rgba(11,31,51,0.3) 40%, rgba(11,31,51,0.92) 100%)' }} />
          <div className="container-full relative z-10 pb-16 lg:pb-24 pt-40">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fade} className="label-light mb-5">Our Impact</motion.div>
              <motion.h1 variants={fade} className="h-display text-white max-w-4xl">
                Creating <span style={{ color: '#0598CE' }}>Lasting</span> Change
              </motion.h1>
              <motion.p variants={fade} className="body-light max-w-xl mt-5">
                Through innovation and community partnership, we are transforming lives and protecting our environment for future generations.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Projects — alternating */}
        {projects.map((p, i) => (
          <section key={p.title} className="py-24 lg:py-36" style={{ backgroundColor: i === 0 ? '#FFFFFF' : '#F8FAFC' }}>
            <div className="container-full">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                {/* Gallery */}
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-3">
                      <div className="relative h-[260px] rounded-xl overflow-hidden"><Image src={p.gallery[0]} alt="" fill className="object-cover" /></div>
                      <div className="relative h-[180px] rounded-xl overflow-hidden"><Image src={p.gallery[1]} alt="" fill className="object-cover" /></div>
                    </div>
                    <div className="pt-8 space-y-3">
                      <div className="relative h-[210px] rounded-xl overflow-hidden"><Image src={p.gallery[2]} alt="" fill className="object-cover" /></div>
                      <div className="relative h-[230px] rounded-xl overflow-hidden"><Image src={p.image} alt="" fill className="object-cover" /></div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 25 : -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="h-xl mb-5" style={{ color: p.accent }}>{p.title}</h2>
                  <p className="body-lg mb-5 max-w-lg">{p.desc}</p>
                  <p className="body-md mb-10 max-w-lg">From field data collection to community implementation, each project combines science, local knowledge, and practical delivery.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 py-6" style={{ borderTop: `1px solid ${p.accent}20`, borderBottom: `1px solid ${p.accent}20` }}>
                    {p.stats.map((s) => (
                      <div key={s.l}>
                        <div className="font-display text-2xl lg:text-3xl font-bold mb-1" style={{ color: p.accent }}>{s.v}</div>
                        <div className="text-[10px] uppercase tracking-[0.12em] text-[#94A3B8]">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2.5 mb-10">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5">
                        <FiCheckCircle className="flex-shrink-0 mt-0.5" size={15} style={{ color: p.accent }} />
                        <span className="text-sm text-[#475569]">{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={p.link} className="btn-primary">Learn More <FiArrowUpRight size={15} /></Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA — Dark with green accent */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/ocean-with-some-islands.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,31,51,0.93) 0%, rgba(11,31,51,0.88) 100%)' }} />
          </div>
          <div className="container-full relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
              <div className="label-light mb-5">Get Involved</div>
              <h2 className="h-xl text-white mb-6">Partner With Us</h2>
              <p className="body-light mb-10 max-w-lg">Ready to collaborate on meaningful impact? We would love to hear from you.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Start a Conversation <FiArrowRight size={15} /></Link>
                <a href="mailto:uhaiwashwise@outlook.com" className="btn-outline">uhaiwashwise@outlook.com</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
