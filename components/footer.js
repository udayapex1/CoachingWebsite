import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-lg">Excellence Coaching</span>
            </Link>
            <p className="text-gray-500 text-sm">
              Expert coaching for grades 4-12 with personalized attention and proven results.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-500 hover:text-blue-600 text-sm">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-500 hover:text-blue-600 text-sm">
                  Faculty & Success Stories
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-500 hover:text-blue-600 text-sm">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-blue-600 text-sm">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-blue-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-500 text-sm">
                  123 Education Street, Academic Plaza, Knowledge City, KN 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <Link href="tel:+1234567890" className="text-gray-500 hover:text-blue-600 text-sm">
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <Link href="mailto:contact@yourcoaching.com" className="text-gray-500 hover:text-blue-600 text-sm">
                  contact@yourcoaching.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-500 text-sm">Subscribe to our newsletter for the latest updates and resources.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Excellence Coaching Institute. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
