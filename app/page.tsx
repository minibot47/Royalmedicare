import Navbar from './components/navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Quality from './components/Quality'
import PersonalizedCare from './components/PersonalizedCare'
import Community from './components/Community'
import TrustedPartner from './components/TrustedPartner'
import Stats from './components/Stats'
import Schedule from './components/Schedule'
import Plans from './components/Plans'
import Comfort from './components/Comfort'
import Testimonials from './components/testimonials'
import FAQ from './components/faq'
import Footer from './components/footer'
import Blog from './components/blog'

export default function Home() {
  return (
    <main className='p-5 flex flex-col 2xl:px-10 m-auto gap-8 bg-white'>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Quality />
      <PersonalizedCare />
      <Community />
      <TrustedPartner />
      <Stats />
      <Schedule />
      <Plans />
      <Comfort />
      <FAQ />
      <Testimonials />
      <Blog/>
      <Footer />
    </main>
  )
}
