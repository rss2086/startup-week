import Image from 'next/image'
import { avatars, logos } from '@/config/images'

export function KeynoteSpeakers() {
  const speakers = [
    {
      name: 'Sandeep Acharya',
      role: 'Founder & CEO',
      company: 'Octave Health',
      image: avatars.sandeepAcharya,
      companyLogo: logos.octave,
      bio: {
        main: 'Sandeep has spent most of his career at the nexus of strategy, policy, healthcare reform, technology innovation, and mission oriented leadership. As founder & CEO of Octave Health, he leads a mental health practice and technology platform offering higher quality care in-network with leading insurance companies.',
        experience: 'Prior to Octave, he was the head of strategy at One Medical, a primary care practice that he helped lead through expansion across the country before its IPO and subsequent acquisition by Amazon.',
        recognition: 'Octave has been recognized as a Best Place to Work in 2023 & 2024 and a CB Insights Top 50 Healthcare Startup. Sandeep has been a writer and featured speaker in USA Today, Fast Company, HIMSS, National Business Group on Health, Behavioral Health Business, and a wide variety of other publications.',
        personal: 'Outside of work, Sandeep is a recovering collegiate a cappella singer, long suffering New York Giants fan, and enjoys spending time with his family.'
      }
    },
    {
      name: 'Gordon Ritter',
      role: 'Founder & General Partner',
      company: 'Emergence Capital',
      image: avatars.gordonRitter,
      companyLogo: logos.emergenceCapital,
      bio: {
        main: 'Gordon Ritter is the Founder and General Partner of Emergence Capital Partners. With over 15 years of experience founding and building companies, he has been instrumental in shaping new markets including embedded web-based interfaces, server appliances, "On Demand" services for the SMB market and web-native application development.',
        experience: 'In 2003, he led Emergence Capital\'s first investment in Salesforce.com. His strategic vision and investment acumen have earned him multiple appearances on Forbes\' Midas List of top venture capital investors.',
        recognition: 'He currently sits on the boards of five companies, including the leading cloud life sciences company, Veeva Systems. Gordon invested in Veeva in 2008 when the company had 30 people and $2 million in revenue. He has played a key role in the company\'s development, and he is currently the Chairman of the Board.',
        personal: 'Outside of work, Gordon is a strong supporter of various non-profits including the Golden Gate National Parks and Common Sense Media. He lives in San Francisco and cherishes spending time with his wife Amy and their four children.'
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
                  />
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

                  {/* Company Logo Overlay */}
                  {speaker.companyLogo && (
                    <div className="absolute bottom-0 right-0 flex h-1/3 w-1/2 sm:w-1/3 items-center justify-center">
                      <div className="h-full w-full overflow-hidden bg-white/15 p-3 sm:p-4 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-xl rounded-tl-2xl rounded-br-2xl">
                        <Image
                          src={speaker.companyLogo}
                          alt={`${speaker.company} logo`}
                          width={1600}
                          height={1600}
                          className="h-full w-full object-contain"
                        />
                      </div>
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
                  <div className="text-lg text-gray-600">
                    <span className="text-[#011F5B]/70 mr-1">at</span>
                    <span className="font-bold text-blue-600">{speaker.company}</span>
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