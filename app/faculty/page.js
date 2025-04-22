import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, GraduationCap, Star } from "lucide-react"

export default function FacultyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Faculty & Success Stories
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet our expert teachers and discover the achievements of our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Expert Faculty</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced educators dedicated to bringing out the best in every student.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FacultyCard
              name="Dr. Sarah Johnson"
              subject="Mathematics"
              qualification="Ph.D. in Mathematics, Stanford University"
              experience="15+ years of teaching experience"
              description="Specializes in making complex mathematical concepts easy to understand. Her students consistently score in the top percentile in competitive exams."
            />
            <FacultyCard
              name="Prof. Michael Chen"
              subject="Physics"
              qualification="M.Sc. in Physics, MIT"
              experience="12+ years of teaching experience"
              description="Known for his practical approach to teaching physics with real-world examples and demonstrations that make concepts stick."
            />
            <FacultyCard
              name="Dr. Emily Rodriguez"
              subject="Chemistry"
              qualification="Ph.D. in Chemistry, Harvard University"
              experience="10+ years of teaching experience"
              description="Combines theoretical knowledge with practical lab work to ensure students develop a deep understanding of chemical principles."
            />
            <FacultyCard
              name="Prof. David Wilson"
              subject="Biology"
              qualification="M.Sc. in Molecular Biology, Cambridge University"
              experience="14+ years of teaching experience"
              description="Makes biology come alive through interactive sessions and visual learning techniques that help students excel in exams."
            />
            <FacultyCard
              name="Ms. Jennifer Lee"
              subject="English Literature"
              qualification="M.A. in English Literature, Oxford University"
              experience="8+ years of teaching experience"
              description="Passionate about literature and skilled at developing students' critical thinking and writing abilities."
            />
            <FacultyCard
              name="Prof. Robert Taylor"
              subject="Social Studies"
              qualification="M.A. in History, Yale University"
              experience="11+ years of teaching experience"
              description="Brings history and social studies to life through storytelling and connecting past events to current affairs."
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Achievements</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our students consistently achieve outstanding results in academics and competitive exams.
              </p>
            </div>
          </div>

          <Tabs defaultValue="board-results" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="board-results">Board Exam Results</TabsTrigger>
              <TabsTrigger value="competitive-exams">Competitive Exams</TabsTrigger>
              <TabsTrigger value="olympiads">Olympiads & Competitions</TabsTrigger>
            </TabsList>

            <TabsContent value="board-results" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Grade 10 Board Results</CardTitle>
                    <CardDescription>Last academic year highlights</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students scoring 90% and above</span>
                        <span className="font-bold">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students scoring 95% and above</span>
                        <span className="font-bold">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>School toppers from our institute</span>
                        <span className="font-bold">12</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Top Performers</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          Aisha Patel - 98.8%
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          Ryan Kim - 98.6%
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          Sophia Chen - 98.2%
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Grade 12 Board Results</CardTitle>
                    <CardDescription>Last academic year highlights</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students scoring 90% and above</span>
                        <span className="font-bold">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students scoring 95% and above</span>
                        <span className="font-bold">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>School toppers from our institute</span>
                        <span className="font-bold">8</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Top Performers</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          David Wang - 97.4%
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          Priya Sharma - 97.2%
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          James Wilson - 96.8%
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="competitive-exams" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>National Level Entrance Exams</CardTitle>
                    <CardDescription>Performance in competitive exams</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students qualifying for advanced rounds</span>
                        <span className="font-bold">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students in top 1000 ranks</span>
                        <span className="font-bold">15</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students in top 100 ranks</span>
                        <span className="font-bold">3</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Notable Achievements</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Arjun Mehta - AIR 45
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Lisa Zhang - AIR 78
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Kevin Patel - AIR 92
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Scholarship Exams</CardTitle>
                    <CardDescription>Performance in scholarship tests</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students receiving scholarships</span>
                        <span className="font-bold">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students receiving full scholarships</span>
                        <span className="font-bold">12%</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total scholarship amount earned</span>
                        <span className="font-bold">₹32 Lakhs</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Top Scholarship Winners</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Neha Gupta - National Talent Search
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Samuel Lee - KVPY Fellowship
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Riya Shah - Kishore Vaigyanik Protsahan Yojana
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="olympiads" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>International Olympiads</CardTitle>
                    <CardDescription>Performance in international competitions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students qualifying for national level</span>
                        <span className="font-bold">38%</span>
                      </div>
                      <Progress value={38} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Students qualifying for international level</span>
                        <span className="font-bold">5%</span>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Medals won</span>
                        <span className="font-bold">7</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Medal Winners</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-yellow-500 mr-2" />
                          Vikram Singh - Gold Medal (Math Olympiad)
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-gray-400 mr-2" />
                          Maya Wong - Silver Medal (Physics Olympiad)
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-amber-700 mr-2" />
                          Raj Patel - Bronze Medal (Chemistry Olympiad)
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Science & Technology Competitions</CardTitle>
                    <CardDescription>Performance in science fairs and tech competitions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Projects selected for national showcase</span>
                        <span className="font-bold">12</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Awards won</span>
                        <span className="font-bold">8</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Patents filed</span>
                        <span className="font-bold">2</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Notable Projects</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Smart Water Conservation System - National Winner
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          AI-based Crop Disease Detection - Regional Winner
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          Low-cost Air Quality Monitor - Innovation Award
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

function FacultyCard({ name, subject, qualification, experience, description }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative">
        <Image src="/placeholder.svg?height=300&width=300" alt={name} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="flex items-center">
          <BookOpen className="h-4 w-4 mr-1 text-blue-600" />
          {subject}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-start space-x-2">
          <GraduationCap className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-500">{qualification}</p>
        </div>
        <div className="flex items-start space-x-2">
          <Award className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-500">{experience}</p>
        </div>
        <p className="text-sm text-gray-500 pt-2">{description}</p>
      </CardContent>
    </Card>
  )
}
