import { LandingHeader } from "@/components/landing/header"
import { LandingHero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Workspace } from "@/components/landing/workspace"
import { Testimonials } from "@/components/landing/testimonials"
import { Privacy } from "@/components/landing/privacy"
import { Stats } from "@/components/landing/stats"
import { Pricing } from "@/components/landing/pricing"
import { Faqs } from "@/components/landing/faqs"
import { FooterCta } from "@/components/landing/footer-cta"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <LandingHeader />
      <LandingHero />
      <HowItWorks />
      <Workspace />
      <Privacy />
      <Stats />
      <Testimonials />
      <Pricing />
      <Faqs />
      <FooterCta />
      <Footer />
    </main>
  )
}
