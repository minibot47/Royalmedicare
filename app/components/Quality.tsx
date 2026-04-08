'use client'

import { useFadeUp } from './hooks'

const points = [
  'Personalized Care for Each',
  '24/7 Medical Support',
]

export default function About() {
  const ref = useFadeUp()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up bg-[#FAF8F5] py-12 lg:py-24 px-6 lg:px-0"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center max-w-[1440px] m-auto">

        {/* ── Left: Image stack ── */}
        <div className="relative w-full lg:w-[46%] h-[320px] sm:h-[420px] lg:h-[70vh]">
          {/* Back image */}
          <div className="absolute top-0 left-0 w-[65%] h-[80%] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/about-us-image-1.jpg"
              alt="Caregiver with elderly"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Front image */}
          <div className="absolute bottom-3 right-0 w-[62%] h-[75%] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/about-us-image-2.jpg"
              alt="Senior care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className='w-full lg:w-[54%] lg:-mt-15'>
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
            <span className="font-serif italic text-[#C8933A] text-lg">About Us</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans font-semibold text-[#2C1810] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Dedicated to quality elderly
            care with compassion{' '}
            <em className="font-serif font-normal italic">and<br />respect always</em>
          </h2>

          {/* Badge + body row */}
          <div className="flex items-center gap-6 mb-8 pb-5 border-b-[0.1px] border-gray-500/30">
            {/* Spinning badge — hidden on small screens */}
            <div className="relative w-24 h-24 shrink-0 hidden sm:flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-spin"
                style={{ animationDuration: "10s" }}
              >
                <defs>
                  <path
                    id="about-circle"
                    d="M 52,52 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text fontSize="12" fill="#C8933A" fontWeight="400" letterSpacing="1.8">
                  <textPath href="#about-circle">
                    About Us • About Us • About Us •
                  </textPath>
                </text>
              </svg>
              {/* Static center arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-[#C8933A] flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#C8933A" strokeWidth={2}>
                    <path d="M5 19L19 5M19 5H9M19 5v10" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Body text */}
            <p className="text-base lg:text-lg leading-relaxed text-[#2C1810]/60 pt-1">
              At Royal Medicare, we believe aging should be embraced with dignity. Located in Ikorodu, Lagos, our serene facility provides round-the-clock medical and personal care so every resident feels truly at home.
            </p>
          </div>

          {/* Checklist */}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#C8933A] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#2C1810]">{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}