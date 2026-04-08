'use client'

import { useFadeUp } from './hooks'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Healthy Meals & Nutrition Plans',
    desc: 'Chef-prepared, home-style meals crafted for health and enjoyment.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
    title: 'Customized Plans',
    desc: 'Every resident gets a plan built around their unique medical and personal needs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Comprehensive Services',
    desc: 'From nursing to wellness activities, everything is handled under one roof.',
  },
]

export default function Comfort() {
  const ref = useFadeUp()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up bg-[#1E3A28] rounded-3xl mx-[2%] my-8 px-[6%] py-16 relative overflow-hidden"
    >
      {/* Decorative leaf — top left */}
      <svg className="absolute top-4 left-4 w-28 opacity-20" viewBox="0 0 120 120" fill="none">
        <path d="M20 100 C20 60 60 20 100 20 C100 60 60 100 20 100Z" stroke="white" strokeWidth="1" fill="none"/>
        <path d="M20 100 C40 70 70 40 100 20" stroke="white" strokeWidth="0.8" fill="none"/>
        <path d="M20 100 C50 75 75 50 100 20" stroke="white" strokeWidth="0.6" fill="none"/>
        <path d="M20 100 C60 80 80 60 100 20" stroke="white" strokeWidth="0.4" fill="none"/>
      </svg>

      {/* Decorative leaf — bottom right */}
      <svg className="absolute bottom-4 right-4 w-28 opacity-20" viewBox="0 0 120 120" fill="none">
        <path d="M100 20 C100 60 60 100 20 100 C20 60 60 20 100 20Z" stroke="white" strokeWidth="1" fill="none"/>
        <path d="M100 20 C80 50 50 80 20 100" stroke="white" strokeWidth="0.8" fill="none"/>
        <path d="M100 20 C75 45 45 75 20 100" stroke="white" strokeWidth="0.6" fill="none"/>
        <path d="M100 20 C60 40 40 60 20 100" stroke="white" strokeWidth="0.4" fill="none"/>
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1440px] m-auto">

        {/* ── Left: Content ── */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
            <span className="font-serif italic text-[#C8933A] text-lg">Our Feature</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans font-bold text-white text-[clamp(1.8rem,3vw,2.6rem)] leading-tight mb-6">
            Designed for comfort care<br />
            <em className="font-serif font-normal italic">and everyday living</em>
          </h2>

          {/* Divider */}
          <div className="w-full h-px bg-white/15 mb-8" />

          {/* Features */}
          <div className="flex flex-col gap-8">
            {features.map((f) => (
              <div key={f.title} className="grid grid-cols-[auto_1fr_1fr] gap-4 items-start">
                {/* Icon */}
                <div className="w-11 h-11 rounded-full bg-[#C8933A] flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                {/* Title */}
                <div className="font-sans font-bold text-white text-sm leading-snug">
                  {f.title}
                </div>
                {/* Desc */}
                <div className="text-sm text-white/55 leading-relaxed">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Images ── */}
        <div className="relative h-[480px] hidden lg:block">

          {/* Spinning "Years Of Experience" badge */}
          <div className="absolute top-0 right-0 h-24 flex items-center justify-center z-20  w-1/2">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin absolute"
              style={{ animationDuration: '12s' }}
            >
              <defs>
                <path
                  id="exp-circle"
                  d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                />
              </defs>
              <circle cx="50" cy="50" r="46" fill="#2C4A34" />
              <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
              <text fontSize="7" fill="white" fontWeight="400" letterSpacing="1.5" opacity="0.8">
                <textPath href="#exp-circle">
                  Years Of Experience • Years Of Experience •
                </textPath>
              </text>
            </svg>
            {/* Static center */}
            <div className="z-10 text-center">
              <div className="font-sans font-bold text-white text-xl leading-none">25+</div>
            </div>
          </div>

          {/* Main tall photo */}
          <div className="absolute top-0 left-0 w-[52%] h-[85%] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/feature-image-1.jpg"
              alt="Caregiver with senior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rating badge below main photo */}
          <div className="absolute bottom-0 left-0 w-[52%] bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#C8933A] border-2 border-[#1E3A28] overflow-hidden">
                <img src="/images/avatar-1.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#8aac8a] border-2 border-[#1E3A28] overflow-hidden">
                <img src="/images/avatar-2.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#C8933A]/60 border-2 border-[#1E3A28] flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-[#C8933A]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-white text-xs ml-1 bg-[#C8933A] px-1.5 py-0.5 rounded-full font-bold">4.9</span>
              </div>
              <div className="text-white/70 text-xs mt-0.5">4.9 / 5 Ratings</div>
            </div>
          </div>

          {/* Second photo — bottom right */}
          <div className="absolute bottom-0 right-0 w-[44%] h-[70%] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/feature-image-2.jpg"
              alt="Senior care"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}