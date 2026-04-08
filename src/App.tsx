import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Pain } from '@/components/sections/Pain'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Topics } from '@/components/sections/Topics'
import { Features } from '@/components/sections/Features'
import { Offer } from '@/components/sections/Offer'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <HowItWorks />
        <Topics />
        <Features />
        <Offer />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
