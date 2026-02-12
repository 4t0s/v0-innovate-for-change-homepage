import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CasePreviewSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: visual block */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-square">
            <Image
              src="/images/case-2025-hero.jpg"
              alt="Students collaborating on educational toy prototypes during the 2025 program"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_8%/0.8)] to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-6xl font-bold font-serif text-[hsl(0_0%_100%/0.95)] md:text-8xl">
                2025
              </p>
              <p className="mt-1 text-lg font-medium text-[hsl(0_0%_100%/0.7)]">
                Kazakhstan
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Program Highlight
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              Case 2025
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              In 2025, Innovate for Change focused on supporting children with
              disabilities, with particular attention to children with autism and
              cerebral palsy. Student teams were challenged to design innovative,
              educational products aimed at improving fine motor skills and
              supporting cognitive and sensory development.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              With guidance from mentors and a thoughtful, research-based process,
              student teams were supported step by step, helping their ideas grow
              beyond a one-time competition. While only the top three teams won
              the program, every team created real impact, with all educational
              products donated to children who needed them.
            </p>

            <Link
              href="/case-2025"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
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
