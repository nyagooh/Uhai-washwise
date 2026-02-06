'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiArrowRight, FiCheckCircle, FiMapPin, FiMail } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const impactProjects = [
  {
    title: 'AI Water Quality Monitoring',
    description: 'Our flagship innovation uses AI-powered technology to monitor and predict water quality in real-time across East African communities. This tool translates scientific and environmental data into actionable insights, enabling early warning systems, rapid response, ecosystem protection, and long-term biodiversity restoration.',
    image: '/AI wATER PREDICTING TOOL/Dashboard.png',
    link: '/projects/ai-water-quality',
    gallery: [
      '/AI wATER PREDICTING TOOL/Dashboard.png',
      '/AI wATER PREDICTING TOOL/Dashboard2.png',
      '/AI wATER PREDICTING TOOL/unrecognizable-ecologist-standing-where-sewage-waste-water-meets-river-taking-samples-determine-level-contamination-pollution.jpg',
    ],
    stats: [
      { label: 'Communities Served', value: '50+' },
      { label: 'Data Points Analyzed', value: '1M+' },
      { label: 'Early Warnings Issued', value: '200+' }
    ],
    highlights: [
      'Real-time water quality monitoring',
      'Predictive analytics for contamination',
      'Early warning system implementation',
      'Biodiversity restoration tracking',
      'Community health impact assessment'
    ]
  },
  {
    title: 'Waste Management Solutions',
    description: 'We design and implement circular economy solutions that transform waste into valuable resources. Our waste management initiatives close the loop between waste, water, and ecosystems, with a strong focus on community-grounded action and sustainable practices.',
    image: '/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg',
    link: '/projects/waste-management',
    gallery: [
      '/waste management/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg',
      '/waste management/IMG_0596.png',
      '/waste management/pollution-concept-water-with-garbage.jpg',
    ],
    stats: [
      { label: 'Waste Diverted', value: '500+ Tons' },
      { label: 'Jobs Created', value: '150+' },
      { label: 'Communities Impacted', value: '30+' }
    ],
    highlights: [
      'Waste-to-resource transformation',
      'Community-based collection systems',
      'Circular economy implementation',
      'Environmental education programs',
      'Sustainable livelihood creation'
    ]
  }
]

export default function ImpactsPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#0598CE' }}>
          <div className="absolute inset-0">
            <Image
              src="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
              alt="Hero Background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label justify-center mb-4 md:mb-6 text-xs md:text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <span className="w-2 h-2 rounded-full bg-white inline-block mr-2"></span>
                Our Impact
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2" style={{ color: '#FFFFFF' }}>
                Creating Lasting{' '}
                <span style={{ color: '#FFFFFF' }}>Change</span>
              </h1>
              <p className="text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-2" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Through innovation and community partnership, we&apos;re transforming lives and protecting our environment for future generations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Projects */}
        {impactProjects.map((project, index) => (
          <section 
            key={project.title}
            className="py-16 md:py-32" 
            style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}
          >
            <div className="container-main px-4">
              <div className={`grid lg:grid-cols-2 gap-10 md:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-5">
                      <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={project.gallery[0]}
                          alt={`${project.title} highlight`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={project.gallery[1]}
                          alt={`${project.title} detail`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-5 pt-10">
                      <div className="relative h-[260px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={project.gallery[2]}
                          alt={`${project.title} in action`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <h2 className="heading-lg mb-6" style={{ color: '#0598CE' }}>
                    {project.title}
                  </h2>
                  <p className="text-body mb-8">
                    {project.description}
                  </p>
                  <p className="text-body-sm mb-8" style={{ color: '#64748B' }}>
                    From field data collection to community implementation, each project combines science, local knowledge,
                    and practical delivery to achieve measurable outcomes.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-10 p-6 rounded-2xl" style={{ backgroundColor: index % 2 === 0 ? '#F9FAFB' : '#FFFFFF' }}>
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-bold mb-2" style={{ color: '#0598CE' }}>
                          {stat.value}
                        </div>
                        <div className="text-sm" style={{ color: '#64748B' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FiCheckCircle className="flex-shrink-0 mt-1" size={20} style={{ color: '#0598CE' }} />
                        <span className="text-body-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={project.link} className="btn-primary">
                    Learn More
                    <FiArrowRight />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}


        {/* Get in Touch */}
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
                          <div className="text-sm" style={{ color: '#64748B' }}>
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
    </>
  )
}
