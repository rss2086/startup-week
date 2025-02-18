import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from "@vercel/analytics/react"

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://startup-week.whartonentrepreneurship.com'),
  title: {
    template: '%s - Startup Week 2025',
    default: 'Startup Week 2025 - Wharton Entrepreneurship Club',
  },
  description:
    "Join us for Startup Week 2025, Wharton Entrepreneurship Club's annual flagship event featuring founders, investors, and students. Experience panels, workshops, and networking events, culminating in our Startup Summit at Fitler Club.",
  keywords: 'Wharton, entrepreneurship, startup week, business conference, networking, venture capital, founders, innovation',
  openGraph: {
    type: 'website',
    siteName: 'Startup Week 2025',
    title: 'Startup Week 2025 - Wharton Entrepreneurship Club',
    description: 'Join us for Startup Week 2025, featuring industry leaders, innovative founders, and transformative ideas.',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Startup Week 2025 - Wharton Entrepreneurship Club',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Week 2025 - Wharton Entrepreneurship Club',
    description: 'Join us for Startup Week 2025, featuring industry leaders, innovative founders, and transformative ideas.',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Startup Week 2025 - Wharton Entrepreneurship Club',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: '#1a1150',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="relative min-h-full overflow-x-hidden">
        <div className="relative flex min-h-full flex-col">{children}</div>
      </body>
      <Analytics />
    </html>
  )
}
