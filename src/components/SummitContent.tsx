'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import { TimeSlots } from '@/components/Schedule'
import summitBg from '@/images/startup-summit.png'
import { summitSchedule } from '@/components/Schedule'

export function SummitContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-40 bg-gradient-to-b from-[#1a1150] to-[#2b1c8c] overflow-hidden min-h-screen grid place-items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src={summitBg}
            alt=""
            fill
            className="object-cover opacity-25 mix-blend-overlay scale-105 hover:scale-110 transition-transform duration-700 blur-3xl brightness-150"
            priority
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-20" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-7xl sm:text-8xl font-bold tracking-tight text-white">
              Startup Summit
              <span className="block text-[#9eff65] text-3xl sm:text-4xl mt-4 font-normal">March 21st, 2025</span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 max-w-2xl">
              An immersive one-day conference bringing together founders, investors, and innovators at Philadelphia&apos;s exclusive Fitler Club.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-lg bg-[#9eff65] px-8 py-3 text-lg font-medium text-[#1a1150] hover:bg-white transition-all duration-300"
              >
                Get Your Ticket
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-lg font-medium text-white hover:bg-white/10 transition-all duration-300 scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Schedule
              </a>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-[#9eff65]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-white">Venue</h3>
                </div>
                <p className="text-gray-300">
                  The Fitler Club<br/>
                  24 S. 24th Street<br/>
                  Philadelphia, PA 19103
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-[#9eff65]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-white">What to Expect</h3>
                </div>
                <p className="text-gray-300">
                  Keynote speeches<br/>
                  Panels<br/>
                  Networking sessions
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white scroll-mt-16">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              Summit Schedule
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
              A full day of inspiring talks, panels, and networking opportunities.
            </p>
          </div>
          <div className="mt-14 sm:mt-24">
            <TimeSlots day={summitSchedule} className="mt-8" />
          </div>
        </Container>
      </section>
    </>
  )
} 