'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <>
      <main>
        {/* Hero — Dark with Video */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/ocean-with-some-islands.jpg"
          >
            <source src="/uhai-seq.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,51,0.6) 0%, rgba(11,31,51,0.92) 100%)' }} />
          <div className="container-full relative z-10 pb-16 lg:pb-24 pt-40">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fade} className="label-light mb-5">Contact Us</motion.div>
              <motion.h1 variants={fade} className="h-display text-white max-w-3xl">
                Let&apos;s Work <span style={{ color: '#0598CE' }}>Together</span>
              </motion.h1>
            </motion.div>
          </div>
        </section>

        {/* Form — White */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="container-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Info */}
              <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-4">
                <h2 className="h-md text-[#0F172A] mb-10">Get In Touch</h2>
                <div className="space-y-7 mb-10">
                  {[
                    { icon: FiMapPin, title: 'Location', content: 'Posta Flats, Ondiek Road\nKisumu, Kenya\nP.O. Box 865-40123' },
                    { icon: FiPhone, title: 'Phone', content: '0710433161 / 0724318117' },
                    { icon: FiMail, title: 'Email', content: 'uhaiwashwise@outlook.com', href: 'mailto:uhaiwashwise@outlook.com' },
                    { icon: FiClock, title: 'Hours', content: 'Mon - Fri: 8:00 AM - 5:00 PM' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E8F6FC' }}>
                        <item.icon size={16} style={{ color: '#0598CE' }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] mb-0.5">{item.title}</h4>
                        {item.href
                          ? <a href={item.href} className="text-sm hover:underline" style={{ color: '#0598CE' }}>{item.content}</a>
                          : <p className="text-sm whitespace-pre-line text-[#94A3B8]">{item.content}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#0F172A] mb-3">Follow Us</h4>
                  <div className="flex gap-2">
                    {[{ icon: FaXTwitter }, { icon: FaLinkedinIn }].map((item, i) => (
                      <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-[#E8F6FC]" style={{ backgroundColor: '#F8FAFC', color: '#475569' }}>
                        <item.icon size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-8">
                <div className="rounded-2xl p-8 lg:p-12" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
                  <h2 className="h-md text-[#0F172A] mb-2">Send a Message</h2>
                  <p className="body-md mb-8">Fill out the form and we will get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-bold text-[#0F172A] mb-2">Name *</label>
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white text-[#0F172A] text-sm rounded-lg outline-none border border-[#E8EDF2] focus:border-[#0598CE] transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-bold text-[#0F172A] mb-2">Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white text-[#0F172A] text-sm rounded-lg outline-none border border-[#E8EDF2] focus:border-[#0598CE] transition-colors" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-[#0F172A] mb-2">Subject *</label>
                      <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white text-[#0F172A] text-sm rounded-lg outline-none border border-[#E8EDF2] focus:border-[#0598CE] transition-colors">
                        <option value="">Select a subject</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="donation">Donation</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-[#0F172A] mb-2">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white text-[#0F172A] text-sm rounded-lg outline-none border border-[#E8EDF2] focus:border-[#0598CE] transition-colors resize-none" placeholder="Tell us how we can help..." />
                    </div>
                    <button type="submit" className="btn-primary">
                      {sent ? <><FiCheck size={15} /> Sent!</> : <>Send Message <FiSend size={14} /></>}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
