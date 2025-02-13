import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

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
  title: {
    template: '%s - Startup Week 2025',
    default: 'Startup Week 2025 - Wharton Entrepreneurship Club',
  },
  description:
    "Join us for Startup Week 2025, Wharton Entrepreneurship Club's annual flagship event featuring founders, investors, and students. Experience panels, workshops, and networking events, culminating in our Startup Summit at Fitler Club.",
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
    </html>
  )
}
