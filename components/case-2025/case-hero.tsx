import { Badge } from "@/components/ui/badge"

export function CaseHero() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Badge
          variant="outline"
          className="mb-6 border-background/20 bg-background/5 text-background/80"
        >
          2025 Case Study
        </Badge>

        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance">
          Designing for Inclusion
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-70 text-pretty">
          Designing Educational Toys for Children with Autism &amp; Cerebral
          Palsy
        </p>
      </div>
    </section>
  )
}
