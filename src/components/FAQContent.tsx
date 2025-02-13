'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import clsx from 'clsx'

const faqs = [
  {
    question: 'What is Startup Week?',
    answer: 'Startup Week is our annual flagship event that brings together founders, investors, and students interested in entrepreneurship. It features a week of panels, workshops, and networking events, culminating in our Startup Summit at Fitler Club.'
  },
  {
    question: 'Do I need to be a Wharton student to attend?',
    answer: 'Not at all! While the event is organized by the Wharton Entrepreneurship Club, we welcome students from all Penn schools, as well as alumni and professionals interested in entrepreneurship.'
  },
  {
    question: 'Are the events in-person or virtual?',
    answer: 'We have a mix of both! The weekday events are hybrid, with some speakers joining virtually and others in person at Huntsman Hall. The Startup Summit on March 21st is fully in-person at Fitler Club.'
  },
  {
    question: 'What should I wear?',
    answer: 'Feel free to wear whatever you feel comfortable in! Smart casual attire is common, but there&apos;s no strict dress code. Just keep in mind there will be networking opportunities at the events.'
  },
  {
    question: 'Will there be food?',
    answer: 'Yes! We try to provide lunch during our weekday events and full catering during the Startup Summit, including breakfast, lunch, and refreshments throughout the day.'
  },
  {
    question: 'How can I become a sponsor?',
    answer: 'We offer various sponsorship tiers with different levels of visibility and engagement opportunities. Please checkout out are sponsors page for more information.'
  },
  {
    question: 'Will sessions be recorded?',
    answer: 'Most weekday sessions will be recorded and made available to ticket holders. The Startup Summit sessions will not be recorded to encourage open and candid discussions.'
  }
]

export function FAQContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-20 sm:py-48 bg-gradient-to-br from-[#1a1150] via-[#1e1761] to-[#2b1c8c] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
              <div className="h-px w-3 bg-[#9eff65]/30" />
              <p className="text-[#9eff65] text-sm font-medium tracking-wider uppercase">
                Got Questions?
              </p>
              <div className="h-px w-3 bg-[#9eff65]/30" />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Everything you need to know about Startup Week 2025. Can&apos;t find what you&apos;re looking for? Feel free to reach out.
            </p>
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-4xl divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="py-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left">
                      <span className="font-display text-xl font-medium tracking-tight text-blue-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <svg
                          className={clsx(
                            'h-6 w-6 transform transition-transform duration-200',
                            open ? 'rotate-180 text-blue-600' : 'text-gray-400'
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-200 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="mt-4 pr-12">
                        <p className="text-lg text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mx-auto mt-24 max-w-3xl rounded-3xl bg-gradient-to-b from-blue-50 to-white px-8 py-12 shadow-sm border border-blue-100/20">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-3 mb-8">
                <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-medium tracking-tight text-blue-900">
                Still have questions?
              </h2>
              <p className="mt-4 text-xl tracking-tight text-gray-600">
                Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
              </p>
              <a
                href="mailto:rohanss@wharton.upenn.edu"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
} 