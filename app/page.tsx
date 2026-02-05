'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiPlay, FiArrowRight, FiCheck, FiDroplet, FiUsers, FiGlobe, FiHeart } from 'react-icons/fi'
import { FaWater, FaRecycle, FaLeaf, FaHandHoldingHeart } from 'react-icons/fa'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// Stats Counter Component
function StatCounter({ value, label }: { value: string; label: string }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="stat-number">{value}</div>
      <div className="text-secondary-600 mt-2">{label}</div>
    </motion.div>
  )
}

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true })
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [impactRef, impactInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      <Navigation />
      
      <main>
        {/* ============================================
            HERO SECTION - VIDEO BACKGROUND
        ============================================ */}
        <section ref={heroRef} className="video-hero">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=2048"
          >
            <source src="https://cdn.coverr.co/videos/coverr-waves-on-a-beach-4744/1080p.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="video-hero-overlay" />
          
          {/* Content */}
          <div className="container-main relative z-10 py-32">
            <div className="max-w-3xl">
              <motion.div
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="section-label text-white/80 before:bg-primary-500">
                  Water Security for Africa
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="heading-xl text-white mb-6">
                  United in Compassion,{' '}
                  <span className="text-primary-500">Changing Lives</span>
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-xl text-white/80 mb-8 leading-relaxed">
                  Driven by compassion and a shared vision, we work hand-in-hand with communities 
                  to create meaningful, sustainable change through innovative water solutions.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Partner With Us
                    <FiArrowRight />
                  </Link>
                  <Link href="/about" className="btn-white">
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden lg:block absolute bottom-20 right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaHandHoldingHeart className="text-primary-500 text-2xl" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-900">75,958</div>
                  <div className="text-secondary-500 text-sm">People Helped</div>
                </div>
              </div>
              <p className="text-secondary-600 text-sm">
                Supporting growth through community-driven water initiatives.
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <div className="w-px h-8 bg-white/40" />
            </div>
          </motion.div>
        </section>

        {/* ============================================
            ABOUT SECTION - Photo Grid
        ============================================ */}
        <section className="py-24 bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Photo Grid */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600"
                      alt="Community"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=600"
                      alt="Water access"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1541544741505-83219e68c68c?q=80&w=600"
                      alt="Children"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600"
                      alt="Support"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-label">About Us</div>
                <h2 className="heading-lg mb-6">
                  United in compassion, <span className="text-primary-500">changing lives</span>
                </h2>
                <p className="text-body mb-8">
                  Driven by compassion and a shared vision, we work hand-in-hand with communities 
                  to create meaningful change. Our evidence-based approach ensures every intervention 
                  delivers lasting impact.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiDroplet className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">Healthcare Support</h4>
                      <p className="text-secondary-500 text-sm">Providing essential services and resources to communities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiHeart className="text-accent-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">Helped Fund</h4>
                      <p className="text-secondary-500 text-sm">Supporting growth through community funding.</p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="btn-primary">
                  Discover More
                  <FiArrowRight />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================
            OUR APPROACH SECTION
        ============================================ */}
        <section ref={approachRef} className="py-24 bg-secondary-50">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial="hidden"
                animate={approachInView ? "visible" : "hidden"}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="section-label">
                  Our Approach
                </motion.div>
                <motion.h2 variants={fadeUp} className="heading-lg mb-6">
                  Compassionate solutions for <span className="text-primary-500">lasting impact</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-body mb-8">
                  Our approach focuses on creating sustainable change by addressing root causes, 
                  empowering communities, and delivering compassionate solutions that stand the test of time.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link href="/services" className="btn-primary">
                    Contact Now
                    <FiArrowRight />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={approachInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800"
                  alt="Our approach"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================
            MISSION / VISION / VALUES
        ============================================ */}
        <section className="py-24 bg-white">
          <div className="container-main">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: FiGlobe, title: 'Our Mission', color: 'primary', desc: 'We strive to create positive change and empower communities through sustainable water solutions.' },
                { icon: FiUsers, title: 'Our Vision', color: 'accent', desc: 'A world where every community has access to clean water and climate-resilient infrastructure.' },
                { icon: FiHeart, title: 'Our Values', color: 'primary', desc: 'Integrity, compassion, innovation, and community-driven approaches guide everything we do.' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary-900 rounded-2xl p-8 text-center hover:shadow-2xl transition-shadow"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    item.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
                  }`}>
                    <item.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-secondary-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            STATS SECTION
        ============================================ */}
        <section className="py-24 bg-primary-500">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '230+', label: 'Volunteers' },
                { value: '400+', label: 'Projects Done' },
                { value: '50+', label: 'Communities Served' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICES / HOW WE HELP
        ============================================ */}
        <section ref={servicesRef} className="py-24 bg-secondary-900">
          <div className="container-main">
            <motion.div
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp} className="section-label text-primary-400 before:bg-primary-400">
                How We Help
              </motion.div>
              <motion.h2 variants={fadeUp} className="heading-lg text-white mb-4">
                Bringing hope to every community
              </motion.h2>
              <motion.p variants={fadeUp} className="text-secondary-300 max-w-2xl mx-auto">
                We are dedicated to creating sustainable impact through innovative solutions 
                that protect water resources and build climate resilience.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=600',
                  title: 'Water Access',
                  desc: 'Providing clean water solutions to underserved communities.'
                },
                { 
                  image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600',
                  title: 'Education',
                  desc: 'Training communities in sustainable water management.'
                },
                { 
                  image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600',
                  title: 'Waste Management',
                  desc: 'Transforming waste into valuable resources.'
                },
                { 
                  image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600',
                  title: 'Environmental Protection',
                  desc: 'Restoring and protecting vital ecosystems.'
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-secondary-900 mb-2">{service.title}</h3>
                    <p className="text-secondary-500 text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">
                Explore All Services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            IMPACT SECTION - Progress Bars
        ============================================ */}
        <section ref={impactRef} className="py-24 bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={impactInView ? { opacity: 1, x: 0 } : {}}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=600"
                    alt="Impact"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg mt-12">
                  <Image
                    src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=600"
                    alt="Impact"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={impactInView ? { opacity: 1, x: 0 } : {}}
              >
                <div className="section-label">Our Impact</div>
                <h2 className="heading-lg mb-6">
                  Helping others <span className="text-primary-500">improves the world</span>
                </h2>
                <p className="text-body mb-8">
                  Every project we undertake creates ripples of positive change throughout 
                  communities, improving lives and protecting our environment for generations to come.
                </p>

                {/* Progress Bars */}
                <div className="space-y-6">
                  {[
                    { label: 'Clean Water Access', value: 85 },
                    { label: 'Community Education', value: 92 },
                    { label: 'Waste Reduction', value: 78 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-secondary-900">{item.label}</span>
                        <span className="font-bold text-primary-500">{item.value}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={impactInView ? { width: `${item.value}%` } : {}}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className="progress-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/portfolio" className="btn-primary mt-8">
                  View Our Work
                  <FiArrowRight />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================
            CTA SECTION
        ============================================ */}
        <section className="py-24 bg-secondary-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1920"
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
              <div className="section-label text-primary-400 before:bg-primary-400 justify-center">
                Get Involved
              </div>
              <h2 className="heading-xl text-white mb-6">
                Building a better future{' '}
                <span className="text-primary-500">together</span>
              </h2>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto mb-10">
                Join us in our mission to secure water resources and build climate-resilient 
                communities across East Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Donate Now
                  <FiHeart />
                </Link>
                <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-900">
                  Learn More
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
