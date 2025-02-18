import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { OrganizersCallout } from '@/components/OrganizingTeamCallout'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { KeynoteSpeakers } from '@/components/KeynoteSpeakers'
import { LogoMarquee } from '@/components/LogoMarquee'
import { TicketPricing } from '@/components/TicketPricing'
import { getEventTickets, listEvents } from '@/lib/eventbrite'

export default async function Home() {
  const tickets = await getEventTickets('1248998310569')
  
  return (
    <>
      <Hero />
      <TicketPricing tickets={tickets} />
      <KeynoteSpeakers />
      <Sponsors onHomePage={true} />
      <Speakers />
      <OrganizersCallout />
      <Schedule />
    </>
  )
}
