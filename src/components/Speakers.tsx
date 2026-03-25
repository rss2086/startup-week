'use client'

import { useId } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { avatars, logos } from '@/config/images'

interface Speaker {
  name: string
  role: string
  image?: string
  company?: string
  companyLogoUrl?: string
  linkedinUrl?: string
  companyWebsite?: string
}

const speakers: Speaker[] = [
  // Keynote Speakers
  {
    name: 'John Hu',
    role: 'Founder & CEO',
    company: 'Stan',
    image: avatars.johnHu,
    companyLogoUrl: logos.stan,
    linkedinUrl: 'https://www.linkedin.com/in/johnghu',
    companyWebsite: 'https://www.stan.store/',
  },
  {
    name: 'Saanya Ojha',
    role: 'Partner',
    company: 'Bain Capital Ventures',
    image: avatars.saanyaOjha,
    companyLogoUrl: logos.bainCapitalVentures,
    linkedinUrl: 'https://www.linkedin.com/in/saanyaojha',
    companyWebsite: 'https://www.baincapitalventures.com/',
  },
  // Fireside Chat
  {
    name: 'Judy Thelen',
    role: 'Co-Founder & CEO',
    company: 'Beli',
    image: avatars.judyThelen,
    companyLogoUrl: logos.beli,
    linkedinUrl: 'https://www.linkedin.com/in/judiththelen',
    companyWebsite: 'https://www.beliapp.com/',
  },
  // AI Panel
  {
    name: 'Hashim Syed',
    role: 'AI GTM Lead, Startups',
    company: 'Google',
    image: avatars.hashimSyed,
    companyLogoUrl: logos.google,
    linkedinUrl: 'https://www.linkedin.com/in/hashim-syed',
    companyWebsite: 'https://cloud.google.com/',
  },
  {
    name: 'Parth Detroja',
    role: 'CEO',
    company: 'Pair AI',
    image: avatars.parthDetroja,
    companyLogoUrl: logos.pairAi,
    linkedinUrl: 'https://www.linkedin.com/in/parthdetroja',
    companyWebsite: 'https://www.getpair.com/',
  },
  {
    name: 'Aman Rangrass',
    role: 'SVP, Global Head of Revenue',
    company: 'Skan AI',
    image: avatars.amanRangrass,
    companyLogoUrl: logos.skanAi,
    linkedinUrl: 'https://www.linkedin.com/in/amanrangrass',
    companyWebsite: 'https://www.skan.ai/',
  },
  // VC Panel
  {
    name: 'Mia Farnham',
    role: 'Principal',
    company: 'Precursor Ventures',
    image: avatars.miaFarnham,
    companyLogoUrl: logos.precursorVentures,
    linkedinUrl: 'https://www.linkedin.com/in/mia-farnham-a3295b68',
    companyWebsite: 'https://precursorvc.com/',
  },
  {
    name: 'Emma Silverman',
    role: 'Partner',
    company: 'TMV',
    image: avatars.emmaSilverman,
    companyLogoUrl: logos.tmv,
    linkedinUrl: 'https://www.linkedin.com/in/emmacsilverman',
    companyWebsite: 'https://www.tmv.vc/',
  },
  {
    name: 'Aditya Nidmarti',
    role: 'Vice Principal',
    company: 'Bessemer Venture Partners',
    image: avatars.adityaNidmarti,
    companyLogoUrl: logos.bessemerVenturePartners,
    linkedinUrl: 'https://www.linkedin.com/in/adityanidmarti',
    companyWebsite: 'https://www.bvp.com/',
  },
  {
    name: 'Emily Man',
    role: 'Partner',
    company: 'Primary Venture Partners',
    image: avatars.emilyMan,
    companyLogoUrl: logos.primaryVenturePartners,
    linkedinUrl: 'https://www.linkedin.com/in/emily-man-02a1a486',
    companyWebsite: 'https://www.primary.vc/',
  },
  // Fintech Panel
  {
    name: "Keerthana 'KK' Kumar",
    role: 'Head of Engineering',
    company: 'Stripe Capital',
    image: avatars.keerthanaKumar,
    companyLogoUrl: logos.stripeCapital,
    linkedinUrl: 'https://www.linkedin.com/in/keerthanakumar',
    companyWebsite: 'https://stripe.com/capital',
  },
  {
    name: 'Ilona Limonta-Volkova',
    role: 'Principal / Forbes Fintech Writer',
    company: 'Bright Ventures',
    image: avatars.ilonaLimontaVolkova,
    companyLogoUrl: logos.brightVentures,
    linkedinUrl: 'https://www.linkedin.com/in/ilona-l-a83009b1',
    companyWebsite: 'https://bright.vc/',
  },
  {
    name: 'Julian Manieson',
    role: 'AI Deployment Lead',
    company: 'Hebbia',
    image: avatars.julianManieson,
    companyLogoUrl: logos.hebbia,
    linkedinUrl: 'https://www.linkedin.com/in/julian-manieson',
    companyWebsite: 'https://www.hebbia.ai/',
  },
  // Product Panel
  {
    name: 'Claire North',
    role: 'PM',
    company: 'Tennr',
    image: avatars.claireNorth,
    companyLogoUrl: logos.tennr,
    linkedinUrl: 'https://www.linkedin.com/in/claire-k-north',
    companyWebsite: 'https://www.tennr.com/',
  },
  {
    name: "Kari D'Elia",
    role: 'CPO',
    company: 'USAFacts',
    image: avatars.kariDelia,
    companyLogoUrl: logos.usafacts,
    linkedinUrl: 'https://www.linkedin.com/in/karidelia',
    companyWebsite: 'https://usafacts.org/',
  },
  {
    name: 'Beni Shafer-Sull',
    role: 'CPO',
    company: 'Oleum',
    image: avatars.beniShaferSull,
    companyLogoUrl: logos.oleum,
    linkedinUrl: 'https://www.linkedin.com/in/beni-shafer-sull',
    companyWebsite: 'https://www.oleum.ai/',
  },
  {
    name: 'Daniel Hanover',
    role: 'Co-founder',
    company: 'Dandy',
    image: avatars.danielHanover,
    companyLogoUrl: logos.dandy,
    linkedinUrl: 'https://www.linkedin.com/in/danielmhanover',
    companyWebsite: 'https://www.meetdandy.com/',
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
            Join us for talks and panels with founders, VCs, and industry leaders from the most innovative companies.
          </p>
        </div>
        <div className="mt-14 sm:mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {speakers.map((speaker, speakerIndex) => (
              <SpeakerCard key={speakerIndex} speaker={speaker} />
            ))}
          </div>
        </div>
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
            <div className="absolute bottom-0 right-0 flex h-1/3  w-1/2 sm:w-1/3 items-center justify-center">
              <a 
                href={speaker.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full"
              >
                <div className="h-full w-full overflow-hidden bg-white/15 p-3 sm:p-4 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-xl rounded-tl-2xl rounded-br-2xl">
                  <Image
                    src={speaker.companyLogoUrl}
                    alt={`${speaker.company} logo`}
                    width={1600}
                    height={1600}
                    className="h-full w-full object-contain"
                  />
                </div>
              </a>
            </div>
          )}
        </div>
      )}

      {/* Text Content */}
      <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
        <a 
          href={speaker.linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="block group/link"
        >
          <h3 className="text-lg sm:text-2xl font-semibold tracking-tight text-gray-900 flex items-center gap-2 group-hover/link:text-blue-600 transition-colors duration-200">
            <span>{speaker.name}</span>
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </h3>
        </a>

        <div className="space-y-1">
          {/* Role */}
          {speaker.role && (
            <div className="text-sm sm:text-base text-gray-600">
              {speaker.role.split(' at ')[0]}
            </div>
          )}
          {/* Company */}
          {speaker.company && (
            <div className="mt-1 sm:mt-2 text-gray-600 flex items-center text-base sm:text-lg">
              <a 
                href={speaker.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="group/company inline-flex items-center gap-1 sm:gap-2 hover:text-[#165DFB] transition-colors duration-200"
              >
                <span className="relative flex items-center">
                  <span className="text-[#011F5B]/70 mr-1">at</span>
                  <span className="font-bold text-blue-600">{speaker.company}</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#165DFB] scale-x-0 group-hover/company:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover/company:opacity-100 group-hover/company:translate-x-0 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor">
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
