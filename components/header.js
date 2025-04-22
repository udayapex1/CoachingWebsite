"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GraduationCap, Menu, Phone } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg"> Ojha Coaching classes</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center space-x-4">
            <Link href="tel:+1234567890" className="flex items-center text-sm font-medium">
              <Phone className="h-4 w-4 mr-1" />
              <span className="sr-only md:not-sr-only">Call Us</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <MobileNavLink href="/" label="Home" />
                  <MobileNavLink href="/courses" label="Courses" />
                  <MobileNavLink href="/faculty" label="Faculty" />
                  <MobileNavLink href="/location" label="Location" />
                  <MobileNavLink href="/blog" label="Blog" />
                  <MobileNavLink href="/faq" label="FAQ" />
                  <MobileNavLink href="/contact" label="Contact" />
                  <Link href="/enroll">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className="flex items-center space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/courses" label="Courses" />
            <NavLink href="/faculty" label="Faculty" />
            <NavLink href="/location" label="Location" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/faq" label="FAQ" />
            <NavLink href="/contact" label="Contact" />
            <Link href="/enroll">
              <Button className="bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, label }) {
  return (
    <Link href={href} className="text-sm font-medium transition-colors hover:text-blue-600">
      {label}
    </Link>
  )
}

function MobileNavLink({ href, label }) {
  return (
    <Link href={href} className="text-lg font-medium transition-colors hover:text-blue-600 py-2">
      {label}
    </Link>
  )
}
