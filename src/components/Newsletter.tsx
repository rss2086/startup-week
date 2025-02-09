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

export function Newsletter() {
  return (
    <section id="team" aria-label="Team" className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950">
      <Container>
        <div className="relative mx-auto py-20 sm:py-32">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <div className="flex justify-start mb-8">
                <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
                  Meet the Team
                </span>
              </div>
              <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The organizers behind Startup Week
              </p>
              <p className="mt-4 text-lg tracking-tight text-gray-300">
                Meet the passionate team of student entrepreneurs and leaders who make Startup Week possible. Learn about our mission and the work that goes into creating Penn's largest entrepreneurship event.
              </p>
            </div>
            <div className="xl:pl-16 flex items-center">
              <Link
                href="/organizers"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>Meet our team</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
