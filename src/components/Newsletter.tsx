import Image from 'next/image'

import { Button } from '@/components/Button'
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
    <section id="newsletter" aria-label="Newsletter" className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950">
      <Container>
        <div className="relative mx-auto py-20 sm:py-32">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <div className="flex justify-start mb-8">
                <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
                  Stay Connected
                </span>
              </div>
              <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Don&apos;t miss out on Startup Week updates
              </p>
              <p className="mt-4 text-lg tracking-tight text-gray-300">
                Join our mailing list to get the latest news about speakers, schedule changes, and exclusive networking opportunities. Be the first to know when tickets become available!
              </p>
            </div>
            <form className="xl:pl-16">
              <div className="mx-auto max-w-md">
                <div className="border-b border-gray-300/10 focus-within:border-blue-500">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="block w-full border-0 bg-transparent pb-2 pl-0 text-white placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-6 flex">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <span>Subscribe to updates</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
