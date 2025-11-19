'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Fuel, Clock, Users, Map } from 'lucide-react'

// Mock pump data with availability status
const PUMPS_DATA = [
  {
    id: 'pump-001',
    name: 'Downtown CNG Hub',
    location: 'Central District',
    address: '123 Main St, City Center',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    available: true,
    capacity: 3,
    currentUsers: 1,
    nextFreeSlot: '2:00 PM',
    rating: 4.8,
    distance: '0.5 km',
    operatingHours: '8 AM - 8 PM'
  },
  {
    id: 'pump-002',
    name: 'East Side CNG Station',
    location: 'East District',
    address: '456 Oak Ave, East Side',
    coordinates: { lat: 40.7580, lng: -73.9855 },
    available: false,
    capacity: 2,
    currentUsers: 2,
    nextFreeSlot: '3:30 PM',
    rating: 4.6,
    distance: '2.3 km',
    operatingHours: '7 AM - 9 PM'
  },
  {
    id: 'pump-003',
    name: 'West Valley CNG Center',
    location: 'West District',
    address: '789 Elm Rd, West Valley',
    coordinates: { lat: 40.6892, lng: -74.0445 },
    available: true,
    capacity: 4,
    currentUsers: 2,
    nextFreeSlot: 'Now',
    rating: 4.9,
    distance: '3.1 km',
    operatingHours: '6 AM - 10 PM'
  },
  {
    id: 'pump-004',
    name: 'North Industrial CNG Point',
    location: 'North District',
    address: '321 Industrial Blvd, North',
    coordinates: { lat: 40.7831, lng: -73.9712 },
    available: true,
    capacity: 5,
    currentUsers: 0,
    nextFreeSlot: 'Now',
    rating: 4.7,
    distance: '4.5 km',
    operatingHours: '24/7'
  },
  {
    id: 'pump-005',
    name: 'South Bay CNG Service',
    location: 'South District',
    address: '654 Bay Shore Ln, South',
    coordinates: { lat: 40.6501, lng: -73.9496 },
    available: false,
    capacity: 3,
    currentUsers: 3,
    nextFreeSlot: '4:00 PM',
    rating: 4.5,
    distance: '5.2 km',
    operatingHours: '8 AM - 6 PM'
  }
]

interface PumpLocatorProps {
  onPumpSelect?: (pumpId: string) => void
}

