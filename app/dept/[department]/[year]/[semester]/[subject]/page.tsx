"use client";

import { useParams } from "next/navigation";
import { ProtectedRoute } from "@/components/protected-route";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Star, Book, Clock, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ✅ Central subject data with at least 2 modules for each subject
const subjectDataMap: Record<string, any> = {
  BMATS101: {
    code: "BMATS101",
    name: "Engineering Mathematics",
    credits: 4,
    enrolled: 800,
    rating: 4.3,
    totalHours: "60H",
    modules: [
      {
        id: 1,
        title: "MODULE-1",
        topics: [
          {
            title: "Calculus:",
            content: "",
            title2:
              "Introduction to polar coordinates and curvature relating to Computer Science and Engineering",
            content2:
              "Polar coordinates, Polar curves, angle between the radius vector and the tangent, angle between two curves. Pedal equations. Curvature and Radius of curvature - Cartesian, Parametric, Polar and Pedal forms. Problems",
            title3: "",
            content3: "",
            pdfLink: "/pdfs/math101/module1.pdf",
            notesLink: "/pdfs/math101/module1-notes.pdf",
          },
        ],
      },
      {
        id: 2,
        title: "MODULE-2",
        topics: [
          {
            title: "Series Expansion and Multivariable Calculus",
            content: "",
            title2:
              "Introduction of series expansion and partial differentiation in Computer Science & Engineering applications",
            content2:
              "Taylor’s and Maclaurin’s series expansion for one variable (Statement only) – problems. Indeterminate forms - L’Hospital’s rule - Problems. Partial differentiation, total derivative - differentiation of composite functions. Jacobian and problems. Maxima and minima for a function of two variables. Problems",
            title3: "",
            content3: "",
            pdfLink: "/pdfs/math101/module2.pdf",
            notesLink: "/pdfs/math101/module2-notes.pdf",
          },
        ],
      },
      {
        id: 3,
        title: "MODULE-3",
        topics: [
          {
            title: "Ordinary Differential Equations (ODEs) of First Order",
            content:
              "Linear and Bernoulli’s differential equations. Exact and reducible to exact differential equations - Integrating factors on 1𝑁 (𝜕𝑀/𝜕𝑦 − 𝜕𝑁/𝜕𝑥 ) and 1𝑀 (𝜕𝑁/𝜕𝑥 − 𝑀/𝜕𝑦 ). Orthogonal trajectories, L-R & C-R circuits. Problems.",
            title2:
              "Introduction to first-order ordinary differential equations pertaining to the applications for Computer Science & Engineering.",
            content2:
              "Applications of ODEs in circuits and computer science related problems.",
            title3: "",
            content3: "",
            pdfLink: "/pdfs/math101/module3.pdf",
            notesLink: "/pdfs/math101/module3-notes.pdf",
          },
        ],
      },
      {
        id: 4,
        title: "MODULE-4",
        topics: [
          {
            title: "Modular Arithmetic",
            content: "",
            title2:
              "Introduction of modular arithmetic and its applications in Computer Science and Engineering.",
            content2:
              "Introduction to Congruences, Linear Congruences, The Remainder theorem, Solving Polynomials, Linear Diophantine Equation, System of Linear Congruences, Euler’s Theorem, Wilson Theorem and Fermat’s little theorem. Applications of Congruences - RSA algorithm.",
            title3: "",
            content3: "",
            pdfLink: "/pdfs/math101/module4.pdf",
            notesLink: "/pdfs/math101/module4-notes.pdf",
          },
        ],
      },
      {
        id: 5,
        title: "MODULE-5",
        topics: [
          {
            title: "Linear Algebra",
            content: "",
            title2:
              "Introduction of linear algebra related to Computer Science & Engineering.",
            content2:
              "Elementary row transformation of a matrix, Rank of a matrix. Consistency and Solution of system of linear equations - Gauss-elimination method, Gauss-Jordan method and approximate solution by Gauss-Seidel method. Eigenvalues and Eigenvectors, Rayleigh’s power method to find the dominant Eigenvalue and Eigenvector.",
            title3: "",
            content3: "",
            pdfLink: "/pdfs/math101/module5.pdf",
            notesLink: "/pdfs/math101/module5-notes.pdf",
          },
        ],
      },
    ],
  },

  cs101: {
    code: "CS101",
    name: "Programming in C",
    credits: 4,
    enrolled: 1200,
    rating: 4.5,
    totalHours: "55H",
    modules: [
      {
        id: 1,
        title: "MODULE-1",
        topics: [
          {
            title: "Introduction to C",
            content: "History, syntax, data types, variables.",
            pdfLink: "/pdfs/cs101/module1.pdf",
            notesLink: "/pdfs/cs101/module1-notes.pdf",
          },
        ],
      },
      {
        id: 2,
        title: "MODULE-2",
        topics: [
          {
            title: "Control Statements",
            content: "if-else, loops, switch-case, nested conditions.",
            pdfLink: "/pdfs/cs101/module2.pdf",
            notesLink: "/pdfs/cs101/module2-notes.pdf",
          },
        ],
      },
    ],
  },

  ec101: {
    code: "EC101",
    name: "Basic Electronics",
    credits: 3,
    enrolled: 900,
    rating: 4.0,
    totalHours: "45H",
    modules: [
      {
        id: 1,
        title: "MODULE-1",
        topics: [
          {
            title: "Semiconductors",
            content: "PN junction, diode characteristics.",
            pdfLink: "/pdfs/ec101/module1.pdf",
            notesLink: "/pdfs/ec101/module1-notes.pdf",
          },
        ],
      },
      {
        id: 2,
        title: "MODULE-2",
        topics: [
          {
            title: "Transistors",
            content: "BJT, FET basics, transistor configurations.",
            pdfLink: "/pdfs/ec101/module2.pdf",
            notesLink: "/pdfs/ec101/module2-notes.pdf",
          },
        ],
      },
    ],
  },

  ce101: {
    code: "CE101",
    name: "Engineering Graphics",
    credits: 2,
    enrolled: 600,
    rating: 4.2,
    totalHours: "40H",
    modules: [
      {
        id: 1,
        title: "MODULE-1",
        topics: [
          {
            title: "Drawing Basics",
            content: "Lines, curves, scales, lettering.",
            pdfLink: "/pdfs/ce101/module1.pdf",
            notesLink: "/pdfs/ce101/module1-notes.pdf",
          },
        ],
      },
      {
        id: 2,
        title: "MODULE-2",
        topics: [
          {
            title: "Projection",
            content:
              "Orthographic and isometric projection, perspective views.",
            pdfLink: "/pdfs/ce101/module2.pdf",
            notesLink: "/pdfs/ce101/module2-notes.pdf",
          },
        ],
      },
    ],
  },

  // second sem
  math102: {
    code: "math102",
    name: "Calculus and Linear Algebra",
    credits: 2,
    enrolled: 600,
    rating: 4.2,
    totalHours: "40H",
    modules: [
      {
        id: 1,
        title: "MODULE-1",
        topics: [
          {
            title: "Drawing Basics",
            content: "Lines, curves, scales, lettering.",
            pdfLink: "/pdfs/ce101/module1.pdf",
            notesLink: "/pdfs/ce101/module1-notes.pdf",
          },
        ],
      },
      {
        id: 2,
        title: "MODULE-2",
        topics: [
          {
            title: "Projection",
            content:
              "Orthographic and isometric projection, perspective views.",
            pdfLink: "/pdfs/ce101/module2.pdf",
            notesLink: "/pdfs/ce101/module2-notes.pdf",
          },
        ],
      },
    ],
  },

  cs102: {
    code: "cs102",
    name: "Data Structures",
    credits: 2,
    enrolled: 600,
    rating: 4.2,
    totalHours: "40H",
    modules: [
      {
        id: 1,
        title: "MODULE-1",
        topics: [
          {
            title: "Introduction to Data Structures",
            content: "Arrays, linked lists, stacks, queues.",
            pdfLink: "/pdfs/cs102/module1.pdf",
            notesLink: "/pdfs/cs102/module1-notes.pdf",
          },
        ],
      },
      {
        id: 2,
        title: "MODULE-2",
        topics: [
          {
            title: "Trees and Graphs",
            content: "Binary trees, traversal, graphs basics.",
            pdfLink: "/pdfs/cs102/module2.pdf",
            notesLink: "/pdfs/cs102/module2-notes.pdf",
          },
        ],
      },
    ],
  },
};

