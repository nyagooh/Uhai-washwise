'use client'

import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Our Team', href: '/team' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact Us', href: '/contact' },
]

const services = [
  'Knowledge Management',
  'Environmental Monitoring',
  'Water Resources',
  'Waste Management',
  'Research & Innovation',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0598CE', color: '#FFFFFF' }}>
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl" style={{ color: '#0598CE' }}>U</span>
              </div>
              <span className="font-display font-bold text-xl">
                Uhai<span style={{ color: '#FFFFFF' }}>WashWise</span>
              </span>
            </Link>
            <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Empowering communities through sustainable water management and climate resilience solutions across East Africa.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors flex items-center gap-2 group hover:opacity-80"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" style={{ color: '#0598CE' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0" size={20} style={{ color: '#FFFFFF' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Posta Flats, Ondiek Road<br />
                  Kisumu, Kenya<br />
                  P.O. Box 865–40123, Kisumu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="flex-shrink-0" size={20} style={{ color: '#FFFFFF' }} />
                <a href="mailto:info@uhaiwashwise.org" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>info@uhaiwashwise.org</a>
              </li>
              <li className="flex items-center gap-3">
                <FiArrowRight className="flex-shrink-0" size={20} style={{ color: '#FFFFFF' }} />
                <a href="http://www.uhaiwashwise.org" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>www.uhaiwashwise.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div className="container-main py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            © {new Date().getFullYear()} Uhai WashWise. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:opacity-80 transition-opacity" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
