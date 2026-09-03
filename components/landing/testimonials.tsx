import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "I stopped re-reading 80-page contracts to find one clause. Docsy answers and shows me the exact line — I verify in a click instead of an hour.",
    initials: "DR",
    name: "Dana Reyes",
    role: "Counsel · Northwind Legal",
  },
  {
    quote:
      "Multi-doc search across a quarter of filings is the feature I didn't know I needed. Every figure it returns is traceable to the page.",
    initials: "MO",
    name: "Marcus Osei",
    role: "Analyst · Meridian Capital",
  },
  {
    quote:
      "When Docsy can't support a claim, it tells me. That single behavior is why our research team actually trusts it.",
    initials: "SK",
    name: "Sara Kim",
    role: "Lead · Atlas Research",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-sm font-semibold tracking-[0.14em] text-amber-500">
          IN THE FIELD
        </p>
        <h2
          id="testimonials-heading"
          className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl"
        >
          The people who can&apos;t afford a wrong answer.
        </h2>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {testimonials.map(({ quote, initials, name, role }) => (
          <Card key={name} className="min-h-96 justify-between py-0">
            <CardContent className="px-7 pt-8 sm:px-8 sm:pt-9">
              <p className="text-lg leading-9 text-pretty">
                &quot;{quote}&quot;
              </p>
            </CardContent>
            <CardFooter className="gap-4 px-7 pb-8 sm:px-8 sm:pb-9">
              <Avatar size="lg">
                <AvatarFallback className="font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
