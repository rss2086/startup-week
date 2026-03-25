'use client'

import clsx from 'clsx'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { avatars, logos } from '@/config/images'
import startupSummit from '@/images/startup-summit.png'

export interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<TimeSlot>
}

export interface TimeSlot {
  name: string
  description: string | null
  start: string
  end: string
  isVirtual?: boolean
  speakers?: Array<{
    name: string
    role?: string
    company?: string
    companyLogoUrl?: string
    image?: string
    companyWebsite?: string
  }>
  eventUrl?: string
  format?: Array<{
    time: string
    title: string
    description: string
    applicationInfo?: {
      deadline: string
      notificationDate: string
      slots: number
    }
  }>
}

export const summitSchedule: Day = {
  date: 'March 27',
  dateTime: '2026-03-27',
  summary: 'Our flagship event at Sheraton University City featuring industry leaders, keynotes, and extensive networking.',
  timeSlots: [
    {
      name: 'Registration & Coffee',
      description: 'Check in and enjoy coffee before the summit begins',
      start: '8:30AM',
      end: '9:00AM',
      isVirtual: false,
    },
    {
      name: 'Opening Remarks',
      description: null,
      start: '9:00AM',
      end: '9:05AM',
      isVirtual: false,
    },
    {
      name: 'Keynote Speaker',
      description: 'Building the Creator Economy',
      start: '9:05AM',
      end: '9:45AM',
      isVirtual: false,
      speakers: [
        {
          name: 'John Hu',
          role: 'Founder & CEO',
          company: 'Stan',
          image: avatars.johnHu,
          companyLogoUrl: logos.stan,
          companyWebsite: 'https://www.stan.store/',
        },
      ],
    },
    {
      name: 'VC Panel',
      description: "Funding the Frontier: Inside Today's VC Landscape",
      start: '9:50AM',
      end: '10:40AM',
      isVirtual: false,
      speakers: [
        {
          name: 'Mia Farnham',
          role: 'Principal',
          company: 'Precursor Ventures',
          image: avatars.miaFarnham,
          companyLogoUrl: logos.precursorVentures,
          companyWebsite: 'https://precursorvc.com/',
        },
        {
          name: 'Emma Silverman',
          role: 'Partner',
          company: 'TMV',
          image: avatars.emmaSilverman,
          companyLogoUrl: logos.tmv,
          companyWebsite: 'https://www.tmv.vc/',
        },
        {
          name: 'Aditya Nidmarti',
          role: 'Vice Principal',
          company: 'Bessemer Venture Partners',
          image: avatars.adityaNidmarti,
          companyLogoUrl: logos.bessemerVenturePartners,
          companyWebsite: 'https://www.bvp.com/',
        },
        {
          name: 'Emily Man',
          role: 'Partner',
          company: 'Primary Venture Partners',
          image: avatars.emilyMan,
          companyLogoUrl: logos.primaryVenturePartners,
          companyWebsite: 'https://www.primary.vc/',
        },
      ],
    },
    {
      name: 'Keynote Speaker',
      description: 'Investing in the Future of Tech',
      start: '10:50AM',
      end: '11:30AM',
      isVirtual: false,
      speakers: [
        {
          name: 'Saanya Ojha',
          role: 'Partner',
          company: 'Bain Capital Ventures',
          image: avatars.saanyaOjha,
          companyLogoUrl: logos.bainCapitalVentures,
          companyWebsite: 'https://www.baincapitalventures.com/',
        },
      ],
    },
    {
      name: 'Fintech Panel',
      description: "The Future of Money: Building in Fintech's Next Era",
      start: '11:40AM',
      end: '12:30PM',
      isVirtual: false,
      speakers: [
        {
          name: "Keerthana 'KK' Kumar",
          role: 'Head of Engineering',
          company: 'Stripe Capital',
          image: avatars.keerthanaKumar,
          companyLogoUrl: logos.stripeCapital,
          companyWebsite: 'https://stripe.com/capital',
        },
        {
          name: 'Ilona Limonta-Volkova',
          role: 'Principal / Forbes Fintech Writer',
          company: 'Bright Ventures',
          image: avatars.ilonaLimontaVolkova,
          companyLogoUrl: logos.brightVentures,
          companyWebsite: 'https://bright.vc/',
        },
        {
          name: 'Julian Manieson',
          role: 'AI Deployment Lead',
          company: 'Hebbia',
          image: avatars.julianManieson,
          companyLogoUrl: logos.hebbia,
          companyWebsite: 'https://www.hebbia.ai/',
        },
      ],
    },
    {
      name: 'Lunch',
      description: null,
      start: '12:30PM',
      end: '1:15PM',
      isVirtual: false,
    },
    {
      name: 'Student Startup Pitch',
      description: 'Student founders pitch their startups to the audience',
      start: '1:15PM',
      end: '1:45PM',
      isVirtual: false,
    },
    {
      name: 'Product Panel',
      description: 'From Idea to Impact: Crafting Products That Scale',
      start: '1:50PM',
      end: '2:40PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Claire North',
          role: 'PM',
          company: 'Tennr',
          image: avatars.claireNorth,
          companyLogoUrl: logos.tennr,
          companyWebsite: 'https://www.tennr.com/',
        },
        {
          name: "Kari D'Elia",
          role: 'CPO',
          company: 'USAFacts',
          image: avatars.kariDelia,
          companyLogoUrl: logos.usafacts,
          companyWebsite: 'https://usafacts.org/',
        },
        {
          name: 'Beni Shafer-Sull',
          role: 'CPO',
          company: 'Oleum',
          image: avatars.beniShaferSull,
          companyLogoUrl: logos.oleum,
          companyWebsite: 'https://www.oleum.ai/',
        },
        {
          name: 'Daniel Hanover',
          role: 'Co-founder',
          company: 'Dandy',
          image: avatars.danielHanover,
          companyLogoUrl: logos.dandy,
          companyWebsite: 'https://www.meetdandy.com/',
        },
      ],
    },
    {
      name: 'Fireside Chat',
      description: 'Building a Consumer App from Zero to One',
      start: '2:50PM',
      end: '3:30PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Judy Thelen',
          role: 'Co-Founder & CEO',
          company: 'Beli',
          image: avatars.judyThelen,
          companyLogoUrl: logos.beli,
          companyWebsite: 'https://www.beliapp.com/',
        },
      ],
    },
    {
      name: 'AI Panel',
      description: 'Intelligence Unlocked: Building in the Age of AI',
      start: '3:40PM',
      end: '4:30PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Hashim Syed',
          role: 'AI GTM Lead, Startups',
          company: 'Google',
          image: avatars.hashimSyed,
          companyLogoUrl: logos.google,
          companyWebsite: 'https://cloud.google.com/',
        },
        {
          name: 'Parth Detroja',
          role: 'CEO',
          company: 'Pair AI',
          image: avatars.parthDetroja,
          companyLogoUrl: logos.pairAi,
          companyWebsite: 'https://www.getpair.com/',
        },
        {
          name: 'Aman Rangrass',
          role: 'SVP, Global Head of Revenue',
          company: 'Skan AI',
          image: avatars.amanRangrass,
          companyLogoUrl: logos.skanAi,
          companyWebsite: 'https://www.skan.ai/',
        },
      ],
    },
    {
      name: 'Networking Cocktail Reception',
      description: 'Connect with founders, investors, and fellow entrepreneurs.',
      start: '4:30PM',
      end: '6:00PM',
      isVirtual: false,
    },
  ],
}

