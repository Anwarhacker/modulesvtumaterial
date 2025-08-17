"use client"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Search, Filter, Calendar, Eye } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"

export default function SyllabusPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBranch, setSelectedBranch] = useState("all")
  const [selectedSemester, setSelectedSemester] = useState("all")

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

  const syllabusData = [
    {
      id: 1,
      title: "Computer Science Engineering - 3rd Semester",
      branch: "CSE",
      semester: "3rd",
      subjects: ["Data Structures", "Digital Logic Design", "Computer Organization", "Discrete Mathematics"],
      lastUpdated: "2024-01-15",
      downloads: 2100,
      size: "1.2 MB",
    },
    {
      id: 2,
      title: "Computer Science Engineering - 4th Semester",
      branch: "CSE",
      semester: "4th",
      subjects: ["Database Management", "Operating Systems", "Software Engineering", "Theory of Computation"],
      lastUpdated: "2024-01-10",
      downloads: 1850,
      size: "1.5 MB",
    },
    {
      id: 3,
      title: "Electronics & Communication - 3rd Semester",
      branch: "ECE",
      semester: "3rd",
      subjects: ["Electronic Circuits", "Signals & Systems", "Network Theory", "Digital Electronics"],
      lastUpdated: "2024-01-12",
      downloads: 1200,
      size: "1.3 MB",
    },
    {
      id: 4,
      title: "Mechanical Engineering - 3rd Semester",
      branch: "ME",
      semester: "3rd",
      subjects: ["Thermodynamics", "Fluid Mechanics", "Manufacturing Processes", "Material Science"],
      lastUpdated: "2024-01-08",
      downloads: 980,
      size: "1.4 MB",
    },
    {
      id: 5,
      title: "Computer Science Engineering - 5th Semester",
      branch: "CSE",
      semester: "5th",
      subjects: ["Computer Networks", "Compiler Design", "Machine Learning", "Web Technologies"],
      lastUpdated: "2024-01-20",
      downloads: 1650,
      size: "1.6 MB",
    },
    {
      id: 6,
      title: "Civil Engineering - 3rd Semester",
      branch: "CE",
      semester: "3rd",
      subjects: ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics", "Building Materials"],
      lastUpdated: "2024-01-05",
      downloads: 750,
      size: "1.1 MB",
    },
  ]

  const filteredSyllabus = syllabusData.filter((syllabus) => {
    const matchesSearch =
      syllabus.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      syllabus.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesBranch = selectedBranch === "all" || syllabus.branch === selectedBranch
    const matchesSemester = selectedSemester === "all" || syllabus.semester === selectedSemester

    return matchesSearch && matchesBranch && matchesSemester
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Syllabus</h1>
            <p className="text-gray-600">Updated VTU syllabus for all branches and semesters</p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filter Syllabus</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search syllabus..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="CSE">Computer Science</SelectItem>
                    <SelectItem value="ECE">Electronics & Communication</SelectItem>
                    <SelectItem value="ME">Mechanical</SelectItem>
                    <SelectItem value="CE">Civil</SelectItem>
                    <SelectItem value="EEE">Electrical</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    <SelectItem value="1st">1st Semester</SelectItem>
                    <SelectItem value="2nd">2nd Semester</SelectItem>
                    <SelectItem value="3rd">3rd Semester</SelectItem>
                    <SelectItem value="4th">4th Semester</SelectItem>
                    <SelectItem value="5th">5th Semester</SelectItem>
                    <SelectItem value="6th">6th Semester</SelectItem>
                    <SelectItem value="7th">7th Semester</SelectItem>
                    <SelectItem value="8th">8th Semester</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{filteredSyllabus.length} Syllabus Found</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Syllabus Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSyllabus.map((syllabus) => (
              <Card key={syllabus.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="h-8 w-8 text-green-500" />
                    <Badge variant="outline">{syllabus.branch}</Badge>
                  </div>
                  <CardTitle className="text-lg">{syllabus.title}</CardTitle>
                  <CardDescription>Updated syllabus for {syllabus.semester} semester</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Subjects Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {syllabus.subjects.map((subject, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Updated: {formatDate(syllabus.lastUpdated)}</span>
                      </div>
                      <span>Size: {syllabus.size}</span>
                    </div>

                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Download className="h-4 w-4" />
                      <span>{syllabus.downloads} downloads</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSyllabus.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No syllabus found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
