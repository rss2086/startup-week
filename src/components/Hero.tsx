import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CountdownTimer } from '@/components/CountdownTimer'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24 bg-gradient-to-br from-[#1a1150] via-[#1e1761] to-[#2b1c8c]">
      <BackgroundImage className="-top-36" position="right"  />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-[#9eff65] sm:text-8xl">
            <span>Startup Week 2025</span>
            <br/>
            <span className="text-white/90 text-3xl sm:text-4xl tracking-tighter">The largest entrepreneurial event of the year</span>
          </h1>
          <div className="mt-8 sm:mt-10">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">Time Until Startup Summit</div>
            <CountdownTimer />
          </div>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-gray-200">
            <p>
              Want to meet cool founders? Network your way to a job at a startup? Or maybe just have a good time? Come join us for EClub&apos;s startup week!
            </p>
            <p>
              Our keystone event, Startup Summit, has us booking out Fitler Club for a full day packed with over 50+ founders, a networking fair, and an incredible keynote by the founder of Octave, Sandeep Bacharya.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get Your Ticket
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '50+ Founders & VCs'],
              ['Expected Attendees', '250+'],
              ['Main Venues', 'Huntsman Hall & Fitler Club'],
              ['Location', 'Philadelphia, PA'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-[#9eff65]">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
