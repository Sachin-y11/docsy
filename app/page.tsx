import { LandingHeader } from "@/components/landing/header"
import { LandingHero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Workspace } from "@/components/landing/workspace"
import { Privacy } from "@/components/landing/privacy"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <LandingHeader />
      <LandingHero />
      <HowItWorks />
      <Workspace />
      <Privacy />
    </main>
  )
}
