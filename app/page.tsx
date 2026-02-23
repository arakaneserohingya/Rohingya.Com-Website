import { HeroSection } from "@/components/home/hero-section"
import { MarqueeStrip } from "@/components/home/marquee-strip"
import { PillarCards } from "@/components/home/pillar-cards"
import { StatsSection } from "@/components/home/stats-section"
import { MissionStatement } from "@/components/home/mission-statement"
import { CommunityBanner } from "@/components/home/community-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <PillarCards />
      <StatsSection />
      <MissionStatement />
      <CommunityBanner />
    </>
  )
}
