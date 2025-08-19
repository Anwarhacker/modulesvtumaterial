"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProtectedRoute } from "@/components/protected-route";
import { Calendar, BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function YearSemestersPage() {
  const params = useParams();
  const department = params.department as string;
  const year = params.year as string;

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
    };
    return names[slug] || "Engineering Department";
  };

  const getYearName = (slug: string) => {
    const names: { [key: string]: string } = {
      "1st-year": "1st Year",
      "2nd-year": "2nd Year",
      "3rd-year": "3rd Year",
      "4th-year": "4th Year",
    };
    return names[slug] || "Academic Year";
  };

  // Semesters mapped by year
  const yearSemesters: { [key: string]: any[] } = {
    "1st-year": [
      {
        name: "1st Semester",
        slug: "1st-sem",
        description: "Foundation courses and basic engineering subjects",
        subjectCount: 6,
        icon: Calendar,
        color: "bg-blue-500",
      },
      {
        name: "2nd Semester",
        slug: "2nd-sem",
        description: "Advanced foundation and core engineering subjects",
        subjectCount: 6,
        icon: BookOpen,
        color: "bg-green-500",
      },
    ],
    "2nd-year": [
      {
        name: "3rd Semester",
        slug: "3rd-sem",
        description: "Core programming, data structures, and algorithms",
        subjectCount: 6,
        icon: Calendar,
        color: "bg-purple-500",
      },
      {
        name: "4th Semester",
        slug: "4th-sem",
        description:
          "Database systems, operating systems, and networking basics",
        subjectCount: 6,
        icon: BookOpen,
        color: "bg-orange-500",
      },
    ],
    "3rd-year": [
      {
        name: "5th Semester",
        slug: "5th-sem",
        description:
          "Advanced computer networks, software engineering, and electives",
        subjectCount: 6,
        icon: Calendar,
        color: "bg-pink-500",
      },
      {
        name: "6th Semester",
        slug: "6th-sem",
        description: "Web development, AI basics, and project work",
        subjectCount: 6,
        icon: BookOpen,
        color: "bg-teal-500",
      },
    ],
    "4th-year": [
      {
        name: "7th Semester",
        slug: "7th-sem",
        description: "Cloud computing, advanced AI, and research methodology",
        subjectCount: 6,
        icon: Calendar,
        color: "bg-red-500",
      },
      {
        name: "8th Semester",
        slug: "8th-sem",
        description: "Internship, final project, and industry-focused courses",
        subjectCount: 6,
        icon: BookOpen,
        color: "bg-yellow-500",
      },
    ],
  };

  const semesters = yearSemesters[year] || [];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dept/${department}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Years
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getDepartmentName(department)} - {getYearName(year)}
            </h1>
            <p className="text-gray-600">
              Select a semester to view subjects and study materials
            </p>
          </div>

          {/* Semesters Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {semesters.map((semester, index) => (
              <Link
                key={index}
                href={`/dept/${department}/${year}/${semester.slug}`}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg ${semester.color}`}>
                        <semester.icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {semester.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {semester.subjectCount} Subjects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {semester.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
