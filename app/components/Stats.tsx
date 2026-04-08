'use client'

import { useFadeUp } from './hooks'

export default function Stats() {
  const ref = useFadeUp()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up bg-white px-[8%] py-20"
    >
      <div className='max-w-[1440px] m-auto'>
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
            <span className="font-serif italic text-[#C8933A] text-lg">Our Facts</span>
          </div>
          <h2 className="font-sans font-bold text-[#2C3A2A] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">
            Our senior care impact in{' '}
            <em className="font-serif font-normal italic">real</em>
            <br />
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8933A] inline-block" />
              <em className="font-serif font-normal italic">numbers</em>
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          className="grid gap-3 max-h-[60vh]"
          style={{
            gridTemplateColumns: '1fr 1.8fr 1fr 0.7fr',
            gridTemplateRows: 'auto auto',
          }}
        >
          {/* Cell 1 — Amber stat: 15K+ Happy Patients (top-left, spans 1 row) */}
          <div className="bg-[#C8933A] rounded-2xl p-7 flex flex-col justify-between" style={{ gridColumn: '1', gridRow: '1' }}>
            {/* Icon: 4 circles */}
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
              <circle cx="13" cy="9" r="8" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="39" cy="9" r="8" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="13" cy="27" r="8" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="39" cy="27" r="8" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="mt-8">
              <div className="font-sans font-bold text-white text-4xl">15 K+</div>
              <div className="text-white/80 text-sm mt-1">Happy Patients</div>
            </div>
          </div>

          {/* Cell 2 — Tall center photo (spans 2 rows) */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: '2', gridRow: '1 / 3' }}>
            <img
              src="/images/fact-image-2.jpg"
              alt="Caregiver with senior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cell 3 — Top right photo */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: '3/5', gridRow: '1' }}>
            <img
              src="/images/fact-image-3.jpg"
              alt="Senior care"
              className="w-full h-full object-cover object-top"
            />
          </div>


          {/* Cell 5 — Bottom left photo */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: '1', gridRow: '2' }}>
            <img
              src="/images/fact-image-1.jpg"
              alt="Home care"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cell 6 — Dark stat: 25Y+ Years of Experience */}
          <div className="bg-[#2C3A2A] rounded-2xl p-7 flex flex-col justify-between" style={{ gridColumn: '3', gridRow: '2' }}>
            {/* Icon: overlapping circles */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="13" r="9" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="13" cy="26" r="9" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="27" cy="26" r="9" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="mt-6">
              <div className="font-sans font-bold text-white text-4xl">25 Y+</div>
              <div className="text-white/70 text-sm mt-1">Years Of Experience</div>
            </div>
          </div>

          {/* Cell 7 — Bottom far-right photo */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: '4', gridRow: '2' }}>
            <img
              src="/images/fact-image-4.jpg"
              alt="Doctor with senior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  )
}