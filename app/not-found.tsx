"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, Users } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered
          the wrong URL.
        </p>

        {/* Quick Actions */}
        <div className="space-y-4 mb-8">
          <Link href="/student-corner">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mb-3">
              <Home className="w-4 h-4 mr-2" />
              Go to Student Corner
            </Button>
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link href="/dept">
              <Button variant="outline" className="w-full bg-transparent">
                <Users className="w-4 h-4 mr-2" />
                Departments
              </Button>
            </Link>
            <Link href="/notes">
              <Button variant="outline" className="w-full bg-transparent">
                <BookOpen className="w-4 h-4 mr-2" />
                Notes
              </Button>
            </Link>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="text-sm text-gray-500">
          <p className="mb-2">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">
              Syllabus
            </Link>
            <Link href="/project-ideas" className="hover:text-blue-600 transition-colors">
              Project Ideas
            </Link>
            <Link href="/help" className="hover:text-blue-600 transition-colors">
              Help
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  )
}
