import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FooterCta() {
  return (
    <section
      id="get-started"
      aria-labelledby="footer-cta-heading"
      className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28"
    >
      <div className="rounded-[2rem] bg-foreground px-6 py-20 text-center text-background sm:px-10 lg:py-28">
        <h2
          id="footer-cta-heading"
          className="mx-auto max-w-3xl text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl"
        >
          Stop skimming.
          <br />
          Start asking.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-background/70 sm:text-xl">
          Upload your first documents and get cited answers in minutes. Free for
          5 files — no card required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            className="h-12 rounded-xl bg-amber-500 px-6 text-base text-amber-950 hover:bg-amber-400"
            render={<Link href="#sign-up" />}
            nativeButton={false}
          >
            Try Docsy free
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-xl border-background/30 bg-transparent px-6 text-base text-background hover:bg-background/10 hover:text-background"
            render={<Link href="#search" />}
            nativeButton={false}
          >
            <Search data-icon="inline-start" />
            Try the ⌘K search
          </Button>
        </div>
      </div>
    </section>
  )
}
