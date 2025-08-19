"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/student-corner"); // ✅ replace avoids back button flicker
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;

  // If not logged in, show your landing page
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in">
        VTU Material
      </h1>
    </div>
  );
}
