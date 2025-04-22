"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, CreditCard, LockKeyhole } from "lucide-react"

export default function EnrollPage() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    subjects: [],
    address: "",
    parentName: "",
    paymentMethod: "card",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (subject) => {
    setFormData((prev) => {
      const subjects = prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject]
      return { ...prev, subjects }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (step === 1) {
      // Validate first step
      if (!formData.name || !formData.email || !formData.phone || !formData.grade || formData.subjects.length === 0) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        return
      }
      setStep(2)
      return
    }

    // Submit the form
    console.log("Form submitted:", formData)

    // Show success toast
    toast({
      title: "Enrollment Successful!",
      description: "Thank you for enrolling. We'll contact you shortly.",
    })

    // Reset form and go back to step 1
    setFormData({
      name: "",
      email: "",
      phone: "",
      grade: "",
      subjects: [],
      address: "",
      parentName: "",
      paymentMethod: "card",
    })
    setStep(1)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Enroll Now</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our coaching institute and start your journey towards academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Process</CardTitle>
                  <CardDescription>Complete the form to enroll in our coaching programs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-blue-600 text-white" : "border border-gray-200"}`}
                      >
                        1
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Student Information</p>
                        <p className="text-sm text-gray-500">Basic details and course selection</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-blue-600 text-white" : "border border-gray-200"}`}
                      >
                        2
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Payment & Confirmation</p>
                        <p className="text-sm text-gray-500">Complete payment and finalize enrollment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Enroll With Us?</CardTitle>
                  <CardDescription>Benefits of joining our coaching institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Expert faculty with proven track record</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Comprehensive study materials and resources</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Regular assessments and progress tracking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Small batch sizes for personalized attention</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>State-of-the-art facilities and digital learning tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Flexible batch timings to suit your schedule</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>{step === 1 ? "Student Information" : "Payment & Confirmation"}</CardTitle>
                  <CardDescription>
                    {step === 1
                      ? "Please provide your details and select your courses"
                      : "Complete payment to finalize your enrollment"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {step === 1 ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="grade">Grade</Label>
                          <Select
                            name="grade"
                            value={formData.grade}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, grade: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="4">Grade 4</SelectItem>
                              <SelectItem value="5">Grade 5</SelectItem>
                              <SelectItem value="6">Grade 6</SelectItem>
                              <SelectItem value="7">Grade 7</SelectItem>
                              <SelectItem value="8">Grade 8</SelectItem>
                              <SelectItem value="9">Grade 9</SelectItem>
                              <SelectItem value="10">Grade 10</SelectItem>
                              <SelectItem value="11">Grade 11</SelectItem>
                              <SelectItem value="12">Grade 12</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Subjects</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="math"
                                checked={formData.subjects.includes("Mathematics")}
                                onCheckedChange={() => handleSubjectChange("Mathematics")}
                              />
                              <label htmlFor="math" className="text-sm">
                                Mathematics
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="physics"
                                checked={formData.subjects.includes("Physics")}
                                onCheckedChange={() => handleSubjectChange("Physics")}
                              />
                              <label htmlFor="physics" className="text-sm">
                                Physics
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="chemistry"
                                checked={formData.subjects.includes("Chemistry")}
                                onCheckedChange={() => handleSubjectChange("Chemistry")}
                              />
                              <label htmlFor="chemistry" className="text-sm">
                                Chemistry
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="biology"
                                checked={formData.subjects.includes("Biology")}
                                onCheckedChange={() => handleSubjectChange("Biology")}
                              />
                              <label htmlFor="biology" className="text-sm">
                                Biology
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="english"
                                checked={formData.subjects.includes("English")}
                                onCheckedChange={() => handleSubjectChange("English")}
                              />
                              <label htmlFor="english" className="text-sm">
                                English
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="social"
                                checked={formData.subjects.includes("Social Studies")}
                                onCheckedChange={() => handleSubjectChange("Social Studies")}
                              />
                              <label htmlFor="social" className="text-sm">
                                Social Studies
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parentName">Parent/Guardian Name</Label>
                          <Input
                            id="parentName"
                            name="parentName"
                            placeholder="Parent/Guardian Name"
                            value={formData.parentName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="Your address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4 space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-medium">Enrollment Summary</h3>
                            <div className="text-sm space-y-1">
                              <p>
                                <span className="font-medium">Name:</span> {formData.name}
                              </p>
                              <p>
                                <span className="font-medium">Grade:</span> {formData.grade}
                              </p>
                              <p>
                                <span className="font-medium">Subjects:</span> {formData.subjects.join(", ")}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium">Fee Details</h3>
                            <div className="text-sm space-y-1">
                              <div className="flex justify-between">
                                <span>Tuition Fee</span>
                                <span>₹20,000</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Study Materials</span>
                                <span>₹5,000</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Registration Fee</span>
                                <span>₹1,000</span>
                              </div>
                              <div className="flex justify-between font-medium pt-2">
                                <span>Total Amount</span>
                                <span>₹26,000</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Payment Method</Label>
                          <RadioGroup
                            defaultValue="card"
                            value={formData.paymentMethod}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="card" id="card" />
                              <Label htmlFor="card" className="flex items-center">
                                <CreditCard className="h-4 w-4 mr-2" />
                                Credit/Debit Card
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="netbanking" id="netbanking" />
                              <Label htmlFor="netbanking">Net Banking</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="upi" id="upi" />
                              <Label htmlFor="upi">UPI</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {formData.paymentMethod === "card" && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="nameOnCard">Name on Card</Label>
                              <Input id="nameOnCard" placeholder="John Doe" />
                            </div>
                          </div>
                        )}

                        <div className="flex items-center space-x-2 text-sm">
                          <LockKeyhole className="h-4 w-4 text-green-500" />
                          <span className="text-gray-500">Your payment information is secure and encrypted</span>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between mt-6">
                      {step === 2 && (
                        <Button type="button" variant="outline" onClick={() => setStep(1)}>
                          Back
                        </Button>
                      )}
                      <Button type="submit" className={`${step === 1 ? "ml-auto" : ""} bg-blue-600 hover:bg-blue-700`}>
                        {step === 1 ? "Continue to Payment" : "Complete Enrollment"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
