import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Clock, BookOpen, Calendar } from "lucide-react"

export default function CoursesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Courses</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive academic programs tailored for each grade level to ensure excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="elementary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="elementary">Grades 4-5</TabsTrigger>
              <TabsTrigger value="middle">Grades 6-8</TabsTrigger>
              <TabsTrigger value="high">Grades 9-10</TabsTrigger>
              <TabsTrigger value="senior">Grades 11-12</TabsTrigger>
            </TabsList>

            <TabsContent value="elementary" className="mt-6">
              <GradeSection
                title="Elementary Program (Grades 4-5)"
                description="Building a strong foundation with focus on basics and conceptual learning."
                subjects={[
                  {
                    name: "Mathematics",
                    description: "Fundamentals of arithmetic, basic geometry, and problem-solving skills.",
                  },
                  {
                    name: "Science",
                    description: "Introduction to basic scientific concepts through experiments and activities.",
                  },
                  { name: "English", description: "Reading comprehension, vocabulary building, and basic grammar." },
                  { name: "Social Studies", description: "Understanding our world, community, and basic geography." },
                ]}
                batchTimings={[
                  "Monday to Friday: 3:00 PM - 5:00 PM",
                  "Weekend Batch: Saturday & Sunday 10:00 AM - 1:00 PM",
                ]}
                fees="₹15,000 per quarter"
              />
            </TabsContent>

            <TabsContent value="middle" className="mt-6">
              <GradeSection
                title="Middle School Program (Grades 6-8)"
                description="Strengthening core subjects with introduction to competitive exams."
                subjects={[
                  {
                    name: "Mathematics",
                    description: "Advanced arithmetic, algebra basics, geometry, and mathematical reasoning.",
                  },
                  {
                    name: "Science",
                    description: "Physics, chemistry, and biology fundamentals with practical applications.",
                  },
                  { name: "English", description: "Advanced grammar, creative writing, and literature appreciation." },
                  { name: "Social Studies", description: "History, geography, and civics with analytical thinking." },
                ]}
                batchTimings={[
                  "Monday to Friday: 4:00 PM - 6:30 PM",
                  "Weekend Batch: Saturday & Sunday 9:00 AM - 1:00 PM",
                ]}
                fees="₹18,000 per quarter"
              />
            </TabsContent>

            <TabsContent value="high" className="mt-6">
              <GradeSection
                title="High School Program (Grades 9-10)"
                description="Intensive preparation for board exams and entrance tests."
                subjects={[
                  {
                    name: "Mathematics",
                    description: "Complete algebra, geometry, trigonometry, and statistics as per board syllabus.",
                  },
                  {
                    name: "Science",
                    description: "Comprehensive physics, chemistry, and biology with practical sessions.",
                  },
                  { name: "English", description: "Literature analysis, advanced writing skills, and communication." },
                  {
                    name: "Social Studies",
                    description: "In-depth history, geography, economics, and political science.",
                  },
                ]}
                batchTimings={[
                  "Monday to Friday: 5:00 PM - 8:00 PM",
                  "Weekend Batch: Saturday & Sunday 8:00 AM - 2:00 PM",
                ]}
                fees="₹22,000 per quarter"
              />
            </TabsContent>

            <TabsContent value="senior" className="mt-6">
              <GradeSection
                title="Senior Secondary Program (Grades 11-12)"
                description="Specialized coaching for college entrance and career preparation."
                subjects={[
                  {
                    name: "Mathematics",
                    description: "Advanced calculus, coordinate geometry, vectors, and probability.",
                  },
                  {
                    name: "Physics",
                    description: "Mechanics, thermodynamics, optics, electromagnetism, and modern physics.",
                  },
                  {
                    name: "Chemistry",
                    description: "Organic, inorganic, and physical chemistry with practical applications.",
                  },
                  {
                    name: "Biology",
                    description: "Comprehensive study of botany, zoology, human physiology, and genetics.",
                  },
                ]}
                batchTimings={[
                  "Science Stream: Monday to Friday 4:00 PM - 8:00 PM",
                  "Commerce Stream: Monday to Friday 3:00 PM - 7:00 PM",
                  "Weekend Batches Available for Both Streams",
                ]}
                fees="₹28,000 per quarter"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Join?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enroll now to secure your spot in our upcoming batches.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/enroll">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
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

function GradeSection({ title, description, subjects, batchTimings, fees }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center">
          <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
          Subjects Offered
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((subject, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{subject.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center">
          <Clock className="mr-2 h-5 w-5 text-blue-600" />
          Batch Timings
        </h3>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-2">
              {batchTimings.map((timing, index) => (
                <li key={index} className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                  <span>{timing}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Fees Structure</h3>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold text-blue-600">{fees}</p>
            <p className="text-gray-500 mt-2">Includes study materials and test series</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Study Materials</h3>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-500 mb-4">
              Download sample study materials to get a glimpse of our comprehensive resources.
            </p>
            <Button variant="outline" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Sample
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
