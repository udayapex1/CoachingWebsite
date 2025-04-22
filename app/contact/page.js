"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MessageSquare, Facebook, Instagram, Youtube } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions? We're here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly through these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-500">+1 (555) 123-4567</p>
                      <p className="text-sm text-blue-600">WhatsApp Enabled</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500">contact@yourcoaching.com</p>
                      <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-gray-500">Available Monday to Friday</p>
                      <p className="text-sm text-gray-500">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected with us on social media.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com"
                      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                    >
                      <Facebook className="h-6 w-6 text-blue-600" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="https://instagram.com"
                      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-blue-600" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://youtube.com"
                      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                    >
                      <Youtube className="h-6 w-6 text-blue-600" />
                      <span className="sr-only">YouTube</span>
                    </Link>
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
