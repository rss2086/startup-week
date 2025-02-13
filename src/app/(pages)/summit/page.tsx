import { Metadata } from 'next'
import { SummitContent } from '@/components/SummitContent'

export const metadata: Metadata = {
  title: 'Startup Summit - Startup Week 2025',
  description: 'Join us at Fitler Club for our flagship Startup Summit event, featuring keynote speakers Gordon Ritter and Sandeep Acharya, along with panels on Deep Tech, Enterprise AI, Healthcare, and Crypto.',
  keywords: 'startup summit, Fitler Club, keynote speakers, Gordon Ritter, Sandeep Acharya, deep tech, enterprise AI, healthcare innovation, crypto',
  openGraph: {
    title: 'Startup Summit - Startup Week 2025',
    description: 'Join us at Fitler Club for our flagship Startup Summit event.',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Summit - Startup Week 2025',
    description: 'Join us at Fitler Club for our flagship Startup Summit event.',
    images: ['/images/og-image.png'],
  },
}

export default function SummitPage() {
  return <SummitContent />
} 