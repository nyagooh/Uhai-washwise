'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'What We Do', href: '/services' },
  { name: 'Impacts', href: '/impacts' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
        style={{
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          boxShadow: 'none',
        }}
      >
        <div className="container-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
                <Image
                  src="/ChatGPT Image Feb 6, 2026, 11_23_47 AM.png"
                  alt="Uhai WashWise"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-medium transition-colors duration-300"
                  style={{
                    color: pathname === link.href
                      ? '#0598CE'
                      : 'rgba(255,255,255,0.9)',
                  }}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: '#0598CE' }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-semibold rounded-lg transition-all duration-300"
                style={{ backgroundColor: '#0598CE', color: '#FFFFFF' }}
              >
                Partner With Us
                <FiArrowRight size={14} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg"
                style={{ color: '#FFFFFF' }}
              >
                {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ backgroundColor: '#0B1F33' }}
          >
            <div className="flex-1 flex flex-col justify-center container-full">
              <nav className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 font-display text-3xl sm:text-4xl font-bold transition-colors"
                      style={{
                        color: pathname === link.href ? '#0598CE' : 'rgba(255,255,255,0.6)',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 space-y-2 text-sm"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                <p>0710433161 / 0724318117</p>
                <p>uhaiwashwise@outlook.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
