import { Metadata } from 'next'
import { SummitContent } from '@/components/SummitContent'

export const metadata: Metadata = {
  title: 'Startup Summit 2026',
  description: 'Join us at Sheraton University City for Startup Summit 2026, featuring keynote speakers Gordon Ritter and Sandeep Acharya, along with panels on Deep Tech, Enterprise AI, Healthcare, and Crypto.',
  keywords: 'startup summit, Sheraton University City, keynote speakers, Gordon Ritter, Sandeep Acharya, deep tech, enterprise AI, healthcare innovation, crypto',
  openGraph: {
    title: 'Startup Summit 2026',
    description: 'Join us at Sheraton University City for Startup Summit 2026.',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Summit 2026',
    description: 'Join us at Sheraton University City for Startup Summit 2026.',
    images: ['/images/og-image.png'],
  },
}

export default function SummitPage() {
  return <SummitContent />
} 