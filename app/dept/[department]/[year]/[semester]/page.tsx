"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProtectedRoute } from "@/components/protected-route"
import { BookOpen, FileText, Calculator, Cpu, Zap, Wrench, ArrowLeft, ArrowRight, Download, Eye } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function SemesterSubjectsPage() {
  const params = useParams()
  const department = params.department as string
  const year = params.year as string
  const semester = params.semester as string

  const getDepartmentName = (slug: string) => {
    const names: { [key: string]: string } = {
      "computer-science": "Computer Science Engineering",
      "artificial-intelligence": "Artificial Intelligence & Machine Learning",
      "electronics-communication": "Electronics & Communication",
      mechanical: "Mechanical Engineering",
      civil: "Civil Engineering",
      aeronautical: "Aeronautical Engineering",
      automobile: "Automobile Engineering",
      chemical: "Chemical Engineering",
    }
    return names[slug] || "Engineering Department"
  }

  const getYearName = (slug: string) => {
    const names: { [key: string]: string } = {
      "1st-year": "1st Year",
      "2nd-year": "2nd Year",
      "3rd-year": "3rd Year",
      "4th-year": "4th Year",
    }
    return names[slug] || "Academic Year"
  }

  const getSemesterName = (slug: string) => {
    const names: { [key: string]: string } = {
      "1st-sem": "1st Semester",
      "2nd-sem": "2nd Semester",
    }
    return names[slug] || "Semester"
  }

  // Sample subjects - would be dynamic based on department, year, and semester
  const subjects = [
    {
      name: "Engineering Mathematics",
      code: "18MAT11",
      credits: 4,
      description: "Differential calculus, integral calculus, and linear algebra fundamentals",
      icon: Calculator,
      color: "bg-blue-500",
    },
    {
      name: "Programming in C",
      code: "18PCD13",
      credits: 4,
      description: "Introduction to programming concepts using C language",
      icon: Cpu,
      color: "bg-green-500",
    },
    {
      name: "Basic Electronics",
      code: "18ELN14",
      credits: 3,
      description: "Fundamentals of electronic devices and circuits",
      icon: Zap,
      color: "bg-yellow-500",
    },
    {
      name: "Engineering Graphics",
      code: "18EGR15",
      credits: 2,
      description: "Technical drawing and computer-aided design basics",
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      name: "Workshop Practice",
      code: "18WOR16",
      credits: 2,
      description: "Hands-on experience with various engineering tools and processes",
      icon: Wrench,
      color: "bg-red-500",
    },
    {
      name: "Environmental Studies",
      code: "18CIV17",
      credits: 1,
      description: "Environmental awareness and sustainable development",
      icon: BookOpen,
      color: "bg-teal-500",
    },
  ]

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dept/${department}/${year}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Semesters
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getDepartmentName(department)} - {getYearName(year)} - {getSemesterName(semester)}
            </h1>
            <p className="text-gray-600">Access study materials, notes, and resources for your subjects</p>
          </div>

          {/* Subjects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Link key={index} href={`/dept/${department}/${year}/${semester}/${subject.code.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg ${subject.color}`}>
                        <subject.icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{subject.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {subject.code} • {subject.credits} Credits
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">{subject.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <Download className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Download All Notes</h3>
                <p className="text-sm text-blue-700 mb-4">Get complete study materials for all subjects</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                >
                  Download ZIP
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibster text-green-900 mb-2">View Syllabus</h3>
                <p className="text-sm text-green-700 mb-4">Check complete curriculum and exam pattern</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
                >
                  View Syllabus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
