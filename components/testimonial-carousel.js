"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Grade 8 Student",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The teachers at Excellence Coaching are exceptional. My daughter's grades have improved significantly, and she now enjoys studying subjects she once found difficult.",
    },
    {
      name: "Rahul Mehta",
      role: "Grade 12 Student",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I joined Excellence Coaching in Grade 10, and it completely transformed my approach to studies. The faculty's guidance helped me secure a top rank in my board exams.",
    },
    {
      name: "Ananya Patel",
      role: "Grade 11 Student",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The personalized attention and comprehensive study materials have made complex concepts easy to understand. I feel confident about my upcoming exams.",
    },
    {
      name: "Vikram Singh",
      role: "Parent of Grade 5 Student",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "My son has developed a love for mathematics since joining Excellence Coaching. The interactive teaching methods make learning enjoyable for young students.",
    },
  ]

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 6000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, testimonials.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <Quote className="h-8 w-8 mx-auto text-blue-600 opacity-50" />
                      <p className="text-gray-600 italic">{testimonial.quote}</p>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:flex bg-white shadow-md"
        onClick={handlePrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:flex bg-white shadow-md"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
