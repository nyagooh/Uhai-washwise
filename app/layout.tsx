import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Uhai WashWise | Water Security & Climate Resilience for Africa',
  description: 'Empowering communities through sustainable water management, waste-to-resource solutions, and AI-driven environmental monitoring across East Africa.',
  keywords: ['water security', 'climate resilience', 'Africa', 'NGO', 'sustainability', 'waste management'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
