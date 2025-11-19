export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-foreground">CNG PLOT</span>
            </div>
            <p className="text-foreground/60 text-sm">Professional CNG pump booking platform. Easy access to quality CNG fueling solutions.</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-foreground/60 hover:text-accent transition-colors">CNG Pump Booking</a></li>
              <li><a href="#services" className="text-foreground/60 hover:text-accent transition-colors">Real-time Availability</a></li>
              <li><a href="#services" className="text-foreground/60 hover:text-accent transition-colors">Quick Scheduling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/60 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/60">
                <a href="mailto:kalevinit409@gmail.com" className="hover:text-accent transition-colors">
                  kalevinit409@gmail.com
                </a>
              </li>
              <li className="text-foreground/60">
                <a href="tel:+919665532553" className="hover:text-accent transition-colors">
                  +91 9665532553
                </a>
              </li>
              <li className="text-foreground/60">Hadpser, Pune</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
            <p>&copy; 2025 CNG PLOT. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
