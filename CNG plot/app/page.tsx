import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Pricing } from '@/components/pricing'
import { HowItWorks } from '@/components/how-it-works'
import { PumpLocator } from '@/components/pump-locator'
import { Booking } from '@/components/booking'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <PumpLocator />
      <HowItWorks />
      <Pricing />
      <Booking />
      <Footer />
    </div>
  )
}
