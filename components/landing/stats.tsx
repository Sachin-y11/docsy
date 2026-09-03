const stats = [
  { value: "100%", label: "of answers carry a citation" },
  { value: "40+", label: "file formats supported" },
  { value: "<1.2s", label: "to first streamed token" },
  { value: "12M+", label: "pages indexed for customers" },
]

export function Stats() {
  return (
    <section aria-label="Docsy by the numbers" className="border-y">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 text-center sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-16">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
              {value}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
