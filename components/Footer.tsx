'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiArrowRight, FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'What We Do', href: '/services' },
  { name: 'Our Impact', href: '/impacts' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  'AI Data Visualization',
  'Water Quality Intelligence',
  'Waste Management',
  'Environmental Assessments',
  'Research & Innovation',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B1F33' }}>
      {/* CTA Band */}
      <div className="container-full py-16 lg:py-20" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ready to make an impact together?
            </h3>
            <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Partner with us to build water security and climate resilience across East Africa.
            </p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Get in Touch <FiArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-full py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <div className="w-16 h-16 relative bg-white rounded-lg p-1">
                <Image
                  src="/ChatGPT Image Feb 6, 2026, 11_23_47 AM.png"
                  alt="Uhai WashWise"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              AI-powered water quality intelligence and climate resilience solutions for East Africa.
            </p>
            <div className="flex gap-2">
              {[
                { icon: FaXTwitter, href: '#' },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/uhai-washwise' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                >
                  <item.icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-bold text-white mb-5">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-300 hover:text-white flex items-center gap-1 group" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {link.name}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={10} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-bold text-white mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-bold text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <li className="flex items-start gap-2">
                <FiMapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }} />
                <span>Posta Flats, Ondiek Road<br/>Kisumu, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={14} className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }} />
                <span>0710433161 / 0724318117</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={14} className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }} />
                <a href="mailto:uhaiwashwise@outlook.com" className="hover:text-white transition-colors">uhaiwashwise@outlook.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container-full py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} Uhai WashWise. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
