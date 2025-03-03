'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

import { BackgroundImage } from '@/components/BackgroundImage'
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

const weekSchedule: Array<Day> = [
  {
    date: 'March 17',
    dateTime: '2024-03-17',
    summary: 'Monday focuses on legal aspects and climate tech innovation.',
    timeSlots: [
      {
        name: 'Lunch Event',
        description: 'Legal Aspects of Entrepreneurship - Fireside Chat',
        start: '12:00PM',
        end: '1:00PM',
        isVirtual: false,
        speakers: [
          {
            name: 'Robert Borghese',
            role: 'Professor',
            company: 'Wharton',
            image: avatars.robertBorghese,
            companyLogoUrl: logos.wharton,
            companyWebsite: 'https://lgst.wharton.upenn.edu/profile/borghese/'
          }
        ]
      },
      {
        name: 'After Class',
        description: 'Climate Tech Panel',
        start: '5:00PM',
        end: '6:00PM',
        isVirtual: true,
        speakers: [
          {
            name: 'Brian Riordan',
            company: 'Avalanche',
            role: 'Founder',
            image: avatars.brianRiordan,
            companyLogoUrl: logos.avalanche,
            companyWebsite: 'https://avalanchefusion.com/'
          },
          {
            name: 'Shawn Xu',
            company: 'Lowercarbon',
            image: avatars.shawnXu,
            companyLogoUrl: logos.lowercarbonCapital,
            companyWebsite: 'https://lowercarbon.com/'
          },
          {
            name: 'Henry Xu',
            company: 'Li Industries',
            image: avatars.henryXu,
            companyLogoUrl: logos.liIndustries,
            companyWebsite: 'https://www.li-ind.com/'
          }
        ]
      },
    ],
  },
  {
    date: 'March 18',
    dateTime: '2024-03-18',
    summary: 'Tuesday explores the journey from seed to Series A funding.',
    timeSlots: [
      {
        name: 'Lunch Event',
        description: 'Navigating Early Days Building a Startup',
        start: '12:00PM',
        end: '1:00PM',
        isVirtual: true,
        speakers: [
          {
            name: 'Jake Gordon',
            company: 'Noteefy',
            image: avatars.jakeGordon,
            companyLogoUrl: logos.noteefy,
            companyWebsite: 'https://noteefy.app'
          },
          {
            name: 'Daniel Kang',
            company: 'Flowbo',
            image: avatars.danielKang,
            companyLogoUrl: logos.flowbo,
            companyWebsite: 'https://www.flowbo.co'
          },
          {
            name: 'Ian Goldberg',
            company: 'Venrex',
            image: avatars.ianGoldberg,
            companyLogoUrl: logos.venrex,
            companyWebsite: 'http://www.venrex.partners'
          },
          {
            name: 'Katie Tarbox',
            company: 'Outside The Box',
            image: avatars.katieTarbox,
            companyLogoUrl: logos.outsideTheBox,
            companyWebsite: 'https://www.outsidethebox.vc/'
          }
        ]
      },
      {
        name: 'After Class',
        description: 'Inside the Deal: Fireside Chat & Early-Stage Masterclass with Contrary',
        start: '5:00PM',
        end: '6:45PM',
        isVirtual: false,
        speakers: [
          {
            name: 'Jason Chen',
            role: 'Partner',
            company: 'Contrary',
            image: avatars.jasonChen,
            companyLogoUrl: logos.contrary,
            companyWebsite: 'https://contrary.com'
          }
        ],
        eventUrl: 'https://lu.ma/ContraryXStartupWeek',
        format: [
          {
            time: '5:00PM - 5:45PM',
            title: 'Fireside Chat: Inside the Deal',
            description: 'Deep dive into a recent Contrary investment - from first meeting to partnership.'
          },
          {
            time: '5:45PM - 6:00PM',
            title: 'Reception',
            description: 'Reception for all attendees.'
          },
          {
            time: '6:00PM - 6:45PM',
            title: 'Early-Stage Masterclass',
            description: 'Exclusive session for 5 pre-selected teams to pitch and receive feedback.',
            applicationInfo: {
              deadline: 'March 12',
              notificationDate: 'March 15',
              slots: 5
            }
          }
        ]
      },
    ],
  },
  {
    date: 'March 19',
    dateTime: '2024-03-19',
    summary: 'Wednesday focuses on startup careers and AI innovation.',
    timeSlots: [
      {
        name: 'Lunch Event',
        description: 'Getting a job at a startup: Wharton Students Panel',
        start: '12:00PM',
        end: '1:00PM',
        isVirtual: false,
        speakers: [
          {
            name: 'Hannah Frankl',
            role: 'Wharton Student',
            company: 'Rogo (Fin Tech)',
            image: avatars.hannahFrankl,
            companyLogoUrl: logos.rogo,
            companyWebsite: 'https://rogo.ai/'
          },
          {
            name: 'Allie DiPietro',
            role: 'Wharton Student',
            company: 'Juniver (Health Tech)',
            image: avatars.allieDiPietro,
            companyLogoUrl: logos.juniver,
            companyWebsite: 'https://www.joinjuniver.com/'
          },
          {
            name: 'Jacqueline Keene',
            role: 'Wharton Student',
            company: 'Sown to Grown (Ed Tech)',
            image: avatars.jacquelineKeene,
            companyLogoUrl: logos.sowntogrow,
            companyWebsite: 'https://www.sowntogrow.com/'
          },
          {
            name: 'Filippos Letsas',
            role: 'Wharton Student',
            company: 'Auterion (Deep Tech)',
            image: avatars.filipposLetsas,
            companyLogoUrl: logos.auterion,
            companyWebsite: 'https://auterion.com/'
          }
        ]
      },
      {
        name: 'After Class',
        description: 'How AI is Making the World Flat',
        start: '5:00PM',
        end: '6:00PM',
        isVirtual: true,
        speakers: [
          {
            name: 'Nicole Sahin',
            company: 'Globalization Partners',
            image: avatars.nicoleSahin,
            companyLogoUrl: logos.globalizationPartners,
            companyWebsite: 'https://www.globalization-partners.com/'
          }
        ]
      },
    ],
  },
  {
    date: 'March 20',
    dateTime: '2024-03-20',
    summary: 'Thursday highlights women in VC and AI innovation.',
    timeSlots: [
      {
        name: 'Lunch Event',
        description: 'Women in VC Panel',
        start: '12:00PM',
        end: '1:00PM',
        isVirtual: true,
        speakers: [
          {
            name: 'Jenna Bryant',
            role: 'Founder, GP',
            company: 'Embedded Ventures',
            image: avatars.jennaBryant,
            companyLogoUrl: logos.embeddedVentures,
            companyWebsite: 'https://embedded.ventures/'
          },
          {
            name: 'Urvashi Barooah',
            role: 'Partner',
            company: 'Redpoint Ventures',
            image: avatars.urvashipBarooah,
            companyLogoUrl: logos.redpoint,
            companyWebsite: 'https://www.redpoint.com/'
          },
          {
            name: 'Sue Xu',
            role: 'GP',
            company: 'Amino Capital',
            image: avatars.sueXu,
            companyLogoUrl: logos.aminocapital,
            companyWebsite: 'https://www.aminocapital.com/'
          }
        ]
      },
      {
        name: 'After Class',
        description: 'Fireside Chat with Moonhub AI',
        start: '5:00PM',
        end: '6:00PM',
        isVirtual: true,
        speakers: [
          {
            name: 'Nancy Xu',
            role: 'Founder, CEO',
            company: 'Moonhub AI, Stanford',
            image: avatars.nancyXu,
            companyLogoUrl: logos.moonhubAi,
            companyWebsite: 'https://www.moonhub.ai/'
          }
        ]
      },
    ],
  },
]

