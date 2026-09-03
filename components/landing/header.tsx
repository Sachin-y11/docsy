"use client"

import Link from "next/link"
import { Menu, Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = ["Product", "How it works", "Security", "Pricing"]

function DocsyMark() {
  return (
    <span
      aria-hidden="true"
      className="flex size-9 items-center justify-center rounded-[10px] bg-primary text-primary-foreground"
    >
      <span className="flex flex-col gap-1">
        <span className="h-1 w-4 rounded-full bg-primary-foreground" />
        <span className="h-1 w-2.5 rounded-full bg-amber-400" />
      </span>
    </span>
  )
}

function navigationHref(item: string) {
  return `#${item.toLowerCase().replaceAll(" ", "-")}`
}

export function LandingHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-17.5 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-10">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 font-semibold tracking-tight"
          >
            <DocsyMark />
            <span>Docsy</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item}
                href={navigationHref(item)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden text-muted-foreground sm:inline-flex"
            aria-label="Search documentation"
          >
            <Search data-icon="inline-start" />
            Search docs
            <kbd className="ml-2 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
          <Sheet>
            <SheetTrigger
              className="md:hidden"
              render={<Button variant="outline" size="icon-sm" />}
            >
              <Menu />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4">
                {navigation.map((item) => (
                  <SheetClose
                    key={item}
                    render={<Link href={navigationHref(item)} />}
                    nativeButton={false}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {item}
                  </SheetClose>
                ))}
                <SheetClose
                  render={<Link href="#sign-in" />}
                  nativeButton={false}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Sign in
                </SheetClose>
                <SheetClose
                  render={<Link href="#get-started" />}
                  nativeButton={false}
                  className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
                >
                  Try Docsy free
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            className="hidden sm:inline-flex"
            render={<Link href="#sign-in">Sign in</Link>}
            nativeButton={false}
          >
            Sign in
          </Button>
          <Button
            className="px-4"
            render={<Link href="#get-started">Try Docsy free</Link>}
            nativeButton={false}
          >
            Try Docsy free
          </Button>
        </div>
      </div>
    </header>
  )
}
