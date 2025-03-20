'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { EventbriteTicket } from '@/lib/eventbrite'
import { useEffect, useState } from 'react'

interface TicketPricingProps {
  tickets: EventbriteTicket[]
}

export function TicketPricing({ tickets }: TicketPricingProps) {
  // Sort tickets by their price
  const sortedTickets = [...tickets].sort((a, b) => a.cost.value - b.cost.value)
  
  // Add CSS for the gradient animation
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
    
    // Add the animation styles
    if (typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.innerHTML = `
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradientMove 3s ease infinite;
          background-size: 200% 200%;
        }
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#2b1c8c] to-[#1a1150] ">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sortedTickets.map((ticket, index) => {
            const isHighlighted = ticket.name.toLowerCase().includes('super early bird')
            const spotsLeft = ticket.quantity_total - ticket.quantity_sold
            const isAvailable = ticket.status === 'on_sale'
            const price = ticket.cost.value / 100 // Convert from cents to dollars
            const fee = ticket.fee.value / 100
            
            // Handle discount information
            const hasDiscount = ticket.discount && (ticket.discount.percent_off || ticket.discount.amount_off)
            const discountPercentage = ticket.discount?.percent_off || 0
            const discountAmount = ticket.discount?.amount_off ? ticket.discount.amount_off / 100 : 0
            const originalPrice = ticket.discount?.original_price ? ticket.discount.original_price / 100 : price
            
            // Calculate the final price with discount
            let finalPrice = price
            let discountDisplay = ''
            
            if (hasDiscount) {
              if (discountPercentage) {
                discountDisplay = `${discountPercentage}% off`
              } else if (discountAmount) {
                discountDisplay = `$${discountAmount.toFixed(2)} off`
              }
            }

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
                    : hasDiscount 
                      ? 'border-[#ff9e65]/40 bg-[#ff9e65]/5' 
                      : 'border-white/10 bg-white/5'
                } p-6 overflow-hidden group hover:shadow-lg hover:shadow-black/5 transition-all duration-300`}
              >
                {hasDiscount && isMounted && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff9e65]/0 via-[#ff9e65]/20 to-[#ff9e65]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-sm animate-gradient pointer-events-none"></div>
                )}
                
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
                
                {/* Discount Badge */}
                {hasDiscount && (
                  <div className={`absolute ${isHighlighted ? 'top-12' : 'top-3'} right-3`}>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ff9e65]/20 backdrop-blur-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9e65] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff9e65]"></span>
                      </span>
                      <span className="text-[#ff9e65] text-xs font-medium">{discountDisplay}</span>
                    </div>
                  </div>
                )}

                {/* Ticket Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">{ticket.name}</h3>
                  
                  {/* Price Display */}
                  <div className="flex items-baseline text-white mb-4">
                    {hasDiscount ? (
                      <>
                        <span className="text-4xl font-bold tracking-tight">${price.toFixed(2)}</span>
                        <span className="ml-2 text-gray-400 line-through text-sm">${originalPrice.toFixed(2)}</span>
                        <span className="ml-1 text-sm text-gray-400">+${fee.toFixed(2)} Fee</span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-bold tracking-tight">${price.toFixed(2)}</span>
                        <span className="ml-1 text-sm text-gray-400">+${fee.toFixed(2)} Fee</span>
                      </>
                    )}
                  </div>
                  
                  {/* Savings Callout */}
                  {hasDiscount && discountPercentage > 0 && (
                    <div className="mb-4 p-2 bg-[#ff9e65]/10 rounded-lg border border-[#ff9e65]/20">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-[#ff9e65]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.38 21.646A9.979 9.979 0 0 0 10 21.944V14H7l6-6 6 6h-3v7.942c.343-.059.682-.132 1.016-.219l.458 1.942A12 12 0 1 1 8.998 4.947l.992-1.749A14 14 0 1 0 22 12c0 .338-.014.672-.04 1.003l-1.994-.235a12.02 12.02 0 0 1-10.586 8.878ZM5 12a7 7 0 0 1 8.326-6.88A5 5 0 0 0 19 10v2A7 7 0 0 1 5 12Z" />
                        </svg>
                        <span className="text-sm font-medium text-[#ff9e65]">
                          Save {discountPercentage}% with this offer
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Time-Limited Indicator for Discounts */}
                  {hasDiscount && (
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="text-xs text-gray-400">Limited time offer</span>
                    </div>
                  )}
                  
                  {/* Discount Code
                  {ticket.discount?.code && (
                    <div className="mb-4 p-2 bg-white/10 rounded-md">
                      <p className="text-xs text-gray-300 mb-1">Use code at checkout:</p>
                      <div className="flex justify-between items-center">
                        <code className="text-[#ff9e65] font-mono font-semibold">{ticket.discount.code}</code>
                        <button 
                          className="text-xs text-gray-300 hover:text-white" 
                          onClick={() => navigator.clipboard.writeText(ticket.discount?.code || '')}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  )} */}
                  
                  {/* Description */}
                  {ticket.description && (
                    <p className="text-sm text-gray-400 mb-4">{ticket.description}</p>
                  )}

                  {/* Ticket Availability */}
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
                      className={`w-full justify-center group/button ${
                        hasDiscount ? 'bg-[#ff9e65] hover:bg-[#ff8c4a] text-white' : ''
                      }`}
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
                <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                  hasDiscount ? 'bg-[#ff9e65]/10' : 'bg-[#9eff65]/10'
                }`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 