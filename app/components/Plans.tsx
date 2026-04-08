'use client'

import { useFadeUp } from './hooks'
import TypewriterHeading from './TypewriterHeading'

const plans = [
  {
    tag: 'Starter',
    name: 'Basic Care',
    price: '₦29,000',
    period: '/ Month',
    featured: false,
    features: [
      '24/7 Professional Nursing Support',
      'Nutritious Daily Meals & Snacks',
      'Wellness & Fitness Programs',
      'Personalized Care Plans',
    ],
  },
  {
    tag: 'Most Popular',
    name: 'Standard Care',
    price: '₦69,000',
    period: '/ Month',
    featured: true,
    features: [
      'Up to 8 hours of in-home care',
      'Medication management & monitoring',
      'Daily family updates via app',
      'Companion care included',
      'Priority caregiver matching',
    ],
  },
  {
    tag: 'Full Support',
    name: 'Premium Care',
    price: '₦99,000',
    period: '/ Month',
    featured: false,
    features: [
      '24/7 around-the-clock care',
      'Dedicated care coordinator',
      'Medical specialist coordination',
      'Memory care support',
      'Live-in caregiver available',
    ],
  },
]

export default function Plans() {
  const ref = useFadeUp()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-up bg-white px-5 py-24"
    >
      <div className='max-w-[1440px] m-auto'>
        <div className="text-center max-w-xl mx-auto mb-12">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
            <span className="font-serif italic text-black text-lg">Pricing Plan</span>
          </div>
          <TypewriterHeading
            className="text-[clamp(1.9rem,3vw,2.7rem)] text-olive-dark mb-4"
            lines={[
              { text: 'Senior care plans that offer ', italic: true, duration: 1.1, delay: 0 },
              { text: 'real value', duration: 1, delay: 0.9 , italic : true  },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-10 border transition-all duration-300 hover:-translate-y-1.5 ${
                plan.featured
                  ? 'bg-[#273A29] border-transparent shadow-2xl shadow-olive/20'
                  : 'bg-[#EDEDED] border-olive/10 hover:shadow-xl'
              }`}
            >
              <span
                className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                  plan.featured
                    ? 'bg-white/15 text-amber-light'
                    : 'bg-amber/10 text-amber'
                }`}
              >
                {plan.tag}
              </span>
              <div className={`font-serif text-2xl font-bold mb-3 ${plan.featured ? 'text-white' : 'text-olive-dark'}`}>
                {plan.name}
              </div>
              <div className={`font-sans  text-3xl bg-[#E2A76F] rounded-[8px] px-5 py-4 font-bold mb-6 ${plan.featured ? 'text-white' : 'text-white'}`}>
                {plan.price}
                <span className={`text-base font-sans font-normal ${plan.featured ? 'text-white/60' : 'text-white'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex gap-2.5 text-sm ${plan.featured ? 'text-white/80' : 'text-olive/70'}`}
                  >
                    <span className={`font-bold bg-[#E2A76F] w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? 'text-black' : 'text-white'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3.5 rounded-[8px] font-semibold text-sm border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-[#E2A76F] text-white text-lg hover:bg-white/90'
                    : 'bg-[#E2A76F] text-white text-lg hover:bg-olive hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
