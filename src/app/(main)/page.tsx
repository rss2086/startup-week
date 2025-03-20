import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { OrganizersCallout } from '@/components/OrganizingTeamCallout'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { KeynoteSpeakers } from '@/components/KeynoteSpeakers'
import { LogoMarquee } from '@/components/LogoMarquee'
import { TicketPricing } from '@/components/TicketPricing'
import { getEventTickets, getEventDiscounts, EventbriteTicket } from '@/lib/eventbrite'

export default async function Home() {
  const eventId = '1248998310569'
  const [tickets, discountsData] = await Promise.all([
    getEventTickets(eventId),
    getEventDiscounts(eventId)
  ])

  console.log("discountsData", discountsData)
  
  // Process tickets with discount information if available
  let processedTickets = [...tickets]
  
  // Find the most expensive ticket
  if (processedTickets.length > 0) {
    // Sort by price, descending
    const sortedByPrice = [...processedTickets].sort((a, b) => b.cost.value - a.cost.value)
    const mostExpensiveTicket = sortedByPrice[0]
    
    // Apply a hardcoded 20% discount to the most expensive ticket (presumed to be $150)
    if (mostExpensiveTicket && mostExpensiveTicket.cost.value === 15000) { // 15000 cents = $150
      const originalValue = mostExpensiveTicket.cost.value
      const discountedValue = 12000 // 12000 cents = $120 (20% off $150)
      
      // Find the index of this ticket in the original array
      const ticketIndex = processedTickets.findIndex(t => t.id === mostExpensiveTicket.id)
      
      if (ticketIndex !== -1) {
        // Apply the discount
        processedTickets[ticketIndex] = {
          ...mostExpensiveTicket,
          cost: {
            ...mostExpensiveTicket.cost,
            value: discountedValue,
            display: `$${(discountedValue / 100).toFixed(2)}`
          },
          discount: {
            percent_off: 20,
            code: "STARTUP20",
            original_price: originalValue
          }
        }
      }
    }
  }
  
  // Filter out sold-out tickets (where quantity_sold equals quantity_total or status is 'sold_out')
  const availableTickets = processedTickets.filter(ticket => {
    const isSoldOut = ticket.status === 'sold_out' || 
                     (ticket.quantity_total > 0 && ticket.quantity_sold >= ticket.quantity_total);
    return !isSoldOut;
  });
  
  return (
    <>
      <Hero />
      <TicketPricing tickets={availableTickets} />
      <KeynoteSpeakers />
      <Sponsors onHomePage={true} />
      <Speakers />
      <OrganizersCallout />
      <Schedule />
    </>
  )
}
