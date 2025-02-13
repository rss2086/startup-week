import Image from 'next/image'
import { avatars, logos } from '@/config/images'

export function KeynoteSpeakers() {
  const speakers = [
    {
      name: 'Sandeep Acharya',
      role: 'Keynote Speaker',
      company: 'Octave',
      image: avatars.sandeepAcharya,
      companyLogo: logos.octave,
      description: 'Distinguished leader in entrepreneurship and innovation with expertise in AI and technology',
    },
    {
      name: 'Gordon Ritter',
      role: 'Keynote Speaker',
      company: 'Emergence Capital',
      image: avatars.gordonRitter,
      companyLogo: logos.emergenceCapital,
      description: 'Founder & General Partner at Emergence Capital, renowned venture capitalist',
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center sm:mb-20">
          {/* Enhanced header section */}
          <div className="inline-flex items-center justify-center gap-3 mb-6 sm:mb-8 bg-blue-50/50 px-4 py-2 rounded-2xl">
            <div className="h-1 w-8 rounded-full bg-blue-600/20" />
            <span className="text-xl font-semibold text-blue-600  tracking-wider uppercase">
              Keynote Speakers
            </span>
            <div className="h-1 w-8 rounded-full bg-blue-600/20" />
          </div>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="group relative px-4 sm:px-0"
            >
              {/* Card with refined styling */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-3xl" />
                
                <div className="flex flex-col items-center">
                  {/* Company logo with enhanced presentation */}
                  {speaker.companyLogo && (
                    <div className="mb-6 sm:mb-8 lg:mb-10 p-4 relative w-32 sm:w-40 h-16 sm:h-20">
                      <Image
                        src={speaker.companyLogo}
                        alt={`${speaker.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  {/* Image container with refined effects */}
                  <div className="relative mb-8 sm:mb-10 lg:mb-12">
                    <div className="relative max-w-[280px] sm:max-w-[320px] h-[280px] sm:h-[320px] aspect-square rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        fill
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                    </div>
                  </div>

                  {/* Enhanced typography for speaker info */}
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        {speaker.name}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-base sm:text-lg font-medium text-blue-600">
                          {speaker.role}
                        </p>
                        <p className="text-lg sm:text-xl font-semibold text-gray-800">
                          {speaker.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                      {speaker.description}
                    </p>
                  </div>
                </div>

                {/* Refined bottom accent */}
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 