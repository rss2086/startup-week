import { Container } from '@/components/Container'
import Image from 'next/image'

const organizers = [
  {
    name: 'Rohan Muthukrishnan',
    role: 'Co-President',
    image: '/organizers/rohan.jpg',
    linkedin: 'https://linkedin.com/in/rohanmuthukrishnan',
    bio: 'Leading Startup Week initiatives and partnerships'
  },
  {
    name: 'Aditya Sriram',
    role: 'Co-President',
    image: '/organizers/aditya.jpg',
    linkedin: 'https://linkedin.com/in/adityasriram',
    bio: 'Overseeing event strategy and speaker relations'
  },
  {
    name: 'Aarushi Singh',
    role: 'VP of Marketing',
    image: '/organizers/aarushi.jpg',
    linkedin: 'https://linkedin.com/in/aarushi-singh',
    bio: 'Managing brand and community engagement'
  },
  {
    name: 'Arjun Khorana',
    role: 'VP of Operations',
    image: '/organizers/arjun.jpg',
    linkedin: 'https://linkedin.com/in/arjun-khorana',
    bio: 'Coordinating event logistics and execution'
  },
]

export default function OrganizersPage() {
  return (
    <section id="organizers" aria-label="Organizers" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The dedicated individuals bringing you Startup Week 2025.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {organizers.map((organizer) => (
            <div
              key={organizer.name}
              className="relative flex flex-col items-start"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-blue-50">
                <Image
                  src={organizer.image}
                  alt={organizer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-blue-950">
                {organizer.name}
              </h3>
              <p className="text-base leading-7 text-blue-600">{organizer.role}</p>
              <p className="mt-1 text-base leading-7 text-slate-700">
                {organizer.bio}
              </p>
              <a
                href={organizer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Connect on LinkedIn
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-15.5 13v-9h3v9h-3zm-1.5-10.3c0-1 .8-1.7 1.8-1.7s1.8.8 1.8 1.7c0 1-.8 1.7-1.8 1.7s-1.8-.8-1.8-1.7zm17 10.3h-3v-5.3c0-3.7-4-3.4-4 0v5.3h-3v-9h3v1.7c1.4-2.5 7-2.7 7 2.3v5z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl rounded-2xl bg-blue-50 px-8 py-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight text-blue-900">
              Join Our Team
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Interested in helping organize future Startup Week events? We&apos;re always looking for passionate individuals to join our team.
            </p>
            <a
              href="mailto:team@startupweek.com"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
} 