import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Uhai WashWise | Water Quality Intelligence & Climate Resilience',
  description: 'AI-powered water quality monitoring, predictive intelligence, and climate resilience solutions for East Africa. Turning data into action, waste into opportunity.',
  keywords: ['water quality', 'AI monitoring', 'climate resilience', 'Africa', 'sustainability', 'predictive intelligence'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans overflow-x-hidden">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
