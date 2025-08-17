"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProtectedRoute } from "@/components/protected-route"
import { Computer, Cpu, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Computer Science Engineering",
      slug: "computer-science",
      description: "Software development, algorithms, data structures, and modern computing technologies",
      icon: Computer,
      color: "bg-blue-500",
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      slug: "artificial-intelligence",
      description: "AI algorithms, machine learning, deep learning, and intelligent systems",
      icon: Cpu,
      color: "bg-purple-500",
    },
    {
      name: "Electronics & Communication",
      slug: "electronics-communication",
      description: "Digital electronics, communication systems, and embedded technologies",
      icon: Zap,
      color: "bg-yellow-500",
    },
  ]

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Engineering Departments</h1>
            <p className="text-gray-600">Choose your department to access specialized study materials and resources</p>
          </div>

          {/* Departments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Link key={index} href={`/dept/${dept.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-3">
                      <div className={`p-3 rounded-lg ${dept.color}`}>
                        <dept.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm leading-relaxed">{dept.description}</CardDescription>
                    <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors">
                      View Years
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
