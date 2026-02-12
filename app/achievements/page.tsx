import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { AchievementStats } from "@/components/achievements/achievement-stats"
import { ForumsSection } from "@/components/achievements/forums-section"
import { OverallImpact } from "@/components/achievements/overall-impact"

export const metadata: Metadata = {
  title: "Achievements & Impact — Innovate for Change",
  description:
    "Explore the tangible, lasting impact of the 2025 Innovate For Change program on students, children, and communities.",
}

export default function AchievementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Badge
            variant="outline"
            className="mb-6 border-background/20 bg-background/5 text-background/80"
          >
            2025 Program
          </Badge>
          <h1 className="max-w-3xl font-serif text-4xl font-bold md:text-5xl text-balance">
            Achievements &amp; Impact
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed opacity-70">
            The 2025 Innovate For Change program made a tangible, lasting impact
            on both students and children by focusing on inclusive education and
            hands-on innovation.
          </p>
        </div>
      </section>

      <AchievementStats />
      <ForumsSection />
      <OverallImpact />
    </>
  )
}
