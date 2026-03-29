import { Metadata } from "next"
import { PeopleHero } from "@/components/sponsors/sponsors-hero"
import { PeopleGrid } from "@/components/sponsors/sponsor-grid"
import { PartnerCTA } from "@/components/sponsors/partner-cta"

export const metadata: Metadata = {
  title: "Our Community | Innovate for Change",
  description:
    "Meet the speakers, mentors, judges, partners, sponsors, and guests who make Innovate for Change possible.",
}

export default function PeoplePage() {
  return (
    <>
      <PeopleHero />
      <PeopleGrid />
      <PartnerCTA />
    </>
  )
}
