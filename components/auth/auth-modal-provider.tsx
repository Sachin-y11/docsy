"use client"

import { createContext, useContext, useState } from "react"

import { SignInModal } from "@/components/auth/sign-in-modal"
import { SignUpModal } from "@/components/auth/sign-up-modal"

type AuthModal = "sign-in" | "sign-up" | null

type AuthModalContextValue = {
  openSignIn: () => void
  openSignUp: () => void
  close: () => void
}

const AuthModalContext = createContext<AuthModalContextValue | null>(null)

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<AuthModal>(null)

  const value = {
    openSignIn: () => setActiveModal("sign-in"),
    openSignUp: () => setActiveModal("sign-up"),
    close: () => setActiveModal(null),
  }

  return (
    <AuthModalContext.Provider value={value}>
      {children}
      <SignInModal
        open={activeModal === "sign-in"}
        onOpenChange={(open) => setActiveModal(open ? "sign-in" : null)}
      />
      <SignUpModal
        open={activeModal === "sign-up"}
        onOpenChange={(open) => setActiveModal(open ? "sign-up" : null)}
      />
    </AuthModalContext.Provider>
  )
}

export function useAuthModal() {
  const context = useContext(AuthModalContext)

  if (!context) {
    throw new Error("useAuthModal must be used within AuthModalProvider")
  }

  return context
}
