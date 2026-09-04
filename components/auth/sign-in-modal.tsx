"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { useAuthModal } from "@/components/auth/auth-modal-provider"
import { AuthBrand } from "@/components/auth/auth-brand"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { authClient } from "@/lib/auth-client"

type SignInModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignInModal({ open, onOpenChange }: SignInModalProps) {
  const { openSignUp } = useAuthModal()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Enter your email address and password.")
      return
    }

    setIsPending(true)
    const result = await authClient.signIn.email({
      email,
      password,
      callbackURL: window.location.origin,
    })
    setIsPending(false)

    if (result.error) {
      setError(result.error.message ?? "Unable to sign in. Check your details.")
      return
    }

    onOpenChange(false)
  }

  async function handleSocialSignIn(provider: "google" | "github") {
    setError("")
    const result = await authClient.signIn.social({
      provider,
      callbackURL: window.location.origin,
    })

    if (result.error) {
      setError(result.error.message ?? "This sign-in method is unavailable.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto p-0 sm:max-w-lg">
        <div className="px-6 pt-8 pb-7 sm:px-8 sm:pt-10">
          <DialogHeader className="items-center text-center">
            <AuthBrand />
            <DialogTitle className="mt-7 text-3xl font-semibold">
              Sign in to Docsy
            </DialogTitle>
            <DialogDescription className="text-base">
              Welcome back — continue to your workspace
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 flex flex-col gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSocialSignIn("google")}
            >
              <span aria-hidden="true" className="font-semibold text-blue-500">
                G
              </span>
              Continue with Google
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSocialSignIn("github")}
            >
              <span
                aria-hidden="true"
                className="font-mono text-xs font-semibold"
              >
                GH
              </span>
              Continue with GitHub
            </Button>
          </div>

          <div className="my-7 flex items-center gap-4 text-sm text-muted-foreground">
            <Separator className="flex-1" />
            OR
            <Separator className="flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sign-in-email">Email address</FieldLabel>
                <Input
                  id="sign-in-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={!!error}
                />
              </Field>
              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="sign-in-password">Password</FieldLabel>
                  <button
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Forgot password?
                  </button>
                </div>
                <Input
                  id="sign-in-password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={!!error}
                />
              </Field>
            </FieldGroup>
            {error ? <FieldError>{error}</FieldError> : null}
            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? "Signing in..." : "Continue"}
              <ArrowRight data-icon="inline-end" />
            </Button>
          </form>
        </div>

        <div className="border-t bg-muted/30 px-6 py-6 text-center text-base text-muted-foreground sm:px-8">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="font-semibold text-amber-500 hover:underline"
            onClick={() => {
              onOpenChange(false)
              openSignUp()
            }}
          >
            Sign up
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
