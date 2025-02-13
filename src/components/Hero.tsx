import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CountdownTimer } from '@/components/CountdownTimer'
import { LogoMarquee } from '@/components/LogoMarquee'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24 bg-gradient-to-br from-[#1a1150] via-[#1e1761] to-[#2b1c8c]">
      <BackgroundImage className="-top-36" position="right"  />
      <Container className="relative">
        <div className="mx-auto max-w-3xl lg:max-w-6xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-[#9eff65] sm:text-8xl">
            <span className=''>Wharton Startup Week</span>
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
              Our flagship event, Startup Summit, has us booking out Fitler Club for a full day packed with over 50+ founders, a networking fair, and two incredible keynotes by the founder of Octave, Sandeep Bacharya, and the founder of Emergence Capital, Gordon Ritter.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get Your Ticket
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers and Panelists', '25+ Founders & VCs'],
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

      {/* Companies Section */}
      <div className="mt-4 sm:mt-12 relative pt-8">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]" />
        
        <div className="relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-3">
              <div className="h-px w-3 bg-[#9eff65]/30" />
              <p className="text-[#9eff65] text-sm font-medium tracking-wider uppercase">
                Our Partners
              </p>
              <div className="h-px w-3 bg-[#9eff65]/30" />
            </div>
          </div>
          <LogoMarquee />
        </div>
      </div>
    </div>
  )
}
