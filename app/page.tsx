'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiPlay, FiArrowRight, FiCheck, FiDroplet, FiUsers, FiGlobe, FiHeart, FiTarget, FiEye, FiMapPin, FiMail, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
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
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: 'AI Water Quality Monitoring',
      description: 'AI-powered platform for real-time water quality monitoring and prediction across East African communities.',
      image: '/AI wATER PREDICTING TOOL/Dashboard.png',
      gallery: [
        '/AI wATER PREDICTING TOOL/Dashboard.png',
        '/AI wATER PREDICTING TOOL/Dashboard2.png',
        '/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg',
      ],
      tags: ['AI/ML', 'Water Tech', 'Dashboard'],
      link: '/projects/ai-water-quality'
    },
    {
      title: 'Waste Management Solutions',
      description: 'Circular economy platform transforming waste into valuable resources for sustainable communities.',
      image: '/waste management/IMG_0582.png',
      gallery: [
        '/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg',
        '/waste management/IMG_0596.png',
        '/waste management/pollution-concept-water-with-garbage.jpg',
      ],
      tags: ['Waste Management', 'Sustainability', 'Community'],
      link: '/projects/waste-management'
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div>
      <Navigation />
      <main>
        {/* ============================================
            HERO SECTION - VIDEO BACKGROUND
        ============================================ */}
        <section ref={heroRef} className="video-hero">
          {/* Hero Background */}
          <div className="absolute inset-0">
            <Image
              src="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
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
            BEST WORK SECTION - Carousel
        ============================================ */}
        <section className="py-32" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="container-main">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="section-label justify-center mb-6">
                Our Portfolio
              </div>
              <h2 className="heading-lg mb-6">
                Featured Projects
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
                Showcasing exceptional projects that create meaningful impact
              </p>
            </motion.div>

            {/* Carousel Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                {/* Image Panel */}
                <div className="lg:col-span-3 relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl">
                  <motion.div
                    key={currentProject}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-wider mb-2 opacity-80">Featured Project</div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                      {projects[currentProject].title}
                    </h3>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="lg:col-span-2 h-full p-8 rounded-3xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(5, 152, 206, 0.12)' }}>
                  <motion.div
                    key={`content-${currentProject}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="h-full flex flex-col"
                  >
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>
                        {projects[currentProject].title}
                      </h4>
                      <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                        {projects[currentProject].description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentProject].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: '#E6F5F9', color: '#0598CE' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {projects[currentProject].gallery.map((img, index) => (
                        <div key={index} className="relative h-20 rounded-xl overflow-hidden">
                          <Image
                            src={img}
                            alt={`${projects[currentProject].title} ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <Link 
                        href={projects[currentProject].link}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: '#0598CE',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          fontSize: '14px',
                          boxShadow: '0 4px 16px rgba(5, 152, 206, 0.35)'
                        }}
                      >
                        Explore Project
                        <FiArrowRight size={18} />
                      </Link>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={prevProject}
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: '#E6F5F9', color: '#0598CE' }}
                          aria-label="Previous project"
                        >
                          <FiChevronLeft size={18} />
                        </button>
                        <button
                          onClick={nextProject}
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: '#0598CE', color: '#FFFFFF' }}
                          aria-label="Next project"
                        >
                          <FiChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Navigation Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center justify-between mt-8"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold" style={{ color: '#0598CE' }}>
                    {String(currentProject + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xl" style={{ color: '#6B7280' }}>
                    / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className="transition-all duration-300"
                      style={{
                        width: currentProject === index ? '40px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: currentProject === index ? '#0598CE' : '#D1D5DB'
                      }}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                <Link 
                  href="/portfolio"
                  className="hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#0598CE' }}
                >
                  View All Projects
                  <FiArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
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
                      src="/waste management/IMG_0596.png"
                      alt="Community"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-72 overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src="/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg"
                      alt="Water access"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-5 pt-12">
                  <div className="relative h-72 overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src="/ocean-with-some-islands.jpg"
                      alt="Children"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-56 overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src="/WETLANDS/beautiful-grey-heron-meadow-wonderful-bird-nature-habitat.jpg"
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
                  src="/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg"
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
        <section className="py-32" style={{ backgroundColor: '#EEF6FB' }}>
          <div className="container-main">
            <div className="text-center mb-16">
              <div className="section-label justify-center mb-4">Our Foundations</div>
              <h2 className="heading-lg mb-4">Purpose, Mission & Vision</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#64748B' }}>
                A clear direction that guides every partnership and every project we deliver.
              </p>
            </div>
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
                  className="p-10 text-left transition-all duration-300 rounded-2xl"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(5, 152, 206, 0.12)', borderTop: '4px solid #0598CE' }}
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#E6F5F9' }}>
                    <item.icon className="text-2xl" style={{ color: '#0598CE' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#64748B', fontSize: '16px' }}>{item.desc}</p>
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
                Empowering communities with practical solutions
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-2xl mx-auto" style={{ color: '#6B7280', fontSize: '18px', lineHeight: '1.8' }}>
                We are dedicated to creating sustainable impact through innovative solutions 
                that protect water resources and build climate resilience.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                { 
                  image: '/ocean-with-some-islands.jpg',
                  title: 'Water Access',
                  desc: 'Designing reliable water supply systems, protection of sources, and climate-resilient infrastructure for underserved communities.'
                },
                { 
                  image: '/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg',
                  title: 'AI Water Quality',
                  desc: 'Real-time monitoring and prediction tools that turn data into early warnings and actionable decisions.'
                },
                { 
                  image: '/waste management/pollution-concept-water-with-garbage.jpg',
                  title: 'Waste Management',
                  desc: 'Circular systems for collection, recovery, and reuse that reduce pollution and create green livelihoods.'
                },
                { 
                  image: '/WETLANDS/beautiful-grey-heron-meadow-wonderful-bird-nature-habitat.jpg',
                  title: 'Ecosystem Protection',
                  desc: 'Wetland restoration and biodiversity protection to safeguard water as a living system.'
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden transition-all duration-300 rounded-2xl"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(5, 152, 206, 0.12)' }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-10">
                    <h3 className="font-bold text-2xl mb-4" style={{ color: '#0F172A' }}>{service.title}</h3>
                    <p className="leading-relaxed" style={{ color: '#64748B', fontSize: '16px' }}>{service.desc}</p>
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
        <section ref={impactRef} className="py-32" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Images - Impact Highlights */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={impactInView ? { opacity: 1, x: 0 } : {}}
                className="grid grid-cols-2 gap-5"
              >
                <div className="space-y-5">
                  <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg"
                      alt="Waste Management Impact"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Waste Management</h3>
                      <p className="text-white/90">Cleaner neighborhoods and circular recovery systems</p>
                    </div>
                  </div>
                  <div className="relative h-[260px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/SWA Accountability and Commitments Forum/WhatsApp Image 2026-02-06 at 14.05.51.jpeg"
                      alt="SWA Accountability and Commitments Forum"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">SWA Forum</h3>
                      <p className="text-white/90">Accountability and commitments for sustainable WASH</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 pt-10">
                  <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/AI wATER PREDICTING TOOL/human-ai-touch-connection-technology-innovation.jpg"
                      alt="AI Water Quality Impact"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">AI Water Quality</h3>
                      <p className="text-white/90">Real-time insights that protect health and ecosystems</p>
                    </div>
                  </div>
                  <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/WETLANDS/green-grass-growing-near-lake.jpg"
                      alt="Ecosystem Protection"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Ecosystem Protection</h3>
                      <p className="text-white/90">Wetland restoration and biodiversity protection</p>
                    </div>
                  </div>
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
            MEDIA GALLERY SECTION
        ============================================ */}
        <section className="py-32" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-main">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="section-label justify-center mb-6">
                Our Work in Action
              </div>
              <h2 className="heading-lg mb-6" style={{ color: '#0598CE' }}>
                Media Gallery
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
                Capturing moments of impact and transformation across our communities
              </p>
            </motion.div>

            {/* Waste Management Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#0598CE' }}>
                Waste Management Initiatives
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  '/waste management/IMG_0582.png',
                  '/waste management/IMG_0583.png',
                  '/waste management/IMG_0585(1).png',
                  '/waste management/IMG_0594.png',
                  '/waste management/IMG_0595.png',
                  '/waste management/IMG_0596.png',
                  '/waste management/IMG_0597.png',
                  '/waste management/IMG_0598.png',
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`Waste Management ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* KEWASNET Coffee Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#0598CE' }}>
                KEWASNET Coffee Connect
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  '/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.27.jpeg',
                  '/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.27(1).jpeg',
                  '/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.28.jpeg',
                  '/KEWASNET COFFE CONNECT/WhatsApp Image 2026-01-26 at 23.31.28(1).jpeg',
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`KEWASNET Coffee Connect ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* SWA Accountability and Commitments Forum Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#0598CE' }}>
                SWA Accountability and Commitments Forum
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  '/SWA Accountability and Commitments Forum/WhatsApp Image 2026-02-06 at 14.05.50(1).jpeg',
                  '/SWA Accountability and Commitments Forum/WhatsApp Image 2026-02-06 at 14.05.51.jpeg',
                  '/SWA Accountability and Commitments Forum/WhatsApp Image 2026-02-06 at 14.05.51(1).jpeg',
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`SWA Accountability Forum ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================
            CONTACT SECTION
        ============================================ */}
        <section className="py-32" style={{ backgroundColor: '#F1F7FB' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="section-label justify-center mb-6">Contact Us</div>
              <h2 className="heading-lg mb-6" style={{ lineHeight: '1.2' }}>
                Get in <span style={{ color: '#0598CE' }}>Touch</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Have questions or ready to partner with us? We’d love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/ocean-with-some-islands.jpg"
                  alt="Contact"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-sm uppercase tracking-wider mb-2">Let’s Talk</div>
                  <div className="text-2xl font-bold">Partner with Uhai WashWise</div>
                </div>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: FiMapPin, title: 'Address', content: 'Posta Flats, Ondiek Road, Kisumu, Kenya\nP.O. Box 865-40123' },
                  { icon: FiMail, title: 'Email', content: 'info@uhaiwashwise.org', href: 'mailto:info@uhaiwashwise.org' },
                  { icon: FiArrowRight, title: 'Website', content: 'www.uhaiwashwise.org', href: 'http://www.uhaiwashwise.org' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl"
                    style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(5, 152, 206, 0.12)' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E6F5F9' }}>
                        <item.icon size={20} style={{ color: '#0598CE' }} />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1" style={{ color: '#0F172A' }}>{item.title}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm hover:underline" style={{ color: '#0598CE' }}>
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-sm whitespace-pre-line" style={{ color: '#64748B' }}>
                            {item.content}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div>
                  <Link href="/contact" className="btn-primary">
                    Send Us a Message
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
