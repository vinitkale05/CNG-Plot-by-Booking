'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'standard',
    pump: '',
    date: '',
    time: '',
    duration: '1',
    description: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', service: 'standard', pump: '', date: '', time: '', duration: '1', description: '' })
    }, 3000)
  }

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Book Your Equipment</h2>
          <p className="text-foreground/70">Reserve your CNG pump and plotter time in just a few clicks</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
              <p className="text-foreground/70 mb-6">We've received your booking request. Check your email for confirmation and pump access details.</p>
              <p className="text-sm text-foreground/50">You'll receive a confirmation email within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="standard">Standard Plotting (24")</option>
                    <option value="large">Large Format (36")</option>
                    <option value="express">Large Format Express (60")</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Select Pump Location</label>
                  <select
                    name="pump"
                    value={formData.pump}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="">Choose a pump location...</option>
                    <option value="pump-001">Downtown CNG Hub - 0.5 km</option>
                    <option value="pump-002">East Side Plotter Station - 2.3 km</option>
                    <option value="pump-003">West Valley Tech Center - 3.1 km</option>
                    <option value="pump-004">North Industrial Park - 4.5 km</option>
                    <option value="pump-005">South Bay Service Point - 5.2 km</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Duration (hours)</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="4">4 Hours</option>
                    <option value="8">Full Day (8 Hours)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-semibold">
                Confirm Booking
              </Button>
              
              <p className="text-center text-foreground/60 text-sm">
                By booking, you agree to our terms of service. You'll receive a confirmation email with pump access details within 2 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