export const summitSchedule: Day = {
  date: 'March 21',
  dateTime: '2024-03-21',
  summary: 'Our flagship event at Fitler Club featuring industry leaders, keynotes, and extensive networking.',
  timeSlots: [
    {
      name: 'Intro to Summit',
      description: null,
      start: '9:00AM',
      end: '9:10AM',
      isVirtual: false
    },
    {
      name: 'Deep Tech Panel',
      description: 'Innovations in Deep Tech',
      start: '9:10AM',
      end: '10:00AM',
      isVirtual: false,
      speakers: [
        {
          name: 'Jordan Noone',
          role: 'Co-Founder @ Zoo and Relativity Space',
          company: 'Zoo',
          image: avatars.jordanNoone,
          companyLogoUrl: logos.zoo,
          companyWebsite: 'https://www.zoo.co/'
        },
        {
          name: 'Dan Roelker',
          role: 'Co-Founder',
          company: 'Observable Space',
          image: avatars.danielRoelker,
          companyLogoUrl: logos.observableSpace,
          companyWebsite: 'https://observable.space/'
        },
        {
          name: 'Philip Johnston',
          role: 'Founder',
          company: 'Starcloud',
          image: avatars.phillipJohnston,
          companyLogoUrl: logos.starcloud,
          companyWebsite: 'https://www.starcloud.com/'
        }
      ]
    },
    {
      name: 'Enterprise AI Panel',
      description: 'The Future of Enterprise AI',
      start: '10:05AM',
      end: '10:55AM',
      isVirtual: false,
      speakers: [
        // {
        //   name: 'James da Costa',
        //   role: 'Partner',
        //   company: 'Andreessen Horowitz',
        //   image: avatars.jamesDaCosta,
        //   companyLogoUrl: logos.a16z,
        //   companyWebsite: 'https://a16z.com/'
        // },
        {
          name: 'Josh Lillie',
          role: 'Director of Startups',
          company: 'Databricks',
          image: avatars.joshLillie,
          companyLogoUrl: logos.databricks,
          companyWebsite: 'https://www.databricks.com/'
        },
        {
          name: 'Gabe Stengel',
          role: 'Founder',
          company: 'Rogo',
          image: avatars.gabrielStengel,
          companyLogoUrl: logos.rogo,
          companyWebsite: 'https://www.rogo.ai'
        },
        {
          name: 'Haroon Choudery',
          role: 'Founder',
          company: 'Autoblocks AI',
          image: avatars.haroonChoudery,
          companyLogoUrl: logos.autoblocksAi,
          companyWebsite: 'https://www.autoblocks.ai/'
        },
        // {
        //   name: 'Logan Kilpatrick',
        //   role: 'Founder, Former A16z Scout',
        //   company: 'DeepMind, Google Gemini, Early stage AI VC',
        //   image: avatars.loganKilpatrick,
        //   companyLogoUrl: logos.deepmind
        // },
        // {
        //   name: 'John Nay',
        //   role: 'Founder, CEO',
        //   company: 'Norm AI',
        //   image: avatars.johnNay,
        //   companyLogoUrl: logos.normAi
        // }
      ]
    },
    {
      name: 'Wharton Healthcare Founders Panel',
      description: 'Innovation in Healthcare',
      start: '11:00AM',
      end: '11:50AM',
      isVirtual: false,
      speakers: [
        {
          name: 'Eric Kinariwala',
          role: 'Founder and CEO',
          company: 'Capsule',
          image: avatars.ericKinariwala,
          companyLogoUrl: logos.capsule,
          companyWebsite: 'https://www.capsule.com/'
        },
        {
          name: 'Cavan Klinsky',
          role: 'Founder',
          company: 'Healthie',
          image: avatars.cavanKlinsky,
          companyLogoUrl: logos.healthie,
          companyWebsite: 'https://www.gethealthie.com/'
        },
        {
          name: 'Justin Silver',
          role: 'Founder',
          company: 'Symptoguard & Aavrani',
          image: avatars.justinSilver,
          companyLogoUrl: logos.symptoguard,
          companyWebsite: 'https://www.symptoguard.com/'
        }
      ]
    },
    {
      name: 'Keynote Speaker',
      description: 'Healthcare Innovation & Leadership',
      start: '11:55AM',
      end: '12:35PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Sandeep Acharya',
          role: 'Founder & CEO',
          company: 'Octave',
          image: avatars.sandeepAcharya,
          companyLogoUrl: logos.octave,
          companyWebsite: 'https://www.findoctave.com/'
        }
      ]
    },
    {
      name: 'Lunch Break',
      description: null,
      start: '12:35PM',
      end: '1:25PM',
      isVirtual: false
    },
    {
      name: 'Keynote Speaker',
      description: 'The Future of Enterprise Software & Venture Capital',
      start: '1:30PM',
      end: '2:20PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Gordon Ritter',
          role: 'Founder & General Partner',
          company: 'Emergence Capital',
          image: avatars.gordonRitter,
          companyLogoUrl: logos.emergenceCapital,
          companyWebsite: 'https://www.emcap.com/'
        }
      ]
    },
    {
      name: 'State of Crypto Panel Discussion',
      description: 'The Future of Crypto and Web3',
      start: '2:25PM',
      end: '3:15PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Nassim Eddequiouaq',
          role: 'Founder, CEO',
          company: 'Bastion, a16z crypto CTO',
          image: avatars.nassimEddequiouaq,
          companyLogoUrl: logos.bastion,
          companyWebsite: 'https://www.bastion.com/'
        },
        {
          name: 'Nick Krakoff',
          role: 'Crypto Products & Business',
          company: 'Stripe',
          image: avatars.nickKrakoff,
          companyLogoUrl: logos.stripe,
          companyWebsite: 'https://stripe.com/'
        },
        {
          name: 'Rami Shahatit',
          role: 'Co-Founder',
          company: 'Portal',
          image: avatars.ramiShahatit,
          companyLogoUrl: logos.portal,
          companyWebsite: 'https://www.portalhq.io/'
        },
        {
          name: 'Ejaaz Ahamadeen',
          role: 'Cohost and Founder',
          company: 'Founder / CIO @26CC, Co-host Bankless, Core contributor @aiccelerateDAO',
          image: avatars.ejaazAhamadeen,
          companyLogoUrl: logos.bankless,
          companyWebsite: 'https://www.bankless.com/'
        },
        {
          name: 'Andrew Flockhart',
          role: 'Director of Engineering For Base',
          company: 'Coinbase',
          image: avatars.andrewF,
          companyLogoUrl: logos.coinbase,
          companyWebsite: 'https://www.coinbase.com/'
        }
      ]
    },
    {
      name: 'Startup Networking Fair',
      description: 'Connect with founders, investors, and fellow entrepreneurs',
      start: '3:15PM',
      end: '5:00PM',
      isVirtual: false
    },
  ],
}

