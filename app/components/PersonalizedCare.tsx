'use client'

import { useState } from 'react'
import { useFadeUp } from './hooks'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <path d="M9.5 14.5 3 21m0 0h6m-6 0v-6M21 3l-6.5 6.5M21 3h-6m6 0v6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: '24/7 Nursing Support',
    desc: 'Our trained nurses are available around the clock to monitor health and respond to any medical need.',
    hoverImage: '/images/service-1-1.jpg',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Assisted Living',
    desc: 'We help residents with daily activities while preserving their independence and dignity.',
    hoverImage: '/images/service-1-1.jpg',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Dementia & Alzheimers Care',
    desc: 'Specialized memory care delivered with patience, structure, and compassion.',
    hoverImage: '/images/service-1-1.jpg',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Daily Wellness Activities',
    desc: "From gentle exercise to social programs, we keep residents active and engaged.",
    hoverImage: '/images/service-1-1.jpg',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Companion Care',
    desc: 'Meaningful companionship to combat loneliness and support emotional wellbeing.',
    hoverImage: '/images/service-1-1.jpg',
  },

]

export default function PersonalizedCare() {
  const ref = useFadeUp()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up bg-[#F2F0ED] px-5 py-24 rounded-[24px]"
    >
      <div className='max-w-[1440px] m-auto'>
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
                <span className="font-serif italic text-black text-lg">Our Services</span>
              </div>
              <h2 className="font-sans font-bold text-[#2C3A2A] text-5xl leading-tight">
                Personalized support for a<br />
                better <em className="font-serif font-normal italic">quality of life</em>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#C8933A] hover:bg-[#b5822f] text-white font-semibold text-lg px-6 py-3 rounded-[8px] transition-all duration-200 shrink-0 self-start mt-2"
            >
              View All Services
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 19L19 5M19 5H9M19 5v10" />
              </svg>
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 4 white/hover-image cards in 2x2 */}
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ minHeight: '350px' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background image (shown on hover) */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('${card.hoverImage}')`,
                    opacity: hovered === i ? 1 : 0,
                  }}
                />
                {/* Dark overlay on hover */}
                <div
                  className="absolute inset-0 bg-black/50 transition-opacity duration-500"
                  style={{ opacity: hovered === i ? 1 : 0 }}
                />

                {/* White bg (shown when not hovered) */}
                <div
                  className="absolute inset-0 bg-white transition-opacity duration-500"
                  style={{ opacity: hovered === i ? 0 : 1 }}
                />

                {/* Card content */}
                <div className="relative z-10 p-7 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-full bg-[#C8933A] flex items-center justify-center mb-5 shrink-0">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-sans font-bold text-xl mb-2 transition-colors duration-300"
                    style={{ color: hovered === i ? 'white' : '#2C3A2A' }}
                  >
                    {card.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-3 transition-colors duration-300"
                    style={{ backgroundColor: hovered === i ? 'rgba(255,255,255,0.2)' : '#e5e7eb' }}
                  />

                  {/* Desc */}
                  <p
                    className="text-lg leading-relaxed flex-1 transition-colors duration-300"
                    style={{ color: hovered === i ? 'rgba(255,255,255,0.75)' : '#6b7280' }}
                  >
                    {card.desc}
                  </p>

                  {/* Learn More */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold mt-4 transition-colors duration-300"
                    style={{ color: hovered === i ? 'white' : '#2C3A2A' }}
                  >
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 19L19 5M19 5H9M19 5v10" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}

            {/* Right col — top: image card with text overlay */}


            {/* Right col — bottom: CTA card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                minHeight: '220px',
                backgroundImage: "url('/images/service-1-1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#2C3A2A]/40" />
              <div className="relative z-10 p-7 flex flex-col items-center justify-center h-full text-center gap-4">
                <h3 className="font-sans font-bold text-white text-lg leading-snug">
                  Ready to start your journey to recovery
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#C8933A] hover:bg-[#b5822f] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
                >
                  Book Appointment
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 19L19 5M19 5H9M19 5v10" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom tagline */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className="bg-[#C8933A] text-white text-xs font-bold px-3 py-1 rounded-full">Free</span>
            <p className="text-sm text-[#2C3A2A]/60">
              Discover the care you deserve —{' '}
              <a href="#" className="text-[#C8933A] font-semibold hover:underline">
                book your free visit today!
              </a>
            </p>
          </div>
          </div>

    </section>
  )
}