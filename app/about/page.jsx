"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Laptop,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent mb-4">
            About VTU Material
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold">VTU Material</span> is built for
            <span className="font-medium"> engineering students</span> to
            simplify learning and make knowledge accessible. We provide
            <span className="text-purple-600 font-medium">
              {" "}
              notes, projects, syllabus details, study guides, and ideas
            </span>
            all in one place — designed to support students throughout their
            academic journey.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </div>
              <CardDescription className="mt-2 text-base">
                To empower every VTU student with high-quality study materials,
                interactive tools, and community-driven support, ensuring
                success in academics and beyond.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Lightbulb className="h-8 w-8 text-yellow-500" />
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </div>
              <CardDescription className="mt-2 text-base">
                To be the most trusted and student-friendly academic hub, where
                engineering knowledge, creativity, and collaboration thrive
                together.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-500 w-fit mb-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Comprehensive Notes</CardTitle>
                <CardDescription className="mt-2 text-base">
                  Semester-wise and subject-wise notes that are concise,
                  exam-focused, and prepared for quick revision — making
                  learning stress-free.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-green-500 w-fit mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Student Community</CardTitle>
                <CardDescription className="mt-2 text-base">
                  A platform where students can share resources, exchange ideas,
                  collaborate on projects, and help each other grow academically
                  and personally.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-pink-500 w-fit mb-3">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Projects & Ideas</CardTitle>
                <CardDescription className="mt-2 text-base">
                  Explore innovative project ideas, implementation guides, and
                  inspiration for mini-projects and final year projects. Turn
                  creativity into reality.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Why VTU Material */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Why Choose VTU Material?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Unlike traditional resources, VTU Material is designed for{" "}
            <span className="font-semibold">
              speed, accessibility, and relevance
            </span>
            . Whether you’re preparing for exams, working on a project, or just
            brushing up on fundamentals, everything is available at your
            fingertips. With modern tools and a supportive student network, VTU
            Material makes your learning journey smarter and smoother.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-12">
          <Laptop className="h-12 w-12 mx-auto text-purple-600 mb-4" />
          <p className="text-xl font-semibold text-gray-800">
            VTU Material is more than just notes — it’s a hub where{" "}
            <span className="text-purple-600">knowledge meets innovation</span>,
            and students come together to succeed.
          </p>
        </div>
      </div>
    </div>
  );
}
