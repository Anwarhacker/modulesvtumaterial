"use client"

import { useParams } from "next/navigation"
import { ProtectedRoute } from "@/components/protected-route"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, FileText, BookOpen, Star, Book, Clock, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SubjectPage() {
  const params = useParams()
  const { department, year, semester, subject } = params

  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  })

  const toggleModule = (id: number) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const subjectData = {
    code: (subject as string).toUpperCase(),
    name: getSubjectName(subject as string),
    department: (department as string).replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    year: (year as string).replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    semester: (semester as string).replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    credits: 4,
    cieMarks: 50,
    seeMarks: 50,
    totalMarks: 100,
    examHours: 3,
    totalHours: "50H",
    teachingHours: "[L:T:P:S] 4:0:0:0",
    rating: 4.5,
    enrolled: 1250,
    lastUpdated: "2 days ago",
    modules: [
      {
        id: 1,
        title: "MODULE-1",
        topics: [
          {
            title: "Introduction",
            content:
              "Need for Machine Learning, Machine Learning Explained, Machine Learning in Relation to other Fields, Types of Machine Learning, Challenges of Machine Learning, Machine Learning Process, Machine Learning Applications.",
          },
          {
            title: "Understanding Data – 1",
            content:
              "Introduction, Big Data Analysis Framework, Descriptive Statistics, Univariate Data Analysis and Visualization.",
          },
        ],
      },
      {
        id: 2,
        title: "MODULE-2",
        topics: [
          {
            title: "Understanding Data – 2",
            content:
              "Multivariate Data Analysis, Data Preprocessing, Feature Selection and Engineering, Handling Missing Data, Data Transformation Techniques.",
          },
          {
            title: "Supervised Learning Fundamentals",
            content:
              "Classification vs Regression, Training and Testing, Model Evaluation Metrics, Cross-validation, Overfitting and Underfitting.",
          },
        ],
      },
      {
        id: 3,
        title: "MODULE-3",
        topics: [
          {
            title: "Classification Algorithms",
            content:
              "Decision Trees, Random Forest, Support Vector Machines, Naive Bayes, k-Nearest Neighbors, Logistic Regression.",
          },
          {
            title: "Regression Algorithms",
            content:
              "Linear Regression, Polynomial Regression, Ridge and Lasso Regression, Evaluation Metrics for Regression.",
          },
        ],
      },
      {
        id: 4,
        title: "MODULE-4",
        topics: [
          {
            title: "Unsupervised Learning",
            content:
              "Clustering Algorithms, K-means, Hierarchical Clustering, DBSCAN, Principal Component Analysis, Association Rule Mining.",
          },
          {
            title: "Neural Networks",
            content:
              "Perceptron, Multi-layer Perceptron, Backpropagation Algorithm, Activation Functions, Deep Learning Introduction.",
          },
        ],
      },
      {
        id: 5,
        title: "MODULE-5",
        topics: [
          {
            title: "Advanced Topics",
            content:
              "Ensemble Methods, Boosting and Bagging, Model Selection and Hyperparameter Tuning, Feature Importance and Interpretability.",
          },
          {
            title: "Applications and Case Studies",
            content:
              "Real-world Applications, Industry Use Cases, Ethical Considerations in ML, Future Trends and Challenges.",
          },
        ],
      },
    ],
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8 flex-wrap">
            <Link href="/student-corner" className="hover:text-blue-600 transition">
              Student Corner
            </Link>
            <span>→</span>
            <Link href="/dept" className="hover:text-blue-600 transition">
              Departments
            </Link>
            <span>→</span>
            <Link href={`/dept/${department}`} className="hover:text-blue-600 capitalize transition">
              {department}
            </Link>
            <span>→</span>
            <Link href={`/dept/${department}/${year}`} className="hover:text-blue-600 capitalize transition">
              {year}
            </Link>
            <span>→</span>
            <Link href={`/dept/${department}/${year}/${semester}`} className="hover:text-blue-600 capitalize transition">
              {semester}
            </Link>
            <span>→</span>
            <span className="font-semibold text-gray-800">{subjectData.code}</span>
          </nav>

          {/* Back Button */}
          <Button
            variant="outline"
            asChild
            className="mb-8 bg-white hover:bg-gray-50 border-gray-300 text-gray-700 shadow-sm"
          >
            <Link href={`/dept/${department}/${year}/${semester}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Subjects
            </Link>
          </Button>

          {/* Hero Section */}
       <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-black/30 shadow-xl  p-8 md:p-10 mb-10 overflow-hidden">
  {/* Subtle background elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-70 -z-10"></div>
  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-l from-purple-100/70 to-transparent blur-3xl -z-10"></div>
  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-100/50 to-transparent blur-3xl -z-10"></div>

  {/* Content */}
  <div className="relative z-10 text-center space-y-4">
    {/* Subject Name & Code */}
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
        {subjectData.name}
      </h1>
      <p className="text-xl md:text-2xl text-purple-600 font-semibold mt-2">{subjectData.code}</p>
    </div>

    {/* Department & Semester Tag Line */}
    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
      {subjectData.department} • {subjectData.year} • {subjectData.semester}
    </p>

    {/* Stats Row - Centered, Minimal Badges */}
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
        <Book className="h-4 w-4 text-purple-600" />
        <span className="text-sm font-medium text-gray-700">{subjectData.credits} Credits</span>
      </div>
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
        <Clock className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">{subjectData.totalHours}</span>
      </div>
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
        <Users className="h-4 w-4 text-green-600" />
        <span className="text-sm font-medium text-gray-700">{subjectData.enrolled} Enrolled</span>
      </div>
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium text-gray-700">{subjectData.rating}/5</span>
      </div>
    </div>
  </div>
</div>

          {/* Module Cards */}
          <div className="space-y-6">
            {subjectData.modules.map((module) => (
              <Card key={module.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader
                  className="bg-gradient-to-r from-gray-50 to-gray-100 border-b cursor-pointer group"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="flex justify-between items-center">
                    <Badge
                      variant="secondary"
                      className="text-lg px-5 py-2 font-bold tracking-wide bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border border-purple-200"
                    >
                      {module.title}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-gray-700 hover:bg-transparent"
                    >
                      {openModules[module.id] ? '−' : '+'}
                    </Button>
                  </div>
                </CardHeader>

                {openModules[module.id] && (
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {module.topics.map((topic, index) => (
                        <div key={index} className="space-y-3">
                          <h3 className="text-xl font-bold text-gray-800 border-l-4 border-purple-500 pl-3">
                            {topic.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-base">{topic.content}</p>
                        </div>
                      ))}

                      {/* Action Buttons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 font-semibold rounded-xl transition-all duration-200 transform hover:scale-90">
                          <Download className="h-5 w-5 mr-2" />
                          Download PDF
                        </Button>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 font-semibold rounded-xl transition-all duration-200 transform hover:scale-90">
                          <Download className="h-5 w-5 mr-2" />
                          Written Notes
                        </Button>
                       
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12 text-sm text-gray-500">
            Last updated: {subjectData.lastUpdated}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

// Subject Name Mapping
function getSubjectName(code: string): string {
  const subjectMap: Record<string, string> = {
    cs101: "Programming in C",
    cs102: "Data Structures",
    cs201: "Object Oriented Programming",
    cs202: "Database Management Systems",
    cs301: "Computer Networks",
    cs302: "Operating Systems",
    cs401: "Machine Learning",
    cs402: "Software Engineering",
    ai101: "Introduction to AI",
    ai201: "Python Programming",
    ai202: "Statistics for AI",
    ai301: "Deep Learning",
    ai302: "Natural Language Processing",
    ai401: "Computer Vision",
    ec101: "Circuit Analysis",
    ec201: "Digital Electronics",
    ec301: "Microprocessors",
    ec401: "VLSI Design",
    me101: "Engineering Mechanics",
    me201: "Thermodynamics",
    me301: "Heat Transfer",
    me401: "Design of Machine Elements",
    ce101: "Engineering Drawing",
    ce201: "Structural Analysis",
    ce301: "Concrete Technology",
    ce401: "Transportation Engineering",
  }

  return subjectMap[code.toLowerCase()] || "Unknown Subject"
}