"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhySection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left: hook */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl text-balance">
              Why Innovate for Change?
            </h2>
            <p className="mt-4 text-base font-medium italic text-muted-foreground sm:mt-6 sm:text-xl text-pretty">
              Tired of participating in competitions where projects end when the
              awards are given?
            </p>
          </div>

          {/* Right: explanation */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Innovate for Change was created to solve a common problem in student
              innovation: strong ideas are built, presented, and then abandoned. We
              saw students invest their fullest into meaningful projects that never
              moved beyond a competition stage.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {"That's why IFC has a double purpose: to give students the opportunity to compete, innovate, and compete, while also ensuring their creations continue being used to create real-world impact."}
            </p>

            {expanded && (
              <div className="flex flex-col gap-4 border-l-2 border-primary/20 pl-4 sm:pl-6">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  The idea for Innovate for Change grew out of personal experience.
                  After years of participating in competitions, hackathons, and
                  olympiads, we repeatedly saw the same pattern — students pouring
                  their hearts, ideas, and countless hours into projects that,
                  whether they won or not, were eventually abandoned.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We realized that the issue was not a lack of talent or
                  motivation, but a lack of structure after the competition ended.
                  Most programs and competitions were designed for presentation, not
                  continuation.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Winning did not guarantee continuation, and losing often meant
                  immediate abandonment. In both cases, valuable ideas, working
                  prototypes, and genuine effort were left without a pathway
                  forward.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Innovate for Change was created to change this dynamic. Instead
                  of functioning as a one-time event, the program is built as a
                  long-term innovation process that supports development beyond the
                  final presentation.
                </p>
              </div>
            )}

            <Button
              variant="ghost"
              className="w-fit gap-2 text-primary hover:text-primary/80"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Read more about our origin"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
