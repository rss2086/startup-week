import { Metadata } from 'next'
import { Schedule } from '@/components/Schedule'

export const metadata: Metadata = {
  title: 'Schedule - Startup Summit 2026',
  description: 'View the full schedule for Startup Summit 2026 on March 27, featuring panels, keynotes, and networking at Sheraton University City.',
  keywords: 'startup summit schedule, events, panels, keynotes, networking, conference agenda',
  openGraph: {
    title: 'Schedule - Startup Summit 2026',
    description: 'View the full schedule for Startup Summit 2026, March 27.',
    images: ['/images/schedule-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule - Startup Summit 2026',
    description: 'View the full schedule for Startup Summit 2026, March 27.',
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