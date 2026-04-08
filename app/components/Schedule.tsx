'use client'

import { useFadeUp } from './hooks'

export default function Schedule() {
  const ref = useFadeUp()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up bg-[#EDEDED] rounded-3xl mx-[2%] my-8 relative overflow-hidden"
      style={{ minHeight: '550px' }}
    >
      {/* Decorative leaf — top left */}
      <svg className="absolute top-0 left-0 w-36 opacity-20" viewBox="0 0 160 160" fill="none">
        <path d="M10 150 C10 80, 80 10, 150 10 C150 80, 80 150, 10 150Z" stroke="#2C3A2A" strokeWidth="1.2" fill="none"/>
        <path d="M10 150 C40 100, 100 40, 150 10" stroke="#2C3A2A" strokeWidth="1" fill="none"/>
        <path d="M10 150 C60 120, 120 60, 150 10" stroke="#2C3A2A" strokeWidth="0.8" fill="none"/>
        <path d="M10 150 C80 130, 130 80, 150 10" stroke="#2C3A2A" strokeWidth="0.6" fill="none"/>
      </svg>

      {/* Decorative leaf — bottom right */}
      <svg className="absolute bottom-0 right-0 w-36 opacity-20" viewBox="0 0 160 160" fill="none">
        <path d="M150 10 C150 80, 80 150, 10 150 C10 80, 80 10, 150 10Z" stroke="#2C3A2A" strokeWidth="1.2" fill="none"/>
        <path d="M150 10 C120 60, 60 120, 10 150" stroke="#2C3A2A" strokeWidth="1" fill="none"/>
        <path d="M150 10 C100 40, 40 100, 10 150" stroke="#2C3A2A" strokeWidth="0.8" fill="none"/>
        <path d="M150 10 C80 30, 30 80, 10 150" stroke="#2C3A2A" strokeWidth="0.6" fill="none"/>
      </svg>

      {/* Amber sparkle — left */}
      <svg className="absolute left-[6%] top-[38%] w-5 h-5" viewBox="0 0 20 20" fill="#C8933A">
        <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"/>
      </svg>

      {/* Amber sparkle — right */}
      <svg className="absolute right-[4%] bottom-[30%] w-5 h-5" viewBox="0 0 20 20" fill="#C8933A">
        <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"/>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-16 pb-0 px-8 text-center ">

        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
          <span className="font-serif italic text-[#C8933A] text-lg">Join Us Today</span>
        </div>

        {/* Heading */}
        <h2 className="font-sans font-bold text-[#2C3A2A] text-[clamp(1.8rem,3.2vw,2.8rem)] leading-tight mb-6">
          Schedule a personalized tour or<br />
          <em className="font-serif font-normal italic">care consultation</em>
        </h2>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#C8933A] hover:bg-[#b5822f] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg mb-12"
        >
          Book Appointment
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 19L19 5M19 5H9M19 5v10" />
          </svg>
        </a>

        {/* Team photo */}
        <div className="w-full max-w-2xl mx-auto">
          <img
            src="/images/cta-box-image.png"
            alt="Care team"
            className="w-full object-cover object-top"
            style={{ maxHeight: '500px', }}
          />
        </div>
      </div>
    </section>
  )
}