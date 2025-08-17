"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth"
import { auth } from "@/lib/firebase"

interface AuthContextType {
  user: User | null
  loading: boolean
  signingIn: boolean
  error: string | null
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
      setSigningIn(false)
    })

    getRedirectResult(auth).catch((error) => {
      console.error("Redirect result error:", error)
      setSigningIn(false)
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    if (signingIn) return

    setSigningIn(true)
    setError(null)

    const provider = new GoogleAuthProvider()
    provider.addScope("email")
    provider.addScope("profile")

    try {
      await signInWithPopup(auth, provider)
    } catch (error: any) {
      console.error("Error signing in with Google:", error)

      if (error.code === "auth/popup-blocked") {
        setError("Popup was blocked. Trying redirect method...")
        try {
          await signInWithRedirect(auth, provider)
        } catch (redirectError: any) {
          console.error("Redirect error:", redirectError)
          setError("Sign-in failed. Please check if the domain is authorized in Firebase.")
          setSigningIn(false)
        }
      } else if (error.code === "auth/cancelled-popup-request") {
        setError("Sign-in was cancelled. Please try again.")
        setSigningIn(false)
      } else if (error.code === "auth/unauthorized-domain") {
        setError("This domain is not authorized. Please add v0.app to Firebase authorized domains.")
        setSigningIn(false)
      } else if (error.code === "auth/popup-closed-by-user") {
        setError("Sign-in popup was closed. Please try again.")
        setSigningIn(false)
      } else {
        setError("Sign-in failed. Please try again.")
        setSigningIn(false)
      }
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
      setError(null)
    } catch (error) {
      console.error("Error signing out:", error)
      setError("Sign-out failed. Please try again.")
    }
  }

  const clearError = () => {
    setError(null)
  }

  const value = {
    user,
    loading,
    signingIn,
    error,
    signInWithGoogle,
    signOut,
    clearError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