function WeekSchedule() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {weekSchedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0 group cursor-pointer',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden flex items-center gap-2">
                        <span className="absolute inset-0" />
                        {day.date}
                        <svg 
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {weekSchedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
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
          Startup Summit at Fitler Club
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
              Week Events
            </span>
            <div className="h-px w-8 rounded-full bg-blue-600/20" />
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Join us at Huntsman Hall
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Join us throughout the week for intimate fireside chats and focused panel discussions with industry leaders.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <Container className="relative">
          <div className="mx-auto max-w-7xl">
            <WeekSchedule />
            <ScheduleStatic />
          </div>
        </Container>
      </div>

      <Container className="relative z-10 mt-24">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <div className="inline-flex items-center justify-center gap-3 mb-6 sm:mb-8 bg-blue-50/50 px-4 py-2 rounded-2xl">
            <div className="h-px w-8 rounded-full bg-blue-600/20" />
            <span className="text-xl font-semibold text-blue-600 tracking-wider uppercase">
              Summit Day
            </span>
            <div className="h-px w-8 rounded-full bg-blue-600/20" />
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Startup Summit at Fitler Club
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

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

export function TimeSlots({ day, className }: { day: Day; className?: string }) {
  const isWeekday = day.date !== 'March 21'

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

function ScheduleStatic() {
  return (
    <div className="hidden lg:block">
      <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
        {weekSchedule.map((day) => (
          <section key={day.dateTime} className="relative">
            <DaySummary day={day} />
            <TimeSlots day={day} className="mt-10" />
          </section>
        ))}
      </div>
    </div>
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
