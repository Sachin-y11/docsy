import { LandingHeader } from "@/components/landing/header"
import { LandingHero } from "@/components/landing/hero"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <LandingHeader />
      <LandingHero />
    </main>
  )
}
