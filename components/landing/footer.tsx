import Link from "next/link"

const linkGroups = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Security", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API", "Integrations", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "SOC 2"],
  },
]

function DocsyMark() {
  return (
    <span
      aria-hidden="true"
      className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background"
    >
      <span className="flex flex-col gap-1">
        <span className="h-1 w-4 rounded-full bg-background" />
        <span className="h-1 w-2.5 rounded-full bg-amber-400" />
        <span className="h-1 w-2.5 rounded-full bg-background/50" />
      </span>
    </span>
  )
}

function linkHref(link: string) {
  return `#${link.toLowerCase().replaceAll(" ", "-")}`
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_2fr] lg:gap-20 lg:py-20">
        <div className="max-w-sm">
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <DocsyMark />
            <span>Docsy</span>
          </Link>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Chat with your documents — with a citation for every answer.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4"
        >
          {linkGroups.map(({ title, links }) => (
            <div key={title}>
              <h2 className="font-mono text-sm font-semibold tracking-[0.08em] text-muted-foreground">
                {title.toUpperCase()}
              </h2>
              <ul className="mt-7 flex flex-col gap-5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={linkHref(link)}
                      className="text-base transition-colors hover:text-muted-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Docsy, Inc. All rights reserved.</p>
          <p className="font-mono">Built for people who have to be right.</p>
        </div>
      </div>
    </footer>
  )
}
