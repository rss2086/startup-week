import { Container } from '@/components/Container'
import Image from 'next/image'
import clsx from 'clsx'

const teams = [
  {
    name: 'Conference Leadership',
    description: 'Leading and organizing Startup Week 2025',
    members: [
      {
        name: 'Claire North',
        role: 'Conference Lead',
        image: '/images/avatars/claire-north.jpg',
        linkedin: 'https://linkedin.com/in/claire-north',
        bio: 'Overseeing the overall conference strategy and execution'
      },
      {
        name: 'Ghassan Zubhaid',
        role: 'Conference Lead',
        image: '/images/avatars/ghassan-zubhaid.jpg',
        linkedin: 'https://linkedin.com/in/ghassan-zubhaid',
        bio: 'Managing speaker relations and event programming'
      },
    ]
  },
  {
    name: 'Conference Committee',
    description: 'Driving key initiatives and ensuring successful execution',
    members: [
      {
        name: 'Nico Aldeanueva',
        role: 'Operations Director',
        image: '/images/avatars/nico-aldeanueva.jpg',
        linkedin: 'https://linkedin.com/in/nico-aldeanueva',
        bio: 'Coordinating event logistics and venue management'
      },
      {
        name: 'Christo Ritter',
        role: 'Partnerships Lead',
        image: '/images/avatars/christo-ritter.jpg',
        linkedin: 'https://linkedin.com/in/christo-ritter',
        bio: 'Managing sponsor relationships and partnerships'
      },
      {
        name: 'Ben Wang',
        role: 'Marketing Director',
        image: '/images/avatars/ben-wang.jpg',
        linkedin: 'https://linkedin.com/in/ben-wang',
        bio: 'Leading brand strategy and community engagement'
      },
      {
        name: 'Alex Liu',
        role: 'Technology Lead',
        image: '/images/avatars/alex-liu.jpg',
        linkedin: 'https://linkedin.com/in/alex-liu',
        bio: 'Managing digital platforms and technical infrastructure'
      },
      {
        name: 'Devon Murphy',
        role: 'Content Strategy Lead',
        image: '/images/avatars/devon-murphy.jpg',
        linkedin: 'https://linkedin.com/in/devon-murphy',
        bio: 'Developing content strategy and speaker programming'
      },
    ]
  },
  {
    name: 'Entrepreneurship Club Leadership',
    description: 'Supporting Startup Week through EClub resources and network',
    members: [
      {
        name: 'Rohan Shah',
        role: 'EClub Co-President',
        image: '/images/avatars/rohan-shah.jpg',
        linkedin: 'https://linkedin.com/in/rohan-shah',
        bio: 'Providing strategic oversight and club resources'
      },
      {
        name: 'Srineetha Maddineni',
        role: 'EClub Co-President',
        image: '/images/avatars/srineetha-maddineni.jpg',
        linkedin: 'https://linkedin.com/in/srineetha-maddineni',
        bio: 'Facilitating club partnerships and community engagement'
      },
    ]
  },
]

interface SocialLinkProps {
  className?: string
  href: string
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string }>
}

function SocialLink({ className, href, children, icon: Icon }: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        className="group flex items-center text-sm font-medium text-blue-800 hover:text-blue-600 transition-colors"
      >
        <Icon className="h-5 w-5 flex-none fill-blue-600 group-hover:fill-blue-800 transition-colors" />
        <span className="ml-2">{children}</span>
      </a>
    </li>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
    </svg>
  )
}

export default function OrganizersPage() {
  return (
    <section id="organizers" aria-label="Organizers" className="py-20 sm:py-32 overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The dedicated individuals bringing you Startup Week 2025.
          </p>
        </div>
        
        <div className="mt-16 space-y-24">
          {teams.map((team) => (
            <div key={team.name} className="relative">
              {/* Section Header */}
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                    {team.name}
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-blue-600">
                    {team.description}
                  </p>
                </div>
              </div>

              {/* Team Grid */}
              <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
                {team.members.map((member) => (
                  <div key={member.name} className="relative flex flex-col items-start">
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-blue-50 transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-all duration-500 will-change-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-gray-900/0" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-blue-950">
                      {member.name}
                    </h3>
                    <p className="text-base leading-7 text-blue-600">{member.role}</p>
                    <p className="mt-1 text-base leading-7 text-slate-700">
                      {member.bio}
                    </p>
                    <ul role="list" className="mt-4 flex gap-4">
                      <SocialLink
                        href={member.linkedin}
                        icon={LinkedInIcon}
                        className="transition-all duration-300 hover:scale-105"
                      >
                        Follow on LinkedIn
                      </SocialLink>
                    </ul>
                  </div>
                ))}
              </div>
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