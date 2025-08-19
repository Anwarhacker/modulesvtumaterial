"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  BookOpen,
  Code2,
  Calculator,
  Cpu,
  Zap,
  Database,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

// Comprehensive subjects database with proper routing
const SUBJECTS_DATABASE = [
  // Computer Science & Engineering
  {
    code: "CS101",
    name: "Programming in C",
    department: "computer-science",
    year: "1st-year",
    semester: "1st-sem",
    icon: Code2,
  },
  {
    code: "CS102",
    name: "Data Structures",
    department: "computer-science",
    year: "2nd-year",
    semester: "1st-sem",
    icon: Database,
  },
  {
    code: "CS201",
    name: "Object Oriented Programming",
    department: "computer-science",
    year: "2nd-year",
    semester: "1st-sem",
    icon: Code2,
  },
  {
    code: "CS202",
    name: "Database Management Systems",
    department: "computer-science",
    year: "2nd-year",
    semester: "2nd-sem",
    icon: Database,
  },
  {
    code: "CS301",
    name: "Computer Networks",
    department: "computer-science",
    year: "3rd-year",
    semester: "1st-sem",
    icon: Zap,
  },
  {
    code: "CS302",
    name: "Operating Systems",
    department: "computer-science",
    year: "3rd-year",
    semester: "2nd-sem",
    icon: Cpu,
  },
  {
    code: "CS401",
    name: "Machine Learning",
    department: "computer-science",
    year: "4th-year",
    semester: "1st-sem",
    icon: Cpu,
  },
  {
    code: "CS402",
    name: "Software Engineering",
    department: "computer-science",
    year: "4th-year",
    semester: "2nd-sem",
    icon: Code2,
  },

  // Artificial Intelligence & Machine Learning
  {
    code: "AI101",
    name: "Introduction to AI",
    department: "artificial-intelligence",
    year: "1st-year",
    semester: "1st-sem",
    icon: Cpu,
  },
  {
    code: "AI201",
    name: "Python Programming",
    department: "artificial-intelligence",
    year: "2nd-year",
    semester: "1st-sem",
    icon: Code2,
  },
  {
    code: "AI202",
    name: "Statistics for AI",
    department: "artificial-intelligence",
    year: "2nd-year",
    semester: "2nd-sem",
    icon: Calculator,
  },
  {
    code: "AI301",
    name: "Deep Learning",
    department: "artificial-intelligence",
    year: "3rd-year",
    semester: "1st-sem",
    icon: Cpu,
  },
  {
    code: "AI302",
    name: "Natural Language Processing",
    department: "artificial-intelligence",
    year: "3rd-year",
    semester: "2nd-sem",
    icon: Cpu,
  },
  {
    code: "AI401",
    name: "Computer Vision",
    department: "artificial-intelligence",
    year: "4th-year",
    semester: "1st-sem",
    icon: Cpu,
  },

  // Electronics & Communication
  {
    code: "EC101",
    name: "Circuit Analysis",
    department: "electronics-communication",
    year: "1st-year",
    semester: "1st-sem",
    icon: Zap,
  },
  {
    code: "EC201",
    name: "Digital Electronics",
    department: "electronics-communication",
    year: "2nd-year",
    semester: "1st-sem",
    icon: Cpu,
  },
  {
    code: "EC301",
    name: "Microprocessors",
    department: "electronics-communication",
    year: "3rd-year",
    semester: "1st-sem",
    icon: Cpu,
  },
  {
    code: "EC401",
    name: "VLSI Design",
    department: "electronics-communication",
    year: "4th-year",
    semester: "1st-sem",
    icon: Cpu,
  },

  // Mechanical Engineering
  {
    code: "ME101",
    name: "Engineering Mechanics",
    department: "mechanical",
    year: "1st-year",
    semester: "1st-sem",
    icon: Calculator,
  },
  {
    code: "ME201",
    name: "Thermodynamics",
    department: "mechanical",
    year: "2nd-year",
    semester: "1st-sem",
    icon: Calculator,
  },
  {
    code: "ME301",
    name: "Heat Transfer",
    department: "mechanical",
    year: "3rd-year",
    semester: "1st-sem",
    icon: Calculator,
  },
  {
    code: "ME401",
    name: "Design of Machine Elements",
    department: "mechanical",
    year: "4th-year",
    semester: "1st-sem",
    icon: Calculator,
  },

  // Civil Engineering
  {
    code: "CE101",
    name: "Engineering Drawing",
    department: "civil",
    year: "1st-year",
    semester: "1st-sem",
    icon: BookOpen,
  },
  {
    code: "CE201",
    name: "Structural Analysis",
    department: "civil",
    year: "2nd-year",
    semester: "1st-sem",
    icon: Calculator,
  },
  {
    code: "CE301",
    name: "Concrete Technology",
    department: "civil",
    year: "3rd-year",
    semester: "1st-sem",
    icon: Calculator,
  },
  {
    code: "CE401",
    name: "Transportation Engineering",
    department: "civil",
    year: "4th-year",
    semester: "1st-sem",
    icon: Calculator,
  },
  {
    code: "math102",
    name: "Transportation Engineering",
    department: "civil",
    year: "4th-year",
    semester: "1st-sem",
    icon: Calculator,
  },
];

interface SubjectSearchProps {
  className?: string;
}

export function SubjectSearch({ className = "" }: SubjectSearchProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof SUBJECTS_DATABASE>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter subjects based on query
  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = SUBJECTS_DATABASE.filter(
        (subject) =>
          subject.code.toLowerCase().includes(query.toLowerCase()) ||
          subject.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Limit to 8 suggestions

      setSuggestions(filtered);
      setIsOpen(filtered.length > 0);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSubjectClick(suggestions[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Navigate to subject page
  const handleSubjectClick = (subject: (typeof SUBJECTS_DATABASE)[0]) => {
    const route = `/dept/${subject.department}/${subject.year}/${
      subject.semester
    }/${subject.code.toLowerCase()}`;
    router.push(route);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative w-full max-w-2xl ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search by subject code (CS101) or name (Data Structures)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-lg"
        />
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-2xl border-2 border-gray-100 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {suggestions.map((subject, index) => {
                const IconComponent = subject.icon;
                return (
                  <div
                    key={`${subject.code}-${subject.department}`}
                    onClick={() => handleSubjectClick(subject)}
                    className={`flex items-center gap-4 p-4 cursor-pointer transition-all duration-200 border-b border-gray-50 last:border-b-0 ${
                      index === selectedIndex
                        ? "bg-blue-50 border-l-4 border-l-blue-500"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Subject Icon */}
                    <div
                      className={`p-2 rounded-lg ${
                        index === selectedIndex ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <IconComponent
                        className={`h-5 w-5 ${
                          index === selectedIndex
                            ? "text-blue-600"
                            : "text-gray-600"
                        }`}
                      />
                    </div>

                    {/* Subject Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-blue-600 text-sm">
                          {subject.code}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="font-semibold text-gray-800 truncate">
                          {subject.name}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {subject.department.replace("-", " ")} • {subject.year}{" "}
                        • {subject.semester.replace("-", " ")}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-gray-400">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
