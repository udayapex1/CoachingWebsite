"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, MapPin, Bus, Car } from "lucide-react"

export default function LocationPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Location</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find us easily with our location details and directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Our Address</h2>
                      <p className="text-gray-500">
                        123 Education Street, Academic Plaza
                        <br />
                        Knowledge City, KN 12345
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "123 Education Street, Academic Plaza, Knowledge City, KN 12345",
                          )
                          alert("Address copied to clipboard!")
                        }}
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Address
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Landmarks & Directions</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold flex items-center">
                        <Bus className="mr-2 h-5 w-5 text-blue-600" />
                        Public Transport
                      </h3>
                      <ul className="list-disc list-inside text-gray-500 space-y-1">
                        <li>Bus: Routes 101, 203, and 305 stop directly in front of our building</li>
                        <li>Metro: Knowledge City Station (Blue Line) - 5 minute walk</li>
                        <li>Train: Central Station - 15 minute drive</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold flex items-center">
                        <Car className="mr-2 h-5 w-5 text-blue-600" />
                        Parking Information
                      </h3>
                      <ul className="list-disc list-inside text-gray-500 space-y-1">
                        <li>Free parking available for students and parents</li>
                        <li>Dedicated parking area with 50+ spaces</li>
                        <li>Valet parking available during peak hours</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Nearby Landmarks</h3>
                      <ul className="list-disc list-inside text-gray-500 space-y-1">
                        <li>City Library - Opposite to our building</li>
                        <li>Central Park - 2 minute walk</li>
                        <li>Shopping Mall - 5 minute walk</li>
                        <li>Hospital - 10 minute drive</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Google Maps</h2>
                  <div className="aspect-video w-full h-[400px] bg-gray-100 rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1652209850843!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="pt-2 text-gray-500 text-sm">
                      <p>Administrative office hours: 9:00 AM - 5:00 PM (Monday - Friday)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