export function PumpLocator({ onPumpSelect }: PumpLocatorProps) {
  const [selectedPump, setSelectedPump] = useState<string | null>(null)
  const [filterAvailableOnly, setFilterAvailableOnly] = useState(true)
  const [sortBy, setSortBy] = useState<'distance' | 'rating' | 'availability'>('availability')
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')

  const filteredPumps = PUMPS_DATA.filter(pump => !filterAvailableOnly || pump.available)

  const sortedPumps = [...filteredPumps].sort((a, b) => {
    if (sortBy === 'distance') {
      return parseFloat(a.distance) - parseFloat(b.distance)
    } else if (sortBy === 'rating') {
      return b.rating - a.rating
    } else {
      return a.available === b.available ? 0 : a.available ? -1 : 1
    }
  })

  const handleSelect = (pumpId: string) => {
    setSelectedPump(pumpId)
    onPumpSelect?.(pumpId)
  }

  return (
    <section id="pump-locator" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Find Available CNG Pumps</h2>
          <p className="text-foreground/70">Browse real-time availability at our locations</p>
        </div>

        {/* Filters and Sorting */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterAvailableOnly}
                  onChange={(e) => setFilterAvailableOnly(e.target.checked)}
                  className="w-4 h-4 rounded"
                />
                <span className="text-foreground">Show Available Only</span>
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <Button
                  onClick={() => setViewMode('list')}
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  className="gap-2"
                >
                  List View
                </Button>
                <Button
                  onClick={() => setViewMode('map')}
                  variant={viewMode === 'map' ? 'default' : 'outline'}
                  size="sm"
                  className="gap-2"
                >
                  <Map className="w-4 h-4" />
                  Map View
                </Button>
              </div>
              <span className="text-foreground/70 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'distance' | 'rating' | 'availability')}
                className="bg-background border border-border rounded-lg px-4 py-2 text-foreground text-sm focus:outline-none focus:border-accent"
              >
                <option value="availability">Availability</option>
                <option value="distance">Distance</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {viewMode === 'map' ? (
          <PumpMap pumps={sortedPumps} selectedPump={selectedPump} onPumpSelect={handleSelect} />
        ) : (
          <>
            {/* Pumps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPumps.map((pump) => (
                <Card
                  key={pump.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedPump === pump.id ? 'ring-2 ring-accent' : ''
                  } ${pump.available ? 'border-border' : 'border-border/50 opacity-75'}`}
                  onClick={() => handleSelect(pump.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">{pump.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-2">
                          <MapPin className="w-4 h-4" />
                          {pump.location}
                        </CardDescription>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        pump.available
                          ? 'bg-green-500/20 text-green-700'
                          : 'bg-red-500/20 text-red-700'
                      }`}>
                        {pump.available ? 'Available' : 'Busy'}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Location Info */}
                    <div className="text-sm text-foreground/70">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {pump.address}
                      </p>
                    </div>

                    {/* Capacity and Usage */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-foreground/70 text-sm mb-1">
                          <Users className="w-4 h-4" />
                          <span>Capacity</span>
                        </div>
                        <p className="text-lg font-semibold text-foreground">
                          {pump.currentUsers}/{pump.capacity}
                        </p>
                      </div>
                      <div className="bg-background p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-foreground/70 text-sm mb-1">
                          <Clock className="w-4 h-4" />
                          <span>Next Free</span>
                        </div>
                        <p className="text-lg font-semibold text-foreground">{pump.nextFreeSlot}</p>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-foreground/70 mb-1">Distance</p>
                        <p className="font-semibold text-foreground">{pump.distance}</p>
                      </div>
                      <div>
                        <p className="text-foreground/70 mb-1">Rating</p>
                        <p className="font-semibold text-foreground">⭐ {pump.rating}</p>
                      </div>
                    </div>

                    <div className="text-sm">
                      <p className="text-foreground/70 mb-1">Hours</p>
                      <p className="font-semibold text-foreground">{pump.operatingHours}</p>
                    </div>

                    {/* Select Button */}
                    <Button
                      onClick={() => handleSelect(pump.id)}
                      className={`w-full ${
                        selectedPump === pump.id
                          ? 'bg-accent text-accent-foreground'
                          : pump.available
                          ? 'bg-accent/80 hover:bg-accent text-accent-foreground'
                          : 'bg-accent/40 text-accent-foreground cursor-not-allowed'
                      }`}
                      disabled={!pump.available}
                    >
                      {selectedPump === pump.id ? '✓ Selected' : pump.available ? 'Select Pump' : 'Not Available'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedPumps.length === 0 && (
              <div className="text-center py-12">
                <Fuel className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
                <p className="text-foreground/70">No pumps available at the moment. Try adjusting your filters.</p>
              </div>
            )}
          </>
        )}

        {/* Stats Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{PUMPS_DATA.filter(p => p.available).length}</div>
            <p className="text-foreground/70">Pumps Available</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{PUMPS_DATA.length}</div>
            <p className="text-foreground/70">Total Locations</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">99.2%</div>
            <p className="text-foreground/70">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface PumpMapProps {
  pumps: typeof PUMPS_DATA
  selectedPump: string | null
  onPumpSelect: (pumpId: string) => void
}

function PumpMap({ pumps, selectedPump, onPumpSelect }: PumpMapProps) {
  const centerLat = pumps.length > 0 ? pumps[0].coordinates.lat : 40.7128
  const centerLng = pumps.length > 0 ? pumps[0].coordinates.lng : -74.0060

  // Create map URL with markers for all pumps
  const markerParams = pumps
    .map(pump => `markers=color:${pump.available ? 'green' : 'red'}%7Clabel:${pump.id.split('-')[1]}%7C${pump.coordinates.lat},${pump.coordinates.lng}`)
    .join('&')

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${centerLat},${centerLng}&zoom=12&size=800x600&markers=color:blue%7C${centerLat},${centerLng}&${markerParams}&key=AIzaSyDummy_Replace_With_Your_API_Key`

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="relative w-full h-96 bg-background flex items-center justify-center">
          <iframe
            title="CNG Pumps Map"
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDummy_Replace_With_Your_API_Key&q=CNG+pump`}
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none flex items-center justify-center">
            <div className="text-center">
              <p className="text-foreground/60 text-sm">Interactive map view</p>
              <p className="text-foreground/40 text-xs mt-1">Click on pumps below to see details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pumps List for Map View */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Pump Locations</h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {pumps.map((pump) => (
            <div
              key={pump.id}
              onClick={() => onPumpSelect(pump.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedPump === pump.id
                  ? 'border-accent bg-accent/10'
                  : 'border-border hover:border-accent/50'
              } ${!pump.available ? 'opacity-60' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{pump.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      pump.available
                        ? 'bg-green-500/20 text-green-700'
                        : 'bg-red-500/20 text-red-700'
                    }`}>
                      {pump.available ? 'Available' : 'Busy'}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {pump.address}
                  </p>
                  <p className="text-sm text-foreground/60 mt-1">
                    {pump.distance} • Rating: ⭐ {pump.rating} • {pump.currentUsers}/{pump.capacity} users
                  </p>
                </div>
                <Button
                  onClick={() => onPumpSelect(pump.id)}
                  size="sm"
                  className={`whitespace-nowrap ${
                    selectedPump === pump.id
                      ? 'bg-accent text-accent-foreground'
                      : pump.available
                      ? 'bg-accent/80 hover:bg-accent'
                      : 'bg-accent/40 cursor-not-allowed'
                  }`}
                  disabled={!pump.available}
                >
                  {selectedPump === pump.id ? '✓ Selected' : 'Select'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
