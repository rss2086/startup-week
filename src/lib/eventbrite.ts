const EVENTBRITE_API_KEY = process.env.EVENTBRITE_API_KEY
const BASE_URL = 'https://www.eventbriteapi.com/v3'

export interface EventbriteTicket {
  id: string
  name: string
  description: string | null
  cost: {
    value: number
    display: string
    currency: string
  }
  fee: {
    value: number
    display: string
    currency: string
  }
  quantity_total: number
  quantity_sold: number
  status: 'on_sale' | 'sold_out' | 'not_yet_on_sale'
}

export interface EventbriteEvent {
  id: string
  name: {
    text: string
    html: string
  }
  description: {
    text: string
    html: string
  }
  start: {
    timezone: string
    local: string
    utc: string
  }
  end: {
    timezone: string
    local: string
    utc: string
  }
  url: string
  status: string
}

// Test helper functions
export function validateEventbriteApiKey(): boolean {
  return !!EVENTBRITE_API_KEY
}

export function validateTicketData(ticket: Partial<EventbriteTicket>): boolean {
  const requiredFields = ['id', 'name', 'cost', 'status']
  return requiredFields.every(field => field in ticket)
}

export function validateEventData(event: Partial<EventbriteEvent>): boolean {
  const requiredFields = ['id', 'name', 'start', 'end', 'status']
  return requiredFields.every(field => field in event)
}

export async function testEventbriteConnection(): Promise<boolean> {
  if (!EVENTBRITE_API_KEY) {
    return false
  }

  try {
    const response = await fetch(`${BASE_URL}/users/me/`, {
      headers: {
        'Authorization': `Bearer ${EVENTBRITE_API_KEY}`,
        'Accept': 'application/json'
      }
    })
    return response.ok
  } catch (error) {
    return false
  }
}

export async function getOrganizationEvents(): Promise<EventbriteEvent[]> {
  if (!EVENTBRITE_API_KEY) {
    throw new Error('EVENTBRITE_API_KEY is not set')
  }

  // First get organization ID
  const meUrl = `${BASE_URL}/users/me/organizations/`
  
  try {
    const orgResponse = await fetch(meUrl, {
      headers: {
        'Authorization': `Bearer ${EVENTBRITE_API_KEY}`,
        'Accept': 'application/json'
      },
      next: { revalidate: 3600 }
    })

    console.log('\n\n\nOrganization Response:\n\n\n', orgResponse)

    if (!orgResponse.ok) {
      const errorText = await orgResponse.text()
      throw new Error(`Failed to fetch organization: ${orgResponse.status} ${errorText}`)
    }

    const orgData = await orgResponse.json()
    const organizationId = orgData.organizations[0].id

    // Then get events for that organization
    const eventsUrl = `${BASE_URL}/organizations/${organizationId}/events/`
    
    const eventsResponse = await fetch(eventsUrl, {
      headers: {
        'Authorization': `Bearer ${EVENTBRITE_API_KEY}`,
        'Accept': 'application/json'
      },
      next: { revalidate: 3600 }
    })

    if (!eventsResponse.ok) {
      const errorText = await eventsResponse.text() 
      throw new Error(`Failed to fetch events: ${eventsResponse.status} ${errorText}`)
    }

    const eventsData = await eventsResponse.json()
    console.log('Organization Events:', JSON.stringify(eventsData.events, null, 2))
    return eventsData.events

  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}


export async function listEvents(urlPattern?: string): Promise<void> {
  if (!EVENTBRITE_API_KEY) {
    throw new Error('EVENTBRITE_API_KEY is not set')
  }

  try {
    const events = await getOrganizationEvents()
    
    // Filter events if urlPattern is provided
    const filteredEvents = urlPattern 
      ? events.filter(event => event.url.includes(urlPattern))
      : events

    console.log(`\nListing events${urlPattern ? ` with URL containing "${urlPattern}"` : ''}:`)
    filteredEvents.forEach(event => {
      console.log(`\nEvent: ${event.name.text}`)
      console.log(`ID: ${event.id}`)
      console.log(`Start: ${new Date(event.start.local).toLocaleString()}`)
      console.log(`Status: ${event.status}`)
      console.log(`URL: ${event.url}`)
      console.log('----------------------------------------')
    })

    if (urlPattern && filteredEvents.length === 0) {
      console.log(`No events found with URL containing "${urlPattern}"`)
    }
    
  } catch (error) {
    console.error('Error listing events:', error)
    throw error
  }
}


export async function getEventTickets(eventId: string): Promise<EventbriteTicket[]> {
  if (!EVENTBRITE_API_KEY) {
    throw new Error('EVENTBRITE_API_KEY is not set')
  }

  // Get tickets for specific event
  const ticketsUrl = `${BASE_URL}/events/${eventId}/ticket_classes/`

  try {
    const ticketsResponse = await fetch(ticketsUrl, {
      headers: {
        'Authorization': `Bearer ${EVENTBRITE_API_KEY}`,
        'Accept': 'application/json'
      },
      next: { revalidate: 60 }
    })

    if (!ticketsResponse.ok) {
      const errorText = await ticketsResponse.text()
      throw new Error(`Failed to fetch tickets: ${ticketsResponse.status} ${errorText}`)
    }

    const ticketsData = await ticketsResponse.json()
    
    // Transform the API response to match our interface
    const transformedTickets: EventbriteTicket[] = ticketsData.ticket_classes.map((ticket: any) => ({
      id: ticket.id,
      name: ticket.name,
      description: ticket.description,
      cost: ticket.cost,
      fee: ticket.fee,
      quantity_total: ticket.quantity_total,
      quantity_sold: ticket.quantity_sold,
      status: mapTicketStatus(ticket.on_sale_status)
    }))

    return transformedTickets

  } catch (error) {
    console.error('Error fetching tickets:', error)
    throw error
  }
}

// Helper function to map Eventbrite status to our status types
function mapTicketStatus(status: string): EventbriteTicket['status'] {
  switch (status) {
    case 'AVAILABLE':
      return 'on_sale'
    case 'SOLD_OUT':
      return 'sold_out'
    case 'NOT_YET_ON_SALE':
      return 'not_yet_on_sale'
    default:
      return 'not_yet_on_sale'
  }
}

export async function getEventDetails(eventId: string) {
  if (!EVENTBRITE_API_KEY) {
    throw new Error('EVENTBRITE_API_KEY is not set')
  }

  const url = `${BASE_URL}/events/${eventId}/`

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${EVENTBRITE_API_KEY}`,
        'Accept': 'application/json'
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to fetch event details: ${response.status} ${errorText}`)
    }

    const data = await response.json()
    console.log('Event Details:', JSON.stringify(data, null, 2))
    return data
  } catch (error) {
    console.error('Error fetching event details:', error)
    throw error
  }
}