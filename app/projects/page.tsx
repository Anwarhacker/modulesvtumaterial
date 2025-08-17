"use client"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Download, Search, Filter, Star, Github, ExternalLink } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"

export default function ProjectsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTechnology, setSelectedTechnology] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform with React, Node.js, and MongoDB",
      technology: "React",
      difficulty: "Advanced",
      downloads: 850,
      rating: 4.8,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      type: "Full Stack",
    },
    {
      id: 2,
      title: "Student Management System",
      description: "Complete student management system with attendance and grade tracking",
      technology: "Java",
      difficulty: "Intermediate",
      downloads: 1200,
      rating: 4.7,
      tags: ["Java", "MySQL", "Swing", "JDBC"],
      type: "Desktop App",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Mobile weather application with location-based forecasts",
      technology: "React Native",
      difficulty: "Beginner",
      downloads: 650,
      rating: 4.5,
      tags: ["React Native", "API", "Mobile"],
      type: "Mobile App",
    },
    {
      id: 4,
      title: "Library Management System",
      description: "Digital library system with book tracking and user management",
      technology: "Python",
      difficulty: "Intermediate",
      downloads: 920,
      rating: 4.6,
      tags: ["Python", "Django", "SQLite", "Bootstrap"],
      type: "Web App",
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with Socket.io and React",
      technology: "React",
      difficulty: "Advanced",
      downloads: 750,
      rating: 4.9,
      tags: ["React", "Socket.io", "Node.js", "Real-time"],
      type: "Web App",
    }
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTechnology = selectedTechnology === "all" || project.technology === selectedTechnology
    const matchesDifficulty = selectedDifficulty === "all" || project.difficulty === selectedDifficulty

    return matchesSearch && matchesTechnology && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
            <p className="text-gray-600">Complete projects with source code and documentation</p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filter Projects</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Technology" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Technologies</SelectItem>
                    <SelectItem value="React">React</SelectItem>
                    <SelectItem value="Java">Java</SelectItem>
                    <SelectItem value="Python">Python</SelectItem>
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                    <SelectItem value="React Native">React Native</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{filteredProjects.length} Projects Found</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Users className="h-8 w-8 text-purple-500" />
                    <Badge className={getDifficultyColor(project.difficulty)}>{project.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Type: {project.type}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{project.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Download className="h-4 w-4" />
                      <span>{project.downloads} downloads</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
