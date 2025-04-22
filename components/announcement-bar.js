"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Bell } from "lucide-react"

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const announcements = [
    "New batch for Grade 10 starting from June 15th. Limited seats available!",
    "Congratulations to our students for outstanding results in the board exams!",
    "Summer crash course for competitive exams - Register now!",
    "Parent-teacher meeting scheduled for July 5th. Mark your calendars!",
  ]

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, announcements.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
  }

  return (
    <section className="w-full py-4 bg-blue-600 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            className="flex-1 mx-2 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="whitespace-nowrap text-center sm:text-left animate-marquee">
                  {announcements[currentIndex]}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800"
            aria-label="Next announcement"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
