"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProtectedRoute } from "@/components/protected-route";
import { BookOpen, Sparkles, Code, Database } from "lucide-react";
import Link from "next/link";
import { SubjectSearch } from "@/components/subject-search";

export default function StudentCornerPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Side - Welcome & Department */}
            <div className="flex flex-col items-center space-y-10 text-center px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto">
              {/* Background Accent (Optional: Add a soft gradient background) */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

              {/* Profile Image & Welcome */}
              <div className="space-y-6">
                {/* Avatar with enhanced shadow and hover lift */}
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <Avatar className="h-24 w-24 ring-4 ring-blue-100 shadow-lg mx-auto relative">
                    <AvatarImage
                      src={user?.photoURL || ""}
                      alt={user?.displayName || "Profile"}
                      className="transition-transform duration-300 hover:scale-110"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold shadow-md">
                      {user?.displayName?.charAt(0)?.toUpperCase() ||
                        user?.email?.charAt(0)?.toUpperCase() ||
                        "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Welcome Text with Animation */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight animate-in fade-in duration-700">
                  Welcome,{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 font-extrabold">
                    {user?.displayName?.split(" ")[0] || "Student"}
                  </span>{" "}
                  to{" "}
                  <span className="text-gray-900 relative">
                    VTU Material
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  </span>
                </h1>
              </div>

              {/* Search Engine - Enhanced Card */}
              <div
                className="w-full max-w-2xl mx-auto space-y-5 p-7 bg-white rounded-2xl shadow-lg border border-gray-200/60 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
                role="region"
                aria-labelledby="quick-search-heading"
              >
                <h2
                  id="quick-search-heading"
                  className="text-2xl font-semibold text-gray-800"
                >
                  Quick Subject Search
                </h2>

                <div className="flex justify-center px-3">
                  <SubjectSearch
                    className="w-full max-w-md rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 focus:outline-none shadow-sm transition-all duration-200"
                    aria-label="Search by subject code or name"
                  />
                </div>

                <p className="text-sm text-center text-gray-500 px-4 leading-relaxed">
                  Search by subject code (e.g.,{" "}
                  <span className="font-mono font-medium text-gray-700">
                    CS101
                  </span>
                  ) or name (e.g.,{" "}
                  <span className="italic font-medium text-gray-700">
                    Data Structures
                  </span>
                  )
                </p>
              </div>

              {/* Explore Department Section */}
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
                    Explore Department
                  </h2>
                  <p className="text-gray-600 text-sm max-w-xs mx-auto">
                    Find notes, syllabus, and projects for your branch.
                  </p>

                  {/* Button with Ripple Hover Effect */}
                  <Button
                    asChild
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-blue-300"
                  >
                    <Link href="/dept" className="flex items-center space-x-2">
                      <span>View Departments</span>
                      <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </Button>
                </div>
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
                    <div className="text-lg text-gray-700 font-semibold">
                      Material Hub
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Your Engineering Success
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
