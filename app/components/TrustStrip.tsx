'use client'

import { useFadeUp } from './hooks'

const items = [
  {
    icon: '/icons/stripe1.svg',
    title: 'Family-Like Bonds, Not Just Staff and Residents',
  },
  {
    icon: '/icons/stripe2.svg',
    title: 'Comfort That Never Compromises on Dignity',
  },
  {
    icon: '/icons/stripe3.svg',
    title: 'Every Detail Designed with Seniors in Mind',
  },
]

export default function TrustStrip() {
  const ref = useFadeUp()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="fade-up bg-[#EDEDED] px-5 py-5 flex flex-col sm:flex-row flex-wrap gap-6 items-start justify-between rounded-[24px]"
    >
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`flex items-center gap-4 w-full sm:flex-1 sm:w-auto ${
            i < items.length - 1 ? 'pb-5 border-b border-gray-300/40 sm:border-b-0 sm:pb-0' : ''
          }`}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E2A76F] flex items-center justify-center shrink-0">
            <img src={item.icon} alt="" className="w-5 h-5" />
          </div>
          <div className="text-base sm:text-xl font-bold text-olive-dark">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
}