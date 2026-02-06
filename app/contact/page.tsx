'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-secondary-900">
          <div className="absolute inset-0">
            <Image
              src="/ChatGPT Image Feb 6, 2026, 12_40_42 PM.png"
              alt="Hero Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="container-main relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="section-label text-primary-400 before:bg-primary-400 justify-center">
                Contact Us
              </div>
              <h1 className="heading-xl text-white mb-6">
                Let's Work{' '}
                <span className="text-primary-500">Together</span>
              </h1>
              <p className="text-secondary-300 text-xl max-w-2xl mx-auto">
                Have questions or ready to partner with us? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <h2 className="heading-md mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">Our Location</h4>
                      <p className="text-secondary-500">Kisumu, Kenya<br />East Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">Phone Number</h4>
                      <p className="text-secondary-500">+254 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">Email Address</h4>
                      <p className="text-secondary-500">info@uhaiwashwise.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiClock className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">Working Hours</h4>
                      <p className="text-secondary-500">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-bold text-secondary-900 mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: FaXTwitter, href: '#' },
                      { icon: FaLinkedinIn, href: '#' },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="w-10 h-10 bg-secondary-100 hover:bg-primary-500 text-secondary-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <item.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-secondary-50 rounded-2xl p-8 lg:p-12">
                  <h2 className="heading-md mb-2">Send Us a Message</h2>
                  <p className="text-body-sm mb-8">Fill out the form below and we'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-secondary-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="donation">Donation</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn-primary w-full md:w-auto ${isSubmitted ? 'bg-accent-500 hover:bg-accent-500' : ''}`}
                    >
                      {isSubmitted ? (
                        <>
                          <FiCheck />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiSend />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-secondary-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <FiMapPin className="text-primary-500 text-4xl mx-auto mb-4" />
              <p className="text-secondary-600">Interactive map coming soon</p>
              <p className="text-secondary-500 text-sm">Kisumu, Kenya</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
