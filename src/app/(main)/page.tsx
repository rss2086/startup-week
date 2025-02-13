import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { OrganizersCallout } from '@/components/OrganizingTeamCallout'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { KeynoteSpeakers } from '@/components/KeynoteSpeakers'
import { LogoMarquee } from '@/components/LogoMarquee'

export const metadata: Metadata = {
  title: 'Startup Week 2025 - Wharton Entrepreneurship Club',
  description: 'Join us for Startup Week 2025, a week-long celebration of entrepreneurship featuring industry leaders, innovative founders, and transformative ideas. Experience keynotes, panels, and networking events, culminating in our Startup Summit at Fitler Club.',
  keywords: 'Wharton, entrepreneurship, startup week, business conference, networking, venture capital, founders, innovation',
  openGraph: {
    title: 'Startup Week 2025 - Wharton Entrepreneurship Club',
    description: 'Join us for Startup Week 2025, featuring industry leaders, innovative founders, and transformative ideas.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Week 2025 - Wharton Entrepreneurship Club',
    description: 'Join us for Startup Week 2025, featuring industry leaders, innovative founders, and transformative ideas.',
    images: ['/images/og-image.png'],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <KeynoteSpeakers />
      <Sponsors onHomePage={true} />
      <Speakers />
      <OrganizersCallout />
      <Schedule />
    </>
  )
}
