"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Free",
    description: "For trying it on a handful of files.",
    monthly: 0,
    annual: 0,
    action: "Get started",
    features: [
      "Up to 5 documents",
      "5 questions per month",
      "Cited answers & source reader",
      "OCR for scanned files",
    ],
  },
  {
    name: "Pro",
    description: "For professionals living in documents.",
    monthly: 19,
    annual: 15,
    action: "Try Docsy free",
    popular: true,
    features: [
      "Everything in Free, plus:",
      "Unlimited documents",
      "50 questions per month",
      "Multi-document search",
      "Stronger model & API access",
      "Drive & Notion integrations",
    ],
  },
  {
    name: "Business",
    description: "For power users who never want to hit a limit.",
    monthly: 49,
    annual: 39,
    action: "Get Business",
    features: [
      "Everything in Pro, plus:",
      "Unlimited questions per month",
      "Unlimited documents",
      "Priority support",
    ],
  },
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-sm font-semibold tracking-[0.14em] text-amber-500">
          PRICING
        </p>
        <h2
          id="pricing-heading"
          className="mt-5 text-4xl font-semibold tracking-tighter text-balance sm:text-6xl"
        >
          Start free. Upgrade when the answers pay for themselves.
        </h2>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm">
          <span
            className={!isAnnual ? "text-foreground" : "text-muted-foreground"}
          >
            Monthly
          </span>
          <Switch
            aria-label="Toggle annual billing"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <span
            className={isAnnual ? "text-foreground" : "text-muted-foreground"}
          >
            Annual
          </span>
          <Badge className="bg-amber-500/15 text-amber-600 hover:bg-amber-500/15">
            -20%
          </Badge>
        </div>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.popular
                ? "relative overflow-visible border-amber-500 ring-2 ring-amber-500/15"
                : ""
            }
          >
            {plan.popular ? (
              <Badge className="absolute -top-3 left-8 rounded-md bg-amber-500 text-amber-950 hover:bg-amber-500">
                MOST POPULAR
              </Badge>
            ) : null}
            <CardHeader className="gap-3 px-7 pt-8 sm:px-8">
              <CardTitle className="text-2xl font-semibold">
                {plan.name}
              </CardTitle>
              <CardDescription className="min-h-12 text-base leading-6">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-8 px-7 sm:px-8">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-semibold tracking-[-0.06em]">
                    ${isAnnual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                {plan.name !== "Free" ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    billed {isAnnual ? "annually" : "monthly"}
                  </p>
                ) : null}
              </div>
              <Button
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className="w-full"
                render={<Link href="#get-started" />}
                nativeButton={false}
              >
                {plan.action}
              </Button>
              <ul className="flex flex-col gap-5 text-muted-foreground">
                {plan.features.map((feature, index) => (
                  <li
                    key={feature}
                    className={
                      index === 0 && plan.name !== "Free"
                        ? "flex items-start gap-3 font-medium text-foreground"
                        : "flex items-start gap-3"
                    }
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-amber-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center text-muted-foreground">
        Questions are the only limit that changes between plans.{" "}
        <Link
          href="#get-started"
          className="font-semibold text-amber-500 hover:underline"
        >
          Talk to us
        </Link>{" "}
        about custom volumes.
      </p>
    </section>
  )
}
