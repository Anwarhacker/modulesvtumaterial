"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Search,
  BookOpen,
  Users,
  FileText,
  Lightbulb,
} from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I download study notes?",
      answer:
        "Navigate to the Notes section, use filters to find your subject, and click the Download button on any note card.",
      category: "Notes",
    },
    {
      question: "Are the syllabus copies updated?",
      answer: "Yes, we regularly update our syllabus copies to match the latest VTU curriculum changes.",
      category: "Syllabus",
    },
    {
      question: "Can I contribute my own projects?",
      answer: "Currently, we curate all content. However, you can suggest projects by contacting our support team.",
      category: "Projects",
    },
    {
      question: "How do I access result links?",
      answer: "Result links are available on your Student Corner dashboard and in the navigation menu.",
      category: "Results",
    },
    {
      question: "Is my Google account information secure?",
      answer: "Yes, we only access basic profile information and use Firebase authentication for security.",
      category: "Account",
    },
  ]

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span>Quick Help</span>
                  </CardTitle>
                  <CardDescription>Find answers to common questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-medium">Study Notes</h3>
                        <p className="text-sm text-gray-600">How to find and download notes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-medium">Syllabus</h3>
                        <p className="text-sm text-gray-600">Accessing updated curriculum</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                      <Users className="h-8 w-8 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Projects</h3>
                        <p className="text-sm text-gray-600">Finding project resources</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-orange-600" />
                      <div>
                        <h3 className="font-medium">Project Ideas</h3>
                        <p className="text-sm text-gray-600">Exploring innovative concepts</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5" />
                    <span>Frequently Asked Questions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-gray-900">{faq.question}</h3>
                          <Badge variant="secondary" className="ml-2">
                            {faq.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Still Need Help?</span>
                  </CardTitle>
                  <CardDescription>Send us a message and we'll get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
                      <Input placeholder="What can we help you with?" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                      <Textarea placeholder="Describe your issue or question in detail..." rows={4} />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">support@vtumaterial.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Support Hours</p>
                      <p className="text-sm text-gray-600">Mon-Fri: 9AM-6PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start bg-transparent">
                    Getting Started Guide
                  </Button>
                  <Button variant="ghost" className="w-full justify-start bg-transparent">
                    Account Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start bg-transparent">
                    Privacy Policy
                  </Button>
                  <Button variant="ghost" className="w-full justify-start bg-transparent">
                    Terms of Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
