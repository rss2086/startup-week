import Image from 'next/image'
import { avatars, logos } from '@/config/images'

export function KeynoteSpeakers() {
  const speakers = [
    {
      name: 'John Hu',
      role: 'Co-Founder & CEO',
      company: 'Stan',
      image: avatars.johnHu,
      companyLogo: logos.stan,
      companyWebsite: 'https://www.stan.store/',
      bio: {
        main: 'John Hu is the Co-Founder and CEO of Stan, the all-in-one platform that enables entrepreneurs to build, operate and scale their digital businesses. After experiencing firsthand how fragmented and inefficient the Creator-commerce ecosystem was, John created Stan to give entrepreneurs a single operating system for running and growing an online business.',
        experience: 'With a mission to empower anyone to make a living working for themselves, Stan now supports over 80,000 creator-entrepreneurs and was recognized on Forbes\' Next Billion-Dollar Startups list. Today, Stan continues to expand with tools designed to accelerate growth, streamline operations, and help Creator-entrepreneurs build sustainable, independent businesses.',
        recognition: '',
        personal: 'The son of an immigrant, single mother, John grew up with a belief that financial independence should be accessible to all. John began his career at Goldman Sachs, before co-founding Stan in 2021.'
      }
    },
    {
      name: 'Saanya Ojha',
      role: 'Partner',
      company: 'Bain Capital Ventures',
      image: avatars.saanyaOjha,
      imagePosition: 'center 17%',
      companyLogo: logos.bainCapitalVentures,
      companyWebsite: 'https://www.baincapitalventures.com/',
      bio: {
        main: 'Saanya is a Partner at Bain Capital Ventures, where she leads growth-stage investments in cloud infrastructure, cybersecurity and the developer ecosystem.',
        experience: 'Previously, she was a partner at Coatue, focusing on growth investments after having started her career as a hedge fund analyst at Goldman Sachs Investment Partners, a long/short fundamental equity fund. A career investor, she is driven by the fundamental question of what makes a good business and has experience investing across stages, verticals and geographies.',
        recognition: '',
        personal: 'Originally from India, Saanya now lives in San Francisco but has lived and worked in New York, Hong Kong and Singapore.'
      }
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6 sm:mb-8 bg-blue-50/50 px-4 py-2 rounded-2xl">
            <div className="h-px w-8 rounded-full bg-blue-600/20" />
            <span className="text-xl font-semibold text-blue-600 tracking-wider uppercase">
              Keynote Speakers
            </span>
            <div className="h-px w-8 rounded-full bg-blue-600/20" />
          </div>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Industry Leaders & Innovators
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 max-w-7xl mx-auto">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="group relative flex flex-col">
              {/* Image Container */}
              {speaker.image && (
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-900">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-all duration-500 will-change-transform group-hover:scale-105 group-hover:brightness-110"
                    style={{ objectPosition: speaker.imagePosition || 'center' }}
                  />
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

                  {/* Company Logo Overlay */}
                  {speaker.companyLogo && (
                    <div className="absolute bottom-0 right-0 flex h-1/3 w-1/2 sm:w-1/3 items-center justify-center">
                      <a 
                        href={speaker.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full group/logo"
                      >
                        <div className="h-full w-full overflow-hidden bg-white/15 p-3 sm:p-4 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover/logo:bg-white/50 group-hover/logo:shadow-xl rounded-tl-2xl rounded-br-2xl">
                          <Image
                            src={speaker.companyLogo}
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
              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                  {speaker.name}
                </h3>

                <div className="space-y-2">
                  {/* Role */}
                  <div className="text-base text-gray-600">
                    {speaker.role}
                  </div>
                  {/* Company */}
                  <div className="text-lg">
                    <span className="text-[#011F5B]/70 mr-1">at</span>
                    <a 
                      href={speaker.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/company inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {speaker.company}
                      <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover/company:opacity-100 group-hover/company:translate-x-0 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-4 space-y-4">
                  <p className="text-black">{speaker.bio.main}</p>
                  <p>{speaker.bio.experience}</p>
                  <p>{speaker.bio.recognition}</p>
                  {speaker.bio.personal && (
                    <p className="italic text-blue-500">{speaker.bio.personal}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 