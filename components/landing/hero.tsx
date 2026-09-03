import Link from "next/link"
import { ArrowRight, Check, Play } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const trustedBy = [
  "Northwind Legal",
  "Meridian Capital",
  "Atlas Research",
  "Vertex Ops",
  "Harbor & Co.",
]

function TypingIndicator() {
  return (
    <div aria-label="Docsy is typing" className="flex items-center gap-1 py-2">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="size-1.5 animate-[typing-dot_1.2s_ease-in-out_infinite] rounded-full bg-muted-foreground"
          style={{ animationDelay: `${dot * 160}ms` }}
        />
      ))}
    </div>
  )
}

function DocumentPreview() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-xl shadow-foreground/10">
      <div className="flex h-12 items-center gap-2 border-b px-4 text-xs text-muted-foreground">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-muted" />
          <span className="size-2.5 rounded-full bg-muted" />
          <span className="size-2.5 rounded-full bg-muted" />
        </div>
        <span className="ml-2 font-mono">▯ Q3_Vendor_Agreement.pdf</span>
        <Badge variant="secondary" className="ml-auto font-mono text-[10px]">
          3 docs indexed
        </Badge>
      </div>
      <div className="grid min-h-87.5 grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col border-r p-5">
          <div className="ml-auto max-w-57.5 rounded-xl border bg-muted px-4 py-3 text-sm leading-5">
            What&apos;s the termination notice period?
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-muted-foreground">
            <span className="flex size-5 items-center justify-center rounded-md bg-primary text-[8px] text-primary-foreground">
              ▰
            </span>
            DOCSY
          </div>
          <p className="mt-2 text-sm leading-6">
            Either party may terminate with{" "}
            <mark>60 days&apos; written notice</mark>
            <sup className="ml-1 text-[10px] text-amber-500">[1]</sup>, and
            immediately for a material breach that is uncured after 30 days
            <sup className="ml-1 text-[10px] text-amber-500">[2]</sup>.
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-500">
            <Check className="size-3" />
            Verify in source
          </div>
          <TypingIndicator />
          <div className="mt-auto flex items-center justify-between rounded-xl border px-3 py-2 text-xs text-muted-foreground">
            Ask about your documents...
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </div>
        </div>
        <div className="hidden p-5 sm:block">
          <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.14em] text-muted-foreground">
            SOURCE · P.12
            <span className="rounded border border-amber-500 px-1.5 py-0.5 text-amber-500">
              [1]
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-3" aria-hidden="true">
            <span className="h-2 rounded bg-muted" />
            <span className="h-2 w-4/5 rounded bg-muted" />
            <blockquote className="border-l-2 border-amber-500 bg-amber-500/15 px-3 py-3 text-xs leading-5">
              “...may be terminated by either party upon{" "}
              <strong>sixty (60) days&apos; prior written notice</strong>{" "}
              delivered to the address of record...&rdquo;
            </blockquote>
            <span className="h-2 rounded bg-muted" />
            <span className="h-2 w-4/5 rounded bg-muted" />
            <span className="h-2 w-2/3 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function LandingHero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-16 pb-14 sm:px-8 lg:pt-20 lg:pb-18">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="max-w-xl">
          <Badge
            variant="outline"
            className="gap-2 rounded-full px-3 py-1 font-normal text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-amber-500" />
            Grounded answers — a citation for every claim
          </Badge>
          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl">
            Chat with your documents.{" "}
            <span className="relative inline-block">
              Verify every word.
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-amber-500/20"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            Docsy reads your PDFs, contracts, and reports, then answers in plain
            language — with a link to the exact passage behind every claim. No
            more Ctrl-F. No skimming. No hallucinations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              render={<Link href="#get-started" />}
              nativeButton={false}
            >
              Try Docsy free
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="#how-it-works" />}
              nativeButton={false}
            >
              <Play data-icon="inline-start" />
              See how it works
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-amber-500" /> Free for 5 documents
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-amber-500" /> No card required
            </span>
          </div>
        </div>
        <DocumentPreview />
      </div>
      <div className="mt-20 text-center">
        <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted-foreground">
          TRUSTED WHERE THE ANSWER HAS TO BE RIGHT
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-semibold text-muted-foreground sm:gap-x-14">
          {trustedBy.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
