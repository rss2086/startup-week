'use client'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CountdownTimer } from '@/components/CountdownTimer'
import { LogoMarquee } from '@/components/LogoMarquee'
import { motion } from 'framer-motion'

function AnimatedTitle() {
  const text = "Wharton Startup Week"
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 20,
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className="overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-4">
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={child}
            className="block relative"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            {word}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9eff65]/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
            />
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1150] to-[#2b1c8c] transform">
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-20" />
      <BackgroundImage className="-top-36" position="right" />
      <Container className="relative py-20 sm:py-32">
        <motion.div 
          className="mx-auto max-w-3xl lg:max-w-6xl lg:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center my-4">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4">
              <AnimatedTitle />
            </h1>
            <motion.p 
              className="text-2xl sm:text-4xl text-[#9eff65] font-display tracking-wide max-w-3xl mx-auto my-8 font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              The largest entrepreneurial event of the year
            </motion.p>
          </div>

          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-gray-300 mb-2">Time Until Startup Summit</div>
            <CountdownTimer />
          </div>

          <div className="space-y-6 text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            <p>
              Want to meet cool founders? Network your way to a job at a startup? Or maybe just have a good time? Come join us for EClub&apos;s startup week!
            </p>
            <p>
              Our flagship event, Startup Summit, has us booking out Fitler Club for a full day packed with over 25+ founders, a networking fair, and two incredible keynotes by the founder of Octave, Sandeep Bacharya, and the founder of Emergence Capital, Gordon Ritter.
            </p>
          </div>

          <div className="my-24 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              href="https://www.eventbrite.com/e/wharton-startup-week-summit-2025-tickets-1248998310569"
              color="white"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[240px] w-full max-w-2xl text-lg font-bold relative overflow-hidden group
                bg-gradient-to-r from-[#9eff65] to-[#7acc4d] text-gray-900
                px-8 py-4 rounded-full
                transform hover:scale-105 transition-all duration-300
                shadow-[0_0_20px_rgba(158,255,101,0.3)] hover:shadow-[0_0_30px_rgba(158,255,101,0.5)]
                before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:skew-x-[-45deg] before:transition-transform before:duration-500
                hover:before:translate-x-[100%] before:z-0"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Your Ticket
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>

          <div className="grid sm:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              ['Speakers and Panelists', '25+ Founders & VCs'],
              ['Expected Attendees', '250+'],
              ['Main Venues', 'Huntsman Hall & Fitler Club'],
              ['Location', 'Philadelphia, PA'],
            ].map(([name, value]) => (
              <div key={name} className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/20">
                <div className="font-mono text-sm text-[#9eff65] mb-2">{name}</div>
                <div className="text-2xl font-bold text-white">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Companies Section */}
      <div className="relative py-16 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]" />
        
        <div className="relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 mb-3">
              <div className="h-px w-3 bg-[#9eff65]/30" />
              <p className="text-[#9eff65] text-sm font-medium tracking-wider uppercase">
                With Speakers from
              </p>
              <div className="h-px w-3 bg-[#9eff65]/30" />
            </div>
          </div>
          <LogoMarquee />
        </div>
      </div>
    </section>
  )
}
