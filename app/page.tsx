import { LandingHeader } from "@/components/landing/header"
import { LandingHero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <LandingHeader />
      <LandingHero />
      <HowItWorks />
    </main>
  )
}
