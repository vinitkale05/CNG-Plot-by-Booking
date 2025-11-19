export function Services() {
  const services = [
    {
      title: 'Quick Fill',
      description: 'Fast CNG refueling for personal and commercial vehicles',
      icon: '⛽',
      features: ['5-10 min fill time', 'All vehicle types', 'Competitive pricing']
    },
    {
      title: 'Fleet Refueling',
      description: 'Dedicated CNG solutions for commercial fleet operations',
      icon: '🚛',
      features: ['Bulk discounts', 'Scheduled fills', 'Account management']
    },
    {
      title: 'Priority Service',
      description: 'Express CNG refueling with priority queue access',
      icon: '⚡',
      features: ['Express queue', 'No waiting', 'VIP benefits']
    }
  ]

  return (
    <section id="services" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Choose the perfect CNG refueling solution for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-accent/50">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
