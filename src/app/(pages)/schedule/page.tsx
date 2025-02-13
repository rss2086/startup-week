import { Metadata } from 'next'
import { Schedule } from '@/components/Schedule'

export const metadata: Metadata = {
  title: 'Schedule - Startup Week 2025',
  description: 'View the full schedule for Startup Week 2025, featuring daily events from March 17-21, including panels, workshops, networking sessions, and our flagship Startup Summit.',
  keywords: 'startup week schedule, events, panels, workshops, networking, startup summit, conference agenda',
  openGraph: {
    title: 'Schedule - Startup Week 2025',
    description: 'View the full schedule for Startup Week 2025, March 17-21.',
    images: ['/images/schedule-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule - Startup Week 2025',
    description: 'View the full schedule for Startup Week 2025, March 17-21.',
    images: ['/images/schedule-og.jpg'],
  },
}

export default function SchedulePage() {
  return (
    <div className="relative">
      <Schedule />
    </div>
  )
} 