'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiCheck, FiTarget, FiEye, FiHeart } from 'react-icons/fi'

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
        <section className="relative py-32 bg-secondary-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920"
              alt="About Us"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label text-primary-400 before:bg-primary-400 justify-center">
                About Us
              </div>
              <h1 className="heading-xl text-white mb-6">
                United in Compassion,{' '}
                <span className="text-primary-500">Changing Lives</span>
              </h1>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto">
                Learn about our journey, mission, and the impact we're making across East Africa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=800"
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
                <div className="section-label">Our Story</div>
                <h2 className="heading-lg mb-6">
                  Protecting Water, <span className="text-primary-500">Empowering Communities</span>
                </h2>
                <p className="text-body mb-6">
                  Uhai WashWise is a social enterprise founded to address the critical challenges 
                  of water security and climate resilience in East Africa. We combine innovative 
                  technology with community-centered approaches to deliver sustainable solutions.
                </p>
                <p className="text-body mb-8">
                  Our work spans water quality monitoring, waste-to-resource programs, environmental 
                  conservation, and capacity building. Through strategic partnerships with organizations 
                  like Ustawi, we amplify our impact and reach more communities.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Evidence-based water management solutions',
                    'Community-driven environmental programs',
                    'AI-powered monitoring and early warning systems',
                    'Circular economy approaches to waste',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                        <FiCheck className="text-primary-500 text-sm" />
                      </div>
                      <span className="text-secondary-700">{item}</span>
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
        <section className="py-24 bg-secondary-50">
          <div className="container-main">
            <div className="text-center mb-16">
              <div className="section-label justify-center">What Drives Us</div>
              <h2 className="heading-lg">Our Purpose, Mission & Vision</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FiHeart,
                  title: 'Our Purpose',
                  color: 'primary',
                  content: 'To protect water resources and build climate-resilient communities through innovative, evidence-based solutions that create lasting impact.'
                },
                {
                  icon: FiTarget,
                  title: 'Our Mission',
                  color: 'accent',
                  content: 'Delivering scalable water security and waste management solutions that empower communities while protecting vital ecosystems for future generations.'
                },
                {
                  icon: FiEye,
                  title: 'Our Vision',
                  color: 'primary',
                  content: 'A future where every community in Africa has access to clean water, sustainable waste management, and the resilience to thrive amid climate change.'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center ${
                    item.color === 'primary' ? 'bg-primary-100' : 'bg-accent-100'
                  }`}>
                    <item.icon className={`text-2xl ${
                      item.color === 'primary' ? 'text-primary-500' : 'text-accent-500'
                    }`} />
                  </div>
                  <h3 className="heading-sm mb-4">{item.title}</h3>
                  <p className="text-body-sm">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="py-24 bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-label">Our Partners</div>
                <h2 className="heading-lg mb-6">
                  Strategic Partnership with <span className="text-primary-500">Ustawi</span>
                </h2>
                <p className="text-body mb-6">
                  Uhai WashWise operates under the umbrella of Ustawi, a registered non-profit 
                  organization dedicated to sustainable development in East Africa. This partnership 
                  allows us to leverage established networks, resources, and expertise.
                </p>
                <p className="text-body mb-8">
                  Together, we're implementing innovative programs that address water security, 
                  environmental conservation, and community resilience at scale.
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
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800"
                  alt="Partnership"
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
                Ready to Make a Difference?
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
                Join us in our mission to secure water resources and build resilient communities across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-white">
                  Get In Touch
                  <FiArrowRight />
                </Link>
                <Link href="/team" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
