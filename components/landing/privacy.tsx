import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Check,
  LockKeyhole,
  ShieldCheck,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const guarantees: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: LockKeyhole,
    title: "Encrypted in transit and at rest",
    description: "AES-256 storage in an isolated, per-workspace vector store.",
  },
  {
    icon: ShieldCheck,
    title: "Never used to train models",
    description: "Your content is yours. We don't train on it — ever.",
  },
  {
    icon: Trash2,
    title: "Delete anything, anytime",
    description:
      "Remove a document or a conversation and its embeddings go with it.",
  },
  {
    icon: Check,
    title: "SOC 2 & audit-ready",
    description: "Independently audited, with an activity log of every action.",
  },
]

export function Privacy() {
  return (
    <section
      id="security"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <Card className="grid overflow-hidden py-0 lg:grid-cols-2">
        <CardHeader className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
          <p className="font-mono text-sm font-semibold tracking-[0.14em] text-amber-500">
            PRIVACY BY DEFAULT
          </p>
          <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
            Your documents stay yours.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
            Trustworthy answers start with trustworthy handling. Docsy is built
            so sensitive files never leave your control.
          </p>
          <Button
            variant="link"
            className="mt-6 w-fit px-0 text-amber-500 hover:text-amber-500/80"
            render={<Link href="#security-overview" />}
            nativeButton={false}
          >
            Read the security overview
            <ArrowRight data-icon="inline-end" />
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col justify-center gap-0 border-t p-8 sm:p-12 lg:border-t-0 lg:border-l lg:p-14">
          {guarantees.map(({ icon: Icon, title, description }, index) => (
            <div key={title}>
              {index > 0 && <Separator className="my-5" />}
              <div className="flex gap-4">
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-amber-500"
                />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
