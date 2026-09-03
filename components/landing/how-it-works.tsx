import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Upload & index",
    description:
      "Drop in files or whole folders — 40+ formats. Scans are OCR'd automatically and embedded into your private, searchable vector store.",
  },
  {
    number: "02",
    title: "Ask in plain language",
    description:
      "Ask across one document or your entire library. Docsy streams back an answer and pulls from exactly the right files.",
  },
  {
    number: "03",
    title: "Verify in one click",
    description:
      "Every claim carries a citation. Open the source reader to see the exact highlighted passage and page it came from.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-sm font-semibold tracking-[0.14em] text-amber-500">
          HOW IT WORKS
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
          From a folder of files to a trusted answer in three steps.
        </h2>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number} className="min-h-60 justify-center" size="sm">
            <CardHeader>
              <span className="font-mono text-sm font-semibold text-amber-500">
                {step.number}
              </span>
              <CardTitle className="mt-4 text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-7 text-muted-foreground">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
