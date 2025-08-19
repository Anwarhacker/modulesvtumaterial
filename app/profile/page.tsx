"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Calendar, Shield, LogOut } from "lucide-react";

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  if (!user) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Page Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Profile
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Info Card */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Your account details and information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <Avatar className="h-20 w-20 ring-2 ring-blue-100 shadow-md">
                <AvatarImage
                  src={user.photoURL || ""}
                  alt={user.displayName || "Profile"}
                />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl">
                  {user.displayName?.charAt(0)?.toUpperCase() ||
                    user.email?.charAt(0)?.toUpperCase() ||
                    "U"}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0 space-y-3 text-center sm:text-left">
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Full Name
                  </label>
                  <p className="text-base sm:text-lg font-medium text-gray-900 truncate">
                    {user.displayName || "Not provided"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Email Address
                  </label>
                  <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                    <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                    <p className="text-gray-900 truncate">{user.email}</p>
                    {user.emailVerified && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 text-xs px-2 py-0.5"
                      >
                        <Shield className="h-3 w-3 mr-1 inline" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <label className="block font-medium text-gray-500">
                      Account Created
                    </label>
                    <div className="flex items-center gap-1 text-gray-900">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      <span>
                        {user.metadata.creationTime
                          ? formatDate(user.metadata.creationTime)
                          : "Unknown"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-gray-500">
                      Last Sign In
                    </label>
                    <div className="flex items-center gap-1 text-gray-900">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      <span>
                        {user.metadata.lastSignInTime
                          ? formatDate(user.metadata.lastSignInTime)
                          : "Unknown"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Account Settings
            </CardTitle>
            <CardDescription>
              Manage your account preferences and security
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="p-4 border rounded-lg bg-white hover:shadow-sm transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Authentication Provider
                  </h3>
                  <p className="text-sm text-gray-500">Signed in with Google</p>
                </div>
                <Badge variant="outline" className="w-fit sm:w-auto">
                  Google
                </Badge>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white hover:shadow-sm transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-medium text-gray-900">Account Status</h3>
                  <p className="text-sm text-gray-500">
                    Your account is active and verified
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800 w-fit sm:w-auto">
                  Active
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
              <div className="sm:flex-1">
                <h3 className="font-medium text-gray-900">Sign Out</h3>
                <p className="text-sm text-gray-500">
                  Sign out of your account on this device
                </p>
              </div>
              <Button
                variant="outline"
                onClick={signOut}
                className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 w-full sm:w-auto"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
            <CardDescription>
              Navigate to different sections of the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  label: "Student Corner",
                  desc: "Access your dashboard",
                  icon: User,
                  href: "/student-corner",
                },
                {
                  label: "Study Notes",
                  desc: "Browse study materials",
                  icon: User,
                  href: "/notes",
                },
                {
                  label: "Projects",
                  desc: "Explore project ideas",
                  icon: User,
                  href: "/projects",
                },
              ].map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  onClick={() => router.push(action.href)}
                  className="h-auto p-4 flex flex-col items-center text-center gap-2 hover:shadow-md transition-all"
                >
                  <action.icon className="h-6 w-6 text-gray-600" />
                  <div className="font-medium text-sm sm:text-base">
                    {action.label}
                  </div>
                  <div className="text-xs text-gray-500">{action.desc}</div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
