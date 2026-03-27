import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/home/mission-section"
import { WhySection } from "@/components/home/why-section"
import { SdgSection } from "@/components/home/sdg-section"
import { CasePreviewSection } from "@/components/home/case-preview-section"
import { NewsSection } from "@/components/home/news-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <WhySection />
      <SdgSection />
      <CasePreviewSection />
      <NewsSection />
    </>
  )
}
