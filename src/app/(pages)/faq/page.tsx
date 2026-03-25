import { Metadata } from 'next'
import { FAQContent } from '@/components/FAQContent'

export const metadata: Metadata = {
  title: 'FAQ - Startup Summit 2026',
  description: 'Find answers to frequently asked questions about Startup Summit 2026. Learn about event details, registration, dress code, and more to make the most of your experience.',
  keywords: 'FAQ, frequently asked questions, event information, registration details, startup summit help, event guidelines',
  openGraph: {
    title: 'FAQ - Startup Summit 2026',
    description: 'Find answers to frequently asked questions about Startup Summit 2026.',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Startup Summit 2026',
    description: 'Find answers to frequently asked questions about Startup Summit 2026.',
    images: ['/images/og-image.png'],
  },
}

export default function FAQPage() {
  return <FAQContent />
} 