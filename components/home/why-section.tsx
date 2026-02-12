"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhySection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left: hook */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
            Why Innovate for Change?
          </h2>
          <p className="mt-6 text-xl font-medium italic text-muted-foreground text-pretty">
            Tired of participating in competitions where projects end when the
            awards are given?
          </p>
        </div>

        {/* Right: explanation */}
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            Innovate for Change was created to solve a common problem in student
            innovation: strong ideas are built, presented, and then abandoned. We
            saw students invest their fullest into meaningful projects that never
            moved beyond a competition stage.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"That's why IFC has a double purpose: to give students the opportunity to compete, innovate, and compete, while also ensuring their creations continue being used to create real-world impact."}
          </p>

          {expanded && (
            <div className="flex flex-col gap-4 border-l-2 border-primary/20 pl-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                The idea for Innovate for Change grew out of personal experience.
                After years of participating in competitions, hackathons, and
                olympiads, we repeatedly saw the same pattern — students pouring
                their hearts, ideas, and countless hours into projects that,
                whether they won or not, were eventually abandoned.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We realized that the issue was not a lack of talent or
                motivation, but a lack of structure after the competition ended.
                Most programs and competitions were designed for presentation, not
                continuation.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Winning did not guarantee continuation, and losing often meant
                immediate abandonment. In both cases, valuable ideas, working
                prototypes, and genuine effort were left without a pathway
                forward.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
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
    </section>
  )
}
