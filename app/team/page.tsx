'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiLinkedin, FiAward, FiMapPin } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const team = [
  {
    name: 'Pauline Wambui Maina',
    role: 'Director | Community Development & Environmental Management Expert',
    image: '/WETLANDS/green-grass-growing-near-lake.jpg',
    bio: 'Pauline holds a BSc in Community Development and Environmental Science with over five years of experience in community-based environmental programs, sanitation, and governance.',
    education: 'BSc in Community Development and Environmental Science',
    linkedin: '#',
    x: '#',
  },
  {
    name: 'William Nyambeka Magwa',
    role: 'Hydrology & Water Resources Management Expert',
    image: '/ocean-with-some-islands.jpg',
    bio: 'William is a hydrologist with over nine years of experience in watershed management, water conservation, climate-resilient interventions, and policy support across Kenya and the Horn of Africa. He specializes in surface and groundwater hydrology, GIS and remote sensing, MEAL frameworks, and participatory project implementation.',
    education: 'BSc in Earth Science with IT, Maseno University | Certification in Monitoring, Evaluation, Learning & Accountability, University of Nairobi',
    linkedin: '#',
    x: '#',
  },
  {
    name: 'Anne Nyaguthii',
    role: 'AI, ICT & Communications Lead',
    image: '/AI wATER PREDICTING TOOL/human-ai-touch-connection-technology-innovation.jpg',
    bio: 'Specialist in digital systems, AI-enabled solutions, and communications for environmental and social impact.',
    education: '',
    linkedin: '#',
    x: '#',
  },
  {
    name: 'Bella',
    role: 'Waste Management Specialist',
    image: '/waste management/pollution-concept-water-with-garbage.jpg',
    bio: 'Expert in solid and liquid waste systems, resource recovery, and community-based waste solutions.',
    education: '',
    linkedin: '#',
    x: '#',
  },
]

export default function TeamPage() {
  return (
    <>
      <main>
        {/* Hero with Video */}
        <section className="relative py-20 md:py-32 overflow-hidden min-h-[60vh] flex items-center">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dw0jgbbxh/video/upload/uhai-seq_1_nvvetn.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label justify-center mb-4 md:mb-6 text-xs md:text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <span className="w-2 h-2 rounded-full bg-white inline-block mr-2"></span>
                Our Team
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4 md:px-0" style={{ color: '#FFFFFF' }}>
                Dedicated Experts Behind Our{' '}
                <span style={{ color: '#FFFFFF' }}>Mission</span>
              </h1>
              <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4 md:px-0" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                A multidisciplinary team of environmental scientists, water resource experts, waste management specialists, and technology professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-96 overflow-hidden mb-6" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Social Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(5, 152, 206, 0.9)' }}>
                      <a href={member.linkedin} className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <FiLinkedin className="text-xl" style={{ color: '#0598CE' }} />
                      </a>
                      <a href={member.x} className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <FaXTwitter className="text-xl" style={{ color: '#0598CE' }} />
                      </a>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#1A1A1A' }}>{member.name}</h3>
                  <p className="mb-3 font-semibold" style={{ color: '#0598CE' }}>{member.role}</p>
                  <p className="mb-3 leading-relaxed" style={{ color: '#6B7280', fontSize: '15px' }}>{member.bio}</p>
                  {member.education && (
                    <div className="flex items-start gap-2 mt-3">
                      <FiAward className="text-sm flex-shrink-0 mt-1" style={{ color: '#0598CE' }} />
                      <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{member.education}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-label mb-6">Join Us</div>
                <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                  Be Part of Our <span style={{ color: '#0598CE' }}>Mission</span>
                </h2>
                <p className="text-body mb-6" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  We&apos;re always looking for passionate individuals who share our vision for 
                  a sustainable future. Whether as a team member, volunteer, or partner, 
                  there&apos;s a place for you at Uhai WashWise.
                </p>
                <p className="text-body mb-10" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Join us in our mission to protect water resources, build climate-resilient 
                  communities, and create lasting positive impact across East Africa.
                </p>
                <Link href="/contact" className="btn-primary">
                  Get In Touch
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
                  src="/WETLANDS/ducks-pond.jpg"
                  alt="Join our team"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0598CE' }}>
          <div className="absolute inset-0">
            <Image
              src="/ocean-with-some-islands.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-8" style={{ color: '#FFFFFF', lineHeight: '1.2' }}>
                Ready to Make an Impact?
              </h2>
              <p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Connect with our team and discover how we can work together for a sustainable future.
              </p>
              <Link href="/contact" className="btn-white">
                Contact Us
                <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
