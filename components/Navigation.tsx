'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Impacts', href: '/impacts' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block py-2" style={{ backgroundColor: '#0598CE', color: '#FFFFFF' }}>
        <div className="container-main flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FiPhone style={{ color: '#FFFFFF' }} />
              +254 123 456 789
            </span>
            <span>info@uhaiwashwise.org</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}><FaFacebookF /></a>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}><FaTwitter /></a>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}><FaLinkedinIn /></a>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg py-2' 
            : 'backdrop-blur-sm py-4'
        }`}
        style={{ 
          backgroundColor: isScrolled ? '#FFFFFF' : 'rgba(255, 255, 255, 0.95)',
          boxShadow: isScrolled ? '0 4px 6px rgba(27, 95, 122, 0.08)' : 'none'
        }}
      >
        <div className="container-main">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0598CE' }}>
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl" style={{ color: '#1A1A1A' }}>
                  Uhai<span style={{ color: '#0598CE' }}>WashWise</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors relative"
                  style={{ 
                    color: pathname === link.href ? '#0598CE' : '#1A1A1A',
                    fontWeight: pathname === link.href ? 600 : 500
                  }}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: '#0598CE' }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" className="btn-donate">
                Donate Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2"
              style={{ color: '#1A1A1A' }}
            >
              {isMobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 shadow-xl z-40 lg:hidden overflow-hidden"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px rgba(27, 95, 122, 0.08)' }}
          >
            <nav className="container-main py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    pathname === link.href ? '' : 'hover:opacity-80'
                  }`}
                  style={{ 
                    backgroundColor: pathname === link.href ? '#E6F5F9' : 'transparent',
                    color: pathname === link.href ? '#0598CE' : '#1A1A1A',
                    fontWeight: pathname === link.href ? 600 : 500
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn-donate mt-4 text-center"
              >
                Donate Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
