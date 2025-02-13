import { Metadata } from 'next'
import { FAQContent } from '@/components/FAQContent'

export const metadata: Metadata = {
  title: 'FAQ - Startup Week 2025',
  description: 'Find answers to frequently asked questions about Startup Week 2025. Learn about event details, registration, dress code, and more to make the most of your experience.',
  keywords: 'FAQ, frequently asked questions, event information, registration details, startup week help, event guidelines',
  openGraph: {
    title: 'FAQ - Startup Week 2025',
    description: 'Find answers to frequently asked questions about Startup Week 2025.',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Startup Week 2025',
    description: 'Find answers to frequently asked questions about Startup Week 2025.',
    images: ['/images/og-image.png'],
  },
}

export default function FAQPage() {
  return <FAQContent />
} 