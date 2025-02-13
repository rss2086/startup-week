import { Container } from '@/components/Container'
import Link from 'next/link'
import { LogoMarquee } from './LogoMarquee'
import clsx from 'clsx'

interface SponsorsProps {
  onHomePage?: boolean;
}

interface SponsorshipTier {
  name: string;
  description: string;
  benefits: string[];
  featured?: boolean;
}

export function Sponsors({ onHomePage = false }: SponsorsProps) {
  const sponsorshipTiers: SponsorshipTier[] = [
    {
      name: 'Bronze',
      description: 'Basic visibility package',
      benefits: [
        'Logo on event website',
        'Logo displayed at events',
        'Social media mention',
      ],
    },
    {
      name: 'Silver', 
      description: 'Event access package',
      benefits: [
        'All Bronze tier benefits',
        '1 reserved VIP tickets to Startup Summit',
        'Company name in event program',
      ],
    },
    {
      name: 'Gold',
      featured: true,
      description: 'Networking package',
      benefits: [
        'All Silver tier benefits',
        'Dedicated table at networking fair',
        'Featured logo placement',
        '2 VIP tickets to Startup Summit',
      ],
    },
    {
      name: 'Rocket',
      description: 'Premium partnership package',
      benefits: [
        'All Gold tier benefits',
        'Premium table location',
        'Co-branded swag at events',
        'Featured partner spotlight',
        '4 VIP tickets to Startup Summit',
      ],
    },
  ]

  if (onHomePage) {
    return (
      <section 
        id="sponsors" 
        aria-label="Sponsors"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom_right,#18181b,#020617,#172554),linear-gradient(to_top_right,#18181b,#020617,#172554)] transform p-12 sm:m-12 m-4 rounded-2xl"
      >
        <div className="relative py-16 sm:py-24 transform">
          <Container className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Partner with Penn&apos;s Largest Entrepreneurship Event
              </h2>
              <p className="text-lg sm:text-xl text-purple-100/90 max-w-3xl mx-auto mb-8">
                Join us in shaping the future of entrepreneurship at Penn. Connect with over 250 ambitious students and 50+ industry leaders.
              </p>
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-colors duration-200"
              >
                Interested in seeing your logo here and at the event?
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </Container>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950 py-16 sm:py-32 min-h-screen grid place-items-center">
        <Container className="relative px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="hidden sm:block font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
                Shape the Future of Entrepreneurship at Penn
              </h1>
              <h1 className=" sm:hidden font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
                Shape Entrepreneurship at Penn
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                Join Wharton&apos;s premier startup event - your gateway to 250+ ambitious student entrepreneurs and 40+ top founders/VCs. Stand out as a leader shaping the next generation of innovators.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
                <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">250+</div>
                  <div className="text-sm sm:text-base text-gray-300">Student Attendees</div>
                </div>
                <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">40+</div>
                  <div className="text-sm sm:text-base text-gray-300">Founders & VCs</div>
                </div>
                <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">5</div>
                  <div className="text-sm sm:text-base text-gray-300">Days of Impact</div>
                </div>
                <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">2</div>
                  <div className="text-sm sm:text-base text-gray-300">Premier Venues</div>
                </div>
              </div>

              <div className="space-y-6 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                <p className="text-center">
                  As Wharton&apos;s flagship student-run initiative, your sponsorship enables:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Top-tier speakers & mentors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Premium brand visibility</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Direct talent access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Exclusive networking events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12 sm:py-16 px-4 sm:px-6">
        {/* Sponsorship Tiers */}
        <div className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Sponsorship Opportunities</h2>
          <div className="space-y-6 sm:space-y-8">
            {sponsorshipTiers.reverse().map((tier) => (
              <div
                key={tier.name}
                className={clsx(
                  "relative rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg border",
                  tier.featured ? "border-2 border-purple-500 bg-purple-50/50" : "border-gray-200"
                )}
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link
                      href="mailto:rohanss@wharton.upenn.edu"
                      className={clsx(
                        "block w-full text-center px-6 py-3 rounded-xl font-semibold transition-colors duration-200",
                        tier.featured
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                      )}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Sponsors */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">
            Trusted By Industry Leaders
          </h2>
          <LogoMarquee className="bg-gray-50 py-8 sm:py-12 rounded-2xl" whiteLogos={false} />
        </div>
      </Container>
    </section>
  )
}
