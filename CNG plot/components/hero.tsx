'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  const handleBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-background to-background/50 pt-20 pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              Precision CNG Fuel Pumps Made Simple
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
              Access premium CNG fuel pumps with flexible booking. Perfect for fleet operators, ride-sharing services, and commercial vehicles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={handleBooking} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              View Locations
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">50M+</div>
              <p className="text-foreground/60">Liters Dispensed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <p className="text-foreground/60">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">24/7</div>
              <p className="text-foreground/60">Availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
