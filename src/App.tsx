import { useEffect, useRef } from 'react'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Pain } from '@/components/sections/Pain'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Examples } from '@/components/sections/Examples'
import { Topics } from '@/components/sections/Topics'
import { Features } from '@/components/sections/Features'
import { Offer } from '@/components/sections/Offer'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'


function useYmGoal(goal: string) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ym(108444641, 'reachGoal', goal)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [goal])
  return ref
}

function App() {
  const painRef = useYmGoal('Pain')
  const howItWorksRef = useYmGoal('HowItWorks')
  const topicsRef = useYmGoal('Topics')
  const featuresRef = useYmGoal('Features')
  const offerRef = useYmGoal('Offer')
  const ctaRef = useYmGoal('CTA')

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div ref={painRef}><Pain /></div>
        <div ref={howItWorksRef}><HowItWorks /></div>
        <Examples />
        <div ref={topicsRef}><Topics /></div>
        <div ref={featuresRef}><Features /></div>
        <div ref={offerRef}><Offer /></div>
        <div ref={ctaRef}><CTA /></div>
      </main>
      <Footer />
    </>
  )
}

export default App
