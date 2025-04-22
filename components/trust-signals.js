import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, CheckCircle } from "lucide-react"

export default function TrustSignals() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Parents Trust Us</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of parents who have chosen Excellence Coaching for their children's academic success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Shield className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-bold">Certified Educators</h3>
              <p className="text-gray-500">
                All our teachers are certified professionals with years of experience in their respective fields.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Award className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-gray-500">
                Our students consistently achieve top ranks in board exams and competitive tests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-bold">Secure Environment</h3>
              <p className="text-gray-500">
                We provide a safe and secure learning environment with modern facilities and security measures.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=60&width=120"
              width={120}
              height={60}
              alt="Certification Badge"
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-500">ISO Certified</p>
          </div>

          <div className="text-center">
            <Image
              src="/placeholder.svg?height=60&width=120"
              width={120}
              height={60}
              alt="Education Award"
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-500">Best Coaching Institute 2023</p>
          </div>

          <div className="text-center">
            <Image
              src="/placeholder.svg?height=60&width=120"
              width={120}
              height={60}
              alt="Security Badge"
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-500">Secure Payment Partner</p>
          </div>

          <div className="text-center">
            <Image
              src="/placeholder.svg?height=60&width=120"
              width={120}
              height={60}
              alt="Quality Badge"
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-500">Quality Education Certified</p>
          </div>
        </div>
      </div>
    </section>
  )
}