export default function SubjectPage() {
  const params = useParams();
  const { department, year, semester, subject } = params;

  const subjectData = subjectDataMap[subject as string];

  const [openModules, setOpenModules] = useState<Record<number, boolean>>(
    subjectData
      ? Object.fromEntries(subjectData.modules.map((m: any) => [m.id, true]))
      : {}
  );

  const toggleModule = (id: number) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!subjectData) {
    return (
      <div className="p-8 text-center">
        No data found for subject: {subject}
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8 flex-wrap">
            <Link href="/student-corner">Student Corner</Link>
            <span>→</span>
            <Link href="/dept">Departments</Link>
            <span>→</span>
            <Link href={`/dept/${department}`}>{department}</Link>
            <span>→</span>
            <Link href={`/dept/${department}/${year}`}>{year}</Link>
            <span>→</span>
            <Link href={`/dept/${department}/${year}/${semester}`}>
              {semester}
            </Link>
            <span>→</span>
            <span className="font-semibold text-gray-800">
              {subjectData.code}
            </span>
          </nav>

          {/* Back Button */}
          <Button variant="outline" asChild className="mb-8">
            <Link href={`/dept/${department}/${year}/${semester}`}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Subjects
            </Link>
          </Button>

          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
            <h1 className="text-3xl font-bold">{subjectData.name}</h1>
            <p className="text-purple-600 font-semibold">{subjectData.code}</p>
            <div className="flex justify-center gap-4 mt-4">
              <span>
                <Book className="inline h-4 w-4" /> {subjectData.credits}{" "}
                Credits
              </span>
              <span>
                <Clock className="inline h-4 w-4" /> {subjectData.totalHours}
              </span>
              <span>
                <Users className="inline h-4 w-4" /> {subjectData.enrolled}{" "}
                Enrolled
              </span>
              <span>
                <Star className="inline h-4 w-4 text-yellow-500" />{" "}
                {subjectData.rating}/5
              </span>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {subjectData.modules.map((module: any) => (
              <Card key={module.id}>
                <CardHeader
                  className="cursor-pointer bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleModule(module.id)}
                >
                  <Badge>{module.title}</Badge>
                  <Button variant="ghost" size="sm">
                    {openModules[module.id] ? "−" : "+"}
                  </Button>
                </CardHeader>
                {openModules[module.id] && (
                  <CardContent className="p-6">
                    {module.topics.map((topic: any, idx: number) => (
                      <div key={idx} className="mb-6">
                        <h3 className="font-bold">{topic.title}</h3>
                        <p className="text-gray-700">{topic.content}</p>
                        <h3 className="font-bold mt-3">{topic.title2}</h3>
                        <p className="text-gray-700">{topic.content2}</p>
                        <h3 className="font-bold mt-3">{topic.title3}</h3>
                        <p className="text-gray-700">{topic.content3}</p>

                        {/* ✅ PDF Buttons */}
                        <div className="flex gap-4 mt-3">
                          <a
                            href={topic.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button className="w-full">
                              <Download className="h-4 w-4 mr-2" /> Open PDF
                            </Button>
                          </a>
                          <a
                            href={topic.notesLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button className="w-full">
                              <Download className="h-4 w-4 mr-2" /> Written
                              Notes
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

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
    math102: "Calculus and Linear Algebra",
  };

  return subjectMap[code.toLowerCase()] || "Unknown Subject";
}