function SummitSchedule() {
  return (
    <div className="mt-16 sm:mt-16 rounded-3xl bg-blue-50 px-4 sm:px-8 py-6 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={startupSummit}
          alt=""
          fill
          className="object-cover blur-sm opacity-10"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-2xl lg:mx-0">
        <h3 className="font-display text-3xl font-medium tracking-tighter text-blue-600">
          Startup Summit at Sheraton University City
        </h3>
        <p className="mt-4 text-lg tracking-tight text-blue-900">
          {summitSchedule.summary}
        </p>
        <time className="mt-2 block font-mono text-sm text-blue-600" dateTime={summitSchedule.dateTime}>
          {summitSchedule.date}
        </time>
      </div>
      <TimeSlots 
        day={summitSchedule} 
        className="mt-4 sm:mt-8 bg-white/80 rounded-2xl border border-blue-100 relative z-10"
      />
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <div className="inline-flex items-center justify-center gap-3 mb-6 sm:mb-8 bg-blue-50/50 px-4 py-2 rounded-2xl">
            <div className="h-px w-8 rounded-full bg-blue-600/20" />
            <span className="text-xl font-semibold text-blue-600 tracking-wider uppercase">
              Summit Day
            </span>
            <div className="h-px w-8 rounded-full bg-blue-600/20" />
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Startup Summit at Sheraton University City
          </h2>
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              In Person
            </span>
          </div>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Our flagship event featuring keynotes, panels, and extensive networking opportunities with industry leaders.
          </p>
        </div>
        <div className="relative mt-14 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <SummitSchedule />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function TimeSlots({ day, className }: { day: Day; className?: string }) {
  const isWeekday = day.date !== 'March 27'

  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 sm:space-y-12 bg-white/60 px-4 sm:px-8 py-6 sm:py-10 shadow-xl shadow-blue-900/5 backdrop-blur-sm rounded-2xl border border-blue-100/20',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} EST`}
          className="relative"
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 sm:mb-12 h-px w-32 sm:w-48 bg-indigo-500/10" />
          )}
          
          <div className="flex flex-col items-center space-y-4">
            {/* Session Title */}
            <div className="w-full text-center">
              {timeSlot.name !== timeSlot.description && timeSlot.description ? (
                <>
                  {/* Title with description */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-blue-50/50 backdrop-blur-sm">
                      <div className="h-px w-4 sm:w-6 rounded-full bg-blue-600/20" />
                      <span className="text-base sm:text-lg font-semibold text-blue-600 tracking-wider uppercase">
                        {timeSlot.name}
                      </span>
                      <div className="h-px w-4 sm:w-6 rounded-full bg-blue-600/20" />
                    </div>
                    {timeSlot.description && (
                      <p className="text-xl md:text-3xl font-bold tracking-tight text-[#011F5B] px-2">
                        {timeSlot.description}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <div className={clsx(
                  "inline-flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl backdrop-blur-sm",
                  timeSlot.description === "No event scheduled" || timeSlot.name === "Lunch Break"
                    ? "bg-gray-50/50"
                    : "bg-blue-50/50"
                )}>
                  <div className={clsx(
                    "h-px w-4 sm:w-6 rounded-full",
                    timeSlot.description === "No event scheduled" || timeSlot.name === "Lunch Break"
                      ? "bg-gray-400/20"
                      : "bg-blue-600/20"
                  )} />
                  <span className={clsx(
                    "text-base sm:text-lg font-semibold tracking-wider uppercase",
                    timeSlot.description === "No event scheduled" || timeSlot.name === "Lunch Break"
                      ? "text-gray-400"
                      : "text-blue-600"
                  )}>
                    {timeSlot.name}
                  </span>
                  <div className={clsx(
                    "h-px w-4 sm:w-6 rounded-full",
                    timeSlot.description === "No event scheduled" || timeSlot.name === "Lunch Break"
                      ? "bg-gray-400/20"
                      : "bg-blue-600/20"
                  )} />
                </div>
              )}
              
              {/* Time Display */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[#980B2B] font-bold">
                <div className="flex items-center bg-gray-50 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <time className="font-mono text-xs sm:text-sm" dateTime={`${day.dateTime}T${timeSlot.start}-05:00`}>
                    {timeSlot.start}
                  </time>
                  <span className="mx-1 sm:mx-2">-</span>
                  <time className="font-mono text-xs sm:text-sm" dateTime={`${day.dateTime}T${timeSlot.end}-05:00`}>
                    {timeSlot.end}
                  </time>
                  <span className="ml-1 text-xs sm:text-sm font-medium">EST</span>
                </div>
                
                {/* Virtual/In-Person Badge - Only show for weekday events */}
                {isWeekday && timeSlot.isVirtual !== undefined && (
                  <span className={clsx(
                    "inline-flex items-center rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium",
                    timeSlot.isVirtual
                      ? "bg-purple-50 text-purple-700"
                      : "bg-green-50 text-green-700"
                  )}>
                    {timeSlot.isVirtual ? 'Virtual' : 'In Person'}
                  </span>
                )}
              </div>
            </div>

            {/* Speakers Section */}
            {timeSlot.speakers && timeSlot.speakers.length > 0 && (
              <div className={clsx(
                "w-full mx-auto mt-6 sm:mt-8 px-2 sm:px-0",
                isWeekday 
                  ? "max-w-3xl" 
                  : "grid gap-4 sm:gap-6",
                !isWeekday && (
                  timeSlot.speakers.length === 1 ? "max-w-lg" : 
                  timeSlot.speakers.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-3xl" :
                  "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"
                )
              )}>
                {isWeekday ? (
                  <div className="bg-white rounded-xl border border-gray-200/50 divide-y divide-gray-100 overflow-hidden">
                    {timeSlot.speakers?.map((speaker, idx) => (
                      <SpeakerRow key={idx} speaker={speaker} />
                    ))}
                  </div>
                ) : (
                  timeSlot.speakers.map((speaker, idx) => (
                    <div 
                      key={idx} 
                      className={clsx(
                        "bg-white/80 rounded-2xl border border-blue-100/20 hover:border-blue-200/50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden",
                        timeSlot.speakers?.length === 1 && "mx-auto w-full max-w-lg"
                      )}
                    >
                      <div className="p-4 sm:p-6">
                        <SpeakerCard speaker={speaker} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Event Format Section */}
            {'format' in timeSlot && timeSlot.format && (
              <div className="w-full max-w-3xl mx-auto mt-8 space-y-6">
                <div className="grid gap-4">
                  {timeSlot.format.map((segment, idx) => (
                    <div key={idx} className="bg-white/90 rounded-xl border border-blue-100/20 p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                            {segment.time}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-blue-900 mb-2">
                            {segment.title}
                          </h4>
                          <p className="text-gray-600">
                            {segment.description}
                          </p>
                          {segment.applicationInfo && (
                            <div className="mt-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                  </svg>
                                </div>
                                <div className="flex-grow">
                                  <h5 className="text-sm font-semibold text-blue-900 mb-2">Application Details</h5>
                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                      <span className="font-medium">Slots Available:</span>
                                      {segment.applicationInfo.slots} teams
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="font-medium">Application Deadline:</span>
                                      {segment.applicationInfo.deadline}
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="font-medium">Notification Date:</span>
                                      {segment.applicationInfo.notificationDate}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {timeSlot.eventUrl && (
                  <div className="flex justify-center">
                    <a
                      href={timeSlot.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      Register for Event
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

interface SpeakerCardProps {
  speaker: {
    name: string;
    role?: string;
    company?: string;
    companyLogoUrl?: string;
    companyWebsite?: string;
    image?: string;
  };
}

function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="group relative flex flex-col">
      {/* Image Container */}
      {speaker.image && (
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover transition-all duration-500 will-change-transform group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-slate-900/0" />

          {/* Company Logo Overlay */}
          {speaker.companyLogoUrl && (
            <div className="absolute bottom-0 right-0 flex h-1/3 w-3/5 items-center justify-center">
              <a 
                href={speaker.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full group/logo"
              >
                <div className="h-full w-full overflow-hidden bg-white/15 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover/logo:bg-white/50 group-hover/logo:shadow-xl rounded-tl-2xl">
                  <Image
                    src={speaker.companyLogoUrl}
                    alt={`${speaker.company} logo`}
                    width={400}
                    height={400}
                    className="h-full w-full object-contain"
                    quality={100}
                  />
                </div>
              </a>
            </div>
          )}
        </div>
      )}

      {/* Text Content */}
      <div className="mt-6 space-y-2">
        <h3 className="text-xl font-semibold tracking-tight text-blue-900 group-hover:text-blue-600 transition-colors duration-200">
          {speaker.name}
        </h3>
        <div className="space-y-1">
          {/* Role */}
          {speaker.role && (
            <div className="text-sm text-slate-600">
              {speaker.role}
            </div>
          )}
          {/* Company with Link */}
          {speaker.company && (
            <a 
              href={speaker.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="group/company inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
            >
              {speaker.company}
              <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover/company:opacity-100 group-hover/company:translate-x-0 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function SpeakerRow({ speaker }: { speaker: { name: string; role?: string; company?: string; companyLogoUrl?: string; companyWebsite?: string; image?: string } }) {
  return (
    <div className="flex items-center gap-6 p-4 hover:bg-blue-50/50 transition-colors duration-200 group">
      {/* Speaker Image */}
      <div className="flex-shrink-0">
        {speaker.image ? (
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-gray-100">
            <Image 
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Speaker Info */}
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {speaker.name}
            </h4>
            {speaker.role && (
              <p className="text-sm text-gray-600 mt-0.5">
                {speaker.role}
              </p>
            )}
          </div>
          {speaker.companyLogoUrl && speaker.companyWebsite ? (
            <div className="flex-shrink-0 w-32">
              <a 
                href={speaker.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="block group/company"
              >
                <div className="relative h-12 w-full p-2">
                  <Image 
                    src={speaker.companyLogoUrl}
                    alt={`${speaker.company} logo`}
                    fill
                    className="object-contain transition-opacity duration-200 group-hover/company:opacity-80"
                  />
                </div>
                {speaker.company && (
                  <p className="text-sm font-medium text-blue-600 text-center mt-1 group-hover/company:text-blue-800 transition-colors flex items-center justify-center gap-1">
                    {speaker.company}
                    <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover/company:opacity-100 group-hover/company:translate-x-0 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </p>
                )}
              </a>
            </div>
          ) : speaker.company && speaker.companyWebsite && (
            <a 
              href={speaker.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-32 text-base font-medium text-blue-600 text-right group/company hover:text-blue-800 transition-colors flex items-center justify-end gap-1"
            >
              {speaker.company}
              <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover/company:opacity-100 group-hover/company:translate-x-0 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
