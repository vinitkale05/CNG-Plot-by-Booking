export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Select Service',
      description: 'Choose your plotting requirements and service level'
    },
    {
      number: '02',
      title: 'Pick Date & Time',
      description: 'Browse available time slots that suit your schedule'
    },
    {
      number: '03',
      title: 'Upload Files',
      description: 'Submit your designs in standard formats (PDF, DWG, SVG)'
    },
    {
      number: '04',
      title: 'Confirmation',
      description: 'Receive confirmation and pick-up/delivery instructions'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-foreground/70">Simple and straightforward booking process</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-3">{step.number}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-accent/30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
