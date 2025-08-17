"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProtectedRoute } from "@/components/protected-route"
import { GraduationCap, BookOpen, Users, Clock, ArrowLeft, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function DepartmentYearsPage() {
  const params = useParams()
  const department = params.department as string

  const getDepartmentData = (slug: string) => {
    const departmentData: { [key: string]: any } = {
      "computer-science": {
        name: "Computer Science Engineering",
        description: "Master programming languages, software engineering, and cutting-edge technologies",
        years: [
          {
            year: "1st Year",
            semester: "Semesters 1 & 2",
            description: "Programming fundamentals, Mathematics, Physics, and Introduction to Computing",
            color: "bg-green-500",
            icon: GraduationCap,
            slug: "1st-year",
          },
          {
            year: "2nd Year",
            semester: "Semesters 3 & 4",
            description: "Data Structures, Algorithms, Object-Oriented Programming, and Database Systems",
            color: "bg-blue-500",
            icon: BookOpen,
            slug: "2nd-year",
          },
          {
            year: "3rd Year",
            semester: "Semesters 5 & 6",
            description: "Software Engineering, Web Development, Computer Networks, and Operating Systems",
            color: "bg-purple-500",
            icon: Users,
            slug: "3rd-year",
          },
          {
            year: "4th Year",
            semester: "Semesters 7 & 8",
            description: "Final Projects, Advanced Topics, Cloud Computing, and Industry Internships",
            color: "bg-orange-500",
            icon: Clock,
            slug: "4th-year",
          },
        ],
      },
      "artificial-intelligence": {
        name: "Artificial Intelligence & Machine Learning",
        description: "Explore AI algorithms, neural networks, and intelligent system development",
        years: [
          {
            year: "1st Year",
            semester: "Semesters 1 & 2",
            description: "Mathematics for AI, Statistics, Programming, and Introduction to AI Concepts",
            color: "bg-green-500",
            icon: GraduationCap,
            slug: "1st-year",
          },
          {
            year: "2nd Year",
            semester: "Semesters 3 & 4",
            description: "Machine Learning Basics, Python for AI, Data Analysis, and Linear Algebra",
            color: "bg-blue-500",
            icon: BookOpen,
            slug: "2nd-year",
          },
          {
            year: "3rd Year",
            semester: "Semesters 5 & 6",
            description: "Deep Learning, Neural Networks, Computer Vision, and Natural Language Processing",
            color: "bg-purple-500",
            icon: Users,
            slug: "3rd-year",
          },
          {
            year: "4th Year",
            semester: "Semesters 7 & 8",
            description: "AI Research Projects, Advanced ML, Robotics, and Industry Applications",
            color: "bg-orange-500",
            icon: Clock,
            slug: "4th-year",
          },
        ],
      },
      "electronics-communication": {
        name: "Electronics & Communication Engineering",
        description: "Design electronic systems, communication networks, and embedded technologies",
        years: [
          {
            year: "1st Year",
            semester: "Semesters 1 & 2",
            description: "Basic Electronics, Circuit Theory, Mathematics, and Engineering Drawing",
            color: "bg-green-500",
            icon: GraduationCap,
            slug: "1st-year",
          },
          {
            year: "2nd Year",
            semester: "Semesters 3 & 4",
            description: "Analog Electronics, Digital Electronics, Signals & Systems, and Electromagnetics",
            color: "bg-blue-500",
            icon: BookOpen,
            slug: "2nd-year",
          },
          {
            year: "3rd Year",
            semester: "Semesters 5 & 6",
            description: "Communication Systems, Microprocessors, VLSI Design, and Control Systems",
            color: "bg-purple-500",
            icon: Users,
            slug: "3rd-year",
          },
          {
            year: "4th Year",
            semester: "Semesters 7 & 8",
            description: "Advanced Communication, Embedded Systems, IoT Projects, and Industry Training",
            color: "bg-orange-500",
            icon: Clock,
            slug: "4th-year",
          },
        ],
      },
    }
    return departmentData[slug] || { name: "Engineering Department", description: "Engineering studies", years: [] }
  }

  const deptData = getDepartmentData(department)

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dept">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Departments
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{deptData.name}</h1>
            <p className="text-gray-600">{deptData.description}</p>
          </div>

          {/* Years Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {deptData.years.map((yearData: any, index: number) => (
              <Link key={index} href={`/dept/${department}/${yearData.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg ${yearData.color}`}>
                        <yearData.icon className="h-8 w-8 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-xl">{yearData.year}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">{yearData.semester}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{yearData.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900">Study Materials</h3>
                <p className="text-sm text-blue-700">Comprehensive notes and resources</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 text-center">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-900">Syllabus</h3>
                <p className="text-sm text-green-700">Updated curriculum and guidelines</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-purple-900">Projects</h3>
                <p className="text-sm text-purple-700">Year-specific project ideas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
