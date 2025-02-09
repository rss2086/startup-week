import { Container } from '@/components/Container'

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
    question: 'How much are tickets?',
    answer: 'Early bird tickets start at $25 for Penn students and $50 for non-students. Prices will increase as we get closer to the event. Join our mailing list to be notified when tickets go on sale!'
  },
  {
    question: 'Are the events in-person or virtual?',
    answer: 'We have a mix of both! The weekday events are hybrid, with some speakers joining virtually and others in person at Huntsman Hall. The Startup Summit on March 21st is fully in-person at Fitler Club.'
  },
  {
    question: 'What should I wear?',
    answer: 'Business casual is recommended for all events. For the Startup Summit, business professional attire is encouraged as there will be extensive networking opportunities.'
  },
  {
    question: 'Will there be food?',
    answer: 'Yes! We provide lunch during our weekday events and full catering during the Startup Summit, including breakfast, lunch, and refreshments throughout the day.'
  },
  {
    question: 'How can I become a sponsor?',
    answer: 'We offer various sponsorship tiers with different levels of visibility and engagement opportunities. Please email us at sponsors@startupweek.com for our sponsorship deck.'
  },
  {
    question: 'Will sessions be recorded?',
    answer: 'Most weekday sessions will be recorded and made available to ticket holders. The Startup Summit sessions will not be recorded to encourage open and candid discussions.'
  }
]

export default function FAQPage() {
  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Everything you need to know about Startup Week 2025.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-blue-50 px-8 py-6"
            >
              <h3 className="font-display text-xl font-medium tracking-tight text-blue-900">
                {faq.question}
              </h3>
              <p className="mt-4 text-base tracking-tight text-slate-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl rounded-2xl bg-gradient-to-b from-blue-50 to-white px-8 py-12 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-2 mb-8">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-medium tracking-tight text-blue-900">
              Still have questions?
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
            </p>
            <a
              href="mailto:info@startupweek.com"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
} 