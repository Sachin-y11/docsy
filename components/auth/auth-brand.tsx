export function AuthBrand() {
  return (
    <span
      aria-hidden="true"
      className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-foreground"
    >
      <span className="flex flex-col gap-1">
        <span className="h-1.5 w-8 rounded-full bg-background/50" />
        <span className="h-1.5 w-6 rounded-full bg-amber-500" />
        <span className="h-1.5 w-4 rounded-full bg-background/50" />
      </span>
    </span>
  )
}
