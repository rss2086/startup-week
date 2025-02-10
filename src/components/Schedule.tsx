'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
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
        start: '12:30PM',
        end: '1:15PM',
        isVirtual: false,
        speakers: [
          {
            name: 'Robert Borghese',
            role: 'Professor',
            company: 'Wharton'
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
            role: 'Founder'
          },
          {
            name: 'Shawn Xu',
            company: 'Lowercarbon'
          },
          {
            name: 'TBA',
            company: 'Breakthrough VC'
          },
          {
            name: 'TBA',
            company: 'Heirloom'
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
        start: '12:30PM',
        end: '1:15PM',
        isVirtual: true,
        speakers: [
          {
            name: 'Jake Gordon',
            company: 'Noteefy'
          },
          {
            name: 'Daniel Kang',
            company: 'Flowbo'
          },
          {
            name: 'Ian Goldberg',
            company: 'Venrex'
          }
        ]
      },
      {
        name: 'After Class',
        description: 'No event scheduled',
        start: '5:00PM',
        end: '6:00PM',
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
        start: '12:30PM',
        end: '1:15PM',
        isVirtual: false,
        speakers: [
          {
            name: 'Hannah Frankl',
            role: 'Wharton Student',
            company: 'Rogo (Fin Tech)'
          },
          {
            name: 'Allie DiPietro',
            role: 'Wharton Student',
            company: 'Juniver (Health Tech)'
          },
          {
            name: 'Jacqueline Keene',
            role: 'Wharton Student',
            company: 'Sown to Grown (Ed Tech)'
          },
          {
            name: 'Filippos Letsas',
            role: 'Wharton Student',
            company: 'Auterion (Deep Tech)'
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
            company: 'Globalization Partners'
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
        start: '12:30PM',
        end: '1:15PM',
        isVirtual: true,
        speakers: [
          {
            name: 'Jenna Bryant',
            role: 'Founder, GP',
            company: 'Embedded Ventures'
          },
          {
            name: 'Urvashi Barooah',
            role: 'Partner',
            company: 'Redpoint Ventures'
          },
          {
            name: 'Sue Xu',
            role: 'GP',
            company: 'Amino Capital'
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
            company: 'Moonhub AI, Stanford'
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
          role: 'Founder',
          company: 'Zoo'
        },
        {
          name: 'Dan Roelker',
          role: 'Founder',
          company: 'OurSky'
        },
        {
          name: 'Philip Johnston',
          role: 'Founder',
          company: 'Lumen'
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
        {
          name: 'James De La Costa',
          role: 'Partner',
          company: 'a16z'
        },
        {
          name: 'Gabe Stengel',
          role: 'Founder',
          company: 'Rogo'
        },
        {
          name: 'Haroon Choudery',
          role: 'Founder',
          company: 'Autoblocks AI'
        },
        {
          name: 'Logan Kilpatrick',
          role: 'Founder, Former A16z Scout',
          company: 'DeepMind, Google Gemini, Early stage AI VC'
        },
        {
          name: 'John Nay',
          role: 'Founder, CEO',
          company: 'Norm AI'
        }
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
          role: 'Founder',
          company: 'Capsule'
        },
        {
          name: 'Cavan Klinsky',
          role: 'Founder',
          company: 'Healthie'
        },
        {
          name: 'Justin Silver',
          role: 'Founder',
          company: 'Symptoguard + Aavrani'
        }
      ]
    },
    {
      name: 'Keynote Speaker',
      description: 'Sandeep Acharya',
      start: '11:55AM',
      end: '12:35PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Sandeep Acharya',
          role: 'Founder, CEO',
          company: 'Octave'
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
      name: 'Making it in VC: Fireside',
      description: 'Fireside with Gordon Ritter',
      start: '1:30PM',
      end: '2:20PM',
      isVirtual: false,
      speakers: [
        {
          name: 'Gordon Ritter',
          role: 'Founder and GP',
          company: 'Emergence Capital'
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
          name: 'Nass Eddequiouaq',
          role: 'Founder, CEO',
          company: 'Bastion, a16z crypto CTO'
        },
        {
          name: 'Nick Krakoff',
          role: 'Head of Crypto Products & Business',
          company: 'Stripe Crypto'
        },
        {
          name: 'Rami',
          role: 'Founder, CEO',
          company: 'Portal'
        },
        {
          name: 'Ejaaz Ahamadeen',
          role: 'Cohost and Founder',
          company: 'Bankless, AI X Crypto HedgeFund'
        },
        {
          name: 'Mark Grace',
          role: 'Partner, Crypto',
          company: 'M13'
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
    <div className="mt-16 rounded-3xl bg-blue-50 px-8 py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={startupSummit}
          alt=""
          fill
          className="object-cover blur-sm opacity-20"
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
        className="mt-8 bg-white/80 rounded-2xl border border-blue-100 relative z-10"
      />
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Week Events at Huntsman Hall
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
        'space-y-12 bg-white/60 px-8 py-10 shadow-xl shadow-blue-900/5 backdrop-blur-sm rounded-2xl border border-blue-100/20',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} EST`}
          className="relative"
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-12 h-px w-48 bg-indigo-500/10" />
          )}
          
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className={clsx(
                "inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium ring-1 ring-inset",
                timeSlot.name === "Lunch Event" 
                  ? "bg-yellow-400/10 text-yellow-500 ring-yellow-400/30"
                  : "bg-blue-400/10 text-blue-400 ring-blue-400/30",
                !isWeekday && "text-lg px-4 py-2" // Made bigger for summit day
              )}>
                {timeSlot.name}
              </span>
              {timeSlot.isVirtual !== undefined && isWeekday && (
                <span className={clsx(
                  "inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium ring-1 ring-inset",
                  timeSlot.isVirtual
                    ? "bg-purple-50 text-purple-700 ring-purple-700/10"
                    : "bg-green-50 text-green-700 ring-green-700/10"
                )}>
                { 
                  (timeSlot.isVirtual) ? 'Speakers on Zoom' : 'In Person'
                  }
                </span>
              )}
            </div>

            <div className="text-center max-w-2xl">
              <h4 className={clsx(
                "text-2xl font-semibold tracking-tight",
                timeSlot.description === "No event scheduled" 
                  ? "text-slate-400"
                  : "text-blue-900"
              )}>
                {timeSlot.description}
              </h4>
              <p className="mt-2 font-mono text-sm text-slate-500">
                <time dateTime={`${day.dateTime}T${timeSlot.start}-05:00`}>
                  {timeSlot.start}
                </time>{' '}
                -{' '}
                <time dateTime={`${day.dateTime}T${timeSlot.end}-05:00`}>
                  {timeSlot.end}
                </time>{' '}
                EST
              </p>
            </div>
            
            {timeSlot.speakers && timeSlot.speakers.length > 0 && (
              <div className={clsx(
                "mt-8 w-full mx-auto",
                isWeekday 
                  ? "max-w-3xl" 
                  : "grid gap-6",
                !isWeekday && (
                  timeSlot.speakers.length === 1 ? "max-w-lg" : 
                  timeSlot.speakers.length === 2 ? "grid-cols-2 max-w-3xl" :
                  "sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"
                )
              )}>
                {isWeekday ? (
                  <div className="bg-white/80 rounded-xl border border-blue-100/20 overflow-hidden">
                    {timeSlot.speakers.map((speaker, idx) => (
                      <div 
                        key={idx}
                        className={clsx(
                          "flex items-center gap-4 p-4",
                          idx !== timeSlot.speakers!.length - 1 && "border-b border-slate-100"
                        )}
                      >
                        <div className="flex-shrink-0">
                          {speaker.companyLogoUrl ? (
                            <img 
                              src={speaker.companyLogoUrl} 
                              alt={`${speaker.company} logo`}
                              className="h-8 w-8 object-contain"
                            />
                          ) : speaker.company && (
                            <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-blue-900 truncate">
                              {speaker.name}
                            </p>
                            {speaker.company && (
                              <p className="text-sm text-blue-600 font-medium ml-2">
                                {speaker.company}
                              </p>
                            )}
                          </div>
                          {speaker.role && (
                            <p className="text-sm text-slate-600 truncate">
                              {speaker.role}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  timeSlot.speakers.map((speaker, idx) => (
                    <div 
                      key={idx} 
                      className={clsx(
                        "flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-white to-slate-50/90 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100/20 hover:border-blue-200/30",
                        timeSlot.speakers?.length === 1 && "mx-auto w-full"
                      )}
                    >
                      <div className="text-center mb-4">
                        <h5 className="text-2xl font-bold text-blue-900 mb-1.5 leading-tight">
                          {speaker.name}
                        </h5>
                        {speaker.role && (
                          <p className="text-base text-slate-600 font-medium">
                            {speaker.role}
                          </p>
                        )}
                      </div>

                      <div className="w-full mt-auto pt-4 border-t border-slate-100">
                        {speaker.companyLogoUrl ? (
                          <img 
                            src={speaker.companyLogoUrl} 
                            alt={`${speaker.company} logo`}
                            className="h-10 w-auto mb-2 mx-auto object-contain"
                          />
                        ) : speaker.company && (
                          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-slate-100 to-white mb-2 mx-auto flex items-center justify-center text-slate-400 shadow-sm">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                        )}
                        {speaker.company && (
                          <p className="text-sm text-blue-600 text-center font-medium">
                            {speaker.company}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
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
