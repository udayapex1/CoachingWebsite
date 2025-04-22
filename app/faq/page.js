import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FAQPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our coaching institute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>General Questions</CardTitle>
                <CardDescription>Common questions about our coaching institute</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What are the class timings?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">Our class timings vary by grade level and batch:</p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Grades 4-5: Monday to Friday, 3:00 PM - 5:00 PM</li>
                        <li>Grades 6-8: Monday to Friday, 4:00 PM - 6:30 PM</li>
                        <li>Grades 9-10: Monday to Friday, 5:00 PM - 8:00 PM</li>
                        <li>Grades 11-12: Monday to Friday, 4:00 PM - 8:00 PM</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        We also offer weekend batches for all grade levels. Please contact our administrative office for
                        specific weekend timings.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you provide study materials?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        Yes, we provide comprehensive study materials for all subjects. Our study materials include:
                      </p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Textbooks and workbooks</li>
                        <li>Practice question banks</li>
                        <li>Previous year question papers</li>
                        <li>Digital resources and online practice tests</li>
                        <li>Subject-specific reference materials</li>
                      </ul>
                      <p className="text-gray-500 mt-2">The cost of study materials is included in the tuition fees.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is there a demo class?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        Yes, we offer a free demo class for all new students. This allows students and parents to
                        experience our teaching methodology and interact with our faculty before making a decision.
                      </p>
                      <p className="text-gray-500 mt-2">
                        To schedule a demo class, please contact our administrative office or fill out the contact form
                        on our website.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What is the batch size?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        We maintain small batch sizes to ensure personalized attention for each student:
                      </p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Grades 4-5: Maximum 15 students per batch</li>
                        <li>Grades 6-8: Maximum 20 students per batch</li>
                        <li>Grades 9-10: Maximum 25 students per batch</li>
                        <li>Grades 11-12: Maximum 25 students per batch</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        We also offer one-on-one tutoring for students who require additional support.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Admission & Fees</CardTitle>
                <CardDescription>Questions about enrollment and fee structure</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is the admission process?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">Our admission process is simple and straightforward:</p>
                      <ol className="list-decimal list-inside text-gray-500 mt-2 space-y-1">
                        <li>Fill out the enrollment form online or at our center</li>
                        <li>Schedule a free demo class (optional but recommended)</li>
                        <li>Complete the registration by paying the registration fee</li>
                        <li>Submit necessary documents (school ID, previous academic records)</li>
                        <li>Pay the tuition fee and receive your class schedule</li>
                      </ol>
                      <p className="text-gray-500 mt-2">The entire process can be completed within 1-2 days.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is the fee structure?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">Our fee structure varies by grade level:</p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Grades 4-5: ₹15,000 per quarter</li>
                        <li>Grades 6-8: ₹18,000 per quarter</li>
                        <li>Grades 9-10: ₹22,000 per quarter</li>
                        <li>Grades 11-12: ₹28,000 per quarter</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        These fees include study materials, regular assessments, and access to our digital learning
                        platform. A one-time registration fee of ₹1,000 is applicable for all new admissions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Are there any scholarships available?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">Yes, we offer merit-based scholarships to deserving students:</p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>90% and above in previous academic year: 25% scholarship</li>
                        <li>95% and above in previous academic year: 50% scholarship</li>
                        <li>Top 3 ranks in school: 75% scholarship</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        We also offer need-based financial assistance to students from economically disadvantaged
                        backgrounds. Please contact our administrative office for more details.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What are the payment options?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">We offer multiple payment options for your convenience:</p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Credit/Debit Cards</li>
                        <li>Net Banking</li>
                        <li>UPI Payments</li>
                        <li>Cash payment at our center</li>
                        <li>Cheque/Demand Draft</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        We also offer installment options for fee payment. Please inquire at our administrative office
                        for details.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Questions</CardTitle>
                <CardDescription>Questions about curriculum and teaching methodology</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Which boards do you cater to?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">Our coaching programs cater to all major educational boards:</p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>CBSE (Central Board of Secondary Education)</li>
                        <li>ICSE/ISC (Indian Certificate of Secondary Education)</li>
                        <li>State Boards</li>
                        <li>International Boards (IB, IGCSE)</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        Our curriculum is designed to cover the syllabus of all these boards while also preparing
                        students for competitive exams.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do you assess student progress?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        We have a comprehensive assessment system to track student progress:
                      </p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Weekly quizzes and assignments</li>
                        <li>Monthly tests covering the month's syllabus</li>
                        <li>Quarterly assessments covering the entire quarter's syllabus</li>
                        <li>Mock exams simulating actual board/competitive exam conditions</li>
                        <li>One-on-one feedback sessions with faculty</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        Parents receive detailed progress reports after each assessment, and parent-teacher meetings are
                        held quarterly to discuss student progress.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you prepare students for competitive exams?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        Yes, our curriculum includes preparation for various competitive exams:
                      </p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Olympiads (Mathematics, Science, Computer Science, etc.)</li>
                        <li>NTSE (National Talent Search Examination)</li>
                        <li>JEE (Joint Entrance Examination) for engineering aspirants</li>
                        <li>NEET (National Eligibility cum Entrance Test) for medical aspirants</li>
                        <li>Other entrance exams for professional courses</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        We offer specialized batches for competitive exam preparation for students in grades 9-12.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What is your teaching methodology?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">Our teaching methodology is based on the following principles:</p>
                      <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                        <li>Conceptual clarity over rote learning</li>
                        <li>Interactive and engaging classroom sessions</li>
                        <li>Application-based learning with real-world examples</li>
                        <li>Regular practice and problem-solving</li>
                        <li>Personalized attention to address individual learning needs</li>
                        <li>Integration of digital tools and resources</li>
                      </ul>
                      <p className="text-gray-500 mt-2">
                        We follow a structured curriculum that builds progressively, ensuring that students develop a
                        strong foundation before moving on to advanced topics.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-500 mb-6 max-w-[600px] mx-auto">
              If you couldn't find the answer to your question, please feel free to contact us. We're here to help!
            </p>
            <div className="flex flex-col gap-2 sm:flex-row justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Contact Us
                </Button>
              </Link>
              <Link href="/enroll">
                <Button variant="outline" size="lg">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
