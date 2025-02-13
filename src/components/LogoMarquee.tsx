'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { logos } from '@/config/images'
import Image from 'next/image'
import clsx from 'clsx'

export function LogoMarquee({ className = "", whiteLogos = true }: { className?: string, whiteLogos?: boolean }) {
  const logoArray = Object.values(logos)
  // Filter out wharton logo and non-PNG files for white version
  const filteredLogos = whiteLogos 
    ? logoArray.filter(logo => logo.endsWith('.png') && !logo.includes('wharton') && !logo.includes('octave-white'))
    : logoArray.filter(logo => !logo.includes('octave-white'))

  // Split logos into two equal groups for different rows
  const firstHalf = filteredLogos.slice(0, Math.ceil(filteredLogos.length / 2))
  const secondHalf = filteredLogos.slice(Math.ceil(filteredLogos.length / 2))

  return (
    <section className={clsx("relative overflow-hidden py-6 bg-transparent", className)}>
      {/* Gradient Edges */}
      {/* Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* First Row */}
        <motion.div
          className="flex space-x-12 mb-10" 
          animate={{
            x: [-2000, 0],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...firstHalf, ...firstHalf].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 relative group"
            >
              <Image
                src={logo}
                alt="Company logo"
                fill
                sizes="128px"
                className={clsx(
                  "object-contain transition-all duration-300 scale-95 group-hover:scale-100",
                  whiteLogos && "brightness-0 invert group-hover:brightness-0 group-hover:invert"
                )}
              />
            </div>
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div
          className="flex space-x-12"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...secondHalf, ...secondHalf].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 relative group"
            >
              <Image
                src={logo}
                alt="Company logo"
                fill
                sizes="128px"
                className={clsx(
                  "object-contain transition-all duration-300 scale-95 group-hover:scale-100",
                  whiteLogos && "brightness-0 invert group-hover:brightness-0 group-hover:invert"
                )}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
