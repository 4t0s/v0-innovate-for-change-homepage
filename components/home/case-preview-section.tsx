import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CasePreviewSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start lg:gap-16">
          {/* Left: big year label */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Program Highlight
            </p>
            <h2 className="mt-4 font-serif text-5xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              2025
            </h2>
            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Kazakhstan
            </p>
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-5 lg:col-span-3 lg:gap-6">
            <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
              Case 2025
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base text-pretty">
              In 2025, Innovate for Change focused on supporting children with
              disabilities, with particular attention to children with autism and
              cerebral palsy. Student teams were challenged to design innovative,
              educational products aimed at improving fine motor skills and
              supporting cognitive and sensory development.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base text-pretty">
              With guidance from mentors and a thoughtful, research-based process,
              student teams were supported step by step, helping their ideas grow
              beyond a one-time competition. While only the top three teams won
              the program, every team created real impact, with all educational
              products donated to children who needed them.
            </p>

            <Link
              href="/case-2025"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-6 sm:py-3"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
