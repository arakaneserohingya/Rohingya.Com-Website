import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { MusicPlayer } from "@/components/music/music-player"
import { MusicCategories } from "@/components/music/music-categories"
import { MusicCTA } from "@/components/music/music-cta"

export const metadata: Metadata = {
  title: "Rohingya Music",
  description:
    "Explore traditional Rohingya songs, folk melodies, nasheeds, and cultural audio archives.",
}

export default function MusicPage() {
  return (
    <>
      <PageHeader
        badge="Audio Archives"
        title="Rohingya Music & Songs"
        subtitle="Preserving the melodic soul of Rohingya culture through traditional folk songs, nasheeds, and community recordings."
      />
      <MusicPlayer />
      <MusicCategories />
      <MusicCTA />
    </>
  )
}
