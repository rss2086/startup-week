'use client'

import { useEffect, useId, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

/* People */
import robertBorghese from '@/images/avatars/robert-borghese.jpeg'
import brianRiordan from '@/images/avatars/brian-riordan.jpeg'
import shawnXu from '@/images/avatars/shawn-xu.jpeg'
import jakeGordon from '@/images/avatars/jake-gordon.jpeg'
import danielKang from '@/images/avatars/daniel-kang.jpeg'
import ianGoldberg from '@/images/avatars/ian-goldberg.jpeg'


/* Companies */
import whartonLogo from '@/images/logos/wharton-logo.svg'
import avalancheLogo from '@/images/logos/avalanche-fusion.jpeg'
import lowercarbonLogo from '@/images/logos/lowercarbon-capital.jpeg'
import noteefyLogo from '@/images/logos/noteefy.jpeg'
import flowboLogo from '@/images/logos/flowbo.jpeg'
import venrexLogo from '@/images/logos/venrex.jpeg'

interface Speaker {
  name: string
  role: string
  image?: StaticImageData
  company?: string
  companyLogoUrl?: StaticImageData
  linkedinUrl?: string
  companyWebsite?: string
}

interface Day {
  name: string
  date: string
  dateTime: string
  speakers: Speaker[]
}

const days: Day[] = [
  {
    name: 'Monday',
    date: 'March 17',
    dateTime: '2024-03-17',
    speakers: [
      {
        name: 'Robert Borghese',
        role: 'Professor at Wharton - Legal Aspects of Entrepreneurship',
        image: robertBorghese,
        company: 'Wharton',
        companyLogoUrl: whartonLogo,
        linkedinUrl: 'https://www.linkedin.com/in/robert-j-borghese-16247a1',
        companyWebsite: 'https://lgst.wharton.upenn.edu/profile/borghese/'
      },
      {
        name: 'Brian Riordan',
        role: 'Founder at Avalanche',
        image: brianRiordan,
        company: 'Avalanche Energy',
        companyLogoUrl: avalancheLogo,
        linkedinUrl: 'https://www.linkedin.com/in/brian-riordan-a7883b11/',
        companyWebsite: 'https://avalanchefusion.com/about/'
      },
      {
        name: 'Shawn Xu',
        role: 'Partner at Lowercarbon Capital',
        image: shawnXu,
        company: 'Lowercarbon Capital',
        companyLogoUrl: lowercarbonLogo,
        linkedinUrl: null,
        companyWebsite: null
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
        role: 'Co-Founder & CEO of Noteefy',
        image: jakeGordon,
        company: 'Noteefy',
        companyLogoUrl: noteefyLogo,
        linkedinUrl: 'https://www.linkedin.com/in/jng',
        companyWebsite: 'https://noteefy.app'
      },
      {
        name: 'Daniel Kang',
        role: 'Co-Founder of Flowbo (YC S21)',
        image: danielKang,
        company: 'Flowbo',
        companyLogoUrl: flowboLogo,
        linkedinUrl: 'https://www.linkedin.com/in/itsdankang',
        companyWebsite: 'https://www.flowbo.co'
      },
      {
        name: 'Ian Goldberg',
        role: 'Partner at Venrex',
        image: ianGoldberg,
        company: 'Venrex',
        companyLogoUrl: venrexLogo,
        linkedinUrl: 'https://www.linkedin.com/in/ian-s-goldberg',
        companyWebsite: 'http://www.venrex.partners'
      }
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
        image: hannahFrankl,
        company: 'Rogo',
        companyLogoUrl: rogoLogo,
        linkedinUrl: 'https://www.linkedin.com/in/hannahfrankl/',
        companyWebsite: 'https://www.rogoai.com/'
      },
      {
        name: 'Allie DiPietro',
        role: 'Wharton Student - Juniver (Health Tech)',
        image: allieDiPietro,
        company: 'Juniver',
        companyLogoUrl: juniverLogo,
        linkedinUrl: 'https://www.linkedin.com/in/alice-dipietro/',
        companyWebsite: 'https://www.juniver.com/'
      },
      {
        name: 'Jacqueline Keene',
        role: 'Wharton Student - Sown to Grown (Ed Tech)',
        image: jacquelineKeene,
        company: 'Sown To Grow',
        companyLogoUrl: sownToGrowLogo,
        linkedinUrl: 'https://www.linkedin.com/in/jacqueline-keene/',
        companyWebsite: 'https://www.sowntogrow.com/'
      },
      {
        name: 'Filippos Letsas',
        role: 'Wharton Student - Auterion (Deep Tech)',
        image: filipposLetsas,
        company: 'Auterion',
        companyLogoUrl: auterionLogo,
        linkedinUrl: 'https://www.linkedin.com/in/fletsas/',
        companyWebsite: 'https://auterion.com/'
      },
      {
        name: 'Nicole Sahin',
        role: 'CEO at Globalization Partners',
        image: nicoleSahin,
        company: 'Globalization Partners',
        companyLogoUrl: globalizationPartnersLogo,
        linkedinUrl: 'https://www.linkedin.com/in/nicolesahin/',
        companyWebsite: 'https://www.globalization-partners.com/'
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
        image: 'https://media.licdn.com/dms/image/C4E03AQGq3qiCJRDHlA/profile-displayphoto-shrink_800_800/0/1517614739746?e=1707350400&v=beta&t=Ry-Ue7bYNfyBz-Xp8Gu7qmCsZfLBzHGEOZMdAHhCTOE',
        company: 'Embedded Ventures',
        companyLogoUrl: 'https://media.licdn.com/dms/image/C560BAQHbQZFSQIB9Yw/company-logo_200_200/0/1630511737707?e=1709769600&v=beta&t=Hs-Ue1-Hd-pVWzqcBNGJTZhsXwPVhJDSPFLWz_8Xq3I',
        linkedinUrl: 'https://www.linkedin.com/in/jennabryant/',
        companyWebsite: 'https://embedded.ventures/'
      },
      {
        name: 'Urvashi Barooah',
        role: 'Partner at Redpoint Ventures',
        image: 'https://media.licdn.com/dms/image/C4E03AQFdCJGZEJVEAA/profile-displayphoto-shrink_800_800/0/1633453571589?e=1707350400&v=beta&t=Oo0XaLdCQVxNGDLdXkXtNvJXHzTZnRhDEcXLxlZsVXY',
        company: 'Redpoint Ventures',
        companyLogoUrl: 'https://media.licdn.com/dms/image/C560BAQHULTsms1vbYA/company-logo_200_200/0/1630641439820?e=1709769600&v=beta&t=Ux_1gDqODGHZcXTvx9Xt1yxlgbTXwcwV-Ks3pNi-Gm0',
        linkedinUrl: 'https://www.linkedin.com/in/urvashi-barooah-7a0ba228/',
        companyWebsite: 'https://www.redpoint.com/'
      },
      {
        name: 'Sue Xu',
        role: 'GP at Amino Capital',
        image: 'https://media.licdn.com/dms/image/C4E03AQE0Ey7WxBVmNg/profile-displayphoto-shrink_800_800/0/1516242694733?e=1707350400&v=beta&t=Aq_Aw9Kq3AQM5CjgGHCdqGkLOWZkCaAVcFgRDQJPRZI',
        company: 'Amino Capital',
        companyLogoUrl: 'https://media.licdn.com/dms/image/C4E0BAQHiNAaEgmOQ_g/company-logo_200_200/0/1630639684750?e=1709769600&v=beta&t=Vy9Jn9uXRQWTf7_Pu6Ck6ZfXyFOTAMVxPxwXHGEKBrY',
        linkedinUrl: 'https://www.linkedin.com/in/suexu/',
        companyWebsite: 'https://www.aminocapital.com/'
      },
      {
        name: 'Nancy Xu',
        role: 'Founder & CEO at Moonhub AI',
        image: 'https://media.licdn.com/dms/image/C4E03AQFNEXTIrJxTmw/profile-displayphoto-shrink_800_800/0/1517614752744?e=1707350400&v=beta&t=Oi5Uj2OTKQqPDrYZGNLNVdpWNmkXhWZXCXWGqC4Ue_I',
        company: 'Moonhub AI',
        companyLogoUrl: 'https://media.licdn.com/dms/image/D560BAQEkKxhRPYJ0Vw/company-logo_200_200/0/1692290408421?e=1709769600&v=beta&t=TRhqZhRkuSZvLPGwGULqf_sPXRPLVQTEwvJZHjGLDXc',
        linkedinUrl: 'https://www.linkedin.com/in/xnancy/',
        companyWebsite: 'https://www.moonhub.ai/'
      },
    ],
  },
  {
    name: 'Summit Day',
    date: 'March 21',
    dateTime: '2024-03-21',
    speakers: [
      {
        name: "Sandeep Acharya",
        role: "Founder & CEO at Octave - Keynote Speaker",
        company: "Octave",
        linkedinUrl: "https://www.linkedin.com/in/sandeep-acharya-he-his-52ab458",
        companyWebsite: "https://www.findoctave.com/"
      },
      {
        name: "Jordan Noone",
        role: "Founder at Zoo",
        company: "Zoo",
        linkedinUrl: "https://www.linkedin.com/in/jordannoone/",
        companyWebsite: "https://zoo.dev/"
      },
      {
        name: "Dan Roelker",
        role: "Founder at OurSky",
        company: "OurSky",
        linkedinUrl: "https://www.linkedin.com/in/dan-roelker",
        companyWebsite: "https://oursky.ai/"
      },
      {
        name: "Philip Johnston",
        role: "Founder at Lumen",
        company: "Lumen Orbit",
        linkedinUrl: "https://www.linkedin.com/in/johnstonphilip",
        companyWebsite: "https://www.lumenorbit.com/"
      },
      {
        name: "James da Costa",
        role: "Partner at a16z",
        company: "Andreessen Horowitz",
        linkedinUrl: "https://www.linkedin.com/in/jamesdacosta",
        companyWebsite: "https://a16z.com/"
      },
      {
        name: "Gabe Stengel",
        role: "Founder at Rogo",
        company: "Rogo",
        linkedinUrl: "https://www.linkedin.com/in/gabestengel/",
        companyWebsite: "https://www.rogoai.com/"
      },
      {
        name: "Haroon Choudery",
        role: "Founder at Autoblocks AI",
        company: "Autoblocks AI",
        linkedinUrl: "https://www.linkedin.com/in/haroonchoudery/",
        companyWebsite: "https://www.autoblocks.ai/"
      },
      {
        name: "Logan Kilpatrick",
        role: "DeepMind, Google Gemini, Early stage AI VC Founder",
        company: "Google",
        linkedinUrl: "https://www.linkedin.com/in/logankilpatrick/",
        companyWebsite: "https://deepmind.google/"
      },
      {
        name: "John Nay",
        role: "Founder & CEO at Norm AI",
        company: "Norm AI",
        linkedinUrl: "https://www.linkedin.com/in/johnjnay",
        companyWebsite: "https://www.norm.ai/"
      },
      {
        name: "Eric Kinariwala",
        role: "Founder at Capsule",
        company: "Capsule",
        linkedinUrl: "https://www.linkedin.com/in/ekinariwala",
        companyWebsite: "https://www.capsule.com/"
      },
      {
        name: "Cavan Klinsky",
        role: "Founder at Healthie",
        company: "Healthie",
        linkedinUrl: "https://www.linkedin.com/in/cavan-klinsky-4b4b74a9/",
        companyWebsite: "https://www.gethealthie.com/"
      },
      {
        name: "Justin Silver",
        role: "Founder at Symptoguard + Aavrani",
        company: "Symptoguard & Aavrani",
        linkedinUrl: "https://www.linkedin.com/in/justinasilver/",
        companyWebsite: "https://aavrani.com/"
      },
      {
        name: "Gordon Ritter",
        role: "Founder and GP at Emergence Capital",
        company: "Emergence Capital",
        linkedinUrl: "https://www.linkedin.com/in/gordonpritter",
        companyWebsite: "https://www.emcap.com/"
      },
      {
        name: "Nassim Eddequiouaq",
        role: "Founder & CEO at Bastion, former a16z crypto CTO",
        company: "Bastion",
        linkedinUrl: "https://www.linkedin.com/in/nassim-eddequidouaq/",
        companyWebsite: "https://www.bastion.com/"
      },
      {
        name: "Nick Krakoff",
        role: "Head of Crypto Products & Business at Stripe",
        company: "Stripe",
        linkedinUrl: null,
        companyWebsite: "https://stripe.com/"
      },
      {
        name: "Rami Shahatit",
        role: "Founder & hCEO at Portal",
        company: "Portal",
        linkedinUrl: "https://www.linkedin.com/in/rami-shahatit/",
        companyWebsite: "https://www.portal.org/"
      },
      {
        name: "Ejaaz Ahamadeen",
        role: "Cohost and Founder at Bankless, AI X Crypto HedgeFund",
        company: "Bankless",
        linkedinUrl: "https://www.linkedin.com/in/ejaaz-ahamadeen-231b7030/",
        companyWebsite: "https://www.bankless.com/"
      },
      {
        name: "Andrew F",
        role: "Head of Base Engineering at Coinbase",
        company: "Coinbase",
        linkedinUrl: "https://www.linkedin.com/in/andrew-f-206a77153/",
        companyWebsite: "https://www.coinbase.com/"
      },
      {
        name: "Mark Grace",
        role: "Partner, Crypto at M13",
        company: "M13",
        linkedinUrl: "https://www.linkedin.com/in/markgrace95/",
        companyWebsite: "https://www.m13.co/"
      }
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
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

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
                className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-16"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <SpeakerCard key={speakerIndex} speaker={speaker} />
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="group relative flex flex-col">
      {/* Image Container */}
      {speaker.image && (
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-900">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover transition-all duration-500 will-change-transform group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Enhanced Gradient Overlay with multiple layers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

          {/* Enlarged Company Logo Overlay */}
          {speaker.companyLogoUrl && (
            <div className="absolute bottom-0 right-0 flex h-1/4 w-1/3 items-center justify-center">
              <a 
                href={speaker.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full"
              >
                <div className="h-full w-full overflow-hidden bg-white/15 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-xl rounded-tl-2xl rounded-br-2xl">
                  <Image
                    src={speaker.companyLogoUrl}
                    alt={`${speaker.company} logo`}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </div>
              </a>
            </div>
          )}
        </div>
      )}

      {/* Text Content */}
      <div className="mt-6 space-y-2">
        <a 
          href={speaker.linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="block group/link"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 flex items-center gap-2 group-hover/link:text-blue-600 transition-colors duration-200">
            <span>{speaker.name}</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </h3>
        </a>


          <div className="space-y-1">
            {/* Role */}
            {speaker.role && (
              <div className="text-base text-gray-600">
                {speaker.role.split(' at ')[0]}
              </div>
            )}
            {/* Company */}
            {speaker.company && (
              <div className="mt-2 text-gray-600 flex items-center text-lg">
                <a 
                  href={speaker.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/company inline-flex items-center gap-2 hover:text-[#165DFB] transition-colors duration-200"
                >
                  <span className="relative flex items-center">
                    <span className="text-[#011F5B]/70 mr-1">at</span>
                    <span className="font-bold text-blue-600">{speaker.company}</span>
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#165DFB] scale-x-0 group-hover/company:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/company:opacity-100 group-hover/company:translate-x-0 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}
