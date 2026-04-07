'use client'

import { useFadeUp } from './hooks'

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Compassionate & Experienced Staff',
    desc: 'Our modern, fully-equipped facility is designed with senior comfort and safety in mind. With advanced health monitoring.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'State-of-the-Art Facilities and Services',
    desc: 'Our modern, fully-equipped facility is designed with senior comfort and safety in mind. With advanced health monitoring.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    title: 'Holistic Approach to Senior Well-Being',
    desc: 'Our modern, fully-equipped facility is designed with senior comfort and safety in mind. With advanced health monitoring.',
  },
]

export default function Community() {
  const ref = useFadeUp()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up bg-white px-[8%] py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1440px] m-auto ">

        {/* ── Left: Content ── */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
            <span className="font-serif italic text-black textlg">Why Choose Us</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans font-bold text-[#2C1810] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight mb-10">
            A community where seniors
            thrive,
            <em className="font-serif font-normal italic">not just survive</em>
          </h2>

          {/* Feature items */}
          <div className="flex flex-col gap-8">
            {items.map((item) => (
              <div key={item.title} className="flex gap-5 items-start border-t-[0.1px] border-gray-500/10 pt-5">
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-[#C8933A] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-sans font-bold text-[#2C1810] mb-1">{item.title}</div>
                  <div className="text-sm text-[#2C1810]/55 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Images + spinning badge ── */}
        <div className="relative h-[520px] hidden lg:block">

          {/* Decorative dot */}
          <div className="absolute top-0 left-[40%] w-3 h-3 rounded-full bg-[#C8933A] opacity-60" />

          {/* Back image — full bleed, slightly behind */}
          <div className="absolute top-0 right-0 w-[85%] h-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/why-choose-img-1.jpg"
              alt="Senior smiling"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front image — tilted card on top */}
          <div
            className="absolute bottom-[20%] left-0 w-[52%] h-[58%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            style={{ transform: 'rotate(-15deg)' }}
          >
            <img
              src="/images/why-choose-img-2.jpg"
              alt="Caregiver walking with senior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Spinning "Contact Us" badge — bottom right */}
          <div className="absolute -bottom-12 right-[30%]  w-24 h-24 flex items-center justify-center ">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin absolute"
              style={{ animationDuration: '10s' }}
            >
              <defs>
                <path
                  id="contact-circle"
                  d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  className='border-[10px] border-white'
                />
              </defs>
              <circle cx="50" cy="50" r="46" fill="#C8933A"  />
              <text fontSize="7.5" fill="white" fontWeight="400" letterSpacing="1.8">
                <textPath href="#contact-circle">
                  Contact Us • Contact Us • Contact Us •
                </textPath>
              </text>
            </svg>
            {/* Static arrow in center */}
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center z-10">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#C8933A" strokeWidth={2.5}>
                <path d="M5 19L19 5M19 5H9M19 5v10" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}