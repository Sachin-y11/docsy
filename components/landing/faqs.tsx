"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Docsy make sure answers are accurate?",
    answer:
      "Docsy grounds every answer in the documents you provide and links each claim back to the exact source passage. When the evidence is not there, Docsy says so instead of guessing.",
  },
  {
    question: "What file types can I upload?",
    answer:
      "You can upload PDFs, Word documents, presentations, spreadsheets, plain text files, and more. OCR is included for scanned documents so their text can be searched too.",
  },
  {
    question: "Is my data private?",
    answer:
      "Your documents are private to your workspace and are never used to train shared models. Docsy only uses them to answer questions for the people you authorize.",
  },
  {
    question: "Can Docsy search across many documents at once?",
    answer:
      "Yes. Ask a question across your whole library and Docsy finds relevant passages across multiple documents, with citations showing where each answer came from.",
  },
  {
    question: "Does it integrate with my existing tools?",
    answer:
      "Docsy can connect with Google Drive and Notion to keep your sources in sync. You can also export conversations as Markdown or shareable links.",
  },
  {
    question: "What's the difference between plans?",
    answer:
      "The Free plan covers a small document library, while Pro adds more questions, unlimited documents, multi-document search, integrations, and API access. Business adds unlimited questions and priority support.",
  },
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-mono text-sm font-semibold tracking-[0.14em] text-amber-500">
            FAQ
          </p>
          <h2
            id="faqs-heading"
            className="mt-5 text-4xl font-semibold tracking-tighter text-balance sm:text-6xl"
          >
            Questions, answered.
          </h2>
        </div>
        <Accordion className="mt-16">
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger className="py-7 text-base font-semibold sm:text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pr-10 text-base leading-7 text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
