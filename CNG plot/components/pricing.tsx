import { Button } from '@/components/ui/button'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹60',
      period: 'per liter',
      description: 'Perfect for occasional users',
      features: [
        'Pay per liter',
        'All pump locations',
        'Real-time availability',
        'Email support',
        'No membership fee'
      ],
      highlighted: false
    },
    {
      name: 'Plus',
      price: '₹55',
      period: 'per liter',
      description: 'For regular commuters',
      features: [
        'Monthly membership',
        'Discounted rates',
        '24/7 priority support',
        'Reserved slots',
        'Loyalty rewards',
        'Mobile app access'
      ],
      highlighted: true
    },
    {
      name: 'Fleet Pro',
      price: 'Custom',
      period: 'per project',
      description: 'For large fleet operations',
      features: [
        'Volume discounts',
        'Unlimited access',
        'Dedicated account manager',
        '24/7 support',
        'Bulk scheduling',
        'Custom pricing'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">CNG Pricing Plans</h2>
          <p className="text-foreground/70">Choose the plan that works for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-lg border transition-all duration-300 p-8 ${
                plan.highlighted 
                  ? 'bg-accent border-accent shadow-lg shadow-accent/20 scale-105' 
                  : 'bg-card border-border hover:border-accent/50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-accent-foreground' : 'text-foreground'}`}>
                {plan.name}
              </h3>
              <p className={plan.highlighted ? 'text-accent-foreground/70' : 'text-foreground/70'}>
                {plan.description}
              </p>
              
              <div className="my-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-accent-foreground' : 'text-foreground'}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? 'text-accent-foreground/70' : 'text-foreground/70'}>
                  {' '}{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2 ${plan.highlighted ? 'text-accent-foreground' : 'text-foreground/70'}`}>
                    <div className={`w-2 h-2 rounded-full ${plan.highlighted ? 'bg-accent-foreground' : 'bg-accent'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/90' 
                    : 'bg-accent hover:bg-accent/90 text-accent-foreground'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
