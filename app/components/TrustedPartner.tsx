'use client'

import { useFadeUp } from './hooks'

const steps = [
  {
    num: '01',
    title: 'Free Consultation & Assessment',
    desc: 'We visit, listen, and assess your loved ones needs at no cost',
    amber: false,
  },
  {
    num: '02',
    title: 'Care Plan Creation',
    desc: 'We design a personalized care plan tailored to health, lifestyle, and budget.',
    amber: false,
  },
  {
    num: '03',
    title: 'Move-In & Settling In',
    desc: 'Our team ensures a warm, smooth transition into life at Royal Medicare.',
    amber: false,
  },
  {
    num: '04',
    title: 'Ongoing Support & Updates',
    desc: 'Families receive regular updates and our team is always reachable.',
    amber: false,
  },
]

export default function TrustedPartner() {
  const ref = useFadeUp()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up relative overflow-hidden rounded-3xl mx-[2%] my-8"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/how-it-work-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C3A2A]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 2xl:px-0 py-20 flex flex-col items-center max-w-[1440px] m-auto">

        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
          <span className="font-serif italic text-[#C8933A] text-lg">How It Work</span>
        </div>

        {/* Heading */}
        <h2 className="font-sans font-bold text-white text-[clamp(1.8rem,3.5vw,2.8rem)] text-center leading-tight mb-16">
          Your trusted partner in home<br />
          <em className="font-serif font-normal italic">health and wellness</em>
        </h2>

        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer group ${
                step.amber
                  ? 'bg-[#C8933A]'
                  : 'bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-[#C8933A] hover:border-transparent'
              }`}
            >
              {/* Number badge */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                  step.amber
                    ? 'bg-white/20 text-white'
                    : 'bg-[#C8933A] text-white group-hover:bg-white/20'
                }`}
              >
                {step.num}
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-base leading-snug text-white">
                {step.title}
              </h3>

              {/* Desc */}
              <p className={`text-sm leading-relaxed flex-1 ${
                step.amber ? 'text-white/80' : 'text-white/60 group-hover:text-white/80'
              }`}>
                {step.desc}
              </p>

              {/* Learn More */}
              <a
                href="#"
                className={`flex items-center gap-1 text-sm font-semibold mt-auto transition-colors duration-300 ${
                  step.amber ? 'text-white' : 'text-[#C8933A] group-hover:text-white'
                }`}
              >
                Learn More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 19L19 5M19 5H9M19 5v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-white/70 text-sm text-center">
          Compassionate care to enhance daily living.{' '}
          <a href="#" className="text-[#C8933A] font-semibold hover:underline">
            Contact us today!
          </a>
        </p>

      </div>
    </section>
  )
}