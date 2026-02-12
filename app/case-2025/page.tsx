import type { Metadata } from "next"
import { CaseHero } from "@/components/case-2025/case-hero"
import { CaseIntro } from "@/components/case-2025/case-intro"
import { CaseTimeline } from "@/components/case-2025/case-timeline"
import { CaseImpact } from "@/components/case-2025/case-impact"

export const metadata: Metadata = {
  title: "Case 2025 — Innovate for Change",
  description:
    "In 2025, Innovate for Change focused on designing educational toys for children with autism and cerebral palsy in Kazakhstan.",
}

export default function Case2025Page() {
  return (
    <>
      <CaseHero />
      <CaseIntro />
      <CaseTimeline />
      <CaseImpact />
    </>
  )
}
