'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

export function LogoMarquee({ className = '' }: { className?: string }) {
  // Company names from 2026 speakers
  const speakerCompanies = [
    'Stan',
    'Bain Capital Ventures',
    'Beli',
    'Google',
    'Pair AI',
    'Skan AI',
    'Precursor Ventures',
    'TMV',
    'Bessemer Venture Partners',
    'Primary Venture Partners',
    'Stripe',
    'Bright Ventures',
    'Hebbia',
    'Tennr',
    'USAFacts',
    'Oleum',
    'Dandy',
  ]

  // Split companies into two rows
  const firstRow = speakerCompanies.slice(0, Math.ceil(speakerCompanies.length / 2))
  const secondRow = speakerCompanies.slice(Math.ceil(speakerCompanies.length / 2))

  return (
    <section className={clsx('relative overflow-hidden bg-transparent py-6', className)}>
      <div className="relative w-full overflow-hidden">
        {/* First Row - scrolls right */}
        <motion.div
          className="mb-8 flex space-x-16"
          animate={{
            x: [-1500, 0],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...firstRow, ...firstRow, ...firstRow].map((company, index) => (
            <span
              key={index}
              className="shrink-0 whitespace-nowrap text-lg font-semibold text-white/90 transition-colors hover:text-white"
            >
              {company}
            </span>
          ))}
        </motion.div>

        {/* Second Row - scrolls left */}
        <motion.div
          className="flex space-x-16"
          animate={{
            x: [0, -1500],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...secondRow, ...secondRow, ...secondRow].map((company, index) => (
            <span
              key={index}
              className="shrink-0 whitespace-nowrap text-lg font-semibold text-white/90 transition-colors hover:text-white"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
