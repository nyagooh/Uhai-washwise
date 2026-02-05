'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiPlay, FiArrowRight, FiCheck, FiDroplet, FiUsers, FiGlobe, FiHeart, FiTarget, FiEye, FiMapPin, FiMail } from 'react-icons/fi'
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
    <div>
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
                <motion.div variants={fadeUp} className="section-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  <span className="w-2 h-2 rounded-full bg-white inline-block mr-2"></span>
                  Water Security for Africa
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="heading-xl mb-6" style={{ color: '#FFFFFF' }}>
                  United in Compassion,{' '}
                  <span style={{ color: '#FFFFFF' }}>Changing Lives</span>
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-xl text-white/80 mb-8 leading-relaxed">
                  A social enterprise working at the intersection of water, sanitation, climate action, and technology. 
                  We design solutions that close the loop between waste, water, and ecosystems.
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
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                  <FaHandHoldingHeart className="text-2xl" style={{ color: '#0598CE' }} />
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#0598CE' }}>75,958</div>
                  <div className="text-sm" style={{ color: '#6B7280' }}>People Helped</div>
                </div>
              </div>
              <p className="text-sm" style={{ color: '#6B7280' }}>
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
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Photo Grid */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-5"
              >
                <div className="space-y-5">
                  <div className="relative h-56 overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600"
                      alt="Community"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-72 overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=600"
                      alt="Water access"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-5 pt-12">
                  <div className="relative h-72 overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1541544741505-83219e68c68c?q=80&w=600"
                      alt="Children"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-56 overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
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
                <div className="section-label mb-6">About Us</div>
                <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                  Protecting Water as a <span style={{ color: '#0598CE' }}>Living System</span>
                </h2>
                <p className="text-body mb-10" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Uhai WashWise is a social enterprise working at the intersection of water, sanitation, climate action, and technology. 
                  We design and implement solutions that close the loop between waste, water, and ecosystems, with a strong focus on 
                  circular economy principles, data-driven decision-making, and community-grounded action.
                </p>
                <p className="text-body mb-10" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Our flagship innovation, an AI-powered water quality monitoring and prediction tool, translates scientific and environmental 
                  data into real-time insights, enabling early warning, rapid response, ecosystem protection, and long-term biodiversity restoration.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E6F5F9' }}>
                      <FiDroplet className="text-2xl" style={{ color: '#0598CE' }} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg" style={{ color: '#1A1A1A' }}>Healthcare Support</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>Providing essential services and resources to communities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E6F5F9' }}>
                      <FiHeart className="text-2xl" style={{ color: '#0598CE' }} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg" style={{ color: '#1A1A1A' }}>Helped Fund</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>Supporting growth through community funding.</p>
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
        <section ref={approachRef} className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Content */}
              <motion.div
                initial="hidden"
                animate={approachInView ? "visible" : "hidden"}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="section-label mb-6">
                  Our Approach
                </motion.div>
                <motion.h2 variants={fadeUp} className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                  Turning Data into Action, <span style={{ color: '#0598CE' }}>Waste into Opportunity</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-body mb-10" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Our work combines research, innovation, and governance support to address water quality degradation, poor sanitation, 
                  waste mismanagement, and climate risks, particularly in urban and peri-urban African contexts. Through community-based 
                  research and evidence generation, we inform policy, planning, and practice.
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
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { 
                  icon: FiHeart, 
                  title: 'Our Purpose', 
                  desc: 'To protect water as a living system by transforming sanitation, waste, and data into practical solutions that safeguard water quality, restore biodiversity, and build climate-resilient communities.' 
                },
                { 
                  icon: FiTarget, 
                  title: 'Our Mission', 
                  desc: 'To advance water security and climate resilience by designing and scaling circular, technology-enabled solutions in water quality, environmental sanitation, waste management, and governance, turning science, data, and community knowledge into measurable impact.' 
                },
                { 
                  icon: FiEye, 
                  title: 'Our Vision', 
                  desc: 'A future where Africa\'s water bodies are clean, biodiverse, and resilient, supported by smart sanitation systems, responsible resource use, and data-driven decision-making that balances people, planet, and prosperity.' 
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 text-center transition-all duration-300"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                    <item.icon className="text-3xl" style={{ color: '#0598CE' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A' }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#6B7280', fontSize: '16px' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            STATS SECTION
        ============================================ */}
        <section className="py-32" style={{ backgroundColor: '#0598CE' }}>
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
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
                  <div className="text-6xl md:text-7xl font-display text-white mb-4" style={{ fontWeight: 800 }}>
                    {stat.value}
                  </div>
                  <div className="text-white/90 text-lg" style={{ fontWeight: 500 }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICES / HOW WE HELP
        ============================================ */}
        <section ref={servicesRef} className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <motion.div
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={stagger}
              className="text-center mb-20"
            >
              <motion.div variants={fadeUp} className="section-label mb-6">
                How We Help
              </motion.div>
              <motion.h2 variants={fadeUp} className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                Bringing hope to every community
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-2xl mx-auto" style={{ color: '#6B7280', fontSize: '18px', lineHeight: '1.8' }}>
                We are dedicated to creating sustainable impact through innovative solutions 
                that protect water resources and build climate resilience.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="group overflow-hidden transition-all duration-300"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#1A1A1A' }}>{service.title}</h3>
                    <p className="leading-relaxed" style={{ color: '#6B7280', fontSize: '15px' }}>{service.desc}</p>
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
        <section ref={impactRef} className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
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
                  Helping others <span style={{ color: '#0598CE' }}>improves the world</span>
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
                        <span className="font-semibold" style={{ color: '#1A1A1A' }}>{item.label}</span>
                        <span className="font-bold" style={{ color: '#0598CE' }}>{item.value}%</span>
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
            CONTACT SECTION
        ============================================ */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="section-label justify-center mb-6">Contact Us</div>
              <h2 className="heading-lg mb-8" style={{ lineHeight: '1.2' }}>
                Get in <span style={{ color: '#0598CE' }}>Touch</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
                Have questions or ready to partner with us? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                  <FiMapPin className="text-2xl" style={{ color: '#0598CE' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1A1A1A' }}>Address</h3>
                <p className="leading-relaxed" style={{ color: '#6B7280', fontSize: '16px' }}>
                  Posta Flats, Ondiek Road<br />
                  Kisumu, Kenya<br />
                  P.O. Box 865-40123, Kisumu
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                  <FiMail className="text-2xl" style={{ color: '#0598CE' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1A1A1A' }}>Email</h3>
                <a href="mailto:info@uhaiwashwise.org" className="leading-relaxed" style={{ color: '#0598CE', fontSize: '16px' }}>
                  info@uhaiwashwise.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                  <FiArrowRight className="text-2xl" style={{ color: '#0598CE' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1A1A1A' }}>Website</h3>
                <a href="http://www.uhaiwashwise.org" target="_blank" rel="noopener noreferrer" className="leading-relaxed" style={{ color: '#0598CE', fontSize: '16px' }}>
                  www.uhaiwashwise.org
                </a>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">
                Send Us a Message
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
