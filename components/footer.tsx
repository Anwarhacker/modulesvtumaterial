"use client"

export function Footer() {
  return (
    <div className="bg-white">
      <footer className="relative overflow-hidden bg-white/92 rounded-t-3xl border-t-2 border-gray-200 shadow-lg">
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-black z-10">
          {/* Brand Section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              VTU Material
            </h2>
            <p className="mt-3 text-black leading-relaxed max-w-xs">
              Your comprehensive platform for VTU engineering study materials, projects, and academic resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Notes", href: "/notes" },
                { name: "Syllabus", href: "/syllabus" },
                { name: "About", href: "/about" },
                { name: "Project Ideas", href: "/project-ideas" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-center gap-2 text-black hover:text-blue-500 transition-all duration-200"
                  >
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              Support & Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help"
                  className="flex items-center justify-center gap-2 text-black hover:text-purple-500 transition-colors duration-200"
                >
                  📧 <span>Help Center</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 text-black hover:text-blue-500 transition-colors duration-200"
                >
                  💬 <span>Contact Us</span>
                </a>
              </li>
              <li className="flex gap-4 text-black justify-center">
                <a
                  href="/privacy"
                  className="hover:text-blue-500 transform hover:scale-105 transition-transform duration-200 text-sm"
                >
                  Privacy
                </a>
                <a
                  href="/terms"
                  className="hover:text-purple-600 transform hover:scale-105 transition-transform duration-200 text-sm"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative bg-white/80 text-center py-5 text-black text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              VTU Material
            </span>
            . Crafted with ❤️ for VTU Engineering Students.
          </p>
        </div>
      </footer>
    </div>
  )
}
