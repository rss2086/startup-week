import { Metadata } from 'next'
import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Speakers } from '@/components/Speakers'

export const metadata: Metadata = {
  title: 'Speakers - Startup Week 2025',
  description: 'Meet our distinguished speakers for Startup Week 2025, including industry leaders, successful founders, and innovative investors sharing their insights and experiences.',
  keywords: 'startup speakers, entrepreneurs, venture capitalists, industry leaders, tech founders, innovation leaders',
  openGraph: {
    title: 'Speakers - Startup Week 2025',
    description: 'Meet our distinguished speakers for Startup Week 2025.',
    images: ['/images/speakers-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speakers - Startup Week 2025',
    description: 'Meet our distinguished speakers for Startup Week 2025.',
    images: ['/images/speakers-og.jpg'],
  },
}

export default function SpeakersPage() {
  return (
    <div className="relative">
      <Speakers />
    </div>
  )
} 