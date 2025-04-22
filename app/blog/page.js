import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, User, Tag, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog & Resources</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our collection of articles, study tips, and resources to help you excel in your academic
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="exam-tips">Exam Tips</TabsTrigger>
                <TabsTrigger value="study-hacks">Study Hacks</TabsTrigger>
                <TabsTrigger value="parent-resources">Parent Resources</TabsTrigger>
              </TabsList>
              <div className="hidden md:flex">
                <Button variant="outline" size="sm">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard
                  title="10 Effective Study Techniques for Better Retention"
                  description="Discover scientifically-proven study methods that can help you retain information longer and perform better in exams."
                  category="Study Hacks"
                  author="Dr. Sarah Johnson"
                  date="May 15, 2023"
                  readTime="8 min read"
                />
                <BlogCard
                  title="How to Prepare for Board Exams: A Complete Guide"
                  description="A comprehensive guide to help students prepare effectively for their board examinations with a structured approach."
                  category="Exam Tips"
                  author="Prof. Michael Chen"
                  date="April 22, 2023"
                  readTime="12 min read"
                />
                <BlogCard
                  title="The Role of Parents in a Student's Academic Success"
                  description="Learn how parents can create a supportive environment at home to foster academic excellence and personal growth."
                  category="Parent Resources"
                  author="Emily Rodriguez"
                  date="June 5, 2023"
                  readTime="10 min read"
                />
                <BlogCard
                  title="Mastering Mathematics: Tips for Problem Solving"
                  description="Strategies and techniques to improve mathematical problem-solving skills for students of all grade levels."
                  category="Study Hacks"
                  author="Prof. David Wilson"
                  date="March 18, 2023"
                  readTime="9 min read"
                />
                <BlogCard
                  title="Balancing Academics and Extracurricular Activities"
                  description="How to maintain a healthy balance between studies and other activities for holistic development."
                  category="Parent Resources"
                  author="Jennifer Lee"
                  date="July 10, 2023"
                  readTime="7 min read"
                />
                <BlogCard
                  title="Last-Minute Revision Strategies That Actually Work"
                  description="Effective techniques for quick revision before exams without feeling overwhelmed or stressed."
                  category="Exam Tips"
                  author="Robert Taylor"
                  date="February 28, 2023"
                  readTime="6 min read"
                />
              </div>
            </TabsContent>

            <TabsContent value="exam-tips" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard
                  title="How to Prepare for Board Exams: A Complete Guide"
                  description="A comprehensive guide to help students prepare effectively for their board examinations with a structured approach."
                  category="Exam Tips"
                  author="Prof. Michael Chen"
                  date="April 22, 2023"
                  readTime="12 min read"
                />
                <BlogCard
                  title="Last-Minute Revision Strategies That Actually Work"
                  description="Effective techniques for quick revision before exams without feeling overwhelmed or stressed."
                  category="Exam Tips"
                  author="Robert Taylor"
                  date="February 28, 2023"
                  readTime="6 min read"
                />
                <BlogCard
                  title="Managing Exam Anxiety: Practical Tips for Students"
                  description="Learn how to overcome test anxiety and perform at your best during examinations."
                  category="Exam Tips"
                  author="Dr. Sarah Johnson"
                  date="January 15, 2023"
                  readTime="8 min read"
                />
              </div>
            </TabsContent>

            <TabsContent value="study-hacks" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard
                  title="10 Effective Study Techniques for Better Retention"
                  description="Discover scientifically-proven study methods that can help you retain information longer and perform better in exams."
                  category="Study Hacks"
                  author="Dr. Sarah Johnson"
                  date="May 15, 2023"
                  readTime="8 min read"
                />
                <BlogCard
                  title="Mastering Mathematics: Tips for Problem Solving"
                  description="Strategies and techniques to improve mathematical problem-solving skills for students of all grade levels."
                  category="Study Hacks"
                  author="Prof. David Wilson"
                  date="March 18, 2023"
                  readTime="9 min read"
                />
                <BlogCard
                  title="The Power of Active Learning: Beyond Reading and Memorizing"
                  description="How active learning strategies can transform your study sessions and improve understanding."
                  category="Study Hacks"
                  author="Emily Rodriguez"
                  date="April 5, 2023"
                  readTime="7 min read"
                />
              </div>
            </TabsContent>

            <TabsContent value="parent-resources" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard
                  title="The Role of Parents in a Student's Academic Success"
                  description="Learn how parents can create a supportive environment at home to foster academic excellence and personal growth."
                  category="Parent Resources"
                  author="Emily Rodriguez"
                  date="June 5, 2023"
                  readTime="10 min read"
                />
                <BlogCard
                  title="Balancing Academics and Extracurricular Activities"
                  description="How to maintain a healthy balance between studies and other activities for holistic development."
                  category="Parent Resources"
                  author="Jennifer Lee"
                  date="July 10, 2023"
                  readTime="7 min read"
                />
                <BlogCard
                  title="Understanding Your Child's Learning Style"
                  description="A guide to identifying and supporting different learning styles to help your child succeed academically."
                  category="Parent Resources"
                  author="Robert Taylor"
                  date="May 20, 2023"
                  readTime="9 min read"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Study Planners & Schedules</CardTitle>
                  <CardDescription>Downloadable templates to organize your study time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Weekly Study Planner</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Exam Countdown Calendar</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Subject-wise Revision Tracker</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Download Resources
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Practice Papers</CardTitle>
                  <CardDescription>Sample question papers for all subjects and grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Mathematics Practice Sets</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Science Mock Tests</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>English Language Exercises</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Access Practice Papers
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>Instructional videos explaining complex concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Physics Concept Explanations</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Chemistry Experiment Demonstrations</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Mathematics Problem-Solving Techniques</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Tutorials
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function BlogCard({ title, description, category, author, date, readTime }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative">
        <Image src="/placeholder.svg?height=200&width=400" alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-1 text-sm text-blue-600 mb-1">
          <Tag className="h-3.5 w-3.5" />
          <span>{category}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 line-clamp-3">{description}</p>
        <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="px-0 text-blue-600">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
