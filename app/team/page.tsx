'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const team = [
  {
    name: 'Pauline Okeyo',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    bio: 'Pauline brings over 15 years of experience in environmental management and community development. Her vision drives our mission to create sustainable impact across East Africa.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'William Ochieng',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
    bio: 'William leads our technical initiatives, bringing expertise in water resource management and AI-driven environmental monitoring systems.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Anne Wanjiku',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
    bio: 'Anne oversees day-to-day operations, ensuring our programs run smoothly and effectively reach the communities we serve.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Bella Akinyi',
    role: 'Community Engagement Lead',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400',
    bio: 'Bella leads our community outreach initiatives, building strong relationships with local leaders and ensuring community voices are heard.',
    linkedin: '#',
    twitter: '#',
  },
]

export default function TeamPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-secondary-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920"
              alt="Our Team"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label text-primary-400 before:bg-primary-400 justify-center">
                Our Team
              </div>
              <h1 className="heading-xl text-white mb-6">
                Dedicated Hearts Behind Our{' '}
                <span className="text-primary-500">Mission</span>
              </h1>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto">
                Meet the passionate individuals driving positive change across East Africa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 bg-white">
          <div className="container-main">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Social Overlay */}
                    <div className="absolute inset-0 bg-primary-500/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={member.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-500 hover:bg-secondary-900 hover:text-white transition-colors">
                        <FiLinkedin />
                      </a>
                      <a href={member.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-500 hover:bg-secondary-900 hover:text-white transition-colors">
                        <FiTwitter />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-500 hover:bg-secondary-900 hover:text-white transition-colors">
                        <FiMail />
                      </a>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-secondary-900 mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-secondary-500 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-24 bg-secondary-50">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-label">Join Us</div>
                <h2 className="heading-lg mb-6">
                  Be Part of Our <span className="text-primary-500">Mission</span>
                </h2>
                <p className="text-body mb-6">
                  We're always looking for passionate individuals who share our vision for 
                  a sustainable future. Whether as a team member, volunteer, or partner, 
                  there's a place for you at Uhai WashWise.
                </p>
                <p className="text-body mb-8">
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
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800"
                  alt="Join our team"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary-500">
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg text-white mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
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

      <Footer />
    </>
  )
}
