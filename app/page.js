import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Clock, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnnouncementBar from "@/components/announcement-bar"
import TestimonialCarousel from "@/components/testimonial-carousel"
import TrustSignals from "@/components/trust-signals"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Unlock Your Academic Potential
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expert coaching for grades 4-12 with personalized attention and proven results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/enroll">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" size="lg">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Students learning"
                className="mx-auto aspect-square rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Courses Highlight */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Courses</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive academic programs designed for excellence across all grade levels.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <CourseCard
              title="Elementary"
              grades="Grades 4-5"
              description="Foundation building with focus on basics and conceptual learning."
              icon={<BookOpen className="h-10 w-10 text-blue-600" />}
            />
            <CourseCard
              title="Middle School"
              grades="Grades 6-8"
              description="Strengthening core subjects with introduction to competitive exams."
              icon={<Users className="h-10 w-10 text-blue-600" />}
            />
            <CourseCard
              title="High School"
              grades="Grades 9-10"
              description="Intensive preparation for board exams and entrance tests."
              icon={<Clock className="h-10 w-10 text-blue-600" />}
            />
            <CourseCard
              title="Senior Secondary"
              grades="Grades 11-12"
              description="Specialized coaching for college entrance and career preparation."
              icon={<Trophy className="h-10 w-10 text-blue-600" />}
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Success Stories</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our students and parents about their experience with our coaching.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our approach to education sets us apart from the rest.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <FeatureCard
              title="Expert Faculty"
              description="Experienced teachers with proven track records of student success."
            />
            <FeatureCard
              title="Personalized Attention"
              description="Small batch sizes ensuring individual attention to each student."
            />
            <FeatureCard
              title="Comprehensive Study Material"
              description="Well-researched and regularly updated study materials and resources."
            />
            <FeatureCard
              title="Regular Assessments"
              description="Frequent tests and evaluations to track progress and improvement areas."
            />
            <FeatureCard
              title="Digital Learning"
              description="Modern teaching methods with digital tools and resources."
            />
            <FeatureCard
              title="Parent Involvement"
              description="Regular parent-teacher meetings and progress reports."
            />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Excel?</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our coaching institute today and take the first step towards academic excellence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/enroll">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CourseCard({ title, grades, description, icon }) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-blue-600 font-medium mb-2">{grades}</p>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ title, description }) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
