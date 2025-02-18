'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { EventbriteTicket } from '@/lib/eventbrite'

interface TicketPricingProps {
  tickets: EventbriteTicket[]
}

export function TicketPricing({ tickets }: TicketPricingProps) {
  // Sort tickets by their price
  const sortedTickets = [...tickets].sort((a, b) => a.cost.value - b.cost.value)

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#2b1c8c] to-[#1a1150]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <div className="h-px w-3 bg-[#9eff65]/30" />
            <span className="text-[#9eff65] text-sm font-medium tracking-wider uppercase">
              Limited Time Offer
            </span>
            <div className="h-px w-3 bg-[#9eff65]/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Choose Your Pass
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg"
          >
            Join us for an unforgettable week of innovation, networking, and entrepreneurial spirit. Each ticket buys you access to all events, complimentary breakfast, lunch, and snacks, and access to our open bar networking reception.
          </motion.p>
        </div>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedTickets.map((ticket, index) => {
            const isHighlighted = ticket.name.toLowerCase().includes('super early bird')
            const spotsLeft = ticket.quantity_total - ticket.quantity_sold
            const isAvailable = ticket.status === 'on_sale'
            const price = ticket.cost.value / 100 // Convert from cents to dollars
            const fee = ticket.fee.value / 100

            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative rounded-2xl backdrop-blur-sm border flex flex-col h-full ${
                  isHighlighted 
                    ? 'border-[#9eff65]/50 bg-[#9eff65]/10' 
                    : 'border-white/10 bg-white/5'
                } p-6 overflow-hidden group`}
              >
                {/* Highlight Indicator */}
                {isHighlighted && (
                  <div className="absolute top-3 right-3">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#9eff65]/20 backdrop-blur-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9eff65] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9eff65]"></span>
                      </span>
                      <span className="text-[#9eff65] text-xs font-medium">Best Value!</span>
                    </div>
                  </div>
                )}

                {/* Ticket Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">{ticket.name}</h3>
                  <div className="flex items-baseline text-white mb-4">
                    <span className="text-4xl font-bold tracking-tight">${price.toFixed(2)}</span>
                    <span className="ml-1 text-sm text-gray-400">+${fee.toFixed(2)} Fee</span>
                  </div>
                  {ticket.description && (
                    <p className="text-sm text-gray-400 mb-4">{ticket.description}</p>
                  )}

                  {isAvailable && (
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
                      <span className="text-sm font-medium text-[#9eff65]">{spotsLeft}</span>
                      <span className="text-sm text-gray-400">tickets remaining</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  {isAvailable ? (
                    <Button
                      href="https://www.eventbrite.com/e/wharton-startup-week-summit-2025-tickets-1248998310569"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center group/button"
                    >
                      <span className="flex items-center gap-2">
                        Get Ticket Now
                        <svg 
                          className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" 
                          />
                        </svg>
                      </span>
                    </Button>
                  ) : (
                    <span className="inline-flex w-full justify-center rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-gray-400">
                      {ticket.status === 'sold_out' ? 'Sold Out' : 'Coming Soon'}
                    </span>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#9eff65]/10 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 