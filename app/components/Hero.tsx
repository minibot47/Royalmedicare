'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='w-full flex flex-col lg:flex-row gap-8 min-h-screen lg:h-[120vh] 2xl:h-[85vh] rounded-[24px] mb-10'>
      
      {/* Left column */}
      <div className='w-full lg:w-[55%] rounded-[24px] flex flex-col gap-8 lg:gap-8 text-white'>
        
        {/* Top dark green card */}
        <div className='w-full bg-[#273A29] rounded-[24px] p-8 lg:p-10 2xl:p-14 flex flex-col gap-4 lg:h-[65%]'>
          <div className='flex gap-3 items-center text-white text-lg'>
            <div className='bg-[#E8B15A] h-2 w-2 rounded-full'></div>
            <h2 className='font-serif italic text-sm lg:text-lg'>Discover The Power Of Premium</h2>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-7xl w-full lg:w-[70%] font-semibold font-sans 2xl:text-5xl leading-tight'>
            Compassionate elderly care in{' '}
            <span className='font-serif italic font-medium text-3xl sm:text-4xl lg:text-6xl 2xl:text-5xl'>
              the heart of Ikorodu, Lagos
            </span>
          </h2>

          <div className='w-full flex items-center justify-between gap-4'>
            <h2 className='w-full lg:w-[75%] font-medium text-base lg:text-lg'>
              At our senior care community, we understand that aging is a deeply personal journey. That's why we focus on a holistic, resident-centered care that nurtures the mind, body, and spirit.
            </h2>

            {/* Spinning badge — hidden on mobile */}
            <div className="relative h-full w-[25%] shrink-0 hidden md:flex items-end justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-spin"
                style={{ animationDuration: "10s" }}
              >
                <defs>
                  <path
                    id="footer-circle"
                    d="M 50,50 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
                  />
                </defs>
                <circle cx="50" cy="50" r="35" fill="#273A29" />
                <text fontSize="7" fill="#E2A76F" fontWeight="500" letterSpacing="1.5">
                  <textPath href="#footer-circle">
                    Book Appointment • Book Appointment •
                  </textPath>
                </text>
                <image
                  href="/icons/circle-arrow-icon.svg"
                  x="43"
                  y="43"
                  width="14"
                  height="14"
                />
              </svg>
            </div>
          </div>

          {/* Mobile CTA button (replaces spinning badge on small screens) */}
          <a
            href="#"
            className="md:hidden inline-flex items-center gap-2 bg-[#E2A76F] text-white font-semibold text-sm px-6 py-3 rounded-full self-start mt-2"
          >
            Book Appointment
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 19L19 5M19 5H9M19 5v10" />
            </svg>
          </a>
        </div>

        {/* Bottom row: image + working hours */}
        <div className='w-full rounded-[24px] flex gap-4 sm:gap-8 lg:h-[35%]' style={{ minHeight: '200px' }}>
          <div
            className='w-[55%] rounded-[24px] bg-cover bg-center'
            style={{ backgroundImage: "url('/images/hero-content-image-1.jpg')" }}
          />
          <div className='w-[45%] bg-[#E2A76F] rounded-[24px] p-5 lg:p-7'>
            <div className='border-b-[0.1px] border-gray-300/20 flex flex-col gap-3 lg:gap-5 pb-4 lg:pb-5'>
              <h2 className='text-lg lg:text-2xl font-semibold'>Working Hours</h2>
              <h3 className='text-sm lg:text-lg hidden sm:block'>We believe that aging should be embraced with dignity, joy, and the right level.</h3>
            </div>
            <div className='pt-4 lg:pt-5 flex flex-col gap-3 lg:gap-5 text-sm lg:text-base'>
              <div className='flex justify-between gap-2'>
                <h2>Mon - Fri</h2>
                <h2 className='text-right'>8:00 AM - 8:00 PM</h2>
              </div>
              <div className='flex justify-between gap-2'>
                <h2>Sat - Sun</h2>
                <h2>Closed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right image — hidden on mobile, shown on lg+ */}
      <div
        className='hidden lg:block lg:w-[45%] rounded-[24px] bg-cover bg-center'
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      />
    </div>
  )
}