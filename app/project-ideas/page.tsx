"use client"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lightbulb, Search, Filter, Star, Clock, Users, BookOpen } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"

export default function ProjectIdeasPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
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

  const projectIdeas = [
    {
      id: 1,
      title: "Smart Home Automation System",
      description: "IoT-based system to control home appliances remotely with voice commands and mobile app",
      category: "IoT",
      difficulty: "Advanced",
      duration: "3-4 months",
      technologies: ["Arduino", "Raspberry Pi", "React Native", "Firebase"],
      rating: 4.8,
      likes: 245,
    },
    {
      id: 2,
      title: "AI-Powered Chatbot for Customer Service",
      description: "Intelligent chatbot using NLP to handle customer queries and provide automated support",
      category: "AI/ML",
      difficulty: "Intermediate",
      duration: "2-3 months",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      rating: 4.7,
      likes: 189,
    },
    {
      id: 3,
      title: "Blockchain-based Voting System",
      description: "Secure and transparent voting system using blockchain technology",
      category: "Blockchain",
      difficulty: "Advanced",
      duration: "4-5 months",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      rating: 4.9,
      likes: 312,
    },
    {
      id: 4,
      title: "Social Media Analytics Dashboard",
      description: "Dashboard to analyze social media trends and engagement metrics",
      category: "Web Development",
      difficulty: "Intermediate",
      duration: "2 months",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      rating: 4.6,
      likes: 156,
    },
    {
      id: 5,
      title: "Augmented Reality Shopping App",
      description: "AR app that allows users to visualize products in their space before purchasing",
      category: "Mobile Development",
      difficulty: "Advanced",
      duration: "3-4 months",
      technologies: ["Unity", "ARCore", "C#", "Firebase"],
      rating: 4.8,
      likes: 278,
    },
    {
      id: 6,
      title: "Personal Finance Tracker",
      description: "Mobile app to track expenses, set budgets, and provide financial insights",
      category: "Mobile Development",
      difficulty: "Beginner",
      duration: "1-2 months",
      technologies: ["React Native", "SQLite", "Chart.js"],
      rating: 4.4,
      likes: 134,
    },
    {
      id: 7,
      title: "Smart Traffic Management System",
      description: "AI-based system to optimize traffic flow and reduce congestion",
      category: "AI/ML",
      difficulty: "Advanced",
      duration: "4-6 months",
      technologies: ["Python", "OpenCV", "TensorFlow", "IoT Sensors"],
      rating: 4.9,
      likes: 356,
    },
    {
      id: 8,
      title: "Online Code Compiler",
      description: "Web-based IDE supporting multiple programming languages with real-time collaboration",
      category: "Web Development",
      difficulty: "Intermediate",
      duration: "2-3 months",
      technologies: ["React", "Node.js", "Docker", "Socket.io"],
      rating: 4.5,
      likes: 198,
    },
  ]

  const filteredIdeas = projectIdeas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || idea.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || idea.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-blue-100 text-blue-800"
      case "Mobile Development":
        return "bg-purple-100 text-purple-800"
      case "AI/ML":
        return "bg-orange-100 text-orange-800"
      case "IoT":
        return "bg-teal-100 text-teal-800"
      case "Blockchain":
        return "bg-indigo-100 text-indigo-800"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Ideas</h1>
            <p className="text-gray-600">Innovative project ideas for your next development venture</p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filter Project Ideas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search ideas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="AI/ML">AI/ML</SelectItem>
                    <SelectItem value="IoT">IoT</SelectItem>
                    <SelectItem value="Blockchain">Blockchain</SelectItem>
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
                  <Badge variant="secondary">{filteredIdeas.length} Ideas Found</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Ideas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea) => (
              <Card key={idea.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Lightbulb className="h-8 w-8 text-orange-500" />
                    <div className="flex space-x-2">
                      <Badge className={getCategoryColor(idea.category)}>{idea.category}</Badge>
                      <Badge className={getDifficultyColor(idea.difficulty)}>{idea.difficulty}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{idea.title}</CardTitle>
                  <CardDescription>{idea.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {idea.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{idea.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{idea.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{idea.likes} likes</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1" size="sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredIdeas.length === 0 && (
            <div className="text-center py-12">
              <Lightbulb className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No project ideas found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
