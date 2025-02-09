'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'

const days = [
  {
    name: 'Monday',
    date: 'March 17',
    dateTime: '2024-03-17',
    speakers: [
      {
        name: 'Robert Borghese',
        role: 'Professor at Wharton - Legal Aspects of Entrepreneurship',
      },
      {
        name: 'Brian Riordan',
        role: 'Founder at Avalanche',
      },
      {
        name: 'Shawn Xu',
        role: 'Partner at Lowercarbon Capital',
      },
    ],
  },
  {
    name: 'Tuesday',
    date: 'March 18',
    dateTime: '2024-03-18',
    speakers: [
      {
        name: 'Jake Gordon',
        role: 'Founder at Noteefy',
      },
      {
        name: 'Daniel Kang',
        role: 'Founder at Flowbo',
      },
      {
        name: 'Ian Goldberg',
        role: 'Partner at Venrex',
      },
    ],
  },
  {
    name: 'Wednesday',
    date: 'March 19',
    dateTime: '2024-03-19',
    speakers: [
      {
        name: 'Hannah Frankl',
        role: 'Wharton Student - Rogo (Fin Tech)',
      },
      {
        name: 'Allie DiPietro',
        role: 'Wharton Student - Juniver (Health Tech)',
      },
      {
        name: 'Jacqueline Keene',
        role: 'Wharton Student - Sown to Grown (Ed Tech)',
      },
      {
        name: 'Filippos Letsas',
        role: 'Wharton Student - Auterion (Deep Tech)',
      },
      {
        name: 'Nicole Sahin',
        role: 'CEO at Globalization Partners',
      },
    ],
  },
  {
    name: 'Thursday',
    date: 'March 20',
    dateTime: '2024-03-20',
    speakers: [
      {
        name: 'Jenna Bryant',
        role: 'Founder & GP at Embedded Ventures',
      },
      {
        name: 'Urvashi Barooah',
        role: 'Partner at Redpoint Ventures',
      },
      {
        name: 'Sue Xu',
        role: 'GP at Amino Capital',
      },
      {
        name: 'Nancy Xu',
        role: 'Founder & CEO at Moonhub AI',
      },
    ],
  },
  {
    name: 'Summit Day',
    date: 'March 21',
    dateTime: '2024-03-21',
    speakers: [
      {
        name: 'Sandeep Acharya',
        role: 'Founder & CEO at Octave - Keynote Speaker',
      },
      {
        name: 'Jordan Noone',
        role: 'Founder at Zoo',
      },
      {
        name: 'Dan Roelker',
        role: 'Founder at OurSky',
      },
      {
        name: 'Philip Johnston',
        role: 'Founder at Lumen',
      },
      {
        name: 'James De La Costa',
        role: 'Partner at a16z',
      },
      {
        name: 'Gabe Stengel',
        role: 'Founder at Rogo',
      },
      {
        name: 'Haroon Choudery',
        role: 'Founder at Autoblocks AI',
      },
      {
        name: 'Logan Kilpatrick',
        role: 'DeepMind, Google Gemini, Early stage AI VC Founder',
      },
      {
        name: 'John Nay',
        role: 'Founder & CEO at Norm AI',
      },
      {
        name: 'Eric Kinariwala',
        role: 'Founder at Capsule',
      },
      {
        name: 'Cavan Klinsky',
        role: 'Founder at Healthie',
      },
      {
        name: 'Justin Silver',
        role: 'Founder at Symptoguard + Aavrani',
      },
      {
        name: 'Gordon Ritter',
        role: 'Founder and GP at Emergence Capital',
      },
      {
        name: 'Nass Eddequiouaq',
        role: 'Founder & CEO at Bastion, former a16z crypto CTO',
      },
      {
        name: 'Nick Krakoff',
        role: 'Head of Crypto Products & Business at Stripe',
      },
      {
        name: 'Rami',
        role: 'Founder & CEO at Portal',
      },
      {
        name: 'Ejaaz Ahamadeen',
        role: 'Cohost and Founder at Bankless, AI X Crypto HedgeFund',
      },
      {
        name: 'Andrew F',
        role: 'Head of Base Engineering at Coinbase',
      },
      {
        name: 'Mark Grace',
        role: 'Partner, Crypto at M13',
      },
    ],
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Featured Speakers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Join us for talks and panels with over 50 founders, VCs, and industry leaders from the most innovative companies.
          </p>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {days.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
