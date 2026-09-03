import type { LucideIcon } from "lucide-react"
import {
  BookOpen,
  Command,
  FileText,
  Layers3,
  MessageSquare,
  Share2,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageSquare,
    title: "Chat with citations",
    description:
      "Streaming answers where every claim links to the exact line it's based on. If the source isn't there, Docsy says so.",
  },
  {
    icon: BookOpen,
    title: "Side-by-side source reader",
    description:
      "The passage behind each answer highlighted next to your chat — read it in context without leaving the conversation.",
  },
  {
    icon: Layers3,
    title: "Multi-document search",
    description:
      "Ask across your whole library at once. Docsy retrieves from the right files by meaning, not just keywords.",
  },
  {
    icon: FileText,
    title: "40+ formats & OCR",
    description:
      "PDFs, Word, slides, spreadsheets, plain text — even scanned documents, read automatically with built-in OCR.",
  },
  {
    icon: Command,
    title: "⌘K command palette",
    description:
      "Search, ask, or jump anywhere from the keyboard. Chat history, shortcuts, and a workflow built for power users.",
  },
  {
    icon: Share2,
    title: "Export & integrate",
    description:
      "Export any conversation to Markdown or a shareable link. Connect Google Drive and Notion to keep sources in sync.",
  },
]

export function Workspace() {
  return (
    <section
      id="product"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-sm font-semibold tracking-[0.14em] text-amber-500">
          EVERYTHING IN ONE WORKSPACE
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
          Built for people who have to be right — and prove it.
        </h2>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="min-h-57 justify-center" size="sm">
            <CardHeader>
              <span className="flex size-11 items-center justify-center rounded-xl border bg-muted text-amber-500">
                <Icon aria-hidden="true" />
              </span>
              <CardTitle className="mt-4 text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-7">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
