import { Container } from '@/components/Container'

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Interested in becoming a sponsor?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Support our workshops and speakers while gaining visibility in the developer community. 
            We're currently looking for sponsors who share our vision for quality tech education.
          </p>
          <div className="mt-8">
            <a
              href="mailto:sponsors@example.com"
              className="inline-block rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Get in touch about sponsorship
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
