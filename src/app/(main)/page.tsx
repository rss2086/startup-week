import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { OrganizersCallout } from '@/components/OrganizingTeamCallout'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { KeynoteSpeakers } from '@/components/KeynoteSpeakers'
import { LogoMarquee } from '@/components/LogoMarquee'
import { TicketPricing } from '@/components/TicketPricing'

export default function Home() {
  return (
    <>
      <Hero />
      <TicketPricing />
      <KeynoteSpeakers />
      <Sponsors onHomePage={true} />
      <Speakers />
      <OrganizersCallout />
      <Schedule />
    </>
  )
}
