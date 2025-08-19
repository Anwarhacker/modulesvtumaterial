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
import {
  BookOpen,
  FileText,
  Calculator,
  Cpu,
  Zap,
  Wrench,
  Atom,
  Database,
  Network,
  Brain,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SemesterSubjectsPage() {
  const params = useParams();
  const department = params.department as string;
  const year = params.year as string;
  const semester = params.semester as string;

  const getDepartmentName = (slug: string) => {
    const names: { [key: string]: string } = {
      "computer-science": "Computer Science Engineering",
      "artificial-intelligence": "Artificial Intelligence & Machine Learning",
      "electronics-communication": "Electronics & Communication",
      mechanical: "Mechanical Engineering",
      civil: "Civil Engineering",
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

  const getSemesterName = (slug: string) => {
    const names: { [key: string]: string } = {
      "1st-sem": "1st Semester",
      "2nd-sem": "2nd Semester",
      "3rd-sem": "3rd Semester",
      "4th-sem": "4th Semester",
      "5th-sem": "5th Semester",
      "6th-sem": "6th Semester",
      "7th-sem": "7th Semester",
      "8th-sem": "8th Semester",
    };
    return names[slug] || "Semester";
  };

  // Different subjects per semester
  const semesterSubjects: { [key: string]: any[] } = {
    "1st-sem": [
      {
        name: " Mathematics for CSE Stream-I",
        code: "BMATS101",
        credits: 4,
        description: "Calculus, algebra basics",
        icon: Calculator,
        color: "bg-blue-500",
      },
      {
        name: "Principles of Programming Using C",
        code: "BPOPS103",
        credits: 4,
        description: "Intro to programming in C",
        icon: Cpu,
        color: "bg-green-500",
      },
      {
        name: "Introduction to Electrical Engineering",
        code: "BESCK104B",
        credits: 3,
        description: "Fundamentals of electronic devices",
        icon: Zap,
        color: "bg-yellow-500",
      },
      {
        name: "Communicative English",
        code: "BENGK106",
        credits: 1,
        description: "Formal And Informal English Learning ",
        icon: FileText,
        color: "bg-purple-500",
      },
      {
        name: "Physics for CSE Stream",
        code: "BPHYS102",
        credits: 3,
        description: "----",
        icon: FileText,
        color: "bg-purple-500",
      },
      {
        name: "Samskrutika Kannada",
        code: "BKSKK107",
        credits: 1,
        description: "------",
        icon: FileText,
        color: "bg-purple-500",
      },
      {
        name: "Innovation and Design Thinking",
        code: "BIDTK158",
        credits: 1,
        description: "----",
        icon: FileText,
        color: "bg-purple-500",
      },
      {
        name: "Introduction to Internet of Things(IOT)",
        code: "BETCK105H",
        credits: 3,
        description: "----",
        icon: FileText,
        color: "bg-purple-500",
      },
    ],
    "2nd-sem": [
      {
        name: "Mathematics for CSE Stream-II",
        code: "BMATS201",
        credits: 4,
        description: "Integral calculus & differential equations",
        icon: Calculator,
        color: "bg-indigo-500",
      },
      {
        name: "Applied Chemistry for CSE Stream",
        code: "BCHE202",
        credits: 4,
        description: "------",
        icon: BookOpen,
        color: "bg-teal-500",
      },
      {
        name: "Computer-Aided Engineering Drawing",
        code: "BCEDK203",
        credits: 3,
        description: "------",
        icon: Zap,
        color: "bg-pink-500",
      },
      {
        name: "Professional Writing Skills In English ",
        code: "BPWSK206",
        credits: 1,
        description: "-------",
        icon: Atom,
        color: "bg-orange-500",
      },
      {
        name: "Indian Constitution ",
        code: "BICOK207",
        credits: 1,
        description: "-------",
        icon: Atom,
        color: "bg-orange-500",
      },
      {
        name: "Scientific Foundations of Health ",
        code: "BSFHK258",
        credits: 1,
        description: "-------",
        icon: Atom,
        color: "bg-orange-500",
      },
      {
        name: "Introduction to Python Programming   ",
        code: "BPLCK205B",
        credits: 3,
        description: "-------",
        icon: Atom,
        color: "bg-orange-500",
      },
      {
        name: "Introduction To Electronics Communication ",
        code: "BESCK204C",
        credits: 1,
        description: "-------",
        icon: Atom,
        color: "bg-orange-500",
      },
    ],
    "3rd-sem": [
      {
        name: "Mathematics for Computer Science ",
        code: "BCS301",
        credits: 4,
        description: "-----",
        icon: Cpu,
        color: "bg-green-600",
      },
      {
        name: "Digital Design and Computer Organization",
        code: "BCS302",
        credits: 4,
        description: "------",
        icon: Database,
        color: "bg-red-500",
      },
      {
        name: "Opearting Systems",
        code: "BCS303",
        credits: 4,
        description: "Processes, threads, scheduling, memory mgmt",
        icon: Wrench,
        color: "bg-yellow-600",
      },
      {
        name: "Data Structures and Applications",
        code: "BCS304",
        credits: 4,
        description: "OSI model, TCP/IP, routing, security",
        icon: Network,
        color: "bg-blue-600",
      },
      {
        name: "Data Structure Lab ",
        code: "BCSL305",
        credits: 3,
        description: "---------",
        icon: BookOpen,
        color: "bg-purple-600",
      },
      {
        name: "Social Connect and Responsiblity",
        code: "BCSK307",
        credits: 3,
        description: "------",
        icon: Cpu,
        color: "bg-gray-600",
      },
      {
        name: "National Service Scheme",
        code: "BNSK359",
        credits: 3,
        description: "------",
        icon: Cpu,
        color: "bg-gray-600",
      },
      {
        name: "Data Analytics With Excel",
        code: "BCS358A",
        credits: 3,
        description: "------",
        icon: Cpu,
        color: "bg-gray-600",
      },
      {
        name: "Object Oriented Progrmming with Java",
        code: "BCS306A",
        credits: 3,
        description: "------",
        icon: Cpu,
        color: "bg-gray-600",
      },
    ],
    "4th-sem": [
      {
        name: "Analysis And Design of Algorithm",
        code: "BCS401",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "Microcontrollers",
        code: "BCS402",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "Database Management Systems",
        code: "BCS403",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "Analysis and Design Of Algorithms Lab ",
        code: "BCSL404",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "Biology For Computer Engineers",
        code: "BBOC407",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "Universal Human Values",
        code: "BUHK408",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "National Service Scheme",
        code: "BNSK459",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "Green IT and Sustainability",
        code: "BCS456A",
        credits: 4,
        description: "-------",
        icon: Cpu,
        color: "bg-pink-600",
      },
      {
        name: "Discrete MAthematical Strctures",
        code: "BCS405A",
        credits: 4,
        description: "-----",
        icon: Brain,
        color: "bg-green-600",
      },
    ],
    "5th-sem": [
      {
        name: "Software Engineering And project Management",
        code: "BCS501",
        credits: 4,
        description: "-----",
        icon: Brain,
        color: "bg-blue-700",
      },
      {
        name: "Computer Networks",
        code: "BCS502",
        credits: 4,
        description: "------",
        icon: Zap,
        color: "bg-purple-700",
      },
      {
        name: "Theory of Computation",
        code: "BCS503",
        credits: 3,
        description: "Specialization elective",
        icon: BookOpen,
        color: "bg-teal-700",
      },
      {
        name: "Web Technology Lab",
        code: "BCSL504",
        credits: 3,
        description: "Specialization elective",
        icon: BookOpen,
        color: "bg-teal-700",
      },
      {
        name: "Mini Project",
        code: "BCS586",
        credits: 3,
        description: "Specialization elective",
        icon: BookOpen,
        color: "bg-teal-700",
      },
      {
        name: "Research Methodology And IPR",
        code: "BRMK557",
        credits: 3,
        description: "Specialization elective",
        icon: BookOpen,
        color: "bg-teal-700",
      },
      {
        name: "Environmental Studies and Waste Management",
        code: "BCS508",
        credits: 3,
        description: "Specialization elective",
        icon: BookOpen,
        color: "bg-teal-700",
      },
      {
        name: "National Service Scheme ",
        code: "BNSK559",
        credits: 3,
        description: "Specialization elective",
        icon: BookOpen,
        color: "bg-teal-700",
      },
      {
        name: "Unix System Programming",
        code: "BCS515C",
        credits: 3,
        description: "Specialization elective",
        icon: BookOpen,
        color: "bg-teal-700",
      },
    ],
    "6th-sem": [
      {
        name: "Cloud Computing",
        code: "BCS601",
        credits: 4,
        description: "Deep learning, reinforcement learning",
        icon: Brain,
        color: "bg-indigo-700",
      },
      {
        name: "Machine Learning",
        code: "BCS602",
        credits: 4,
        description: "Hadoop, Spark, large-scale data processing",
        icon: Database,
        color: "bg-red-700",
      },
      {
        name: "Project Phase I",
        code: "BCS685",
        credits: 6,
        description: "Major project part I",
        icon: FileText,
        color: "bg-green-700",
      },
      {
        name: "Machine Learning Lab",
        code: "BCSL606",
        credits: 6,
        description: "Major project part I",
        icon: FileText,
        color: "bg-green-700",
      },
      {
        name: "National Service Scheme",
        code: "BNSK658",
        credits: 6,
        description: "Major project part I",
        icon: FileText,
        color: "bg-green-700",
      },
      {
        name: "Indian Knowledge System",
        code: "BIKS609",
        credits: 6,
        description: "Major project part I",
        icon: FileText,
        color: "bg-green-700",
      },
      {
        name: "Devops",
        code: "BCSL657D",
        credits: 6,
        description: "Major project part I",
        icon: FileText,
        color: "bg-green-700",
      },
      {
        name: "Advanced Java",
        code: "BCS613D",
        credits: 6,
        description: "Major project part I",
        icon: FileText,
        color: "bg-green-700",
      },
      {
        name: "Introduction To Artificial Intelligence ",
        code: "BAI654D",
        credits: 6,
        description: "Major project part I",
        icon: FileText,
        color: "bg-green-700",
      },
    ],
    "8th-sem": [
      {
        name: "Cyber Security",
        code: "cs403",
        credits: 4,
        description: "Cryptography, network security",
        icon: Network,
        color: "bg-orange-700",
      },
      {
        name: "Elective II",
        code: "el402",
        credits: 3,
        description: "Advanced specialization elective",
        icon: BookOpen,
        color: "bg-purple-700",
      },
      {
        name: "Project Work II",
        code: "prj402",
        credits: 8,
        description: "Final year project & viva",
        icon: FileText,
        color: "bg-blue-700",
      },
    ],
  };

  const subjects = semesterSubjects[semester] || [];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dept/${department}/${year}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Semesters
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getDepartmentName(department)} - {getYearName(year)} -{" "}
              {getSemesterName(semester)}
            </h1>
            <p className="text-gray-600">
              Access study materials, notes, and resources for your subjects
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Link
                key={index}
                href={`/dept/${department}/${year}/${semester}/${subject.code}`}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg ${subject.color}`}>
                        <subject.icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {subject.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {subject.code.toUpperCase()} • {subject.credits} Credits
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">
                      {subject.description}
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
