'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'

const tickets = [
  {
    name: 'UPenn Grad Students',
    price: 55,
    fee: 5.54,
    description: 'For current UPenn graduate students with valid student ID.',
    isAvailable: true,
    isHighlighted: false,
    totalSpots: 100,
    spotsLeft: 42
  },
  {
    name: 'Super Early Bird',
    price: 70,
    fee: 6.54,
    description: 'Limited time offer for early registrants. Only a few spots left!',
    isAvailable: true,
    isHighlighted: true,
    totalSpots: 50,
    spotsLeft: 8
  },
  {
    name: 'Early Bird',
    price: 90,
    fee: 7.88,
    description: 'Special pricing for early registrants. Opens after Super Early Bird sells out.',
    isAvailable: false,
    isHighlighted: false,
    totalSpots: 100,
    spotsLeft: 100
  },
  {
    name: 'Regular',
    price: 105,
    fee: 8.89,
    description: 'Standard admission to all events. Opens after Early Bird sells out.',
    isAvailable: false,
    isHighlighted: false,
    totalSpots: 100,
    spotsLeft: 100
  }
]

export function TicketPricing() {
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
            Join us for an unforgettable week of innovation, networking, and entrepreneurial spirit. Tickets are selling fast!
          </motion.p>
        </div>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative rounded-2xl backdrop-blur-sm border ${
                ticket.isHighlighted 
                  ? 'border-[#9eff65]/50 bg-[#9eff65]/10' 
                  : 'border-white/10 bg-white/5'
              } p-6 overflow-hidden group`}
            >
              {/* Highlight Indicator */}
              {ticket.isHighlighted && (
                <div className="absolute top-3 right-3">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#9eff65]/20 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9eff65] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9eff65]"></span>
                    </span>
                    <span className="text-[#9eff65] text-xs font-medium">Selling Fast!</span>
                  </div>
                </div>
              )}

              {/* Ticket Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{ticket.name}</h3>
                <div className="flex items-baseline text-white">
                  <span className="text-4xl font-bold tracking-tight">${ticket.price}</span>
                  <span className="ml-1 text-sm text-gray-400">+${ticket.fee} Fee</span>
                </div>
                <p className="text-sm text-gray-400">{ticket.description}</p>

                {ticket.isAvailable && (
                  <div className="space-y-2">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-[#9eff65] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(ticket.spotsLeft / ticket.totalSpots) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-[#9eff65]">
                      {ticket.spotsLeft} of {ticket.totalSpots} spots remaining
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-4">
                  {ticket.isAvailable ? (
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
                      Opens After Previous Tier
                    </span>
                  )}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#9eff65]/10 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 