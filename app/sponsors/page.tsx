import { Metadata } from "next"
import { SponsorsHero } from "@/components/sponsors/sponsors-hero"
import { SponsorGrid } from "@/components/sponsors/sponsor-grid"
import { PartnerCTA } from "@/components/sponsors/partner-cta"

export const metadata: Metadata = {
  title: "Our Partners & Sponsors | Innovate for Change",
  description:
    "Meet the organizations and partners who make Innovate for Change possible through their generous support and collaboration.",
}

export default function SponsorsPage() {
  return (
    <>
      <SponsorsHero />
      <SponsorGrid />
      <PartnerCTA />
    </>
  )
}
