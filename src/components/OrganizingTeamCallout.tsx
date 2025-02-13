import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function OrganizersCallout() {
  return (
    <section id="team" aria-label="Team" className="relative overflow-hidden -skew-y-2 p-8 sm:p-16">
      {/* Minimal skewed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950 transform " />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px] transform" />
      
      {/* Content */}
      <div className="relative">
        <Container>
          <div className="relative mx-auto py-20 sm:py-32">
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -right-8 -bottom-8 w-72 h-72 bg-zinc-500/10 rounded-full blur-3xl" />
            
            <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                  <span className="inline-flex items-center rounded-full bg-blue-400/10 px-4 py-1.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
                    Meet the Team
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                </div>
                <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  The organizers behind Startup Week
                </p>
                <p className="mt-4 text-lg tracking-tight text-gray-300">
                  Meet the passionate team of student entrepreneurs and leaders who make Startup Week possible. Learn about our mission and the work that goes into creating Penn&apos;s largest entrepreneurship event.
                </p>
              </div>
              <div className="xl:pl-16 flex items-center justify-center">
                <Link
                  href="/organizers"
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-white/20 hover:shadow-xl border border-white/10"
                >
                  <span className="relative">Meet our team</span>
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  {/* Gradient hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 blur transition-opacity duration-200 group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
