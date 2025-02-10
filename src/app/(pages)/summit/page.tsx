import { Container } from '@/components/Container'
import Image from 'next/image'
import { TimeSlots } from '@/components/Schedule'
import summitBg from '@/images/startup-summit.png'
import { summitSchedule } from '@/components/Schedule'

export default function SummitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-40 bg-gradient-to-b from-[#1a1150] to-[#2b1c8c] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={summitBg}
            alt=""
            fill
            className="object-cover opacity-25 mix-blend-overlay scale-105 hover:scale-110 transition-transform duration-700 blur-none brightness-150"
            priority
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-20" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-6xl font-medium tracking-tight text-white sm:text-8xl bg-clip-text">
              Startup Summit 2025
            </h1>
            <div className="mt-8 space-y-8 text-gray-300">
              <p className="text-2xl font-light text-center">
                Join us for an immersive one-day conference focused on startup growth, innovation, and networking
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-[#9eff65] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <h3 className="text-lg font-medium">Location</h3>
                  </div>
                  <p className="text-sm leading-relaxed">
                    The Fitler Club<br/>
                    24 S. 24th Street<br/>
                    Center City Philadelphia, PA 19103
                  </p>
                </div>
                <div className="px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-[#9eff65] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-medium">Event Details</h3>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Full-day conference with keynotes,<br/>
                    workshops, and networking sessions.<br/>
                    Breakfast and lunch included.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex gap-6 justify-center">
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-full bg-[#9eff65] px-8 py-4 text-lg font-medium text-[#1a1150] hover:bg-white transition-all duration-300 shadow-lg shadow-[#9eff65]/20 hover:shadow-xl hover:shadow-[#9eff65]/30 transform hover:-translate-y-0.5"
              >
                Get Summit Tickets
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Philadelphia, PA
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                March 21st, 2025
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white">
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