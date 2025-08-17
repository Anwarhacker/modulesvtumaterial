"use client"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProtectedRoute } from "@/components/protected-route"
import { BookOpen, Sparkles, Code, Database } from "lucide-react"
import Link from "next/link"
import { SubjectSearch } from "@/components/subject-search"

export default function StudentCornerPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Side - Welcome & Department */}
            <div className="flex flex-col items-center space-y-8 text-center">
              {/* Profile Image & Welcome */}
              <div className="space-y-5">
                {/* Avatar */}
                <Avatar className="h-20 w-20 ring-4 ring-blue-100 shadow-md mx-auto">
                  <AvatarImage src={user?.photoURL || ""} alt={user?.displayName || "Profile"} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold">
                    {user?.displayName?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>

                {/* Welcome Text */}
                <h1 className="text-3xl font-bold text-gray-800 leading-tight">
                  Welcome,{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
                    {user?.displayName?.split(" ")[0] || "Student"}
                  </span>{" "}
                  to <span className="text-gray-900">VTU Material</span>
                </h1>
              </div>

              {/* Search Engine */}
              <div 
  className="w-full max-w-2xl mx-auto space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200"
  role="region"
  aria-labelledby="quick-search-heading"
>
  <h2 
    id="quick-search-heading"
    className="text-xl font-semibold text-gray-800 text-center"
  >
    Quick Subject Search
  </h2>

  <div className="flex justify-center px-2">
    <SubjectSearch 
      className="w-full max-w-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      aria-label="Search by subject code or name"
    />
  </div>

  <p className="text-sm text-center text-gray-500 px-4">
    Search by subject code (e.g., <span className="font-mono text-gray-700">CS101</span>) 
    or name (e.g., <span className="italic text-gray-700">Data Structures</span>)
  </p>
</div>

              {/* Explore Department */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-700">Explore Department</h2>
                <p className="text-gray-600 text-sm max-w-xs">Find notes, syllabus, and projects for your branch.</p>

                {/* Department Button */}
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  <Link href="/dept">View Departments</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Animated Hub */}
            <div className="flex items-center justify-center px-4 lg:px-0">
              <div className="relative w-full max-w-md aspect-square">
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl animate-pulse"></div>

                {/* Floating Icons with Animation */}
                <div
                  className="absolute top-8 left-8 bg-white rounded-full p-4 shadow-lg animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "2s" }}
                >
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>

                <div
                  className="absolute top-16 right-12 bg-white rounded-full p-4 shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
                >
                  <Code className="h-8 w-8 text-purple-500" />
                </div>

                <div
                  className="absolute bottom-16 left-16 bg-white rounded-full p-4 shadow-lg animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "2.2s" }}
                >
                  <Database className="h-8 w-8 text-green-500" />
                </div>

                <div
                  className="absolute bottom-8 right-8 bg-white rounded-full p-4 shadow-lg animate-bounce"
                  style={{ animationDelay: "1.5s", animationDuration: "2.7s" }}
                >
                  <Sparkles className="h-8 w-8 text-orange-500" />
                </div>

                {/* Center Card */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl text-center transform transition hover:scale-105 duration-300 max-w-48">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      VTU
                    </div>
                    <div className="text-lg text-gray-700 font-semibold">Material Hub</div>
                    <div className="text-xs text-gray-500 mt-1">Your Engineering Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
