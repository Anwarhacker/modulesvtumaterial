"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const { user, signOut, isSigningIn } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const handleStudentCornerClick = () => {
    if (user) {
      handleNavigation("/student-corner");
    } else {
      handleNavigation("/login");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Notes", path: "/notes" },
    { name: "Syllabus", path: "/syllabus" },
    { name: "Project Ideas", path: "/project-ideas" },
  ];

  return (
    <nav className="relative bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div
            className="text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 truncate"
            onClick={() => handleNavigation("/")}
          >
            VTU Material
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {user ? (
              <>
                {navLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </>
            ) : (
              <button
                onClick={handleStudentCornerClick}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm xl:text-base"
              >
                Student Corner
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            )}

            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-transparent hover:ring-blue-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <Avatar className="h-8 w-8 sm:h-9 sm:w-9 border border-gray-200">
                      <AvatarImage
                        src={user.photoURL || ""}
                        alt={user.displayName || "User Avatar"}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-xs sm:text-sm">
                        {user.displayName?.charAt(0)?.toUpperCase() ||
                          user.email?.charAt(0)?.toUpperCase() ||
                          "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="w-56 sm:w-60 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg overflow-hidden font-sans"
                  align="end"
                  forceMount
                  sideOffset={10}
                >
                  <div className="px-3 sm:px-4 pt-3 pb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Avatar className="h-10 w-10 sm:h-11 sm:w-11 border border-gray-200">
                        <AvatarImage src={user.photoURL || ""} alt="Profile" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm">
                          {user.displayName?.charAt(0)?.toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email || "No email"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <DropdownMenuSeparator className="bg-gray-200 my-1" />

                  <div className="flex flex-col">
                    <DropdownMenuItem
                      onClick={() => handleNavigation("/student-corner")}
                      className="py-2.5 px-3 sm:px-4 text-sm flex items-center gap-3 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 rounded-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4m0 4a1 1 0 01-1-1v-4a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 001 1m-6 0v-4a1 1 0 011-1h3a1 1 0 011 1v4"
                        />
                      </svg>
                      Student Corner
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleNavigation("/profile")}
                      className="py-2.5 px-3 sm:px-4 text-sm flex items-center gap-3 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-700 transition-all duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      My Profile
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-gray-200 my-1" />

                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="py-3 px-3 sm:px-4 text-sm flex items-center gap-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 cursor-pointer font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Sign Out
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-lg mx-2 sm:mx-4 overflow-hidden transition-all duration-300 ease-in-out">
            <div className="px-3 sm:px-4 pt-4 pb-6 space-y-3 sm:space-y-4">
              {user ? (
                <>
                  {navLinks.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 text-base"
                    >
                      {item.name}
                    </button>
                  ))}

                  <div className="flex items-center gap-3 mt-6 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                      <AvatarImage
                        src={user.photoURL || ""}
                        alt={user.displayName || ""}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
                        {user.displayName?.charAt(0) ||
                          user.email?.charAt(0) ||
                          "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 truncate text-sm">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="text-red-500 text-sm mt-2 hover:underline font-medium"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleStudentCornerClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-medium shadow hover:shadow-md transition-all duration-300 text-base"
                >
                  Student Corner
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {isSigningIn && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-700 font-medium">Authenticating...</p>
          </div>
        </div>
      )}
    </nav>
  );
}
