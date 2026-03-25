import { Metadata } from 'next'
import { Sponsors } from '@/components/Sponsors'

export const metadata: Metadata = {
  title: 'Sponsors - Startup Summit 2026',
  description: 'Meet the organizations and companies supporting Startup Summit 2026. Learn about sponsorship opportunities and join our community of innovative partners.',
  keywords: 'startup summit sponsors, corporate partners, sponsorship opportunities, business partnerships, innovation partners',
  openGraph: {
    title: 'Sponsors - Startup Summit 2026',
    description: 'Meet the organizations and companies supporting Startup Summit 2026.',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sponsors - Startup Summit 2026',
    description: 'Meet the organizations and companies supporting Startup Summit 2026.',
    images: ['/images/og-image.png'],
  },
}

export default function SponsorsPage() {
  return (
    <div className="relative">
      <Sponsors onHomePage={false} />
    </div>
  )
} 