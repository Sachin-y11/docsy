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

type SignUpModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignUpModal({ open, onOpenChange }: SignUpModalProps) {
  const { openSignIn } = useAuthModal()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    if (!name.trim() || !email || !password) {
      setError("Complete all fields to create your account.")
      return
    }

    if (password.length < 12) {
      setError("Your password must be at least 12 characters.")
      return
    }

    setIsPending(true)
    const result = await authClient.signUp.email({
      name: name.trim(),
      email,
      password,
      callbackURL: window.location.origin,
    })
    setIsPending(false)

    if (result.error) {
      setError(result.error.message ?? "Unable to create your account.")
      return
    }

    onOpenChange(false)
  }

  async function handleSocialSignUp(provider: "google" | "github") {
    setError("")
    const result = await authClient.signIn.social({
      provider,
      callbackURL: window.location.origin,
    })

    if (result.error) {
      setError(result.error.message ?? "This sign-up method is unavailable.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto p-0 sm:max-w-lg">
        <div className="px-6 pt-8 pb-7 sm:px-8 sm:pt-10">
          <DialogHeader className="items-center text-center">
            <AuthBrand />
            <DialogTitle className="mt-7 text-3xl font-semibold">
              Create your account
            </DialogTitle>
            <DialogDescription className="text-base">
              to start chatting with your documents
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 flex flex-col gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSocialSignUp("google")}
            >
              <span aria-hidden="true" className="font-semibold text-blue-500">
                G
              </span>
              Continue with Google
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSocialSignUp("github")}
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
                <FieldLabel htmlFor="sign-up-name">Full name</FieldLabel>
                <Input
                  id="sign-up-name"
                  autoComplete="name"
                  placeholder="Ada Lovelace"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  aria-invalid={!!error}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="sign-up-email">Email address</FieldLabel>
                <Input
                  id="sign-up-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={!!error}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="sign-up-password">Password</FieldLabel>
                <Input
                  id="sign-up-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="At least 12 characters"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={!!error}
                />
              </Field>
            </FieldGroup>
            {error ? <FieldError>{error}</FieldError> : null}
            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? "Creating account..." : "Create account"}
              <ArrowRight data-icon="inline-end" />
            </Button>
          </form>
        </div>

        <div className="border-t bg-muted/30 px-6 py-6 text-center text-base text-muted-foreground sm:px-8">
          Already have an account?{" "}
          <button
            type="button"
            className="font-semibold text-amber-500 hover:underline"
            onClick={() => {
              onOpenChange(false)
              openSignIn()
            }}
          >
            Sign in
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
