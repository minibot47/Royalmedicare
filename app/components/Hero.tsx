'use client'

import { useEffect, useState } from 'react'

const heroLines = [
  { text: 'Delivering holistic', dur: 1.0, delay: 0.2 },
  { text: 'senior care that', dur: 1.0, delay: 0.9, italic: true, italicWord: 'senior care' },
  { text: 'honors each', dur: 0.9, delay: 1.7 },
  { text: "individual's life", dur: 1.1, delay: 2.4 },
  { text: 'journey', dur: 0.7, delay: 3.3 },
]

const stats = [
  { num: '20K+', label: 'Seniors Served' },
  { num: '98%', label: 'Satisfaction Rate' },
  { num: '15yr', label: 'Of Experience' },
]

const badges = [
  { icon: '🏆', title: 'Award Winning', sub: 'Best Senior Care 2024', pos: 'bottom-[28%] left-[-4%]' },
  { icon: '❤️', title: 'Certified Staff', sub: '500+ caregivers', pos: 'top-[24%] right-[-2%]' },
]

export default function Hero() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='w-full flex gap-8 h-[120vh] 2xl:h-[85vh] rounded-[24px] mb-10'>
      <div className='w-[55%] rounded-[24px] flex flex-col gap-10 2xl:gap-5 text-white'>
        <div className='h-[65%] w-full bg-[#273A29] rounded-[24px] p-10 2xl:p-14 flex flex-col gap-3'>
          <div className='flex gap-3 items-center text-white text-lg'>
            <div className='bg-[#E8B15A] h-2 w-2 rounded-full'></div>
            <h2 className='font-serif italic'>Discover The Power Of Premium</h2>
          </div>
          <h2 className='text-6xl font-semibold font-sans 2xl:text-5xl'>Compassionate elderly care in <span className='font-serif italic font-medium text-6xl 2xl:text-5xl'>the heart of Ikorodu, Lagos</span></h2>
          <div className='w-full flex items-center justify-between '>
            <h2 className='w-[75%] font-medium text-lg'>
            At our senior care community, we understand that aging is a deeply personal journey. That’s why we focus on a holistic, resident-centered care that nurtures the mind, body, and spirit.
            </h2>
            {/* Spinning badge */}
            <div className="relative h-full w-[25%] shrink-0 hidden md:flex items-end justify-center ">
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

                {/* Filled circle */}
                <circle cx="50" cy="50" r="35" fill="#273A29" />

                {/* Text inside the circle */}
                <text fontSize="7" fill="#E2A76F" fontWeight="500" letterSpacing="1.5">
                  <textPath href="#footer-circle">
                    Book Appointment • Book Appointment •
                  </textPath>
                </text>

                {/* Logo inside SVG so it spins too */}
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
        </div>

        <div className='h-[35%] w-full rounded-[24px] flex gap-8'>
          <div
            className='w-[55%] rounded-[24px] bg-cover bg-center'
            style={{ backgroundImage: "url('/images/hero-content-image-1.jpg')" }}
          >
          </div>
          <div className='w-[45%] bg-[#E2A76F] rounded-[24px] p-7'>
            <div className='border-b-[0.1px] border-gray-300/20 flex flex-col gap-5 pb-5'>
              <h2 className='text-2xl font-semibold'>Working Hours</h2>
              <h3 className='text-lg'>We believe that aging should be embraced with dignity, joy, and the right level.</h3>
            </div>
            <div className='pt-5 flex flex-col gap-5'>
              <div className='flex justify-between'>
                <h2>Monday - Friday</h2>
                <h2>8:00 AM - 8:00 PM</h2>
              </div>
              <div className='flex justify-between'>
                <h2>Saturday - Sunday</h2>
                <h2>Closed</h2>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div
        className='w-[45%] rounded-[24px] bg-cover bg-center'
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      >
      </div>
    </div>
  )
}
