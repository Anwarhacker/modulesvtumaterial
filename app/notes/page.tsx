"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Download, Search, Filter, Star, Eye } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("all")
  const [selectedBranch, setSelectedBranch] = useState("all")

  const notes = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      subject: "DSA",
      semester: "3rd",
      branch: "CSE",
      description: "Complete notes covering arrays, linked lists, trees, graphs, and algorithms",
      downloads: 1250,
      rating: 4.8,
      size: "2.5 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Database Management Systems",
      subject: "DBMS",
      semester: "4th",
      branch: "CSE",
      description: "Comprehensive DBMS notes with SQL queries and normalization",
      downloads: 980,
      rating: 4.7,
      size: "3.1 MB",
      type: "PDF",
    },
    {
      id: 3,
      title: "Computer Networks",
      subject: "CN",
      semester: "5th",
      branch: "CSE",
      description: "Network protocols, OSI model, TCP/IP, and network security",
      downloads: 756,
      rating: 4.6,
      size: "2.8 MB",
      type: "PDF",
    },
    {
      id: 4,
      title: "Operating Systems",
      subject: "OS",
      semester: "4th",
      branch: "CSE",
      description: "Process management, memory management, and file systems",
      downloads: 1100,
      rating: 4.9,
      size: "3.5 MB",
      type: "PDF",
    },
    {
      id: 5,
      title: "Machine Learning",
      subject: "ML",
      semester: "7th",
      branch: "CSE",
      description: "ML algorithms, neural networks, and practical implementations",
      downloads: 650,
      rating: 4.8,
      size: "4.2 MB",
      type: "PDF",
    },
    {
      id: 6,
      title: "Engineering Mathematics",
      subject: "EM",
      semester: "1st",
      branch: "All",
      description: "Calculus, linear algebra, and differential equations",
      downloads: 2100,
      rating: 4.5,
      size: "5.1 MB",
      type: "PDF",
    },
  ]

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSemester = selectedSemester === "all" || note.semester === selectedSemester
    const matchesBranch = selectedBranch === "all" || note.branch === selectedBranch || note.branch === "All"

    return matchesSearch && matchesSemester && matchesBranch
  })

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Notes</h1>
            <p className="text-gray-600">Comprehensive notes for all VTU engineering subjects</p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filter Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

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

                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{filteredNotes.length} Notes Found</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                    <Badge variant="outline">{note.semester}</Badge>
                  </div>
                  <CardTitle className="text-lg">{note.title}</CardTitle>
                  <CardDescription>{note.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Branch: {note.branch}</span>
                      <span>Size: {note.size}</span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{note.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{note.rating}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
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

          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
